import React from 'react';
import '../App.css';

const Card = ({ 
  showForgot, setShowForgot, prod,
  setShowLoginModal, setShowSignupModal,
  handleViewItem, pcImages,
  gPhoneImages
}) => {

  return (
    <>
      <br />
      <div className='container'>
        <p 
          className="text-uppercase text-muted fw-bold mb-1"
          style={{
            color: '#dcdcdc', 
            fontSize: '1.1rem',
            letterSpacing: '1px',
            marginBottom: '10px'
          }}
        >
          Top choices
        </p>
        <h2
          style={{
            color: 'black',
            fontWeight: '700',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            margin: '0'
          }}
        >
          The Best Gaming PCs and Streaming for 2024
        </h2>
      </div>
      
      <div 
        id="PCitems" 
        className="container carousel slide carousel-fade p-4" 
        style={{padding: "20px", boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", borderRadius: "15px"}}
      >
        <div className="carousel-indicators" style={{width: "100px", margin: "auto"}}>
          {pcImages.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#PCitems"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
              style={{backgroundColor: "black", height: "10px"}}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {pcImages.map((item, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className='d-flex flex-wrap justify-content-between align-items-center'>
                {item.map((carImg) => (
                  <div key={carImg.id} className="card m-2 carditem">
                    <img
                      style={{ width: "100%", height: "200px", objectFit: 'contain' }}
                      src={carImg.main_img}
                      className="btn img-fluid rounded-start p-0"
                      type='button'
                      alt="cardpic"
                      onClick={() => handleViewItem(carImg)}
                    />
                    <div className="card-footer p-0 text-center">
                      <p
                        className="btn card-title p-0"
                        type='button'
                        style={{ textAlign: 'left', fontWeight: "600" }}
                        onClick={() => handleViewItem(carImg)}
                      >
                        <small className='p-0' style={{fontSize: "10px"}}>{carImg.prod_name.substring(0, 25)}..</small> <br />
                        &#8369;{parseFloat(carImg.price.replace(/,/g, '')).toLocaleString('en-US')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button 
          className="carousel-control-prev"
          type="button" 
          data-bs-target="#PCitems" 
          data-bs-slide="prev" 
          style={{maxWidth: "40px"}}
        >
          <span 
            className="carousel-control-prev-icon" 
            aria-hidden="true" 
            style={{ borderRadius: "10px"}}
          ></span>
        </button>
        <button 
          className="carousel-control-next" 
          type="button" 
          data-bs-target="#PCitems" 
          data-bs-slide="next" 
          style={{maxWidth: "40px"}}
        >
          <span 
            className="carousel-control-next-icon" 
            aria-hidden="true" 
            style={{ borderRadius: "10px"}}
          ></span>
        </button>
      </div>

      <br /> <br />
      <div className='container'>
        <h2
          style={{
            color: 'black',
            fontWeight: '700',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            margin: '0'
          }}
        >
          Smart Phones for gaming faster and better
        </h2>
      </div>

      <div 
        id="Gphone" 
        className="container carousel slide carousel-fade p-4" 
        style={{padding: "20px", boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", borderRadius: "15px"}}
      >
        <div className="carousel-indicators" style={{width: "100px", margin: "auto"}}>
          {gPhoneImages.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#Gphone"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
              style={{backgroundColor: "black", height: "10px"}}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {gPhoneImages.map((item, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className='d-flex flex-wrap justify-content-between align-items-center'>
                {item.map((carImg) => (
                  <div key={carImg.id} className="card m-2 carditem">
                    <img
                      style={{ width: "100%", height: "200px", objectFit: "contain" }}
                      src={carImg.main_img}
                      className="btn img-fluid rounded-start p-0"
                      type='button'
                      alt="cardpic"
                      onClick={() => handleViewItem(carImg)}
                    />
                    <div className="card-footer p-0 text-center">
                      <p
                        className="btn card-title"
                        type='button'
                        style={{ textAlign: 'left', fontWeight: "600" }}
                        onClick={() => handleViewItem(carImg)}
                      >
                        <small className='p-0' style={{fontSize: "10px"}}>{carImg.prod_name.substring(0, 25)}..</small> <br />
                        &#8369;{parseFloat(carImg.price.replace(/,/g, '')).toLocaleString('en-US')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button 
          className="carousel-control-prev" 
          type="button" 
          data-bs-target="#Gphone" 
          data-bs-slide="prev" 
          style={{maxWidth: "40px"}}
        >
          <span 
            className="carousel-control-prev-icon" 
            aria-hidden="true" 
            style={{ borderRadius: "10px"}}
          ></span>
        </button>
        <button 
          className="carousel-control-next" 
          type="button" 
          data-bs-target="#Gphone" 
          data-bs-slide="next" 
          style={{maxWidth: "40px"}}
        >
          <span 
            className="carousel-control-next-icon" 
            aria-hidden="true" 
            style={{ borderRadius: "10px"}}
          ></span>
        </button>
      </div>

      <br /> <br />
      <div className='container'>
        {prod.length > 0 && (
          <div className='row'>
            <div className='col-12 col-md-4'>
              <img src={prod[10].main_img} alt="new" style={{ width: '100%' }} />
            </div>  
            <div className='col-12 col-md-6'>
              <h3><strong>New release from ViprTech</strong></h3>
              <h4>{prod[10].Name}</h4>
              <h2> &#8369;{parseFloat(prod[10].price.replace(/,/g, '')).toLocaleString('en-US')}</h2>
              <p>{prod[10].desc}</p>
              <button 
                className='form-control btn btn-secondary' 
                type='button'
                style={{ 
                  color: "white", 
                  borderRadius: "20px", 
                  width: "100%",
                  maxWidth: "300px",
                  fontWeight: "600"
                }}
                onClick={() => { setShowForgot(true); }}
              >
                Shop Now
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Forgot to Login Modal */}
      <div className='modal' id='forgotologin' style={{ display: showForgot ? 'block' : 'none' }}>
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className="modal-header">
              <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowForgot(false)}></button>
            </div>
            <div className="modal-body text-center">
              <h5 className="text-danger">Oops! You forgot to login!!</h5>
              <p>Not a member? Click the button below to sign up.</p>
            </div>
            <div className="modal-footer justify-content-center">
              <button type="button" className="btn btn-primary me-2"
                onClick={() => {
                  setShowLoginModal(true);
                  setShowForgot(false);
                }}
              >
                Login here
              </button>
              <button type="button" className="btn btn-success"
                onClick={() => {
                  setShowSignupModal(true);
                  setShowForgot(false);
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
