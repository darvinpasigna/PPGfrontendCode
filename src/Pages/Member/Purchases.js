import React, { useEffect, useState } from 'react';
import NavLogin from '../../Components/NavLogin';
import Footer from '../../Components/Footer';
import useCode from '../../Code/Code';
import axios from 'axios';
import '../../App.css';


const Purchases = () => {
    const [purch, setPurch] = useState([]);
    const {cartCount, orderUrl, cartUrl, setCartCount, searchItem, setSearchItem, handleSearch} = useCode();

    useEffect(() => {
      fetch(orderUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          setPurch(data.data);
        } else {
          console.error("Expected an array but got:", data);
        }
      });
      axios.get(cartUrl)
      .then((response) => {
        const {status, data }= response.data;
        if (status === 200 && Array.isArray(data)) {
          setCartCount(data.length);
        } else {
          console.error(response.data);
        }
      });
  }, [cartUrl]);

  return (
    <>
    <NavLogin cartCount={cartCount} searchItem={searchItem} setSearchItem={setSearchItem} handleSearch={handleSearch} />
    <div className="background"></div>
    <div className='container'>
          <h1>PENDING ORDERS</h1>
      {purch.map((item, index) => (
        <div key={index} className="container mb-3" style={{ backgroundColor: "#f8f9fa5a"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={item.main_img} 
              name="main_img" 
              id="main_img" 
              className="img-fluid rounded-start"
               alt="cardpic" 
               style={{width: "100%", objectFit: "contain", height: "100%"}}
               />
            </div>
            <div className="col-md-8">
              <div className="card-body p-2">
                <h5 className="card-title" name="Name" id="prodname">{item.prod_name}</h5> <br />
                <h6 className='card-text' name="price" id="price"> Price per unit: <strong>&#8369;{item.price_per_item}</strong></h6>
                <h6 className='card-text' name="price" id="price">QTY: <strong>{item.quantity}</strong></h6>
                <h6 className='card-text' name="price" id="price">Total Price: <strong>&#8369;{item.total_price}</strong></h6>
                <h6 className='card-text' name="price" id="price">Mode of Payment: <strong>{item.mode_of_payment}</strong></h6>
                <p>{item.desc.substring(0, 600)}...</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    <Footer />
    </>
  )
}

export default Purchases;