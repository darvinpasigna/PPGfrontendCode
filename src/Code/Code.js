import { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import SignupValidation from '../Components/SignupValidation';

const useCode = () => {
    const url = "https://darvx.online/public/api/products";
    const cstmrurl = "https://darvx.online/public/api/customers";
    const orderUrl = "https://darvx.online/public/api/order";
    const cartUrl = "https://darvx.online/public/api/cart";
    const shipUrl = "https://darvx.online/public/api/ship";
    const [signUp, setSignUp] = useState({
        fname: "",
        lname: "",
        contact: "",
        email: "",
        address: "",
        city: "",
        province: "",
        zipcode: "",
        password: "",
        repass: ""
    });
    const [gamingPhone, setGamingPhone] = useState([]);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [prod, setProd] = useState([]);
    const [viewItem, setViewItem] = useState(null);
    const [expandedDesc, setExpandedDesc] = useState(null);
    const [currentImg, setCurrentImg] = useState(null);
    const [view, setView] = useState(false);
    const [userLogin, setUserLogin] = useState({ uname: "", upass: "" });
    const navigate = useNavigate();
    const [arr, setArr] = useState([]);
    const [errors, setErrors] = useState({});
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [payment, setPayment] = useState("");
    const [showConfirmPayment, setShowConfirmPayment] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
  const [searchItem, setSearchItem] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [searchArr, setSearchArr] = useState([]);
  const [items, setItems] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [getUser, setGetUser] = useState('');
  const [adverProd, setAdverProd] = useState([]);
    const contactContent = useState('We\'d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us using the information below.');
    const biTelephone = <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="black" className="bi bi-telephone" viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
          </svg>;
    const biEnvelope =  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="black"className="bi bi-envelope-at" viewBox="0 0 16 16">
    <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
    <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
  </svg>;
  const biMessenger =  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="blue"className="bi bi-messenger" viewBox="0 0 16 16">
  <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.64.64 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.64.64 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76m5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"/>
</svg>;
const biFB =<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="blue" className="bi bi-facebook" viewBox="0 0 16 16">
<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>;
const biInstagram =  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-instagram" viewBox="0 0 16 16">
<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>;
const whiteEnvlop =   <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-envelope-at" viewBox="0 0 16 16">
<path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
<path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
</svg>;
const biTweet =  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="lightblue" className="bi bi-twitter" viewBox="0 0 16 16">
<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
</svg>;
const biYoutube = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" className="bi bi-youtube" viewBox="0 0 16 16">
<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
</svg>;
const contactInfo =  <h5>Customer Support: (123) 456-7890 <br />
Sales Inquiries: (123) 456-7891
<br />Cellphone Number<br />09757367195</h5>;
const emailInfo = <h5>Email us your questions or <br />conerns and we will give you <br />the help you need<br /><br /><a href="https://mail.google.com/">PPGgameshop@gmail.com</a></h5>;
const messengerInfo = <h5>Chat us we are <br />online during office hours <br />Mondays to Sundays<br /><br />
<a href="m.me/mrpdrvn">m.me/PPGgameshop</a><br />
<a href="www.facebook.com">m.me/PPGgameshop</a><br />
<a href="www.instagram.com">instagram.com/yourpage</a>
</h5>;
const aboutIframe = <iframe 
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15443.737144555504!2d121.0725933286987!3d14.602819257811472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b81d8a03f6c5%3A0x2c718a49bf834007!2sEastwood%20Mall!5e0!3m2!1sen!2sph!4v1719747549722!5m2!1sen!2sph" 
width="400" 
height="300" 
style={{border: 0, width: '100%', height: '100%'}}
allowFullScreen="" 
loading="lazy" 
referrerPolicy="no-referrer-when-downgrade"
title="Google Maps location of Eastwood Mall">
</iframe>;
const aboutContent = "PPG is an acronym from the family name of Darvin Pasigna and Kim Pagunsan, Pasigna Pagunsan Game. They were childhood friends who loved to play games and decided to create an online shop on May 30, 2024. The products are related to all gaming gadgets, gaming accessories, gaming desktop PCs, tablets, smartphones, and many more.";
const navtoggle = useState(false);   
const navClassNames = "navbar sticky-top navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body";
const handleSignup = (e) => {
  e.preventDefault();
  const validationErrors = SignupValidation(signUp);
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length === 0) {
    let getData = new FormData();
    getData.append('fname', signUp.fname);
    getData.append('lname', signUp.lname);
    getData.append('contact', signUp.contact);
    getData.append('email', signUp.email);
    getData.append('address', signUp.address);
    getData.append('city', signUp.city);
    getData.append('province', signUp.province);
    getData.append('zipcode', signUp.zipcode);
    getData.append('password', signUp.password);

    axios({
      method: "POST",
      url: "https://darvx.online/public/api/customers/reg",
      data: getData,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    .then((response) => {
      return axios.get(cstmrurl);
    })
    .then((response) => {
      const data = response.data;

      if (data && Array.isArray(data)) {
        setArr(data);
        setSignUp({
          fname: "",
          lname: "",
          contact: "",
          email: "",
          address: "",
          city: "",
          zipcode: "",
          province: "",
          password: "",
        });
      } else {
        console.error(data);
      }

      alert('Successfully Registered');
      setShowSignupModal(false);
    })
  }
};

const pc = (item) => {
  return item.prod_category.toLowerCase() === "PC".toLowerCase();
};

const phone = (item) => {
  return item.prod_category.toLowerCase() === "Smart Phone".toLowerCase();
};

const isUserExist = ((user) => 
  user.email === userLogin.uname && user.password === userLogin.upass
);


const handleLogin = (e) => {
  e.preventDefault();

  axios.get("https://darvx.online/public/api/customers")
    .then((response) => {
      const usersArray = response.data.data;
      if (Array.isArray(usersArray)) {
        if (isUserExist) {
          alert('Login successful');
          navigate('/MemberHome');
        } else {
          alert('Wrong email or password');
          navigate('/PPGgameshopP5');
        }
      } else {
        console.error("Expected an array but got:", usersArray);
      }
    })
};
const curntUser =(user) =>{
  return (user.email === userLogin.uname && getUser)
}
const currentUser =() => {
    setUserInfo(userInfo.filter(curntUser));
}

    const handleSignUpChange = (field, value) => {
        setSignUp(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    const handleLoginChange = (field, value) => {
        setUserLogin(prevState => ({
            ...prevState,
            [field]: value
        }));
    };
    const addToCart = (item) => {
      let getData = new FormData();
      getData.append('prod_name', item.prod_name);
      getData.append('desc', item.desc);
      getData.append('price_per_item', item.price);
      getData.append('main_img', item.main_img);
    
      axios({
        method: "POST",
        url: "https://darvx.online/public/api/cart/addtocart",
        data: getData,
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      .then(() => {
        // After the POST request is successful, make the GET request
        return axios.get(cartUrl);
      })
      .then((response) => {
        const { status, data } = response.data;
        if (status === 200 && Array.isArray(data)) {
          alert(item.prod_name + ' successfully added to your cart');
          setCartCount(prevCount => prevCount + 1);
        } else {
          console.error(response.data);
        }
      })
    };
    
    
    

    const addCart = (e) => {
      e.preventDefault(); 
    
      let getData = new FormData();
      getData.append('prod_name', viewItem.prod_name);
      getData.append('desc', viewItem.desc);
      getData.append('price_per_item', viewItem.price);
      getData.append('main_img', viewItem.main_img);
    
      axios({
        method: "POST",
        url: "https://darvx.online/public/api/cart/addtocart",
        data: getData,
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      .then(() => {
        return axios.get(cartUrl); 
      })
      .then((response) => {
        const { status, data } = response.data;
        if (status === 200 && Array.isArray(data)) {
          // console.log(data);
          alert(viewItem.prod_name + ' successfully added to your cart');
          setViewItem(false);
          setCartCount(prevCount => prevCount + 1);
        } else {
          console.error(response.data);
        }
      })
    };
      
      const addNew = () => {
        let getData = new FormData();
        getData.append('prod_name', prod[10].prod_name);
        getData.append('desc', prod[10].desc);
        getData.append('price_per_item', prod[10].price);
        getData.append('main_img', prod[10].main_img);
        axios({
          method: "POST",
          url: "https://darvx.online/public/api/cart/addtocart",
          data: getData,
          headers: { 'Content-Type': 'multipart/form-data' }
        }).then(() => {
          return axios.get(cartUrl);
        })
        .then((response) => {
          const { status, data } = response.data;
          if (status === 200 && Array.isArray(data)) {
            alert(prod[10].Name+ ' successfully added to your cart');
            setCartCount(prevCount => prevCount + 1);
          } else {
            console.error(response.data);
          }
        });
      };
     
      const handleViewItem = (item) => {
        setViewItem(item);
        setView(true);
        setCurrentImg(item.main_img);
      };
    
      const showMoreDesc = (item) => {
        setExpandedDesc(expandedDesc === item ? null : item);
      };
    
      const changeImage = (img) => {
        setCurrentImg(img);
      };
    
      function paymentMethod() {
        if (payment === "Gcash") {
          return "Gcash";
        } else if (payment === "Maya") {
          return "Maya";
        } else {
          return "Cash On Delivery";
        }
      }
      const chunkArray = (array, chunkSize) => {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
          result.push(array.slice(i, i + chunkSize));
        }
        return result;
      };
  
      const pcImages = chunkArray(prod, 6); 
      const gPhoneImages = chunkArray(gamingPhone, 6);
      const handleToggle = () => {
        setIsNavOpen(!isNavOpen);
      };
    
      const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
      };


      const handleSignOut = () => {
        setShowModal(false);
        navigate('/PPGgameshopP5');
      };
    
      const handleCloseModal = () => {
        setShowModal(false);
      };

      const handleSearch = (event) => {
        event.preventDefault();
        axios.get(url)
          .then((response) => {
            const { status, data } = response.data;
            if (status === 200 && Array.isArray(data)) {
              const searchWords = searchItem.toLowerCase().split(' ');
      
              const match = (item) => {
                const prodName = item.prod_name.toLowerCase();
                const category = item.prod_category.toLowerCase();
                if (category === "advertise") {
                  return false;
                }
                
                if (searchWords.includes('all')) {
                  return true;
                }
             
                return searchWords.some(word => 
                  prodName.includes(word) || category.includes(word)
                );
              };
      
              const filteredItems = data.filter(match);
      
              if (filteredItems.length > 0) {
             
                navigate("/shop", { state: { items: filteredItems } });
              } else {
                alert("No result found.");
              }
            } 
          });
      };
      

    return {
        signUp, setSignUp,showLoginModal, setShowLoginModal,showSignupModal, setShowSignupModal, pc, phone,
        userLogin, setUserLogin, navigate, arr, setArr, url, handleSignup, handleLogin,userInfo, setUserInfo,
        handleSignUpChange, handleLoginChange, errors, setErrors, contactContent, biTelephone, getUser, setGetUser,
        biEnvelope, biMessenger, contactInfo, emailInfo, messengerInfo, aboutIframe, aboutContent, currentUser,
        addToCart, cartCount, setCartCount, setGamingPhone, orderUrl, cartUrl, searchArr, setSearchArr, curntUser,
        view, setView, prod, setProd, viewItem, setViewItem, expandedDesc, setExpandedDesc, isUserExist,
        currentImg, setCurrentImg, showMoreDesc, handleViewItem, changeImage, cartItems, setCartItems, 
        selectedItems, setSelectedItems, payment, setPayment, showConfirmPayment, setShowConfirmPayment,
        showSuccess, setShowSuccess, paymentMethod,  pcImages, gPhoneImages, handleSearch, cstmrurl,
        addCart, addNew, navtoggle, navClassNames, searchItem, setSearchItem, showModal, setShowModal,
        setIsDropdownOpen, isDropdownOpen,  isNavOpen, setIsNavOpen, handleToggle, handleDropdownToggle,
        handleSignOut, handleCloseModal, biFB, biInstagram, whiteEnvlop, biTweet, biYoutube,items, setItems,
        adverProd, setAdverProd, shipUrl

    };
};

export default useCode;
