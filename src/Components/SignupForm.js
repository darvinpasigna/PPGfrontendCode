import React from 'react'
import useCode from '../Code/Code';
import '../App.css';

const SignupForm = () => {
    const { 
        signUp, 
        handleSignup,
        errors,
        handleSignUpChange
        } = useCode();
  return (
    <>
    <div style={{paddingRight: "50px"}}>
    <form onSubmit={handleSignup}>
          <p className='promo-message' style={{color: "#870000"}}>
          We are giving a discount of up to 50% to new members.
          </p>
            <fieldset className='p-10'>
            <legend style={{textAlign: "center", fontFamily: 'fantasy'}}>Register Here. . .</legend>
              <div className='mb-2'>
                  <div className="input-group input-group-sm">
                      <span className="input-group-text">First Name</span>
                          <input 
                            type="text" 
                            className="form-control" 
                            name='fname' 
                            id="fname" 
                            value={signUp.fname} 
                            onChange={(e) => handleSignUpChange('fname', e.target.value)} />
                    </div> {errors.fname && <span className='text-danger'>{errors.fname}</span>}
              </div>

              <div className='mb-2'>
                  <div className="input-group input-group-sm">
                      <span className="input-group-text">Last Name</span>
                          <input 
                            type="text" 
                            className="form-control" 
                            name='lname' 
                            id='lname' 
                            value={signUp.lastname}
                            onChange={(e) => handleSignUpChange('lname', e.target.value)} />
                  </div>{errors.lname && <span className='text-danger'>{errors.lname}</span>}
              </div>

              <div className='mb-2'>
                  <div className="input-group input-group-sm">
                      <span className="input-group-text">Cellphone No. (+63)</span>
                          <input 
                            type="text" 
                            className="form-control" 
                            placeholder='92612345678'
                            name='contact' 
                            id='contact' 
                            value={signUp.lastname}
                            onChange={(e) => handleSignUpChange('contact', e.target.value)} />
                  </div>{errors.lname && <span className='text-danger'>{errors.lname}</span>}
              </div>

              <div className='mb-2'>
                  <div className="input-group input-group-sm">
                      <span className="input-group-text">Email</span>
                            <input 
                              type="email" 
                              className="form-control" 
                              name='email' 
                              id='email' 
                              value={signUp.email} 
                              onChange={(e) => handleSignUpChange('email', e.target.value)} />
                    </div>{errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>

                <div className='mb-2'>
                    <div className="input-group input-group-sm">
                          <span className="input-group-text">Address</span>
                            <input 
                              type="text" 
                              className="form-control" 
                              name='address' 
                              id='address' 
                              value={signUp.address} 
                              onChange={(e) => handleSignUpChange('address', e.target.value)} />
                      </div>{errors.address && <span className='text-danger'>{errors.address}</span>}
                </div>

                <div className='mb-2'>
                      <div className="input-group input-group-sm">
                          <span className="input-group-text">City</span>
                            <input 
                                type="text" 
                                className="form-control" 
                                name='city' 
                                id='city' 
                                value={signUp.city} 
                                onChange={(e) => handleSignUpChange('city', e.target.value)} />
                      </div>{errors.city && <span className='text-danger'>{errors.city}</span>}
                </div>

                <div className='mb-2'>
                      <div className="input-group input-group-sm">
                          <span className="input-group-text">Province</span>
                            <input 
                                type="text" 
                                className="form-control" 
                                name='province' 
                                id='province' 
                                value={signUp.province} 
                                onChange={(e) => handleSignUpChange('province', e.target.value)} />
                      </div>{errors.province && <span className='text-danger'>{errors.province}</span>}
                </div>

                <div className='mb-2'>
                      <div className="input-group input-group-sm">
                          <span className="input-group-text">Zipcode</span>
                            <input 
                                type="text" 
                                className="form-control" 
                                name='zipcode' 
                                id='zipcode' 
                                value={signUp.zipcode} 
                                onChange={(e) => handleSignUpChange('zipcode', e.target.value)} />
                      </div>{errors.province && <span className='text-danger'>{errors.province}</span>}
                </div>

                <div className='mb-2'>
                        <div className="input-group input-group-sm">
                            <span className="input-group-text">Create Password</span>
                              <input
                                  name='password'
                                  id='password'
                                  className="form-control"
                                  type="password"
                                  value={signUp.pass} 
                                  onChange={(e) => handleSignUpChange('password', e.target.value)}
                                  />
                        </div>{errors.pass && <span className='text-danger'>{errors.pass}</span>}
                </div>

                <div className='mb-2'>
                        <div className="input-group input-group-sm">
                            <span className="input-group-text">Re-Enter Password</span>
                                <input
                                  name='repass'
                                  id='repass'
                                  className="form-control"
                                  type="password"
                                  value={signUp.repass} 
                                  onChange={(e) => handleSignUpChange('repass', e.target.value)}
                                  /> 
                          </div>{errors.repass && <span className='text-danger'>{errors.repass}</span>}
                  </div>
                                <br />
                  <button
                    id='opensignup'
                    className="btn btn-success form-control"
                    type="submit"
                    >SUBMIT</button>
              </fieldset>
            </form>
    </div>
    </>
  )
}

export default SignupForm;