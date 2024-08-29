import React, { useEffect } from 'react';
import '../../App.css';
import NavLogin from '../../Components/NavLogin';
import Footer from '../../Components/Footer';
import useCode from '../../Code/Code';
import ViewNadd2cart from '../../Components/ViewNadd2cart';
import axios from 'axios';
import { useLocation } from 'react-router';

const CardShop = () => {

  const { 
    cartCount, 
    addToCart, 
    handleViewItem,
    viewItem,
    changeImage,
    currentImg,
    expandedDesc,
    showMoreDesc,
    view, cartUrl,
    setView, url, setCartCount,
    searchItem, setSearchItem,
    handleSearch, items, setItems,
    addCart
  } = useCode();

  useEffect(() => {

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
       
        if (data && Array.isArray(data.data)) {
          const filteredItems = data.data.filter(item => item.prod_category !== "advertise");
          setItems(filteredItems);
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
  }, []);

  const location = useLocation();
  const searchProd = location.state?.items || items;  

  return (
    <>
      <NavLogin 
        handleSearch={handleSearch} 
        cartCount={cartCount} 
        searchItem={searchItem} 
        setSearchItem={setSearchItem} 
      />
      <div className="background"></div>
      <div className="prodDisplay container">
          {searchProd.length > 0 ? (
            searchProd.map((item) => (
              <div key={item.id} className="shopcard card cardshop">
                <div className="shopimg img-container">
                  <img 
                    src={item.main_img}
                    className="shopimgfluid img-fluid"
                    alt="cardpic"
                    onClick={() => handleViewItem(item)}
                  />
                </div>
                <div className="shopbody card-body">
                  <h5 id="prodname" className="card-title" onClick={() => handleViewItem(item)}>
                    {item.prod_name}
                  </h5> 
            
                  <h6>&#8369;{parseFloat(item.price.replace(/,/g, '')).toLocaleString('en-US')}</h6>
                  <div className="fix-bottom">
                    <button 
                      className="btn btn-primary form-control" 
                      type="button"
                      onClick={() => addToCart(item)}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No items found.</p>
          )}
        </div>

      <ViewNadd2cart
        viewItem={viewItem} 
        changeImage={changeImage}
        currentImg={currentImg}
        expandedDesc={expandedDesc}
        showMoreDesc={showMoreDesc}
        view={view}
        setView={setView}
        addCart={addCart}
      />
      <Footer />
    </>
  );
};

export default CardShop;
