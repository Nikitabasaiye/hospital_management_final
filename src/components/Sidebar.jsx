import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import bg1 from "../assets/media/profile-bg.jpg";
import dr1 from "../assets/images/doctors/01.jpg";

import {
  RiAirplayLine,
  RiCalendarCheckLine,
  RiTimerLine,
  RiPagesLine,
  RiMailUnreadLine,
  RiUser2Line,
  RiUserSettingsLine,
  RiEmpathizeLine,
  RiChat1Line,
  RiChatVoiceLine,
  RiLoginCircleLine,
  RiDeviceRecoverLine,
  RiFileChartLine,
  RiTeamLine,
  RiStethoscopeLine,
  RiCalendarLine,
  // RiStethoscopeLine,
  // RiTeamLine
} from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux"; // For getting data from redux toolkit
import { logout } from "../redux/reducers/authReducers";
import { CgProfile } from "react-icons/cg";
import { toast } from "react-toastify";
import adminBG1 from "../assets/images/bg/adminBG1.jpeg";
import adminProfile from "../assets/images/bg/adminProfile.jpg";
import {
  RiDashboardLine,
  RiTaskLine,
  RiFileEditLine,
  RiCalendarEventLine,
  RiSettingsLine,
  RiQuestionLine,
} from "react-icons/ri";

// export default function Sidebar({ colClass }) {
//   let location = useLocation();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // const doctor = useSelector((state) => state.auth.user.data); // userType data
//   const userData = useSelector((state) => state.auth);
//   console.log(userData);
//   const doctor = useSelector((state) => state.auth.user.data);

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/");
//     toast.success("Logged out successfully!!!");

//     localStorage.removeItem("token");
//   };
//   return (
//     <>
//       <div className={colClass}>
//         <div className="rounded shadow overflow-hidden sticky-bar">
//           <div className="card border-0">
//             <img src={bg1} className="img-fluid" alt="" />
//             <img src="" className="img-fluid" alt="" />
//           </div>
//           <div className="text-center avatar-profile margin-nagative mt-n5 position-relative pb-4 border-bottom">
//             {doctor?.img ? (
//               <img
//                 src={doctor.img}
//                 className="rounded-circle shadow-md avatar avatar-md-md"
//                 alt=""
//               />
//             ) : (
//               <img
//                 src={dr1}
//                 className="rounded-circle shadow-md avatar avatar-md-md"
//                 alt=""
//               />
//             )}
//             <h5 className="mt-3 mb-1">
//               {doctor.firstName + " " + doctor.lastName}
//             </h5>
//             <p className="text-muted mb-0"> {doctor.specialty} </p>
//           </div>

export default function Sidebar({ colClass }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth);
  const user = userData?.user?.data; // Fetch user details dynamically
  const userType = userData?.user?.data?.role; // Assumes you store the user type or role

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    toast.success("Logged out successfully!!!");
    localStorage.removeItem("token");
  };

  // return (
  //   <>
  //     <div className={colClass}>
  //       <div className="rounded shadow overflow-hidden sticky-bar">
  //         <div className="card border-0">
  //           <img src={bg1} className="img-fluid" alt="Background" />
  //         </div>
  //         <div className="text-center avatar-profile margin-nagative mt-n5 position-relative pb-4 border-bottom">
  //           {user?.img ? (
  //             <img
  //               src={user.img}
  //               className="rounded-circle shadow-md avatar avatar-md-md"
  //               alt="User Avatar"
  //             />
  //           ) : (
  //             <img
  //               src={dr1}
  //               className="rounded-circle shadow-md avatar avatar-md-md"
  //               alt="Fallback Avatar"
  //             />
  //           )}
  //           <h5 className="mt-3 mb-1">
  //             {userType === "doctor" ? (
  //               <>
  //                 Dr. {user?.firstName || "First Name"}{" "}
  //                 {user?.lastName || "Last Name"}
  //               </>
  //             ) : (
  //               <>
  //                 {user?.firstName || "First Name"}{" "}
  //                 {user?.lastName || "Last Name"}
  //               </>
  //             )}
  //           </h5>
  //           <p className="text-muted mb-0">
  //             {userType === "doctor"
  //               ? `${userData.user.data.specialty}`
  //               : userType?.toUpperCase()}
  //           </p>
  //         </div>
  //         <ul className="list-unstyled sidebar-nav mb-0">
  //           <li
  //             className={`${
  //               location.pathname === "/doctor-dashboard" ? "active" : ""
  //             } navbar-item mb-2`}
  //           >
  //             <Link to="/doctor-dashboard" className="navbar-link">
  //               <RiAirplayLine className="align-middle navbar-icon" /> Dashboard
  //             </Link>
  //           </li>
  //           {/* <li
  //             className={`${
  //               location.pathname === "/doctor-profile" ? "active" : ""
  //             } navbar-item mb-2`}
  //           >
  //             <Link to="/doctor-profile" className="navbar-link">
  //               <RiUser2Line className="align-middle navbar-icon" /> Profile
  //             </Link>
  //           </li> */}
  //           <li
  //             className={`${
  //               location.pathname === "/doctor-appointment" ? "active" : ""
  //             } navbar-item mb-2`}
  //           >
  //             <Link to="/doctor-appointment" className="navbar-link">
  //               <RiCalendarCheckLine className="align-middle navbar-icon" />
  //               Appointment
  //             </Link>
  //           </li>
  //           <li
  //             className={`${
  //               location.pathname === "/doctor-schedule" ? "active" : ""
  //             } navbar-item mb-2`}
  //           >
  //             <Link to="/doctor-schedule" className="navbar-link">
  //               <RiTimerLine className="align-middle navbar-icon" /> Schedule
  //               Timing
  //             </Link>
  //           </li>
  //           {/* <li
  //             className={`${
  //               location.pathname === "/invoices" ? "active" : ""
  //             } navbar-item mb-2`}
  //           >
  //             <Link to="/invoices" className="navbar-link">
  //               <RiPagesLine className="align-middle navbar-icon" /> Invoices
  //             </Link>
  //           </li> */}
  //           {/* <li
  //             className={`${
  //               location.pathname === "/doctor-messages" ? "active" : ""
  //             } navbar-item mb-2`}
  //           >
  //             <Link to="/doctor-messages" className="navbar-link">
  //               <RiMailUnreadLine className="align-middle navbar-icon" />
  //               Messages
  //             </Link>
  //           </li> */}
  //           <li
  //             className={`${
  //               location.pathname === "/patient-list" ? "active" : ""
  //             } navbar-item mb-2`}
  //           >
  //             <Link to="/patient-list" className="navbar-link">
  //               <RiEmpathizeLine className="align-middle navbar-icon" />
  //               Patients
  //             </Link>
  //           </li>
  //           {/* <li
  //             className={`${
  //               location.pathname === "/patient-review" ? "active" : ""
  //             } navbar-item mb-2`}
  //           >
  //           <Link to="/patient-review" className="navbar-link">
  //               <RiChat1Line className="align-middle navbar-icon" /> Patients
  //               Review
  //             </Link>
  //           </li> */}
  //           <li
  //             className={`${
  //               location.pathname === "/doctor-chat" ? "active" : ""
  //             } navbar-item mb-2`}
  //           >
  //             <Link to="/doctor-chat" className="navbar-link">
  //               <RiChatVoiceLine className="align-middle navbar-icon" /> Chat
  //             </Link>
  //           </li>
  //           <li
  //             className={`${
  //               location.pathname === "/doctor-profile-setting" ? "active" : ""
  //             } navbar-item mb-2`}
  //           >
  //             <Link to="/doctor-profile-setting" className="navbar-link">
  //               <RiUserSettingsLine className="align-middle navbar-icon" />
  //               Profile Settings
  //             </Link>
  //           </li>
  //           <li className="navbar-item">
  //             <Link to="/forgot-password" className="navbar-link">
  //               <RiDeviceRecoverLine className="align-middle navbar-icon" />
  //               Forgot Password
  //             </Link>
  //           </li>
  //           <li
  //             className={`${
  //               location.pathname === "/login" ? "active" : ""
  //             } navbar-item mb-2`}
  //           >
  //             <Link onClick={handleLogout} className="navbar-link">
  //               <RiLoginCircleLine className="align-middle navbar-icon" />
  //               Logout
  //             </Link>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   </>
  // );

  return (
    <>
      <div className={colClass}>
        <div className="rounded shadow overflow-hidden sticky-bar">
          <div className="card border-0">
            <img
              src={userType === "admin" ? adminBG1 : bg1}
              className="img-fluid"
              alt="Background"
            />
          </div>
          <div className="text-center avatar-profile margin-nagative mt-n5 position-relative pb-4 border-bottom">
            {user?.img ? (
              <img
                src={
                  userType === "admin"
                    ? adminProfile
                    : userType === "doctor" && bg1
                }
                className="rounded-circle shadow-md avatar avatar-md-md"
                alt="User Avatar"
              />
            ) : (
              <img
                src={
                  userType === "admin"
                    ? adminProfile
                    : userType === "doctor" && dr1
                }
                className="rounded-circle shadow-md avatar avatar-md-md"
                alt="Fallback Avatar"
              />
            )}
            <h5 className="mt-3 mb-1">
              {userType === "doctor" ? (
                <>
                  Dr. {user?.firstName || "First Name"}{" "}
                  {user?.lastName || "Last Name"}
                </>
              ) : (
                <>
                  {user?.firstName || "First Name"}{" "}
                  {user?.lastName || "Last Name"}
                </>
              )}
            </h5>
            <p className="text-muted mb-0">
              {userType === "doctor"
                ? `${userData.user.data.specialty}`
                : userType?.toUpperCase()}
            </p>
          </div>
          <ul className="list-unstyled sidebar-nav mb-0">
            {/* Routes for all users */}
            {/* <li
              className={`${
                location.pathname === "/dashboard" ? "active" : ""
              } navbar-item mb-2`}
            >
              <Link to="/dashboard" className="navbar-link">
                <RiAirplayLine className="align-middle navbar-icon" /> Dashboard
              </Link>
            </li> */}
            {/* Routes for doctors */}
            {userType === "doctor" && (
              <>
                <li
                  className={`${
                    location.pathname === "/doctor-dashboard" ? "active" : ""
                  } navbar-item mb-2`}
                >
                  <Link to="/doctor-dashboard" className="navbar-link">
                    <RiAirplayLine className="align-middle navbar-icon" />{" "}
                    Dashboard
                  </Link>
                </li>
                <li
                  className={`${
                    location.pathname === "/doctor-appointment" ? "active" : ""
                  } navbar-item mb-2`}
                >
                  <Link to="/doctor-appointment" className="navbar-link">
                    <RiCalendarCheckLine className="align-middle navbar-icon" />
                    Appointment
                  </Link>
                </li>
                <li
                  className={`${
                    location.pathname === "/doctor-schedule" ? "active" : ""
                  } navbar-item mb-2`}
                >
                  <Link to="/doctor-schedule" className="navbar-link">
                    <RiTimerLine className="align-middle navbar-icon" />{" "}
                    Schedule Timing
                  </Link>
                </li>
                <li
                  className={`${
                    location.pathname === "/patient-list" ? "active" : ""
                  } navbar-item mb-2`}
                >
                  <Link to="/patient-list" className="navbar-link">
                    <RiEmpathizeLine className="align-middle navbar-icon" />
                    Patients
                  </Link>
                </li>
                <li
                  className={`${
                    location.pathname === "/doctor-chat" ? "active" : ""
                  } navbar-item mb-2`}
                >
                  <Link to="/doctor-chat" className="navbar-link">
                    <RiChatVoiceLine className="align-middle navbar-icon" />{" "}
                    Chat
                  </Link>
                </li>
              </>
            )}
            {/* Routes for admins */}
            {userType === "admin" && (
              <>
                <li
                  className={`${
                    location.pathname === "/admin-dashboard" ? "active" : ""
                  } navbar-item mb-2`}
                >
                  <Link to="/admin-dashboard" className="navbar-link">
                    <RiUser2Line className="align-middle navbar-icon" /> Admin
                    Dashboard
                  </Link>
                </li>
                <li
                  className={`${
                    location.pathname === "/admin-users" ? "active" : ""
                  } navbar-item mb-2`}
                >
                  <Link to="/admin-users" className="navbar-link">
                    <RiUser2Line className="align-middle navbar-icon" /> Manage
                    Users
                  </Link>
                </li>

                <li
                  className={`${
                    location.pathname === "/manage-doctors" ? "active" : ""
                  } navbar-item mb-2`}
                >
                  <Link to="/manage-doctors" className="navbar-link">
                    <RiStethoscopeLine className="align-middle navbar-icon" />{" "}
                    Manage Doctors
                  </Link>
                </li>

                <li
                  className={`${
                    location.pathname === "/manage-employees" ? "active" : ""
                  } navbar-item mb-2`}
                >
                  <Link to="/manage-employees" className="navbar-link">
                    <RiTeamLine className="align-middle navbar-icon" /> Manage
                    Employees
                  </Link>
                </li>
                <li
                  className={`${
                    location.pathname === "/admin-reports" ? "active" : ""
                  } navbar-item mb-2`}
                >
                  <Link to="/admin-reports" className="navbar-link">
                    <RiFileChartLine className="align-middle navbar-icon" />{" "}
                    View Reports
                  </Link>
                </li>
                <li
                  className={`${
                    location.pathname === "/manage-schedule" ? "active" : ""
                  } navbar-item mb-2`}
                >
                  <Link to="/manage-schedule" className="navbar-link">
                    <RiCalendarLine className="align-middle navbar-icon" />{" "}
                    Manage Schedule
                  </Link>
                </li>
              </>
            )}
            {/* Routes for employees */}
            {console.log(userType)}
            {userType === "staff" && (
              <>
                <li
                  className={`${
                    location.pathname === "/employee-dashboard" ? "active" : ""
                  } navbar-item mb-2`}
                >
                  <Link to="/employee-dashboard" className="navbar-link">
                    <RiDashboardLine className="align-middle navbar-icon" />{" "}
                    Employee Dashboard
                  </Link>
                </li>
                <li
                  className={`${
                    location.pathname === "/employee-view-tasks" ? "active" : ""
                  } navbar-item mb-2`}
                >
                  <Link to="/employee-view-tasks" className="navbar-link">
                    <RiTaskLine className="align-middle navbar-icon" /> View
                    Tasks
                  </Link>
                </li>
                <li
                  className={`${
                    location.pathname === "/employee-submit-reports"
                      ? "active"
                      : ""
                  } navbar-item mb-2`}
                >
                  <Link to="/employee-submit-reports" className="navbar-link">
                    <RiFileEditLine className="align-middle navbar-icon" />{" "}
                    Submit Reports
                  </Link>
                </li>
                <li
                  className={`${
                    location.pathname === "/employee-schedule" ? "active" : ""
                  } navbar-item mb-2`}
                >
                  <Link to="/employee-schedule" className="navbar-link">
                    <RiCalendarEventLine className="align-middle navbar-icon" />{" "}
                    View Schedule
                  </Link>
                </li>
                <li
                  className={`${
                    location.pathname === "/employee-profile-settings"
                      ? "active"
                      : ""
                  } navbar-item mb-2`}
                >
                  <Link to="/employee-profile-settings" className="navbar-link">
                    <RiSettingsLine className="align-middle navbar-icon" />{" "}
                    Profile Settings
                  </Link>
                </li>
                <li
                  className={`${
                    location.pathname === "/help-support" ? "active" : ""
                  } navbar-item mb-2`}
                >
                  <Link to="/help-support" className="navbar-link">
                    <RiQuestionLine className="align-middle navbar-icon" /> Help
                    & Support
                  </Link>
                </li>
              </>
            )}
            {/* Common route: Logout */}
            <li
              className={`${
                location.pathname === "/login" ? "active" : ""
              } navbar-item mb-2`}
            >
              <Link onClick={handleLogout} className="navbar-link">
                <RiLoginCircleLine className="align-middle navbar-icon" />{" "}
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
