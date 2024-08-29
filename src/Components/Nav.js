import React from 'react';
import Logo from '../Images/Logo.png';
import { Link} from 'react-router-dom';
import useCode from '../Code/Code';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import '../App.css';

function NavBar({ setShowLoginModal, setShowForgot }) {
    const { navClassNames, isNavOpen, handleToggle } = useCode();

    return (
        <>
            <nav className={navClassNames} data-bs-theme="dark">
                <div className="container">
                    <Link to="/PPGgameshopP5">
                        <img id='Logo1' src={Logo} 
                        alt="logo" 
                        width={250} 
                        height={50} />
                    </Link>
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
                                <Link className="nav-link" to="/PPGgameshopP5">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact">Contact Us</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <div className="input-group input-group-sm mb-3 me-5 pt-3">
                                <button className="btn btn-outline-secondary" type="button"
                                onClick={() => { setShowForgot(true); }}
                                >
                                    Search
                                </button>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                />
                            </div>
                            <button 
                                id='btnbutton'
                                className="btn btn-outline-none" 
                                style={{ backgroundColor: "dark" }} 
                                type='button' 
                                onClick={() => setShowLoginModal(true)}
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
