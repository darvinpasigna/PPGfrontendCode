import React, { useState, useEffect } from 'react';
import '../App.css';
import Carou from '../Components/Carou';
import Card from '../Components/Card';
import NavBar from '../Components/Nav';
import Footer from '../Components/Footer';
import LoginComp from '../Components/LoginComp';
import useCode from '../Code/Code';
import ViewItem from '../Components/ViewItem';
import SignupForm from '../Components/SignupForm';

function Home() {
  const [showForgot, setShowForgot] = useState(false);
  const { setShowLoginModal, showLoginModal, 
          showSignupModal, setShowSignupModal, 
          view, setView, url, viewItem, 
          changeImage, currentImg, pc,
          expandedDesc, showMoreDesc,
          handleViewItem, setGamingPhone,
          pcImages, gPhoneImages, prod, 
          setProd, phone} = useCode();
 
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
  }, []);




  return (
    
    <>
    <div className="background"></div>
      <NavBar setShowLoginModal={setShowLoginModal} setShowForgot={setShowForgot} />

      <LoginComp 
        showLoginModal={showLoginModal} 
        showSignupModal={showSignupModal} 
        setShowSignupModal={setShowSignupModal} 
        setShowLoginModal={setShowLoginModal} 
      />
      
        <div className='row mt-1'>
          <div className='col-8'><Carou /></div>
          <div className='col-4'><SignupForm /> </div>
      </div>

      <Card
        prod={prod} setProd={setProd}
        handleViewItem={handleViewItem}
        showForgot={showForgot}
        setShowForgot={setShowForgot}
        setShowSignupModal={setShowSignupModal} 
        setShowLoginModal={setShowLoginModal}
        pcImages={pcImages} 
        gPhoneImages={gPhoneImages}
      />,
      <br />
      <br />
      <ViewItem 
        viewItem={viewItem} 
        changeImage={changeImage}
        currentImg={currentImg}
        expandedDesc={expandedDesc}
        showMoreDesc={showMoreDesc}
        view={view}
        setView={setView}
      />
      <Footer />
    </>
  );
}

export default Home;
