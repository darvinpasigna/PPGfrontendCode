import '../App.css';
import React from 'react';
import ContactContent from '../Components/ContactContent';
import NavBar from '../Components/Nav';
import Footer from '../Components/Footer';
import LoginComp from '../Components/LoginComp';
import useCode from '../Code/Code';

const Contact = () => {
  const { setShowLoginModal, showLoginModal, showSignupModal, setShowSignupModal } = useCode();
    return (
      <>
        <NavBar setShowLoginModal={setShowLoginModal} />
        <div className="background"></div>
        <ContactContent />
        <br /><br />
        <LoginComp
          showLoginModal={showLoginModal} 
          showSignupModal={showSignupModal} 
          setShowSignupModal={setShowSignupModal} 
          setShowLoginModal={setShowLoginModal}
        />
        <Footer />
      </>
    );
  }
  
  export default Contact;