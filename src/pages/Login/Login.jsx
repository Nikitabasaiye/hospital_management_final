// import React from "react";
// import { Link } from "react-router-dom";

// // import bg1 from '../assets/images/bg/bg-lines-one.png';
// import bg1 from '../../assets/images/bg/bg-lines-one.png';
// import logoDark from '../../assets/images/logo-dark.png';

// import { FaSquareFacebook } from 'react-icons/fa6';
// import { FiHome } from "react-icons/fi";
// import { SlSocialGoogle } from "react-icons/sl";

// export default function Login() {
//   return (
//     <>
//       <div className="back-to-home rounded d-none d-sm-block">
//         <Link to="/" className="btn btn-icon btn-primary">
//           <FiHome className="icons" />
//         </Link>
//       </div>

//       <section
//         className="bg-home d-flex bg-light align-items-center"
//         style={{
//           backgroundImage: `url(${bg1})`,
//           backgroundPosition: 'center',
//         }}
//       >
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-5 col-md-8">
//               <img
//                 src={logoDark}
//                 height="22"
//                 className="mx-auto d-block"
//                 alt=""
//               />
//               <div className="card login-page shadow mt-4 rounded border-0">
//                 <div className="card-body">
//                   <h4 className="text-center">Sign In</h4>
//                   <form action="doctor-dashboard.html" className="login-form mt-4">
//                     <div className="row">
//                       <div className="col-lg-12">
//                         <div className="mb-3">
//                           <label className="form-label">
//                             Your Email <span className="text-danger">*</span>
//                           </label>
//                           <input
//                             type="email"
//                             className="form-control"
//                             placeholder="Email"
//                             name="email"
//                             required=""
//                           />
//                         </div>
//                       </div>

//                       <div className="col-lg-12">
//                         <div className="mb-3">
//                           <label className="form-label">
//                             Password <span className="text-danger">*</span>
//                           </label>
//                           <input
//                             type="password"
//                             className="form-control"
//                             placeholder="Password"
//                             required=""
//                           />
//                         </div>
//                       </div>

//                       <div className="col-lg-12">
//                         <div className="d-flex justify-content-between">
//                           <div className="mb-3">
//                             <div className="form-check">
//                               <input
//                                 className="form-check-input align-middle"
//                                 type="checkbox"
//                                 value=""
//                                 id="remember-check"
//                               />
//                               <label
//                                 className="form-check-label"
//                                 htmlFor="remember-check"
//                               >
//                                 Remember me
//                               </label>
//                             </div>
//                           </div>
//                           <Link to="/forgot-password" className="text-dark h6 mb-0">
//                             Forgot password?
//                           </Link>
//                         </div>
//                       </div>

//                       <div className="col-lg-12 mb-0">
//                         <div className="d-grid">
//                           <button className="btn btn-primary">Sign in</button>
//                         </div>
//                       </div>

//                       <div className="col-lg-12 mt-3 text-center">
//                         <h6 className="text-muted">Or</h6>
//                       </div>

//                       <div className="col-6 mt-3">
//                         <div className="d-grid">
//                           <Link to="#" className="btn btn-soft-primary">
//                             <FaSquareFacebook className="mb-0" /> Facebook
//                           </Link>
//                         </div>
//                       </div>

//                       <div className="col-6 mt-3">
//                         <div className="d-grid">
//                           <Link to="#" className="btn btn-soft-primary">
//                             <SlSocialGoogle className="mb-0" /> Google
//                           </Link>
//                         </div>
//                       </div>

//                       <div className="col-12 text-center">
//                         <p className="mb-0 mt-3">
//                           <small className="text-dark me-2">Don't have an account?</small>
//                           <Link to="/signup" className="text-dark fw-bold">
//                             Sign Up
//                           </Link>
//                         </p>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
// import React, { useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { loginUser } from '../../redux/slices/authSlice';

// import { Tabs, Tab, Box } from "@mui/material";
// import { FaSquareFacebook } from 'react-icons/fa6';
// import { FiHome } from "react-icons/fi";
// import { SlSocialGoogle } from "react-icons/sl";
// import bg1 from '../../assets/images/bg/bg-lines-one.png';
// import logoDark from '../../assets/images/logo-dark.png';
// import './Login.css';
// import { useNavigate ,Link} from "react-router-dom";

// export default function Login() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const { isAuthenticated, userType, error } = useSelector((state) => state.auth);
//   const [activeTab, setActiveTab] = useState(0); // Track active tab

//   const handleLogin   = async (e) => {
//     e.preventDefault();
//     dispatch(loginUser({ email, password }));
//   };
//   if (isAuthenticated && userType === 'doctor') {
//     navigate('/doctors-dashboard');
//   }

//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);
//   };

//   const renderLoginForm = () => {
//     // Conditionally render the login form based on the active tab
//     switch (activeTab) {
//       case 0:
//         return  <DoctorLoginForm
//         handleLogin ={handleLogin }
//         email={email}
//         setEmail={setEmail}
//         password={password}
//         setPassword={setPassword}
//         error={error}
//       />;
//       case 1:
//         return <EmployeeLoginForm />;
//       case 2:
//         return <AdminLoginForm />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       <div className="back-to-home rounded d-none d-sm-block">
//         <Link to="/" className="btn btn-icon btn-primary">
//           <FiHome className="icons" />
//         </Link>
//       </div>

//       <section
//         className="bg-home d-flex bg-light align-items-center"
//         style={{
//           backgroundImage: `url(${bg1})`,
//           backgroundPosition: 'center',
//         }}
//       >
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-5 col-md-8">
//               <img
//                 src={logoDark}
//                 height="22"
//                 className="mx-auto d-block"
//                 alt="ProClinic Logo"
//               />
//               <div className="card login-page shadow mt-4 rounded border-0">
//                 <div className="card-body">
//                   {/* Tabs for Doctors, Employees, Admin Login */}
//                   <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//                     <Tabs
//                       value={activeTab}
//                       onChange={handleTabChange}
//                       variant="fullWidth"
//                       textColor="primary"
//                       indicatorColor="primary"
//                       className="mb-4"
//                     >
//                       <Tab label="Doctors " />
//                       <Tab label="Employees " />
//                       <Tab label="Admin " />
//                     </Tabs>
//                   </Box>

//                   {/* Render the login form based on the active tab */}
//                   {renderLoginForm()}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// // Doctor Login Form
// const DoctorLoginForm = () => (
//   <form onSubmit={handleLogin }  className="login-form mt-4">
//     <div className="mb-3">
//       <label className="form-label">Doctor Email <span className="text-danger">*</span></label>
//       <input
//        type="email"
//        className="form-control"
//        placeholder="Email"
//        value={email}
//        onChange={(e) => setEmail(e.target.value)}
//        required
//       />
//     </div>
//     <div className="mb-3">
//       <label className="form-label">Password <span className="text-danger">*</span></label>
//       <input
//       type="password"
//       className="form-control"
//       placeholder="Password"
//       value={password}
//       onChange={(e) => setPassword(e.target.value)}
//       required
//       />
//     </div>
//     <div className="d-grid">
//       {/* <button className="btn btn-primary">Sign in</button> */}
//       <h4 className="text-center">Doctor Sign In</h4>
//                   {error && <div className="alert alert-danger">{error}</div>}
//     </div>
//   </form>
// );

// // Employee Login Form
// const EmployeeLoginForm = () => (
//   <form action="employee-dashboard.html" className="login-form mt-4">
//     <div className="mb-3">
//       <label className="form-label">Employee Email <span className="text-danger">*</span></label>
//       <input type="email" className="form-control" placeholder="Employee Email" required />
//     </div>
//     <div className="mb-3">
//       <label className="form-label">Password <span className="text-danger">*</span></label>
//       <input type="password" className="form-control" placeholder="Password" required />
//     </div>
//     <div className="d-grid">
//       <button className="btn btn-primary">Sign in</button>
//     </div>
//   </form>
// );

// // Admin Login Form
// const AdminLoginForm = () => (
//   <form action="admin-dashboard.html" className="login-form mt-4">
//     <div className="mb-3">
//       <label className="form-label">Admin Email <span className="text-danger">*</span></label>
//       <input type="email" className="form-control" placeholder="Admin Email" required />
//     </div>
//     <div className="mb-3">
//       <label className="form-label">Password <span className="text-danger">*</span></label>
//       <input type="password" className="form-control" placeholder="Password" required />
//     </div>
//     <div className="d-grid">
//       <button className="btn btn-primary">Sign in</button>
//     </div>
//   </form>
// );
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tabs, Tab, Box } from "@mui/material";
import { FaSquareFacebook } from "react-icons/fa6";
import { FiHome } from "react-icons/fi";
import { SlSocialGoogle } from "react-icons/sl";
import bg1 from "../../assets/images/bg/bg-lines-one.png";
import logoDark from "../../assets/images/logo-dark.png";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";
import { doctorLogin } from "../../redux/actions/authAction";
import DoctorLogin from "./DoctorLogin";
import EmployeeLogin from "./EmployeeLogin";
import AdminLogin from "./AdminLogin";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, error, isAuthenticated, userType } = useSelector(
    (state) => state.auth
  );

  const [activeTab, setActiveTab] = useState(0); // Track active tab

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(doctorLogin({ email, password }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const currentUserType =
      activeTab === 0 ? "doctor" : activeTab === 1 ? "employee" : "admin";
    dispatch(loginUser({ email, password, userType: currentUserType })); // Dispatch with userType
  };

  useEffect(() => {
    if (isAuthenticated) {
      if (userType === "null") {
        navigate("/");
      } else if (userType === "doctor") {
        navigate("/doctor-dashboard"); // Redirect Doctor
      } else if (userType === "employee") {
        navigate("/employee-dashboard"); // Redirect Employee
      } else if (userType === "admin") {
        navigate("/admin-dashboard"); // Redirect Admin
      }
    }
  }, [isAuthenticated, userType, navigate]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const renderLoginForm = () => {
    // Conditionally render the login form based on the active tab
    switch (activeTab) {
      case 0:
        return (
          <DoctorLogin
            handleLogin={handleLogin}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            error={error}
          />
        );
      case 1:
        return (
          <EmployeeLogin
            handleLogin={handleLogin}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            error={error}
          />
        );
      case 2:
        return (
          <AdminLogin
            handleLogin={handleLogin}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            error={error}
          />
        );

      default:
        return null;
    }
  };

  return (
    <>
      <div className="back-to-home rounded d-none d-sm-block">
        <Link to="/" className="btn btn-icon btn-primary">
          <FiHome className="icons" />
        </Link>
      </div>

      <section
        className="bg-home d-flex bg-light align-items-center"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8">
              <img
                src={logoDark}
                height="22"
                className="mx-auto d-block"
                alt="ProClinic Logo"
              />
              <div className="card login-page shadow mt-4 rounded border-0">
                <div className="card-body">
                  {/* Tabs for Doctors, Employees, Admin Login */}
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      value={activeTab}
                      onChange={handleTabChange}
                      variant="fullWidth"
                      textColor="primary"
                      indicatorColor="primary"
                      className="mb-4"
                    >
                      <Tab label="Doctors " />
                      <Tab label="Employees " />
                      <Tab label="Admin " />
                    </Tabs>
                  </Box>

                  {/* Render the login form based on the active tab */}
                  {renderLoginForm()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Doctor Login Form component
// const DoctorLoginForm = ({ handleLogin , email, setEmail, password, setPassword, error }) => (
//   <form onSubmit={handleLogin } className="login-form mt-4">
//     <div className="mb-3">
//       <label className="form-label">Doctor Email <span className="text-danger">*</span></label>
//       <input
//         type="email"
//         className="form-control"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//     </div>
//     <div className="mb-3">
//       <label className="form-label">Password <span className="text-danger">*</span></label>
//       <input
//         type="password"
//         className="form-control"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//     </div>

//     <div className="d-grid">
//       <button className="btn btn-primary">Sign in</button>
//       {error && <div className="alert alert-danger mt-2 text-center">{error}</div>}
//     </div>
//   </form>
// );

// Employee Login Form component
// const EmployeeLoginForm = ({ handleLogin, email, setEmail, password, setPassword, error }) => (
//   <form onSubmit={handleLogin} className="login-form mt-4">
//     <div className="mb-3">
//       <label className="form-label">Employee Email <span className="text-danger">*</span></label>
//       <input type="email"
//        value={email}
//        onChange={(e) => setEmail(e.target.value)}
//       className="form-control" placeholder="Employee Email" required />
//     </div>
//     <div className="mb-3">
//       <label className="form-label">Password <span className="text-danger">*</span></label>
//       <input type="password"
//        value={password}
//        onChange={(e) => setPassword(e.target.value)}
//       className="form-control" placeholder="Password" required />
//     </div>
//     <div className="d-grid">
//       <button className="btn btn-primary">Sign in</button>
//       {error && <div className="alert alert-danger mt-3">{error}</div>}
//     </div>
//   </form>
// );

// Admin Login Form component
// const AdminLoginForm = () => (
//   <form className="login-form mt-4">
//     <div className="mb-3">
//       <label className="form-label">Admin Email <span className="text-danger">*</span></label>
//       <input type="email" className="form-control" placeholder="Admin Email" required />
//     </div>
//     <div className="mb-3">
//       <label className="form-label">Password <span className="text-danger">*</span></label>
//       <input type="password" className="form-control" placeholder="Password" required />
//     </div>
//     <div className="d-grid">
//       <button className="btn btn-primary">Sign in</button>
//     </div>
//   </form>
// );
// const AdminLoginForm = ({ handleLogin, email, setEmail, password, setPassword, error }) => (
//   <form onSubmit={handleLogin} className="login-form mt-4">
//     <div className="mb-3">
//       <label className="form-label">Admin Email <span className="text-danger">*</span></label>
//       <input
//         type="email"
//         className="form-control"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//     </div>
//     <div className="mb-3">
//       <label className="form-label">Password <span className="text-danger">*</span></label>
//       <input
//         type="password"
//         className="form-control"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//     </div>
//     <div className="d-grid">
//       <button type="submit" className="btn btn-primary">Sign in</button>
//       {error && <div className="alert alert-danger mt-3">{error}</div>}
//     </div>
//   </form>
// );
