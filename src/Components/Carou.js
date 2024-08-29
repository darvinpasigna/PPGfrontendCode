import React, { useEffect } from 'react';
import useCode from '../Code/Code';
import '../App.css';

function Carou() {
  const {adverProd, setAdverProd, url} = useCode();

  

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data && Array.isArray(data.data)) {
          const carsltbl = data.data.filter(product => product.prod_category.toLowerCase() === 'advertise');
          setAdverProd(carsltbl);
        } else {
          setAdverProd([]);
        }
      })
  }, []);

  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {adverProd.map((item, index) => (
           <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
           <img src={item.main_img} className="d-block w-100" alt="carousel item" style={{ height: "650px" }} />
         </div>
         
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carou;
