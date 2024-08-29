import React, { useEffect } from 'react';
import NavLogin from '../../Components/NavLogin';
import Footer from '../../Components/Footer';
import LoginCards from '../../Components/LoginCards';
import Carou from '../../Components/Carou';
import useCode from '../../Code/Code';
import ViewNadd2cart from '../../Components/ViewNadd2cart';
import axios from 'axios';

function MemberHome() {
  const {cartCount, 
     addToCart, pc, url, cartUrl, 
    view, setView, viewItem, 
    changeImage, currentImg,
    expandedDesc, showMoreDesc, setCartCount,
    handleViewItem, phone, setGamingPhone,
    pcImages, gPhoneImages, prod, setProd, addCart, addNew,
    searchItem, setSearchItem, handleSearch, cstmrurl  } = useCode();
    // const token = localStorage.getItem('token'); 

  useEffect(() => {
      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          const pcImg = data.data.filter(pc);
          const phoneImg = data.data.filter(phone);
          setProd(pcImg);
          setGamingPhone(phoneImg);
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
  }, [url, cartUrl]);

  return (
    <>
      <NavLogin cartCount={cartCount} searchItem={searchItem} setSearchItem={setSearchItem} handleSearch={handleSearch} />
      <div className="background"></div>
      <Carou />
      <br />
      <br />
      <LoginCards 
      handleViewItem={handleViewItem} 
      addToCart={addToCart}
      pcImages={pcImages} 
      gPhoneImages={gPhoneImages} 
      prod={prod}
      addNew={addNew}
      />
      <ViewNadd2cart
       viewItem={viewItem} 
       changeImage={changeImage}
       currentImg={currentImg}
       expandedDesc={expandedDesc}
       showMoreDesc={showMoreDesc}
       view={view}
       setView={setView}
       addCart={addCart}
       url={url}
      />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default MemberHome;
