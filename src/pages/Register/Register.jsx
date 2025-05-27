import React, { useState } from "react";
import { Link } from "react-router-dom";

import bg1 from '../../assets/images/bg/bg-lines-one.png';
import logoDark from '../../assets/images/logo-dark.png';
import { FiHome } from "react-icons/fi";
import { SlSocialGoogle } from "react-icons/sl";

import { FaSquareFacebook } from 'react-icons/fa6';
import { useDispatch, useSelector } from "react-redux";

export default function Register() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        userType: 'doctor', // Default selected user type is 'doctor'
      });

      const { loading, error } = useSelector((state) => state.auth);
      const dispatch = useDispatch();

        // Handle form change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const { firstName,lastName, email, password, userType } = formData;

    // Dispatch the correct action based on the userType
    if (userType === 'doctor') {
      dispatch(doctorRegister({ name, email, password }));
    } else if (userType === 'employee') {
      dispatch(employeeRegister({ name, email, password }));
    } else if (userType === 'admin') {
      dispatch(adminRegister({ name, email, password }));
    }
  };

  // Clear error message
  const handleClearError = () => {
    dispatch(clearError());
  };

  return (<>
      <div className="back-to-home rounded d-none d-sm-block mt-1">
        <Link to="/" className="btn btn-icon btn-primary">
          <FiHome className="icons" />
        </Link>
      </div>

      <section
        className="bg-home d-flex bg-light align-items-center mt-2"
        style={{
        //   backgroundImage: `url(${bg1})`,
        //   backgroundPosition: 'center',
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8">
              {/* <img
                src={logoDark}
                height="22"
                className="mx-auto d-block"
                alt=""
              /> */}
              <div className="card login-page shadow mt-4 rounded border-0">
                <div className="card-body">
                  <h4 className="text-center">Sign Up</h4>
                  <form action="doctor-dashboard.html" className="login-form mt-4" onSubmit={handleRegister}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            First name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Last name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Your Email <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Password <span className="text-danger">*</span>
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                             name="password"
                            value={formData.password}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div>
          <label>User Type:</label>
          <select name="userType" value={formData.userType} onChange={handleChange}>
            <option value="doctor">Doctor</option>
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
          </select>
        </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <div className="form-check">
                            <input
                              className="form-check-input align-middle"
                              type="checkbox"
                              value=""
                              id="accept-tnc-check"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="accept-tnc-check"
                            >
                              I Accept <Link to="#" className="text-primary">Terms And Condition</Link>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="d-grid">
                          <button className="btn btn-primary">   {loading ? 'Registering...' : 'Register'}</button>
                        </div>
                      </div>

                      <div className="col-lg-12 mt-3 text-center">
                        <h6 className="text-muted">Or</h6>
                      </div>

                      <div className="col-6 mt-3">
                        <div className="d-grid">
                          <Link to="#" className="btn btn-soft-primary">
                            <FaSquareFacebook className="mb-0" /> Facebook
                          </Link>
                        </div>
                      </div>

                      <div className="col-6 mt-3">
                        <div className="d-grid">
                          <Link to="#" className="btn btn-soft-primary">
                            <SlSocialGoogle className="mb-0" /> Google
                          </Link>
                        </div>
                      </div>

                      <div className="mx-auto">
                        <p className="mb-0 mt-3">
                          <small className="text-dark me-2">Already have an account?</small>
                          <Link to="/login" className="text-dark fw-bold">Sign in</Link>
                        </p>
                      </div>
                    </div>
                  </form>
                  {error && (
        <div>
          <p style={{ color: 'red' }}>{error}</p>
          <button onClick={handleClearError}>Clear Error</button>
        </div>
      )}
                </div>
              </div>
            </div>
          </div>    
        </div>
      </section>
    </>
  );
}
