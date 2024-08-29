import React, { useEffect, useState } from 'react';

const ViewItem = ({
    viewItem,
    changeImage,
    currentImg,
    expandedDesc,
    showMoreDesc,
    view,
    setView,
    addCart,
    url
}) => {
    // Move useState inside the component
    const [arr, setArr] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (data && Array.isArray(data.data)) {
                    setArr(data.data);
                } else {
                    console.error("Expected an array but got:", data);
                }
            });
    }, [url]);

    return (
        <>
            {viewItem && (
                <div className="modal" tabIndex="-1" id='view' style={{ display: view ? 'block' : 'none' }}>
                    <div className="modal-dialog-lg modal-dialog-centered" style={{ width: "1000px", margin: "auto" }}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{viewItem.prod_name}</h5>
                                <button type="button" className="btn-close" onClick={() => { setView(false); }}></button>
                            </div>
                            <div className="modal-body">
                                <div className="row g-0">
                                    <div className="col-md-6 p-2">
                                        <img src={currentImg} className="img-fluid rounded-start" alt="cardpic" style={{ width: "60%", height: "400px" }} />
                                        <br /><br />
                                        <div>
                                            Ratings:
                                            <span className="fa fa-star checked" style={{ color: "#ff8c00", fontSize: "25px" }}></span>
                                            <span className="fa fa-star checked" style={{ color: "#ff8c00", fontSize: "25px" }}></span>
                                            <span className="fa fa-star checked" style={{ color: "#ff8c00", fontSize: "25px" }}></span>
                                            <span className="fa fa-star checked" style={{ color: "#ff8c00", fontSize: "25px" }}></span>
                                            <span className="fa fa-star checked" style={{ color: "#ff8c00", fontSize: "25px" }}></span>(60)
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body">
                                        <div className='d-flex'>
                                                <img
                                                    onClick={() => changeImage(viewItem.main_img)}
                                                    className='btn'
                                                    type='button'
                                                    id='main_img'
                                                    name='main_img'
                                                    defaultValue={viewItem.main_img}
                                                    src={viewItem.main_img}
                                                    alt='product'
                                                    style={{ width: "100px", marginLeft: "20px" }}
                                                />
                                                <img
                                                    onClick={() => changeImage(viewItem.img1)}
                                                    className='btn'
                                                    type='button'
                                                    src={viewItem.img1}
                                                    alt='product'
                                                    style={{ width: "100px", marginLeft: "20px" }}
                                                />
                                                <img
                                                    onClick={() => changeImage(viewItem.img2)}
                                                    className='btn'
                                                    type='button'
                                                    src={viewItem.img2}
                                                    alt='product'
                                                    style={{ width: "100px", marginLeft: "20px" }}
                                                />
                                                <img
                                                    onClick={() => changeImage(viewItem.img3)}
                                                    className='btn'
                                                    type='button'
                                                    src={viewItem.img3}
                                                    alt='product'
                                                    style={{ width: "100px", marginLeft: "20px" }}
                                                />
                                            </div>
                                            <br />
                                            <h5
                                                style={{ fontWeight: "600" }}
                                                id='prod_name'
                                                name='prod_name'
                                                defaultValue={viewItem.prod_name}
                                            >{viewItem.prod_name}</h5>
                                            <h6
                                                id='price'
                                                name='price'
                                                defaultValue={viewItem.price}
                                            >&#8369;{parseFloat(viewItem.price.replace(/,/g, '')).toLocaleString('en-US')}</h6>
                                            <p id='desc' name="desc" style={{ cursor: 'pointer' }}>
                                                <small>
                                                    {expandedDesc === viewItem ? (
                                                        <span>
                                                            {viewItem.desc} <br />
                                                            <span style={{ color: 'blue', textDecoration: 'underline' }} onClick={() => showMoreDesc(viewItem)}>
                                                                Hide
                                                            </span>
                                                        </span>
                                                    ) : (
                                                        <span>
                                                            {viewItem.desc.substring(0, 500)}...{' '}
                                                            <span style={{ color: 'blue', textDecoration: 'underline' }} onClick={() => showMoreDesc(viewItem)}>
                                                                Read more
                                                            </span>
                                                        </span>
                                                    )}
                                                </small>
                                            </p>
                                
                                        </div><br />
                                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <button
                                                style={{ width: "200px", borderRadius: "20px" }}
                                                className='btn btn-primary form-control'
                                                type='button'
                                                onClick={(e) => addCart(e)}
                                            >ADD TO CART</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ViewItem;
