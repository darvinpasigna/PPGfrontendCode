import '../App.css';
import React from 'react';
import Aboutcontent from '../Components/Aboutcontent';
import NavBar from '../Components/Nav';
import Footer from '../Components/Footer';
import LoginComp from '../Components/LoginComp';
import useCode from '../Code/Code';


const About = () => {
  const { setShowLoginModal, showLoginModal, showSignupModal, setShowSignupModal } = useCode();
    return (
      <>
        <NavBar setShowLoginModal={setShowLoginModal}/>
        <div className="background"></div>
        <Aboutcontent />
        <LoginComp 
        showLoginModal={showLoginModal} 
        showSignupModal={showSignupModal} 
        setShowSignupModal={setShowSignupModal} 
        setShowLoginModal={setShowLoginModal}
        />
        <Footer/>
      </>
    );
  }
  
  export default About;