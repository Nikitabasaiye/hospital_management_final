import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { employeeLogin } from "../../redux/actions/authAction";
import "./Login.css";

const EmployeeLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated, userType } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(employeeLogin({ email, password }));
  };

  if (isAuthenticated && userType === "employee") {
    navigate("/employee-dashboard");
  }

  return (
    <form onSubmit={handleSubmit} className="login-form mt-4">
      <div className="mb-3">
        <label className="form-label">
          Employee Email <span className="text-danger">*</span>
        </label>

        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>
      {/* <div className="mb-3">
     <label className="form-label">Password <span className="text-danger">*</span></label>

      <input
        type="password"
         className="form-control"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      /> </div> */}
      <div className="mb-3">
        <div className="d-flex justify-content-between align-items-center">
          <label className="form-label mb-0">
            Password <span className="text-danger">*</span>
          </label>
          <button
            className="btn btn-link text-primary p-0 small"
            style={{ fontSize: "0.8rem", textDecoration: "none" }}
          >
            Forgot Password?
          </button>
        </div>
        <div className="position-relative">
          <input
            className="form-control py-2 px-3"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
          <span className="position-absolute end-0 top-50 translate-middle-y me-3">
            <i
              className="bi bi-eye-slash text-muted"
              style={{ cursor: "pointer" }}
            ></i>
          </span>
        </div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        {error && <div className="alert alert-danger mt-3">{error}</div>}
      </div>
    </form>
  );
};

export default EmployeeLogin;
