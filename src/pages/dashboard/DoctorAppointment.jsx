// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";

// import Sidebar from "../../components/Sidebar";
// import AddApointment from "../../components/dashboard/AddAppointment";
// import Crud from "../../components/dashboard/Crud";
// import AdminFooter from "../../components/dashboard/AdminFooter";
// import ScrollTop from "../../components/ScrollTop";

// import { appointmentData } from "../../data/data"; // Fake data

// export default function DoctorAppointment() {
//   const token = localStorage.getItem("token");
//   console.log(token);

//   const fetchAppointment = async () => {
//     try {
//       const response = await fetch(
//         `${import.meta.env.VITE_API_URL}/doctor/get-opd-patients`,
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `${token}`,
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`Error: ${response.status} ${response.statusText}`);
//       }

//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error("Failed to fetch appointments:", error);
//     }
//   };

//   useEffect(() => {
//     fetchAppointment();
//   }, []);
//   return (
//     <>
//       <section className="bg-dashboard">
//         <div className="container-fluid">
//           <div className="row">
//             <Sidebar colClass="col-xl-3 col-lg-4 col-md-5 col-12" />

//             <div className="col-xl-9 col-lg-8 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
//               <div className="row">
//                 <div className="col-xl-9 col-lg-6 col-md-4">
//                   <h5 className="mb-0">Appointment</h5>
//                 </div>

//                 <div className="col-xl-3 col-lg-6 col-md-8 mt-4 mt-md-0">
//                   <div className="justify-content-md-end">
//                     <form>
//                       <div className="row justify-content-between align-items-center">
//                         <div className="col-sm-12 col-md-5">
//                           <div className="mb-0 position-relative">
//                             <select className="form-select form-control">
//                               <option value="EY">Today</option>
//                               <option value="GY">Tomorrow</option>
//                               <option value="PS">Yesterday</option>
//                             </select>
//                           </div>
//                         </div>
//                         <AddApointment /> {/* Corrected component usage */}
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>

//               <div className="row">
//                 <div className="col-12 mt-4">
//                   <div className="table-responsive bg-white shadow rounded">
//                     <table className="table mb-0 table-center">
//                       <thead>
//                         <tr>
//                           <th
//                             className="border-bottom p-3"
//                             style={{ minWidth: "50px" }}
//                           >
//                             #
//                           </th>
//                           <th
//                             className="border-bottom p-3"
//                             style={{ minWidth: "180px" }}
//                           >
//                             Patient Name
//                           </th>
//                           <th className="border-bottom p-3">Age</th>
//                           <th className="border-bottom p-3">Gender</th>
//                           <th className="border-bottom p-3">Department</th>
//                           <th
//                             className="border-bottom p-3"
//                             style={{ minWidth: "150px" }}
//                           >
//                             Date
//                           </th>
//                           <th className="border-bottom p-3">Time</th>
//                           <th
//                             className="border-bottom p-3"
//                             style={{ minWidth: "220px" }}
//                           >
//                             Doctor
//                           </th>
//                           <th className="border-bottom p-3">Fees</th>
//                           <th
//                             className="border-bottom p-3"
//                             style={{ minWidth: "150px" }}
//                           ></th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {appointmentData.map((item, index) => (
//                           <tr key={index}>
//                             <th className="p-3">{item.id}</th>
//                             <td className="p-3">
//                               <Link to="#" className="text-dark">
//                                 <div className="d-flex align-items-center">
//                                   <img
//                                     src={item.clientImage}
//                                     className="avatar avatar-md-sm rounded-circle shadow"
//                                     alt=""
//                                   />
//                                   <span className="ms-2">
//                                     {item.clientName}
//                                   </span>
//                                 </div>
//                               </Link>
//                             </td>
//                             <td className="p-3">{item.age}</td>
//                             <td className="p-3">{item.gender}</td>
//                             <td className="p-3">{item.department}</td>
//                             <td className="p-3">{item.date}</td>
//                             <td className="p-3">{item.time}</td>
//                             <td className="p-3">
//                               <Link to="#" className="text-dark">
//                                 <div className="d-flex align-items-center">
//                                   <img
//                                     src={item.drImage}
//                                     className="avatar avatar-md-sm rounded-circle border shadow"
//                                     alt=""
//                                   />
//                                   <span className="ms-2">{item.drName}</span>
//                                 </div>
//                               </Link>
//                             </td>
//                             <td className="p-3">{item.fees}</td>
//                             <Crud /> {/* Corrected component usage */}
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>

//               <div className="row text-center">
//                 <div className="col-12 mt-4">
//                   <div className="d-md-flex align-items-center text-center justify-content-between">
//                     <span className="text-muted me-3">
//                       Showing 1 - 10 out of 50
//                     </span>
//                     <ul className="pagination justify-content-center mb-0 mt-3 mt-sm-0">
//                       <li className="page-item">
//                         <Link
//                           className="page-link"
//                           to="#"
//                           aria-label="Previous"
//                         >
//                           Prev
//                         </Link>
//                       </li>
//                       <li className="page-item active">
//                         <Link className="page-link" to="#">
//                           1
//                         </Link>
//                       </li>
//                       <li className="page-item">
//                         <Link className="page-link" to="#">
//                           2
//                         </Link>
//                       </li>
//                       <li className="page-item">
//                         <Link className="page-link" to="#">
//                           3
//                         </Link>
//                       </li>
//                       <li className="page-item">
//                         <Link className="page-link" to="#" aria-label="Next">
//                           Next
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
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

// import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// useState;

import Sidebar from "../../components/Sidebar";
import AddApointment from "../../components/dashboard/AddAppointment";
import Crud from "../../components/dashboard/Crud";
import AdminFooter from "../../components/dashboard/AdminFooter";
import ScrollTop from "../../components/ScrollTop";
import { useState, useEffect } from "react";
// import treatPatient from "../.=";

export default function DoctorAppointment() {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // const treatPatient = (appointment) => {
  //   console.log("hellowwww from treate");
  //   // Navigate("/");
  //   navigate(
  //     `/appintment/treat-patient/${
  //       appointment.firstName + appointment.lastName
  //     }`,
  //     { state: appointment }
  //   );
  //   console.log({ "patient details": appointment });
  // };

  // const treatPatient = (appointment) => {
  //   console.log("Hello from treatPatient!");
  //   navigate(
  //     `/doctor-appointment/treat/${
  //       appointment.firstName + appointment.lastName
  //     }`,
  //     { state: { appointment } } // Pass the appointment object within a `state` property
  //   );
  //   console.log({ "patient details": appointment });
  // };

  const treatPatient = (appointment) => {
    console.log("Hello from treatPatient!");
    navigate(
      `/treat/${appointment.firstName + appointment.lastName}`,
      { state: { appointment } } // Pass the appointment object within a `state` property
    );
    console.log({ "patient details": appointment });
  };

  const fetchAppointment = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/doctor/get-opd-patients`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`, // Ensure Bearer token format
          },
        }
      );
      console.log(response);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data);
      setAppointments(data?.OPDsAppointments); // Update state with fetched data
    } catch (error) {
      console.error("Failed to fetch appointments:", error);
    }
  };

  useEffect(() => {
    fetchAppointment();
  }, []);

  return (
    <>
      <section className="bg-dashboard">
        <div className="container-fluid">
          <div className="row">
            <Sidebar colClass="col-xl-3 col-lg-4 col-md-5 col-12" />

            <div className="col-xl-9 col-lg-8 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="row">
                <div className="col-xl-9 col-lg-6 col-md-4">
                  <h5 className="mb-0">Appointment</h5>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-8 mt-4 mt-md-0">
                  <div className="justify-content-md-end">
                    <form>
                      <div className="row justify-content-between align-items-center">
                        <div className="col-sm-12 col-md-5">
                          <div className="mb-0 position-relative">
                            <select className="form-select form-control">
                              <option value="EY">Today</option>
                              <option value="GY">Tomorrow</option>
                              <option value="PS">Yesterday</option>
                            </select>
                          </div>
                        </div>
                        <AddApointment />
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 mt-4">
                  <div className="table-responsive bg-white shadow rounded">
                    <table className="table mb-0 table-center">
                      <thead>
                        <tr>
                          <th className="border-bottom p-3">#</th>
                          <th className="border-bottom p-3">Patient Name</th>
                          <th className="border-bottom p-3">Age</th>
                          <th className="border-bottom p-3">Gender</th>
                          <th className="border-bottom p-3">Department</th>
                          <th className="border-bottom p-3">Date</th>
                          <th className="border-bottom p-3">Time</th>
                          {/* <th className="border-bottom p-3">Doctor</th> */}
                          <th className="border-bottom p-3">History</th>
                          <th>CRUD</th>
                        </tr>
                      </thead>
                      <tbody>
                        {appointments.map((appointment, index) => (
                          <tr
                            key={appointment._id}
                            // onClick={() => treatPatient(appointment)}
                            // className="cursor-pointer"
                            // role="button" // Accessibility improvement for screen readers
                            // onPointerCancel={}
                            // className="cursor-pointer" // Adds a pointer cursor to indicate clickable row
                            // tabIndex={0} // Allows focusing via keyboard for better accessibility
                            // onKeyDown={(e) => {
                            //   if (e.key === "Enter" || e.key === " ") {
                            //     treatPatient(appointment); // Support keyboard activation
                            //   }
                            // }}
                          >
                            <td className="p-3">{index + 1}</td>
                            <td
                              onClick={() => treatPatient(appointment)}
                              className="p-3 cursor-pointer"
                              role="button" // Accessibility improvement for screen readers
                            >
                              {appointment.firstName} {appointment.lastName}
                            </td>
                            <td className="p-3">{appointment.age}</td>
                            <td className="p-3">{appointment.gender}</td>
                            <td className="p-3">OPD</td>
                            <td className="p-3">
                              {new Date(
                                appointment.appointmentDateAndTime
                              ).toLocaleDateString()}
                            </td>
                            <td className="p-3">
                              {new Date(
                                appointment.appointmentDateAndTime
                              ).toLocaleTimeString()}
                            </td>
                            {/* <td className="p-3">
                              {appointment.history
                                ? appointment.history[0]?.prescription
                                    .map(
                                      (med) =>
                                        `${med.medicine} (${med.dosage}) - ${med.frequency}`
                                    )
                                    .join(", ")
                                : "NULL"}
                            </td> */}
                            <td className="p-3">
                              <div className="flex justify-start items-center gap-4">
                                {/* Pass the current appointment as a prop */}
                                <Crud currentAppointment={appointment} />
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AdminFooter />
      <ScrollTop />
    </>
  );
}
