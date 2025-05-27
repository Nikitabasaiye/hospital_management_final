// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ element }) => {
//   // Access authentication state from Redux
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   // Conditionally render the protected component or redirect
//   useEffect(() => {});
//   return isAuthenticated ? element : <Navigate to="/" />;
// };

// export default ProtectedRoute;

// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const ProtectedRoute = ({ element }) => {
//   const navigate = useNavigate();
//   // Access authentication state from Redux
//   const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);
//   const [isAuthenticatedState, setIsAuthenticatedState] =
//     useState(isAuthenticated);
//   // Perform side effects if needed
//   useEffect(() => {
//     if (!isAuthenticated) {
//       console.log("User is not authenticated, redirecting to login page.");
//     }
//   }, [isAuthenticatedState]); // Dependency array ensures this runs when `isAuthenticated` changes

//   // Conditionally render the protected component or redirect
//   return isAuthenticatedState ? element : navigate("/");
// };

// export default ProtectedRoute;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
// import { logout } from "./path/to/authActions"; // Import your logout action
// import logout from "../redux/actions/authAction";
import { logout } from "../redux/reducers/authReducers";

const ProtectedRoute = ({ element }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);

  // Listen for `localStorage` changes to handle logout in other tabs
  useEffect(() => {
    const syncLogout = (event) => {
      if (event.key === "logout") {
        dispatch(logout()); // Dispatch the logout action
      }
    };

    window.addEventListener("storage", syncLogout);

    return () => {
      window.removeEventListener("storage", syncLogout);
    };
  }, [dispatch]);

  useEffect(() => {
    if (!isAuthenticated) {
      console.log("User is not authenticated, redirecting to login page.");
    }
  }, [isAuthenticated]);

  return isAuthenticated ? element : <Navigate to="/" replace />;
};

export default ProtectedRoute;
