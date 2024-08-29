import '../../App.css';
import NavLogin from '../../Components/NavLogin';
import Footer from '../../Components/Footer';
import PersonalInfo from '../../Components/PersonInfo';
import useCode from '../../Code/Code';
import axios from 'axios';
import { useEffect } from 'react';

function PersonalProfile () {
  const {cartCount, setCartCount, cartUrl, searchItem, setSearchItem, handleSearch} = useCode();

  useEffect(() => {
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
        <NavLogin cartCount={cartCount} searchItem={searchItem} setSearchItem={setSearchItem} handleSearch={handleSearch}/>
        <div className="background"></div>
        <PersonalInfo />
        <br />
        <br />
        <Footer />
        </>
)}

export default PersonalProfile;