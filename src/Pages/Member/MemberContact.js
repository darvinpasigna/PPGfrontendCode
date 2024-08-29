import '../../App.css';
import NavLogin from '../../Components/NavLogin';
import Footer from '../../Components/Footer';
import ContactContent from '../../Components/ContactContent';
import { useEffect } from 'react';
import axios from 'axios';
import useCode from '../../Code/Code';

function MemberContact () {
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
        <NavLogin cartCount={cartCount} searchItem={searchItem} setSearchItem={setSearchItem} handleSearch={handleSearch}  />
        <div className="background"></div>
        <br />
        <ContactContent />
        <br />
        <Footer />
        </>
)}

export default MemberContact;