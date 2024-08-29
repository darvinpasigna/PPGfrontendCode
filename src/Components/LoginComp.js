import React from 'react';
import useCode from '../Code/Code';

function LoginComp({showLoginModal, showSignupModal, setShowSignupModal, setShowLoginModal,}) {
    const { 
        userLogin,
        signUp, 
        handleLogin, 
        handleSignup,
        errors,
        handleSignUpChange, 
        handleLoginChange, setGetUser,currentUser
        } = useCode();

    return (
        <>
            {/* Login Modal */}
            <div className="modal" id="login" style={{ display: showLoginModal ? 'block' : 'none' }}>
                <div className="modal-dialog modal-dialog-centered" style={{ width: "400px" }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                onClick={() => setShowLoginModal(false)}
                            ></button>
                        </div>
                        <form onSubmit={handleLogin}>
                            <fieldset>
                                <div className="form-floating">
                                    <input
                                        name='uname'
                                        id="uname"
                                        className="form-control"
                                        value={userLogin.uname}
                                        onChange={(e) => {handleLoginChange('uname', e.currentTarget.value); setGetUser(e.target.value)}}
                                        required
                                    />
                                    <label htmlFor="uname" style={{ fontStyle: "italic", fontFamily: "sans-serif", fontWeight: "bolder" }}>USERNAME:</label>
                                </div>
                                <br />
                                <div className="form-floating">
                                    <input
                                        name='upass'
                                        type="password"
                                        id="upass"
                                        className="form-control"
                                        value={userLogin.upass}
                                        onChange={(e) => handleLoginChange('upass', e.currentTarget.value)}
                                        required
                                    />
                                    <label
                                        style={{
                                            fontStyle: "italic",
                                            fontFamily: "sans-serif",
                                            fontWeight: "bolder"
                                        }}>PASSWORD:</label>
                                </div>
                                <br />
                                <button
                                    id='openlogin'
                                    type="submit"
                                    className="btn btn-primary form-control"
                                    onClick={currentUser}
                                >Login</button>
                                <br /> <br />
                                <p style={{ color: "red" }}>Forgot password?</p>
                                <br />
                                <p>Not a member?</p>
                                <button
                                    className='btn btn-success form-control'
                                    type='button'
                                    onClick={() => {
                                        setShowLoginModal(false);
                                        setShowSignupModal(true);
                                    }}
                                >Sign Up</button>
                                <br /><br />
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
            {/* End Login Modal */}

            {/* Sign up Modal */}
            <div className="modal" id="signup"
                style={{ display: showSignupModal ? 'block' : 'none' }}
            >
                <div className="modal-dialog modal-dialog-centered" style={{ width: "400px" }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5>SIGN UP</h5>
                            <button type="button"
                                className="btn-close" aria-label="Close"
                                onClick={() => setShowSignupModal(false)}
                            ></button>
                        </div>
                        <form onSubmit={handleSignup}>
                            <fieldset>

                                <div className='mb-2'>
                                    <div className="input-group input-group-sm">
                                        <span className="input-group-text">First Name</span>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name='firstname' 
                                            id="firstname" 
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
                                            name='lastName' 
                                            id='lastName' 
                                            value={signUp.lname}
                                            onChange={(e) => handleSignUpChange('lname', e.target.value)} />
                                    </div>{errors.lname && <span className='text-danger'>{errors.lname}</span>}
                                </div>

                                
                                <div className='mb-2'>
                                    <div className="input-group input-group-sm">
                                        <span className="input-group-text">+63</span>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder='92612345678'
                                            value={signUp.contact} 
                                            onChange={(e) => handleSignUpChange('contact', e.target.value)} />
                                    </div>{errors.contact && <span className='text-danger'>{errors.contact}</span>}
                                </div>

                                <div className='mb-2'>
                                    <div className="input-group input-group-sm">
                                        <span className="input-group-text">Email</span>
                                        <input 
                                            type="email" 
                                            className="form-control" 
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
                                            value={signUp.province} 
                                            onChange={(e) => handleSignUpChange('province', e.target.value)} />
                                    </div>{errors.province && <span className='text-danger'>{errors.province}</span>}
                                </div>

                                <div className='mb-2'>
                                    <div className="input-group input-group-sm">
                                        <span className="input-group-text">ZIPCODE</span>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            value={signUp.zipcode} 
                                            onChange={(e) => handleSignUpChange('zipcode', e.target.value)} />
                                    </div>{errors.zipcode && <span className='text-danger'>{errors.zipcode}</span>}
                                </div>

                                <div className='mb-2'>
                                    <div className="input-group input-group-sm">
                                        <span className="input-group-text">Create Password</span>
                                        <input
                                            className="form-control"
                                            type="password"
                                            value={signUp.password} 
                                            onChange={(e) => handleSignUpChange('password', e.target.value)}
                                        />
                                    </div>{errors.password && <span className='text-danger'>{errors.password}</span>}
                                </div>

                                <div className='mb-2'>
                                    <div className="input-group input-group-sm">
                                        <span className="input-group-text">Re-Enter Password</span>
                                        <input
                                            className="form-control"
                                            type="password"
                                            value={signUp.repass} 
                                            onChange={(e) => handleSignUpChange('repass', e.target.value)}
                                        /> 
                                    </div>{errors.repass && <span className='text-danger'>{errors.repass}</span>}
                                </div>
                                <br />
                                <button
                                    className="btn btn-success form-control"
                                    type="submit"
                                >SUBMIT</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
            {/* End Sign Up Modal */}
        </>
    );
}

export default LoginComp;
