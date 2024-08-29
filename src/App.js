import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import MemberHome from './Pages/Member/MemberHome';
import MemberAbout from './Pages/Member/MemberAbout';
import MemberContact from './Pages/Member/MemberContact';
// import PersonalProfile from './Pages/Member/PersonalProfile';
import Cart from './Pages/Member/Cart';
import Shop from './Pages/Member/Shop';
import Purchases from './Pages/Member/Purchases';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  return (
    <Routes>
      <Route path="/PPGgameshopP5" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/memberhome" element={<MemberHome />} />
      <Route path="/memberabout" element={<MemberAbout />} />
      <Route path="/membercontact" element={<MemberContact />} />
      {/* <Route path="/personalprofile" element={<PersonalProfile />} /> */}
      <Route path="/cart" element={<Cart />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/purchases" element={<Purchases />} />
    </Routes>
  );
}

export default App;