import React from 'react'

const SearchComp = ({items, handleViewItem}) => {
  return (
    <>
    <div className="background"></div>
      <div className='container d-flex-wrap justify-content-between align-items-center'>
        {items.map((item, index) => (
          <div key={index} className="card cardshop mb-3" style={{ backgroundColor: "#f8f9fa5a" }}>
            <div className="row g-0">
              <div className="col-md-6">
                <div className="img-container">
                  <img 
                  style={{ width: "100%", height: "200px", objectFit: "contain" }}
                  src={item.main_img}
                  className="btn img-fluid rounded-start p-1"
                  type='button'
                  alt="cardpic"
                  onClick={() => handleViewItem(item)}/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body p-1">
                  <h5 className="card-title btn p-0" style={{ textAlign: 'left', fontWeight: "600" }} onClick={() => handleViewItem(item)}>{item.Name}</h5> <br />
                  <h6>&#8369;{parseFloat(item.price.replace(/,/g, '')).toLocaleString('en-US')}</h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default SearchComp;