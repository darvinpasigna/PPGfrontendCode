import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import NavLogin from './NavLogin';
import useCode from '../Code/Code';
import { Modal, Button } from 'react-bootstrap';

const CartList = () => {

  const {
    cartItems, setCartItems, selectedItems, setSelectedItems,
    payment, setPayment, showConfirmPayment, setShowConfirmPayment,
     paymentMethod, setCartCount,
    cartCount, cartUrl, orderUrl, searchItem, setSearchItem, handleSearch,
  } = useCode();

  const [showDel, setShowDel] = useState(false);
  const [disabledButtons, setDisabledButtons] = useState({});
  const [targetItem, setTargetItem] = useState(null);

  const handleQtyChange = (index, event) => {
    const newQty = parseInt(event.target.value, 10);
    const newCartItems = [...cartItems];
    newCartItems[index].qty = newQty;
    newCartItems[index].total = calculateTotal(newCartItems[index].price_per_item, newQty);
    setCartItems(newCartItems);
  };

  const handleDelete = (itemId) => {
    if (targetItem !== null) {
    axios.delete(`https://darvx.online/public/api/cart/delete/${targetItem}`)
        .then((response) => {
            if (response.data.status === 200) {
                setCartItems((prevItems) => prevItems.filter(item => item.id !== targetItem));
                alert('Item successfully deleted');
                setCartCount(prevCount => prevCount - 1);
            } else {
                alert('Failed to delete item');
            }
        }).finally(() => {
          setTargetItem(null);
          setShowDel(false);
      });
      }
};

const handleShowDeleteModal = (prodID) => {
  setTargetItem(prodID);
  setShowDel(true);
};

  const handleSelect = (index, event) => {
    const newSelectedItems = [...selectedItems];
    if (event.target.checked) {
      newSelectedItems.push(index);
      setDisabledButtons((prev) => ({ ...prev, [index]: true }));
    } else {
      const itemIndex = newSelectedItems.indexOf(index);
      newSelectedItems.splice(itemIndex, 1);
      setDisabledButtons((prev) => {
        const updated = { ...prev };
        delete updated[index];
        return updated;
      });
    }
    setSelectedItems(newSelectedItems);
  };

  const calculateTotal = (price, qty) => {
    return price * qty;
  };

  const handlePurchase = (item) => {
    let getData = new FormData();
    getData.append('prod_name', item.prod_name);
    getData.append('desc', item.desc);
    getData.append('quantity', item.qty);
    getData.append('price_per_item', item.price_per_item);
    getData.append('total_price', item.total);
    getData.append('main_img', item.main_img);
    getData.append('mode_of_payment', payment);
  
    axios({
      method: "POST",
      url: "https://darvx.online/public/api/order/addorder", 
      data: getData,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    .then(() => {
      return axios.get(orderUrl); 
    })
    .then((response) => {
      const { status, data } = response.data;
      if (status === 200 && Array.isArray(data)) {
        alert('Order has been placed. Wait for the supplier to process the shipment.');
        return axios.delete(`https://darvx.online/public/api/cart/delete/${item.id}`);
      } else {
        console.error(response.data);
        throw new Error('Failed to place order');
      }
    })
    .then((response) => {
      if (response.data.status === 200) {
        setCartItems((prevItems) => prevItems.filter(items => items.id !== item.id));
        setCartCount(prevCount => prevCount - 1);
      } else {
        alert('Failed to remove item from cart');
      }
    })
  };
  

  useEffect(() => {
    axios.get(cartUrl)
      .then((response) => {
        const { status, data } = response.data;
        if (status === 200 && Array.isArray(data)) {
          const itemsWithQty = data.map(item => ({
            ...item,
            qty: 1,
            total: item.price_per_item
          }));
          setCartItems(itemsWithQty);
          setCartCount(data.length);
        } else {
          console.error("Unexpected response format:", response.data);
        }
      })
  }, []);
  

  const getTotalPayment = () => {
    return selectedItems.reduce((sum, index) => {
      const total = Number(cartItems[index].total);
      return sum + total;
    }, 0);
  };

  const checkoutItem = () => {
    return selectedItems.map(index => {
      const item = cartItems[index];
      return `${item.prod_name.substring(0, 30)}... (${item.qty} items) - - - - ${item.total}`;
    }).join(', ');
  };

  return (
    <>
      <NavLogin 
      cartCount={cartCount}
      searchItem={searchItem} setSearchItem={setSearchItem} handleSearch={handleSearch} />
      <div className="container d-flex-wrap" id='cartlist'>
        <div className="row" id='payment'>
          <div className="col-8">
            {cartItems.map((item, index) => (
              <div key={index} className="card mb-3 carditem" style={{ maxWidth: "100%" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={item.main_img} className="img-fluid rounded-start" alt="cardpic" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5
                        className="card-title"
                        id={`itemname-${index}`}
                        style={{ textAlign: 'left', fontWeight: "600" }}
                      >{item.prod_name}</h5>

                      <h6> &#8369;{parseFloat(item.price_per_item.replace(/,/g, '')).toLocaleString('en-US')}</h6>
                      <div className="input-group input-group-sm mb-3" style={{ width: "150px" }}>
                        <span className="input-group-text" id="inputGroup-sizing-sm">QTY</span>
                        <input
                          id={`cardqty-${index}`}
                          type="number"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                          min="1"
                          value={item.qty}
                          onChange={(e) => handleQtyChange(index, e)}
                        />
                      </div>
                      <div className="input-group input-group-sm mb-3" style={{ width: "150px" }}>
                        <span className="input-group-text" id="inputGroup-sizing-sm">Total &#8369;</span>
                        <input
                          id={`totalprice-${index}`}
                          type="number"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                          value={(Math.round(item.total * 100) / 100)}
                          readOnly
                        />
                      </div>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleShowDeleteModal(item.id)}
                        disabled={disabledButtons[index] || false}
                      >
                        Delete
                      </button> <br /> <br />
                      <Modal show={showDel} onHide={() => setShowDel(false)}>
                              <Modal.Header closeButton>
                                <Modal.Title>Confirm delete</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>Are you sure you want to delete?</Modal.Body>
                              <Modal.Footer>
                                <Button variant="secondary" onClick={() => setShowDel(false)}>
                                  Cancel
                                </Button>
                                <Button variant="danger" onClick={() => {handleDelete(item.id); setShowDel(false);}}>
                                  Confirm
                                </Button>
                              </Modal.Footer>
                            </Modal>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={`flexCheckDefault-${index}`}
                          onChange={(e) => handleSelect(index, e)}
                        />
                        <label className="form-check-label" htmlFor={`flexCheckDefault-${index}`}>
                          SELECT
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            ))}
          </div>

          <div className="col-4" id='checkout'>
            <div className="col-md-3 checkout">
              <form>
                <legend style={{ fontWeight: 600 }}>CHECKOUT</legend>
                <br />
                <fieldset>
                  <ul>
                    {selectedItems.length > 0 ? (
                      selectedItems.map(index => {
                        const items = cartItems[index];
                        return (
                          <li key={index}>
                            {items.prod_name.substring(0, 10)}... ({items.qty} items) - - - - {(Math.round(items.total * 100) / 100)}
                          </li>
                        );
                      })
                    ) : (
                      <li>No items selected</li>
                    )}
                  </ul>

                  <div className="d-flex">
                    <h6 style={{ marginRight: '135px' }}>Total Payment</h6>
                    <strong><u>&#8369;{Number(getTotalPayment()).toFixed(2)}</u></strong>
                  </div>
                  <br />
                  <label className="form-label">Payment Option</label>
                  <select className="form-select" value={payment} onChange={(e) => setPayment(e.target.value)}>
                    <option value="">Select Payment</option>
                    <option value="Cash On Delivery">Cash on Delivery</option>
                    <option value="Gcash">Gcash</option>
                    <option value="Maya">Maya</option>
                  </select>
                  <br />
                  <button
                    type="button"
                    className="form-control btn btn-primary"
                    onClick={() => {
                      if (selectedItems.length === 0 || payment === "") {
                        alert("Please add items to the cart and select a payment option.");
                        return;
                      }
                      setShowConfirmPayment(true);
                    }}
                    disabled={selectedItems.length === 0 || payment === ""}
                  >
                    Place Order
                  </button>
                </fieldset>
              </form>

            </div>
          </div>

          {/* Modal for payment confirmation */}
          <div className="modal" tabIndex="-1" id="buy"
            style={{ display: showConfirmPayment ? 'block' : 'none' }}>
            <div className="modal-dialog">
              <div className="modal-content p-3">
                <div className="modal-header" style={{ textAlign: "center" }}>
                  <h5 className="modal-title">{paymentMethod()}</h5>
                  <button type="button" className="btn-close" 
                  onClick={() =>{setShowConfirmPayment(false);}}
                   aria-label="Close"></button>
                </div>
                <div className="modal-body" style={{ paddingLeft: "5px" }}>
                  <p>{checkoutItem()}</p>
                  <p style={{ textAlign: "right" }}>
                    <strong><u>Total: &#8369;{Number(getTotalPayment()).toFixed(2)}</u></strong>
                  </p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-danger"
                  onClick={() =>{setShowConfirmPayment(false);}}
                  >Cancel</button>
                  <button type="button" className="btn btn-success" 
                  onClick={() => {
                    setShowConfirmPayment(false);
                    selectedItems.forEach(index => handlePurchase(cartItems[index])); // Call handlePurchase for each selected item
                  }}
                  >Confirm</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartList;
