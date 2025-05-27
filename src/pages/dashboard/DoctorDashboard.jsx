// // import React from "react";
// import { Link } from "react-router-dom";

// import Sidebar from "../../components/Sidebar";
// import Charts from "../../components/dashboard/chart.jsx";
// // import ReviewOne from "../../components/review/reviewOne";
// import AdminFooter from "../../components/dashboard/AdminFooter";
// import ScrollTop from "../../components/ScrollTop";
// import { useSelector } from "react-redux"; // For fetchind data from store of doctor

// import {
//   latestAppointment,
//   upcomingAppointment,
//   // partners,
//   adminFeature,
// } from "../../data/data"; // Dummy data

// import { FiCalendar, FiArrowRight } from "react-icons/fi";
// import { RiCalendar2Line } from "react-icons/ri";

// export default function DoctorDashboard() {
//   // Here need to create the useEffect hook for real-time data fetching
//   const doctor = useSelector((state) => state.auth);
//   console.log({ "doctors data from redux store": doctor });
//   return (
//     <>
//       <section className="bg-dashboard">
//         <div className="container-fluid">
//           <div className="row">
//             <Sidebar colClass="col-xl-3 col-lg-4 col-md-5 col-12" />
//             <div className="col-xl-9 col-lg-8 col-md-7 mt-4 mt-sm-0">
//               <h5 className="mb-0"> Dashboard </h5> <Charts />
//               <div className="row">
//                 <div className="col-xl-6 col-lg-6 mt-4">
//                   <div className="card border-0 shadow rounded">
//                     <div className="d-flex justify-content-between p-4 border-bottom">
//                       <h6 className="mb-0 d-flex align-items-center">
//                         <FiCalendar className="text-primary me-2 h5 mb-0" />
//                         Latest Appointment
//                       </h6>
//                       <h6 className="text-muted mb-0"> 55 Patients </h6>
//                     </div>
//                     <ul className="list-unstyled mb-0 p-4 pt-0">
//                       {latestAppointment.map((item, index) => {
//                         return (
//                           <li className="pt-4 ms-0" key={index}>
//                             <Link to="#">
//                               <div className="d-flex align-items-center justify-content-between">
//                                 <div className="d-inline-flex">
//                                   <img
//                                     src={item.image}
//                                     className="avatar avatar-md-sm rounded-circle border shadow"
//                                     alt=""
//                                   />
//                                   <div className="ms-3">
//                                     <h6 className="text-dark mb-0 d-block">
//                                       {item.name}
//                                     </h6>
//                                     <small className="text-muted">
//                                       {item.date}
//                                     </small>
//                                   </div>
//                                 </div>
//                                 <FiArrowRight className="h5 text-dark" />
//                               </div>
//                             </Link>
//                           </li>
//                         );
//                       })}
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="col-xl-6 col-lg-6 mt-4">
//                   <div className="card border-0 shadow rounded">
//                     <div className="d-flex justify-content-between p-4 border-bottom">
//                       <h6 className="mb-0">
//                         <RiCalendar2Line className="text-primary me-1 h5 mb-0" />
//                         Upcoming Appointment
//                       </h6>
//                       <h6 className="text-muted mb-0"> 55 Patients </h6>
//                     </div>
//                     <ul className="list-unstyled mb-0 p-4 pt-0">
//                       {upcomingAppointment.map((item, index) => {
//                         return (
//                           <li className="mt-4 ms-0" key={index}>
//                             <Link to="#">
//                               <div className="d-flex align-items-center justify-content-between">
//                                 <div className="d-inline-flex">
//                                   <img
//                                     src={item.image}
//                                     className="avatar avatar-md-sm rounded-circle border shadow"
//                                     alt=""
//                                   />
//                                   <div className="ms-3">
//                                     <h6 className="text-dark mb-0 d-block">
//                                       {item.name}
//                                     </h6>
//                                     <small className="text-muted">
//                                       {item.date}
//                                     </small>
//                                   </div>
//                                 </div>
//                                 <FiArrowRight className="h5 text-dark" />
//                               </div>
//                             </Link>
//                           </li>
//                         );
//                       })}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//               <div className="row">
//                 {adminFeature.map((item, index) => {
//                   let Icon = item.icon;
//                   return (
//                     <div className="col-xl-3 col-md-6 mt-4" key={index}>
//                       <div className="card features feature-primary text-center border-0 p-4 rounded shadow">
//                         <div className="icon text-center rounded-lg mx-auto">
//                           <Icon className="align-middle h3 mb-0" />
//                         </div>
//                         <div className="card-body p-0 mt-3">
//                           <Link to="#" className="title text-dark h5">
//                             {item.title}
//                           </Link>
//                           <p className="text-muted my-2"> {item.desc} </p>
//                           <Link to="#" className="link">
//                             Read more <FiArrowRight className="align-middle" />
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <AdminFooter />
//       <ScrollTop />
//     </>
//   );
// }

// import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux"; // For fetching data from the Redux store
// import Sidebar from "../../components/Sidebar";
// import Chart from "../../components/dashboard/chart";
// import AdminFooter from "../../components/dashboard/AdminFooter";
// import ScrollTop from "../../components/ScrollTop";
// import {
//   latestAppointment,
//   upcomingAppointment,
//   adminFeature,
// } from "../../data/data"; // Dummy data
// import { FiCalendar, FiArrowRight } from "react-icons/fi";
// import { RiCalendar2Line } from "react-icons/ri";

// export default function DoctorDashboard() {
//   const doctor = useSelector((state) => state.auth || {});
//   console.log({ "doctor data from Redux store": doctor });

//   useEffect(() => {
//     // Add real-time data fetching logic here if required
//     console.log("Component mounted or updated.");
//   }, []);

//   return (
//     <section className="bg-dashboard">
//       <div className="container-fluid">
//         <div className="row">
//           <Sidebar colClass="col-xl-3 col-lg-4 col-md-5 col-12" />
//           <div className="col-xl-9 col-lg-8 col-md-7 mt-4 mt-sm-0">
//             <h5 className="mb-0">Dashboard</h5>
//             <Chart />

//             <div className="row">
//               {/* Latest Appointment Section */}
//               <div className="col-xl-6 col-lg-6 mt-4">
//                 <div className="card border-0 shadow rounded">
//                   <div className="d-flex justify-content-between p-4 border-bottom">
//                     <h6 className="mb-0 d-flex align-items-center">
//                       <FiCalendar className="text-primary me-2 h5 mb-0" />
//                       Latest Appointments
//                     </h6>
//                     <h6 className="text-muted mb-0">55 Patients</h6>
//                   </div>
//                   <ul className="list-unstyled mb-0 p-4 pt-0">
//                     {latestAppointment.length > 0 ? (
//                       latestAppointment.map((item, index) => (
//                         <li className="pt-4 ms-0" key={index}>
//                           <Link to="#">
//                             <div className="d-flex align-items-center justify-content-between">
//                               <div className="d-inline-flex">
//                                 <img
//                                   src={item.image}
//                                   className="avatar avatar-md-sm rounded-circle border shadow"
//                                   alt={`Image of ${item.name}`}
//                                 />
//                                 <div className="ms-3">
//                                   <h6 className="text-dark mb-0 d-block">
//                                     {item.name}
//                                   </h6>
//                                   <small className="text-muted">
//                                     {item.date}
//                                   </small>
//                                 </div>
//                               </div>
//                               <FiArrowRight className="h5 text-dark" />
//                             </div>
//                           </Link>
//                         </li>
//                       ))
//                     ) : (
//                       <p className="text-muted">
//                         No latest appointments available.
//                       </p>
//                     )}
//                   </ul>
//                 </div>
//               </div>

//               {/* Upcoming Appointment Section */}
//               <div className="col-xl-6 col-lg-6 mt-4">
//                 <div className="card border-0 shadow rounded">
//                   <div className="d-flex justify-content-between p-4 border-bottom">
//                     <h6 className="mb-0 d-flex align-items-center">
//                       <RiCalendar2Line className="text-primary me-1 h5 mb-0" />
//                       Upcoming Appointments
//                     </h6>
//                     <h6 className="text-muted mb-0">55 Patients</h6>
//                   </div>
//                   <ul className="list-unstyled mb-0 p-4 pt-0">
//                     {upcomingAppointment.length > 0 ? (
//                       upcomingAppointment.map((item, index) => (
//                         <li className="mt-4 ms-0" key={index}>
//                           <Link to="#">
//                             <div className="d-flex align-items-center justify-content-between">
//                               <div className="d-inline-flex">
//                                 <img
//                                   src={item.image}
//                                   className="avatar avatar-md-sm rounded-circle border shadow"
//                                   alt={`Image of ${item.name}`}
//                                 />
//                                 <div className="ms-3">
//                                   <h6 className="text-dark mb-0 d-block">
//                                     {item.name}
//                                   </h6>
//                                   <small className="text-muted">
//                                     {item.date}
//                                   </small>
//                                 </div>
//                               </div>
//                               <FiArrowRight className="h5 text-dark" />
//                             </div>
//                           </Link>
//                         </li>
//                       ))
//                     ) : (
//                       <p className="text-muted">
//                         No upcoming appointments available.
//                       </p>
//                     )}
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             {/* Admin Features Section */}
//             <div className="row">
//               {adminFeature.map((item, index) => {
//                 const Icon = item.icon;
//                 return (
//                   <div className="col-xl-3 col-md-6 mt-4" key={index}>
//                     <div className="card features feature-primary text-center border-0 p-4 rounded shadow">
//                       <div className="icon text-center rounded-lg mx-auto">
//                         <Icon className="align-middle h3 mb-0" />
//                       </div>
//                       <div className="card-body p-0 mt-3">
//                         <Link to="#" className="title text-dark h5">
//                           {item.title}
//                         </Link>
//                         <p className="text-muted my-2">{item.desc}</p>
//                         <Link to="#" className="link">
//                           Read more <FiArrowRight className="align-middle" />
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//       <AdminFooter />
//       <ScrollTop />
//     </section>
//   );
// }

// import React from "react";

const DoctorDashBoard = () => {
  return <div>DoctorDashBoard</div>;
};

export default DoctorDashBoard;
