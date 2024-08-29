import '../../App.css';
import NavLogin from '../../Components/NavLogin';
import Footer from '../../Components/Footer';
import useCode from '../../Code/Code';
import About from '../../Components/Aboutcontent';
import { useEffect } from 'react';
import axios from 'axios';

function MemberAbout () {
    const {cartCount, setCartCount, cartUrl, searchItem, setSearchItem, handleSearch } = useCode();

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
        <NavLogin cartCount={cartCount} searchItem={searchItem} setSearchItem={setSearchItem} handleSearch={handleSearch} />
        <div className="background"></div>
        <br />
        <About />
        <br />
        <Footer />
        </>
)}

export default MemberAbout;