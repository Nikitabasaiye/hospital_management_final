// import React from "react";
// // import { useLocations } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// import "./App.css";

// import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
// // import Index from "./pages/index/Index";
// import DoctorsTeam from "./pages/doctor/DoctorsTeam";
// import DoctorDashboard from "./pages/dashboard/DoctorDashboard";
// import DoctorSchedule from "./pages/dashboard/DoctorSchedule";
// import Invoices from "./pages/dashboard/Invoices";
// import DoctorMessages from "./pages/dashboard/DoctorMessages";
// import DoctorProfileSetting from "./pages/dashboard/DoctorProfileSetting";
// import PatientList from "./pages/dashboard/PatientList";
// import DoctorAppointment from "./pages/dashboard/DoctorAppointment";
// import PatientReview from "./pages/dashboard/PatientReview";
// import DoctorChat from "./pages/dashboard/DoctorChat";
// import DoctorProfile from "./pages/dashboard/DoctorProfile";
// import PatientDashboard from "./pages/patient/PatientDashboard";
// import BookingAppointment from "./pages/patient/BookingAppointment";
// import PatientInvoice from "./pages/patient/PatientInvoice";
// import PatientAilments from "./pages/patient/PatientAilments";
// import PatientProfile from "./pages/patient/PatientProfile";
// import Login from "./pages/Login/Login";

// import ForgotPassword from "./pages/ForgetPassword";
// import Privacy from "./pages/Privacy";
// import Terms from "./pages/Terms";
// import Faqs from "./pages/Faqs";
// import Error from "./pages/Error";
// import Navbar from "./components/Navbar";
// import DoctorLogin from "./pages/Login/DoctorLogin";
// import EmployeeLogin from "./pages/Login/EmployeeLogin";
// import AdminLogin from "./pages/Login/AdminLogin";
// import Register from "./pages/Register/Register";
// import DiagnosisPatient from "./pages/patient/DiagnosisPatient";

// const App = () => {
//   const location = useLocation();
//   const hideNavbar = location.pathname === "/";

//   return (
//     <>
//       <BrowserRouter>
//         {!hideNavbar && (
//           <Navbar
//             navDark={true}
//             manuClass="navigation-menu nav-left"
//             containerClass="container"
//           />
//         )}
//         <Navbar
//           navDark={true}
//           manuClass="navigation-menu nav-left"
//           containerClass="container"
//         />
//         <Routes>
//           {/* <Route path="/" element={<Index />} /> */}
//           <Route path="/doctor-login" element={<DoctorLogin />} />
//           <Route path="/employee-login" element={<EmployeeLogin />} />
//           <Route path="/admin-login" element={<AdminLogin />} />
//           <Route path="/" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/doctor-team" element={<DoctorsTeam />} />
//           <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
//           <Route path="/doctor-messages" element={<DoctorMessages />} />
//           <Route path="/doctor-appointment" element={<DoctorAppointment />} />
//           <Route
//             path="/doctor-profile-setting"
//             element={<DoctorProfileSetting />}
//           />
//           <Route path="/doctor-profile" element={<DoctorProfile />} />
//           <Route path="/doctor-schedule" element={<DoctorSchedule />} />
//           <Route path="/invoices" element={<Invoices />} />
//           <Route path="/patient-list" element={<PatientList />} />
//           <Route path="/patient-invoice" element={<PatientInvoice />} />
//           <Route path="/patient-review" element={<PatientReview />} />
//           <Route path="/patient-ailments" element={<PatientAilments />} />
//           <Route path="/patient-diagnosis" element={<DiagnosisPatient />} />
//           <Route path="/patient-profile" element={<PatientProfile />} />
//           <Route path="/patient-dashboard" element={<PatientDashboard />} />
//           <Route path="/booking-appointment" element={<BookingAppointment />} />
//           <Route path="/doctor-chat" element={<DoctorChat />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />
//           <Route path="/privacy" element={<Privacy />} />
//           <Route path="/terms" element={<Terms />} />
//           <Route path="/faqs" element={<Faqs />} />
//           <Route path="/error" element={<Error />} />
//           <Route path="*" element={<Error />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";

// Import your pages
import Login from "./pages/Login/Login";
import DoctorLogin from "./pages/Login/DoctorLogin";
import EmployeeLogin from "./pages/Login/EmployeeLogin";
import AdminLogin from "./pages/Login/AdminLogin";
import Register from "./pages/Register/Register";
import DoctorsTeam from "./pages/doctor/DoctorsTeam";
// import DoctorDashboard from "./pages/dashboard/DoctorDashboard.jsx";
import DoctorDashboard from "./pages/dashboard/DoctorDashboard.jsx";
import DoctorSchedule from "./pages/dashboard/DoctorSchedule";
import Invoices from "./pages/dashboard/Invoices";
import DoctorMessages from "./pages/dashboard/DoctorMessages";
import DoctorProfileSetting from "./pages/dashboard/DoctorProfileSetting";
import PatientList from "./pages/dashboard/PatientList";
import DoctorAppointment from "./pages/dashboard/DoctorAppointment";
import PatientReview from "./pages/dashboard/PatientReview";
import DoctorChat from "./pages/dashboard/DoctorChat";
import DoctorProfile from "./pages/dashboard/DoctorProfile";
import PatientDashboard from "./pages/patient/PatientDashboard";
import BookingAppointment from "./pages/patient/BookingAppointment";
import PatientInvoice from "./pages/patient/PatientInvoice";
import PatientAilments from "./pages/patient/PatientAilments";
import PatientProfile from "./pages/patient/PatientProfile";
import ForgotPassword from "./pages/ForgetPassword";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Faqs from "./pages/Faqs";
import Error from "./pages/Error";
import DiagnosisPatient from "./pages/patient/DiagnosisPatient";
import ProtectedRoute from "./components/ProtectedRoute";
import DoctorTreatPatient from "./pages/dashboard/DoctorTreatPatient";

// // Admin Components
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminManageUser from "./pages/admin/AdminManageUser";
import AdminViewReports from "./pages/admin/AdminViewReports";
import AdminManageSchedule from "./pages/admin/AdminManageSchedule";
import DrTimeTable from "./components/drTimeTable";
// import AdminUserManagement from "./AdminUserManagement";
// import AdminSettings from "./AdminSettings";
// import AdminReports from "./AdminReports";
// import AdminAppointments from "./AdminAppointments";
// import AdminNotifications from "./AdminNotifications";

// // Employee Components
import EmployeeDashboard from "./pages/employee/EmployeeDashboard";
import EmployeeTasks from "./pages/employee/EmployeeTasks";
import EmployeeSchedule from "./pages/employee/EmployeeSchedule";
import EmployeeSubmitReports from "./pages/employee/EmployeeSubmitReports";
import EmployeeProfileSettings from "./pages/employee/EmployeeProfileSettings";
// import EmployeeProfile from "./EmployeeProfile";
// import EmployeeNotifications from "./EmployeeNotifications";

// Medicine Components
import MedicinePredictions from "./pages/Medicines/MedicinePredictions";
import AddMedicines from "./pages/Medicines/AddMedicines";

const App = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/";
  // location.pathname === "/doctor-login" ||
  // location.pathname === "/employee-login" ||
  // location.pathname === "/admin-login";

  return (
    <>
      {!hideNavbar && (
        <Navbar
          navDark={true}
          manuClass="navigation-menu nav-left"
          containerClass="container"
        />
      )}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        {/* <Route path="/doctor-login" element={<DoctorLogin />} /> */}
        {/* <Route path="/employee-login" element={<EmployeeLogin />} /> */}
        {/* <Route path="/admin-login" element={<AdminLogin />} /> */}
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/error" element={<Error />} />
        {/* <Route path="/register" element={<Register />} />
        <Route path="/doctor-team" element={<DoctorsTeam />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/doctor-messages" element={<DoctorMessages />} />
        <Route path="/doctor-appointment" element={<DoctorAppointment />} />
        <Route
          path="/doctor-profile-setting"
          element={<DoctorProfileSetting />}
        />
        <Route path="/doctor-profile" element={<DoctorProfile />} />
        <Route path="/doctor-schedule" element={<DoctorSchedule />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/patient-list" element={<PatientList />} />
        <Route path="/patient-invoice" element={<PatientInvoice />} />
        <Route path="/patient-review" element={<PatientReview />} />
        <Route path="/patient-ailments" element={<PatientAilments />} />
        <Route path="/patient-diagnosis" element={<DiagnosisPatient />} />
        <Route path="/patient-profile" element={<PatientProfile />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/booking-appointment" element={<BookingAppointment />} />
        <Route path="/doctor-chat" element={<DoctorChat />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> 
        */}
        {/* Protected Routes */}
        <Route
          path="/forgot-password"
          element={<ProtectedRoute element={<ForgotPassword />} />}
        />
        <Route
          path="/doctor-team"
          element={<ProtectedRoute element={<DoctorsTeam />} />}
        />
        <Route
          path="/doctor-dashboard"
          element={<ProtectedRoute element={<DoctorDashboard />} />}
        />
        <Route
          path="/doctor-messages"
          element={<ProtectedRoute element={<DoctorMessages />} />}
        />
        <Route
          path="/doctor-appointment"
          element={<ProtectedRoute element={<DoctorAppointment />} />}
        />
        {/* Subroute for treating a specific patient */}
        <Route
          path="treat/:patientName"
          element={<ProtectedRoute element={<DoctorTreatPatient />} />}
        />
        <Route
          path="/doctor-profile-setting"
          element={<ProtectedRoute element={<DoctorProfileSetting />} />}
        />
        <Route
          path="/doctor-profile"
          element={<ProtectedRoute element={<DoctorProfile />} />}
        />
        <Route
          path="/doctor-schedule"
          element={<ProtectedRoute element={<DoctorSchedule />} />}
        />
        <Route
          path="/invoices"
          element={<ProtectedRoute element={<Invoices />} />}
        />
        <Route
          path="/patient-list"
          element={<ProtectedRoute element={<PatientList />} />}
        />
        <Route
          path="/patient-invoice"
          element={<ProtectedRoute element={<PatientInvoice />} />}
        />
        <Route
          path="/patient-review"
          element={<ProtectedRoute element={<PatientReview />} />}
        />
        <Route
          path="/patient-ailments"
          element={<ProtectedRoute element={<PatientAilments />} />}
        />
        <Route
          path="/patient-diagnosis"
          element={<ProtectedRoute element={<DiagnosisPatient />} />}
        />
        <Route
          path="/patient-profile"
          element={<ProtectedRoute element={<PatientProfile />} />}
        />
        <Route
          path="/patient-dashboard"
          element={<ProtectedRoute element={<PatientDashboard />} />}
        />
        <Route
          path="/booking-appointment"
          element={<ProtectedRoute element={<BookingAppointment />} />}
        />
        <Route
          path="/doctor-chat"
          element={<ProtectedRoute element={<DoctorChat />} />}
        />
        {/* Admin Routes */}
        <Route
          path="/admin-dashboard"
          element={<ProtectedRoute element={<AdminDashboard />} />}
        />
        <Route
          path="/admin-users"
          element={<ProtectedRoute element={<AdminManageUser />} />}
        />{" "}
        <Route
          path="/manage-doctors"
          element={<ProtectedRoute element={<AdminManageUser />} />}
        />
        <Route
          path="/manage-employees"
          element={<ProtectedRoute element={<AdminManageUser />} />}
        />
        <Route
          path="/admin-reports"
          element={<ProtectedRoute element={<AdminViewReports />} />}
        />
        <Route
          path="/manage-schedule"
          element={<ProtectedRoute element={<AdminManageSchedule />} />}
        />
        <Route
          path="/admin-settings"
          // element={<ProtectedRoute element={<AdminSettings />} />}
        />
        <Route
          path="/admin-appointments"
          // element={<ProtectedRoute element={<AdminAppointments />} />}
        />
        <Route
          path="/admin-notifications"
          // element={<ProtectedRoute element={<AdminNotifications />} />}
        />
        {/* Employee Routes */}
        <Route
          path="/employee-dashboard"
          element={<ProtectedRoute element={<EmployeeDashboard />} />}
        />
        <Route
          path="/employee-schedule"
          element={<ProtectedRoute element={<EmployeeSchedule />} />}
        />
        <Route
          path="/employee-view-tasks"
          element={<ProtectedRoute element={<EmployeeTasks />} />}
        />
        <Route
          path="/employee-submit-reports"
          element={<ProtectedRoute element={<EmployeeSubmitReports />} />}
        />
        <Route
          path="/employee-profile-settings"
          element={<ProtectedRoute element={<EmployeeProfileSettings />} />}
        />
        <Route
          path="/employee-notifications"
          // element={<ProtectedRoute element={<EmployeeNotifications />} />}
        />
        <Route
          path="/tt"
          element={<ProtectedRoute element={<DrTimeTable />} />}
        />
        {/* Medicine Routes */}
        <Route
          path="/medicine-predictions"
          element={<ProtectedRoute element={<MedicinePredictions />} />}
        />
        <Route
          path="/add-medicine"
          element={<ProtectedRoute element={<AddMedicines />} />}
        />
        {/* Catch-all Route */}
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
