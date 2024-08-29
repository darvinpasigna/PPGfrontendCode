import React, { useEffect, useState } from 'react';
import '../App.css';
import useCode from '../Code/Code';
import axios from 'axios';

function PersonalInfo() {
  const [imagePreview, setImagePreview] = useState(null);
  const [image, setImage] = useState(null);
  const { userInfo, cstmrurl, setUserInfo } = useCode();
  const [updateUser, setUpdateUser] = useState({
    fname: "",
    lname: "",
    contact: "",
    email: "",
    password: "",
    address: "",
    city: "",
    province: "",
    zipcode: "",
    image: "",
    id: ""
  });
  const [editMode, setEditMode] = useState({
    fname: false,
    lname: false,
    contact: false,
    email: false,
    password: false,
    address: false,
    city: false,
    province: false,
    zipcode: false,
  });

  useEffect(() => {
    fetch(cstmrurl)
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          setUserInfo(data.data[0]);
          setUpdateUser(data.data[0]); // Initialize form with userInfo
        } else {
          console.error("Expected an array but got:", data);
        }
      });
  }, [cstmrurl, setUserInfo]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const getImageSrc = () => {
    if (imagePreview) {
      return imagePreview;
    }
    return userInfo.image || require('../Images/avatar.jpg');
  };

  const handleSave = () => {
    let getData = new FormData();
    if (image) {
      getData.append('image', image);
    }
    getData.append('fname', updateUser.fname);
    getData.append('lname', updateUser.lname);
    getData.append('contact', updateUser.contact);
    getData.append('email', updateUser.email);
    getData.append('password', updateUser.password);
    getData.append('address', updateUser.address);
    getData.append('city', updateUser.city);
    getData.append('province', updateUser.province);
    getData.append('zipcode', updateUser.zipcode);
  
    axios({
      method: "POST",
      url: `https://darvx.online/public/customers/edit/${updateUser.id}`,
      data: getData,
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(() => {
      axios.get(cstmrurl).then((response) => {
        console.log(response.data);
        setUserInfo(response.data[0]);
        setUpdateUser(response.data[0]);
        alert("Successfully saved");
      });
    }).catch(error => {
      console.error("There was an error updating the customer!", error);
    });
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateUser((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleEditClick = (field) => {
    setEditMode((prevState) => ({
      ...prevState,
      [field]: true
    }));
  };

  const handleCancelClick = (field) => {
    setEditMode((prevState) => ({
      ...prevState,
      [field]: false
    }));
  };

  return (
    <div className="container">
      {userInfo && (
        <div className="row d-flex">
          <div className="col-6">
            <img
              src={getImageSrc()}
              alt="profilepic"
              style={{ width: '100%', height: '700px', objectFit: 'contain' }}
            />
          </div>
          <div className="personaldetail col-6">
                {Object.keys(editMode).map((field) => (
                  <div key={field}>
                    <h4>{field.charAt(0).toUpperCase() + field.slice(1)}:</h4>
                    {editMode[field] ? (
                      <div>
                        <input
                          className='form-control'
                          type="text"
                          name={field}
                          value={updateUser[field]}
                          onChange={handleChange}
                        />
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => handleCancelClick(field)}
                        >Cancel</button>
                      </div>
                    ) : (
                      <div>
                        <span>{updateUser[field]}</span>
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={() => handleEditClick(field)}
                        >Edit</button>
                      </div>
                    )}
                  </div>
                ))}
                <br />
                <div className="input-group input-group-sm mb-3" style={{ width: "300px" }}>
                  <input
                    type="file"
                    className="form-control"
                    name="image"
                    id="image"
                    onChange={handleImageChange}
                    style={{ width: 'auto' }}
                  />
                  {imagePreview && (
                    <img src={imagePreview} alt="Preview" style={{ width: "100%" }} />
                  )}
                </div>
                <br />
                <button
                  style={{ width: "200px" }}
                  type="button"
                  className="btn btn-success"
                  onClick={handleSave}
                >Save</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PersonalInfo;
