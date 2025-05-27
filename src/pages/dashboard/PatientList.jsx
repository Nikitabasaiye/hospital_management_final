// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import Navbar from "../../components/Navbar";
// import Sidebar from "../../components/Sidebar";
// import AdminFooter from "../../components/dashboard/AdminFooter";
// import ScrollTop from "../../components/ScrollTop";

// import { patientsData2 } from "../../data/data"; // Dummy data
// import { FaEllipsisH } from "react-icons/fa";

// import { FiUser, FiSettings, FiTrash } from "react-icons/fi";

// export default function PatientList() {
//   const [token, setToken] = useState(localStorage.getItem("token"));
//   const [show, setShow] = useState("");
//   const fetchAllPatients = async () => {
//     try {
//       const response = await fetch(
//         `${import.meta.env.VITE_API_URL}/doctor/patients`,
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `${token}`,
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error("Error fetching patients:", error);
//       throw error;
//     }
//   };

//   useEffect(() => {
//     const modalClose = () => {
//       setShow(false);
//     };
//     document.addEventListener("mousedown", modalClose);
//     fetchAllPatients();
//     return () => {
//       document.removeEventListener("mousedown", modalClose);
//     };
//   }, []);

//   // let handleShow = (id) => {
//   //     setShow(id)

//   // }
//   const handleShow = (id) => {
//     setShow(id === show ? null : id);
//   };

//   return (
//     <>
//       <section className="bg-dashboard">
//         <div className="container-fluid">
//           <div className="row">
//             <Sidebar colClass="col-xl-3 col-lg-4 col-md-5 col-12" />

//             <div className="col-xl-9 col-lg-8 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
//               <h5 className="mb-0">Patients List</h5>
//               <div className="row">
//                 {patientsData2.map((item, index) => (
//                   <div
//                     className="col-xl-3 col-lg-6 col-12 mt-4 pt-2"
//                     key={index}
//                   >
//                     <div className="card border-0 shadow rounded p-4">
//                       <div className="d-flex justify-content-between">
//                         <img
//                           src={item.image}
//                           className="avatar avatar-md-md rounded-pill shadow"
//                           alt=""
//                         />

//                         <div className="dropdown dropdown-primary">
//                           <button
//                             type="button"
//                             className="btn btn-icon btn-pills btn-soft-primary dropdown-toggle p-0"
//                             onClick={() => handleShow(item.id)}
//                           >
//                             <FaEllipsisH />
//                           </button>
//                           <div
//                             className={`${
//                               show === item.id ? "show" : ""
//                             } dropdown-menu dd-menu dropdown-menu-end shadow border-0 mt-3 py-3`}
//                             style={{ right: "0" }}
//                           >
//                             <Link
//                               className="dropdown-item text-dark mb-1"
//                               to="#"
//                             >
//                               <span className="mb-0 d-inline-flex align-items-center me-1">
//                                 <FiUser className="align-middle h6 mb-0" />
//                               </span>
//                               Profile
//                             </Link>
//                             <Link
//                               className="dropdown-item text-dark mb-1"
//                               to="#"
//                             >
//                               <span className="mb-0 d-inline-flex align-items-center me-1">
//                                 <FiSettings className="align-middle h6 mb-0" />
//                               </span>
//                               Profile Settings
//                             </Link>
//                             <Link className="dropdown-item text-dark" to="#">
//                               <span className="mb-0 d-inline-flex align-items-center me-1">
//                                 <FiTrash className="align-middle h6 mb-0" />
//                               </span>
//                               Delete
//                             </Link>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="card-body p-0 pt-3">
//                         <Link to="#" className="text-dark h6">
//                           {item.name}
//                         </Link>
//                         <p className="text-muted">{item.id}</p>

//                         <ul className="mb-0 list-unstyled mt-2">
//                           <li className="mt-1 ms-0">
//                             <span className="text-muted me-2">Gender:</span>
//                             {item.gender}
//                           </li>
//                           <li className="mt-1 ms-0">
//                             <span className="text-muted me-2">Age:</span>
//                             {item.Age}
//                           </li>
//                           <li className="mt-1 ms-0">
//                             <span className="text-muted me-2">Country:</span>
//                             {item.country}
//                           </li>
//                           <li className="mt-1 ms-0">
//                             <Link to="/patient-ailments">
//                               <span className="text-muted me-2">
//                                 Diagnosis:
//                               </span>
//                               {item.Diagnosis}
//                             </Link>{" "}
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="row text-center">
//                 <div className="col-12 mt-4 pt-2">
//                   <ul className="pagination justify-content-center mb-0 list-unstyled">
//                     <li className="page-item">
//                       <Link className="page-link" to="#" aria-label="Previous">
//                         Prev
//                       </Link>
//                     </li>
//                     <li className="page-item active">
//                       <Link className="page-link" to="#">
//                         1
//                       </Link>
//                     </li>
//                     <li className="page-item">
//                       <Link className="page-link" to="#">
//                         2
//                       </Link>
//                     </li>
//                     <li className="page-item">
//                       <Link className="page-link" to="#">
//                         3
//                       </Link>
//                     </li>
//                     <li className="page-item">
//                       <Link className="page-link" to="#" aria-label="Next">
//                         Next
//                       </Link>
//                     </li>
//                   </ul>
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

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import AdminFooter from "../../components/dashboard/AdminFooter";
import ScrollTop from "../../components/ScrollTop";

import { FaEllipsisH } from "react-icons/fa";
import { FiUser, FiSettings, FiTrash } from "react-icons/fi";

export default function PatientList() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [show, setShow] = useState(null);
  const [patients, setPatients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAllPatients = async () => {
    if (!token) {
      console.error("Token is missing or invalid.");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/doctor/patients`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      // setPatients(data);
      // Extract and validate patients array
      if (Array.isArray(data.patients)) {
        setPatients(data.patients);
      } else {
        console.error("Unexpected API response format:", data);
        setPatients([]); // Fallback to an empty array
      }
    } catch (error) {
      console.error("Error fetching patients:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllPatients();
  }, [token]);

  const handleShow = (id) => {
    setShow((prevShow) => (prevShow === id ? null : id));
  };

  return (
    <>
      <section className="bg-dashboard">
        <div className="container-fluid">
          <div className="row">
            <Sidebar colClass="col-xl-3 col-lg-4 col-md-5 col-12" />

            <div className="col-xl-9 col-lg-8 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <h5 className="mb-0">Patients List</h5>
              <div className="row">
                {isLoading ? (
                  <div className="col-12 text-center">Loading patients...</div>
                ) : patients.length === 0 ? (
                  <div className="col-12 text-center">No patients found.</div>
                ) : (
                  patients.map((patient) => (
                    <div
                      className="col-xl-3 col-lg-6 col-12 mt-4 pt-2"
                      key={patient._id}
                    >
                      <div className="card border-0 shadow rounded p-4">
                        <div className="d-flex justify-content-between">
                          <div className="avatar avatar-md-md rounded-pill shadow bg-soft-primary text-primary text-center">
                            {patient.firstName?.[0]}
                            {patient.lastName?.[0]}
                          </div>

                          <div className="dropdown dropdown-primary">
                            <button
                              type="button"
                              className="btn btn-icon btn-pills btn-soft-primary dropdown-toggle p-0"
                              onClick={() => handleShow(patient._id)}
                              aria-label="More actions"
                            >
                              <FaEllipsisH />
                            </button>
                            <div
                              className={`${
                                show === patient._id ? "show" : ""
                              } dropdown-menu dd-menu dropdown-menu-end shadow border-0 mt-3 py-3`}
                              style={{ right: "0" }}
                            >
                              <Link
                                className="dropdown-item text-dark mb-1"
                                to="#"
                              >
                                <span className="mb-0 d-inline-flex align-items-center me-1">
                                  <FiUser className="align-middle h6 mb-0" />
                                </span>
                                Profile
                              </Link>
                              <Link
                                className="dropdown-item text-dark mb-1"
                                to="#"
                              >
                                <span className="mb-0 d-inline-flex align-items-center me-1">
                                  <FiSettings className="align-middle h6 mb-0" />
                                </span>
                                Profile Settings
                              </Link>
                              <Link className="dropdown-item text-dark" to="#">
                                <span className="mb-0 d-inline-flex align-items-center me-1">
                                  <FiTrash className="align-middle h6 mb-0" />
                                </span>
                                Delete
                              </Link>
                            </div>
                          </div>
                        </div>

                        <div className="card-body p-0 pt-3 ">
                          <Link to="#" className="text-dark h6 ">
                            <p className="flex justify-center items-center">
                              {patient.firstName} {patient.middleName || ""}{" "}
                              {patient.lastName}
                            </p>
                          </Link>
                          {/* <p className="text-muted">{patient._id}</p> */}

                          <ul className="mb-0 list-unstyled mt-2">
                            <li className="mt-1 ms-0">
                              <span className="text-muted me-2">Gender:</span>
                              {patient.gender || "N/A"}
                            </li>
                            <li className="mt-1 ms-0">
                              <span className="text-muted me-2">Age:</span>
                              {patient.age || "N/A"}
                            </li>
                            <li className="mt-1 ms-0">
                              <span className="text-muted me-2">
                                Status:{patient.status}
                              </span>
                            </li>
                            <li className="mt-1 ms-0">
                              <span className="text-muted me-2">City:</span>
                              {patient.address?.city || "N/A"}
                            </li>
                            <li className="mt-1 ms-0">
                              <Link to="/patient-ailments">
                                <span className="text-muted me-2">
                                  Conditions:
                                </span>
                                {patient.medicalHistory
                                  ?.map((history) => history.condition)
                                  .join(", ") || "None"}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="row text-center">
                <div className="col-12 mt-4 pt-2">
                  <ul className="pagination justify-content-center mb-0 list-unstyled">
                    <li className="page-item">
                      <Link className="page-link" to="#" aria-label="Previous">
                        Prev
                      </Link>
                    </li>
                    <li className="page-item active">
                      <Link className="page-link" to="#">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        Next
                      </Link>
                    </li>
                  </ul>
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
