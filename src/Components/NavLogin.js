import React from 'react';
import Logo from '../Images/Logo.png';
import { Link} from 'react-router-dom';
import useCode from '../Code/Code';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import '../App.css';



function NavLogin({ cartCount, searchItem, setSearchItem, handleSearch  }) {
  const {navClassNames, 
          showModal, setShowModal,
          isDropdownOpen,isNavOpen, handleToggle, 
          handleDropdownToggle,
          handleSignOut, handleCloseModal} = useCode();

        

  return (
    <>
      <nav className={navClassNames} data-bs-theme="dark">
        <div className="container">
          <Link to="/memberhome"><img id='Logo1' src={Logo} alt="logo" width={250} height={50} /></Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
            aria-controls="navbarSupportedContent"
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/memberhome">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/memberabout">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/membercontact">Contact Us</Link>
              </li>
            </ul>
            <form className="RightNav d-flex flex-column flex-lg-row" role="search">
            <div className='rightNav'>
              <div className="input-group input-group-sm mb-3 me-lg-5 pt-3" style={{marginRight: "5px"}}>
              
                <input type="text" className="form-control" placeholder='Search All' value={searchItem} onChange={(e) => setSearchItem(e.target.value)} />
                <button
                    className="btn btn-outline-secondary"
                    type="submit"
                    onClick={handleSearch}
                    style={{ height: "30px" }}
                  >
                    Search
                  </button>

              </div>
            
             <Link id='cart' to="/cart" className="ms-lg-3 mb-2 mb-lg-0">Cart({cartCount})</Link>
              <div className='dropdown p-2'>
                <button
                  id='btnbutton'
                  className="dropdown-toggle"
                  type="button"
                  onClick={handleDropdownToggle}
                  aria-expanded={isDropdownOpen}
                >
                  Profile
                </button>
                <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                  <li className="dropdown-item btn"><Link to="/Personalprofile" style={{ textDecoration: "none", color: 'lightgray' }}>Personal Info</Link></li>
                  <li className="dropdown-item btn"><Link to="/purchases" style={{ textDecoration: "none", color: 'lightgray' }}>My Purchases</Link></li>
                  <li className="dropdown-item btn" onClick={() => setShowModal(true)}>Logout</li>
                </ul>
              </div>
             </div>
            </form>
          </div>
        </div>
      </nav>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Sign Out</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to sign out?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSignOut}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NavLogin;
