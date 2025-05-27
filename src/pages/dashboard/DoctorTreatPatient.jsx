// // import React from "react";
// // import Sidebar from "../../components/Sidebar";
// // import { useParams, useLocation } from "react-router-dom";

// // const DoctorTreatPatient = () => {
// //   const location = useLocation();
// //   const { patientName } = useParams(); // Access the dynamic route parameter
// //   const appointment = location.state?.appointment;
// //   console.log(appointment);
// //   return (
// //     <section className="bg-dashboard d-flex flex-column flex-md-row">
// //       <Sidebar colClass="col-md-4 col-lg-3" />
// //       <div className="container-fluid py-4">
// //         <h1>Patient Details</h1>
// //         {console.log(appointment)}
// //       </div>
// //     </section>
// //   );
// // };

// // export default DoctorTreatPatient;

// // import React from "react";
// // import { useParams, useLocation } from "react-router-dom";

// // const DoctorTreatPatient = () => {
// //   const { patientName } = useParams(); // Access the dynamic route parameter
// //   const location = useLocation();
// //   const appointment = location.state?.appointment; // Access the state passed via navigate

// //   return (
// //     <div>
// //       <h1>Treat Patient</h1>
// //       <h2>Patient Name from URL: {patientName}</h2>
// //       {appointment ? (
// //         <div>
// //           <p>First Name: {appointment.firstName}</p>
// //           <p>Last Name: {appointment.lastName}</p>
// //           {/* Render other appointment details */}
// //         </div>
// //       ) : (
// //         <p>No appointment data provided.</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default DoctorTreatPatient;

// import React, { useEffect, useState } from "react";
// import Sidebar from "../../components/Sidebar";
// import { useParams, useLocation } from "react-router-dom";

// const DoctorTreatPatient = () => {
//   const location = useLocation();
//   const { patientName } = useParams(); // Access the dynamic route parameter
//   const [ailments, setAilments] = useState({});
//   //   const [appointment, setAppointment] = useState({});

//   const appointment = location.state?.appointment || {}; // Fallback to an empty object if undefined

//   useEffect(() => {
//     // Fetch ailments of the patients
//     console.log(appointment);
//   }, []);
//   // Destructure patient details from the appointment or default to an empty object
//   const {
//     firstName,
//     middleName,
//     lastName,
//     email,
//     phoneNumber,
//     dateOfBirth,
//     gender,
//     status,
//     age,
//   } = appointment;

//   return (
//     <section className="bg-dashboard d-flex flex-column flex-md-row">
//       <Sidebar colClass="col-xl-3 col-lg-4 col-md-5 col-12" />
//       <div className="container-fluid py-4">
//         <h1>Patient Details</h1>
//         {appointment ? (
//           <div className="card p-4">
//             <div className="row">
//               {/* Name */}
//               <div className="col-md-6 mb-3">
//                 <p>
//                   <strong>Full Name:</strong> {firstName} {middleName}{" "}
//                   {lastName}
//                 </p>
//               </div>
//               {/* Email */}
//               <div className="col-md-6 mb-3">
//                 <p>
//                   <strong>Email:</strong> {email}
//                 </p>
//               </div>
//               {/* Phone Number */}
//               <div className="col-md-6 mb-3">
//                 <p>
//                   <strong>Phone Number:</strong> {phoneNumber}
//                 </p>
//               </div>
//               {/* Date of Birth */}
//               <div className="col-md-6 mb-3">
//                 <p>
//                   <strong>Date of Birth:</strong>{" "}
//                   {new Date(dateOfBirth).toLocaleDateString()}
//                 </p>
//               </div>
//               {/* Gender */}
//               <div className="col-md-6 mb-3">
//                 <p>
//                   <strong>Gender:</strong> {gender}
//                 </p>
//               </div>
//               {/* Status */}
//               <div className="col-md-6 mb-3">
//                 <p>
//                   <strong>Status:</strong> {status}
//                 </p>
//               </div>
//               {/* Age */}
//               <div className="col-md-6 mb-3">
//                 <p>
//                   <strong>Age:</strong> {age}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <p>No patient details available.</p>
//         )}
//       </div>
//       <div>
//         <h1>Patient Ailments</h1>
//         {!ailments ? "Loading" : "Ailments"}
//       </div>
//     </section>
//   );
// };

// export default DoctorTreatPatient;

// import React, { useEffect, useState } from "react";
// import Sidebar from "../../components/Sidebar";
// import { useParams, useLocation } from "react-router-dom";

// const DoctorTreatPatient = () => {
//   const location = useLocation();
//   const { patientName } = useParams(); // Access the dynamic route parameter
//   const [ailments, setAilments] = useState(null);
//   const appointment = location.state?.appointment || {}; // Fallback to an empty object if undefined

//   console.log(appointment);
//   // Destructure patient details from the appointment or default to an empty object
//   const {
//     firstName,
//     middleName,
//     lastName,
//     email,
//     phoneNumber,
//     dateOfBirth,
//     gender,
//     status,
//     age,
//   } = appointment;

//   useEffect(() => {
//     // Fetch ailments of the patient
//     const fetchAilments = async () => {
//       try {
//         const response = await fetch(
//           `${import.meta.env.VITE_API_URL}/patient/ailments/${appointment.id}`
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch ailments");
//         }
//         const data = await response.json();
//         console.log(data);
//         setAilments(data.patientAilments);
//       } catch (error) {
//         console.error("Error fetching ailments:", error.message);
//         setAilments([]);
//       }
//     };

//     if (appointment.id) {
//       fetchAilments();
//     }
//   }, []);

//   return (
//     <section className="bg-dashboard d-flex flex-column flex-md-row">
//       <Sidebar colClass="col-xl-3 col-lg-4 col-md-5 col-12" />
//       <div className="container-fluid py-4">
//         <h1>Patient Details</h1>
//         {appointment ? (
//           <div className="card p-4">
//             <div className="row">
//               <div className="col-md-6 mb-3">
//                 <p>
//                   <strong>Full Name:</strong> {firstName} {middleName}{" "}
//                   {lastName}
//                 </p>
//               </div>
//               <div className="col-md-6 mb-3">
//                 <p>
//                   <strong>Email:</strong> {email}
//                 </p>
//               </div>
//               <div className="col-md-6 mb-3">
//                 <p>
//                   <strong>Phone Number:</strong> {phoneNumber}
//                 </p>
//               </div>
//               <div className="col-md-6 mb-3">
//                 <p>
//                   <strong>Date of Birth:</strong>{" "}
//                   {new Date(dateOfBirth).toLocaleDateString()}
//                 </p>
//               </div>
//               <div className="col-md-6 mb-3">
//                 <p>
//                   <strong>Gender:</strong> {gender}
//                 </p>
//               </div>
//               <div className="col-md-6 mb-3">
//                 <p>
//                   <strong>Status:</strong> {status}
//                 </p>
//               </div>
//               <div className="col-md-6 mb-3">
//                 <p>
//                   <strong>Age:</strong> {age}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <p>No patient details available.</p>
//         )}

//         <div className="mt-4">
//           <h1>Patient Ailments</h1>
//           {ailments === null ? (
//             <p>Loading...</p>
//           ) : ailments.length === 0 ? (
//             <p>No ailments found for this patient.</p>
//           ) : (
//             <div className="card p-4">
//               {ailments.map((ailment) => (
//                 <div key={ailment._id} className="mb-3">
//                   <h4>{ailment.name}</h4>
//                   <p>
//                     <strong>Severity:</strong> {ailment.severity}
//                   </p>
//                   <p>
//                     <strong>Details:</strong> {ailment.details}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DoctorTreatPatient;

// import React, { useEffect, useState } from "react";
// import Sidebar from "../../components/Sidebar";
// import { useParams, useLocation } from "react-router-dom";

// const DoctorTreatPatient = () => {
//   const location = useLocation();
//   const { patientName } = useParams(); // Access the dynamic route parameter
//   const [ailmentsData, setAilmentsData] = useState(null); // Handle the full ailments data structure
//   const appointment = location.state?.appointment || {}; // Fallback to an empty object if undefined

//   console.log(appointment);
//   // Destructure patient details from the appointment or default to an empty object
//   const {
//     firstName,
//     middleName,
//     lastName,
//     email,
//     phoneNumber,
//     dateOfBirth,
//     gender,
//     status,
//     age,
//   } = appointment;

//   useEffect(() => {
//     // Fetch ailments of the patient
//     const fetchAilments = async () => {
//       try {
//         const response = await fetch(
//           `${import.meta.env.VITE_API_URL}/patient/ailments/${appointment.id}`
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch ailments");
//         }
//         const data = await response.json();
//         console.log(data);
//         setAilmentsData(data.patientAilments);
//       } catch (error) {
//         console.error("Error fetching ailments:", error.message);
//         setAilmentsData([]);
//       }
//     };

//     if (appointment.id) {
//       fetchAilments();
//     }
//   }, [appointment.id]);

//   return (
//     <section className="bg-dashboard d-flex flex-column flex-md-row">
//       <Sidebar colClass="col-xl-3 col-lg-4 col-md-5 col-12" />
//       <div className="container-fluid py-4">
//         <h1>Patient Details</h1>
//         {appointment ? (
//           <div className="card p-4">
//             <div className="row">
//               <div className="col-md-6 mb-3">
//                 <p>
//                   <strong>Full Name:</strong> {firstName} {middleName}{" "}
//                   {lastName}
//                 </p>
//               </div>
//               <div className="col-md-6 mb-3">
//                 <p>
//                   <strong>Email:</strong> {email}
//                 </p>
//               </div>
//               <div className="col-md-6 mb-3">
//                 <p>
//                   <strong>Phone Number:</strong> {phoneNumber}
//                 </p>
//               </div>
//               <div className="col-md-6 mb-3">
//                 <p>
//                   <strong>Date of Birth:</strong>{" "}
//                   {new Date(dateOfBirth).toLocaleDateString()}
//                 </p>
//               </div>
//               <div className="col-md-6 mb-3">
//                 <p>
//                   <strong>Gender:</strong> {gender}
//                 </p>
//               </div>
//               <div className="col-md-6 mb-3">
//                 <p>
//                   <strong>Status:</strong> {status}
//                 </p>
//               </div>
//               <div className="col-md-6 mb-3">
//                 <p>
//                   <strong>Age:</strong> {age}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <p>No patient details available.</p>
//         )}

//         {/* <div className="mt-4">
//           <h1>Patient Ailments</h1>
//           {ailmentsData === null ? (
//             <p>Loading...</p>
//           ) : ailmentsData.length === 0 ? (
//             <p>No ailments found for this patient.</p>
//           ) : (
//             <div className="card p-4">
//               {ailmentsData.map((entry) => (
//                 <div key={entry._id} className="mb-4">
//                   <h3>
//                     Diagnosed On: {new Date(entry.dateAndTime).toLocaleString()}
//                   </h3>
//                   <h4>Diagnosed By:</h4>
//                   <ul>
//                     {entry.diagnosedBy.map((staff) => (
//                       <li key={staff.staffId}>
//                         Role: {staff.role} (ID: {staff.staffId})
//                       </li>
//                     ))}
//                   </ul>
//                   <h4>Ailments:</h4>
//                   {entry.ailments.map((ailment) => (
//                     <div key={ailment._id} className="mb-3">
//                       <h5>{ailment.name}</h5>
//                       <p>
//                         <strong>Severity:</strong> {ailment.severity}
//                       </p>
//                       <p>
//                         <strong>Details:</strong> {ailment.details}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div> */}
//         <div className="mt-4">
//           <h1>Patient Ailments</h1>
//           {ailmentsData === null ? (
//             <p>Loading...</p>
//           ) : ailmentsData.length === 0 ? (
//             <p>No ailments found for this patient.</p>
//           ) : (
//             <div className="card p-4">
//               {ailmentsData.map((entry) => (
//                 <div key={entry._id} className="mb-4">
//                   <h3>
//                     Diagnosed On: {new Date(entry.dateAndTime).toLocaleString()}
//                   </h3>
//                   <h4>Diagnosed By:</h4>
//                   <ul>
//                     {entry.diagnosedBy.map((staff) => (
//                       <li key={staff.staffId}>
//                         Role: {staff.role} (ID: {staff.staffId})
//                       </li>
//                     ))}
//                   </ul>
//                   <h4>Ailments:</h4>
//                   <div className="flex flex-wrap gap-4">
//                     {entry.ailments.map((ailment) => (
//                       <div
//                         key={ailment._id}
//                         className="border rounded p-4 shadow-md w-full md:w-1/3 lg:w-1/4"
//                       >
//                         <h5 className="font-bold">{ailment.name}</h5>
//                         <p>
//                           <strong>Severity:</strong> {ailment.severity}
//                         </p>
//                         <p>
//                           <strong>Details:</strong> {ailment.details}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DoctorTreatPatient;

// import React, { useEffect, useState } from "react";
// import Sidebar from "../../components/Sidebar";
// import { useParams, useLocation } from "react-router-dom";

// const DoctorTreatPatient = () => {
//   const location = useLocation();
//   const { patientName } = useParams(); // Access the dynamic route parameter
//   const [ailmentsData, setAilmentsData] = useState(null); // Handle the full ailments data structure
//   const [treatmentDetails, setTreatmentDetails] = useState(""); // Track the treatment details input
//   const appointment = location.state?.appointment || {}; // Fallback to an empty object if undefined
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [prescriptions, setPrescriptions] = useState([]);

//   console.log(appointment);

//   // Destructure patient details from the appointment or default to an empty object
//   const {
//     firstName,
//     middleName,
//     lastName,
//     email,
//     phoneNumber,
//     dateOfBirth,
//     gender,
//     status,
//     age,
//   } = appointment;

//   const [statusToChange, setStatusToChange] = useState(status);
//   const handlePrescriptionChange = (index, field, value) => {
//     const updatedPrescriptions = [...prescriptions];
//     updatedPrescriptions[index][field] = value;
//     setPrescriptions(updatedPrescriptions);
//   };

//   useEffect(() => {
//     // Fetch ailments of the patient
//     const fetchAilments = async () => {
//       try {
//         const response = await fetch(
//           `${import.meta.env.VITE_API_URL}/patient/ailments/${appointment.id}`
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch ailments");
//         }
//         const data = await response.json();
//         console.log(data);
//         setAilmentsData(data.patientAilments);
//       } catch (error) {
//         console.error("Error fetching ailments:", error.message);
//         setAilmentsData([]);
//       }
//     };

//     if (appointment.id) {
//       fetchAilments();
//     }
//   }, [appointment.id]);

//   const addPrescriptionRow = () => {
//     setPrescriptions([
//       ...prescriptions,
//       { medicineName: "", dosage: "", timings: "" },
//     ]);
//   };

//   const handlePrescriptionSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     // Handle data submission logic here
//   };

//   const handleDosageOptionChange = (index, option, isChecked) => {
//     const updatedPrescriptions = [...prescriptions];
//     const dosage = updatedPrescriptions[index].dosage;

//     if (isChecked) {
//       updatedPrescriptions[index].dosage = [...dosage, option];
//     } else {
//       updatedPrescriptions[index].dosage = dosage.filter(
//         (item) => item !== option
//       );
//     }

//     setPrescriptions(updatedPrescriptions);
//   };

//   const handleTimingChange = (index, timeOfDay, isChecked) => {
//     const updatedPrescriptions = [...prescriptions];
//     const timings = updatedPrescriptions[index].timings;

//     if (isChecked) {
//       updatedPrescriptions[index].timings = [...timings, timeOfDay];
//     } else {
//       updatedPrescriptions[index].timings = timings.filter(
//         (time) => time !== timeOfDay
//       );
//     }

//     setPrescriptions(updatedPrescriptions);
//   };

//   const handleTreatmentSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const response = await fetch(
//         `${import.meta.env.VITE_API_URL}/patient/treatment`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             patientId: appointment.id,
//             treatmentDetails,
//           }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to submit treatment details");
//       }

//       const data = await response.json();
//       alert("Treatment details submitted successfully!");
//       setTreatmentDetails(""); // Reset the input
//     } catch (error) {
//       console.error("Error submitting treatment:", error.message);
//       alert("Failed to submit treatment details");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
//   const handleStatusChange = (newStatus) => {
//     // Update the status based on the selected option
//     setStatusToChange(newStatus);
//   };

//   return (
//     // <section className="bg-dashboard">
//     // <div className="container-fluid">
//     //   <div className="row">
//     // <Sidebar colClass="col-xl-3 col-lg-4 col-md-5 col-12" />
//     <section className="bg-dashboard ">
//       <div className="container-fluid ">
//         <div className="row">
//           <Sidebar colClass="col-xl-3 col-lg-4 col-md-5 col-12" />
//           <div className="col-xl-9 col-lg-8 col-md-7 mt-4 mt-sm-0">
//             {/* <div>
//               <h1>Patient Details</h1>
//               {appointment ? (
//                 <div className="card p-4">
//                   <div className="row">
//                     <div className="col-md-6 mb-3">
//                       <p>
//                         <strong>Full Name:</strong> {firstName} {middleName}{" "}
//                         {lastName}
//                       </p>
//                     </div>
//                     <div className="col-md-6 mb-3">
//                       <p>
//                         <strong>Email:</strong> {email}
//                       </p>
//                     </div>
//                     <div className="col-md-6 mb-3">
//                       <p>
//                         <strong>Phone Number:</strong> {phoneNumber}
//                       </p>
//                     </div>
//                     <div className="col-md-6 mb-3">
//                       <p>
//                         <strong>Date of Birth:</strong>{" "}
//                         {new Date(dateOfBirth).toLocaleDateString()}
//                       </p>
//                     </div>
//                     <div className="col-md-6 mb-3">
//                       <p>
//                         <strong>Gender:</strong> {gender}
//                       </p>
//                     </div>
//                     <div className="col-md-6 mb-3">
//                       <p>
//                         <strong>Status:</strong> {status}
//                       </p>
//                     </div>
//                     <div className="col-md-6 mb-3">
//                       <p>
//                         <strong>Age:</strong> {age}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <p>No patient details available.</p>
//               )}
//             </div> */}
//             <div>
//               <h1 className="text-primary mb-4">Patient Details</h1>
//               {appointment ? (
//                 <div className="card p-4 border rounded shadow-sm bg-light">
//                   <div
//                     className="d-grid"
//                     style={{
//                       gridTemplateColumns:
//                         "repeat(auto-fit, minmax(250px, 1fr))",
//                       gap: "1rem",
//                     }}
//                   >
//                     <div>
//                       <p className="mb-1">
//                         <strong>Full Name:</strong>
//                       </p>
//                       <p>
//                         {firstName} {middleName} {lastName}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="mb-1">
//                         <strong>Email:</strong>
//                       </p>
//                       <p>{email}</p>
//                     </div>
//                     <div>
//                       <p className="mb-1">
//                         <strong>Phone Number:</strong>
//                       </p>
//                       <p>{phoneNumber}</p>
//                     </div>
//                     <div>
//                       <p className="mb-1">
//                         <strong>Date of Birth:</strong>
//                       </p>
//                       <p>{new Date(dateOfBirth).toLocaleDateString()}</p>
//                     </div>
//                     <div>
//                       <p className="mb-1">
//                         <strong>Gender:</strong>
//                       </p>
//                       <p>{gender}</p>
//                     </div>
//                     <div>
//                       <p className="mb-1">
//                         <strong>Status:</strong>
//                       </p>
//                       <p>{status}</p>
//                     </div>
//                     <div>
//                       <p className="mb-1">
//                         <strong>Age:</strong>
//                       </p>
//                       <p>{age}</p>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <p className="text-danger">No patient details available.</p>
//               )}
//             </div>

//             <div className="mt-4">
//               <h1>Patient Ailments</h1>
//               {ailmentsData === null ? (
//                 <p>Loading...</p>
//               ) : ailmentsData.length === 0 ? (
//                 <p>No ailments found for this patient.</p>
//               ) : (
//                 <div className="d-flex flex-column gap-5">
//                   {ailmentsData.map((entry) => (
//                     <div
//                       key={entry._id}
//                       className="mb-4 p-4 border rounded shadow-sm bg-light"
//                     >
//                       <h3 className="text-primary">
//                         Diagnosed On:{" "}
//                         {new Date(entry.dateAndTime).toLocaleString()}
//                       </h3>
//                       <h4 className="mt-3">Diagnosed By:</h4>
//                       <ul className="list-unstyled">
//                         {entry.diagnosedBy.map((staff) => (
//                           <li key={staff.staffId} className="mb-2">
//                             <strong>Role:</strong> {staff.role} (ID:{" "}
//                             {staff.staffId})
//                           </li>
//                         ))}
//                       </ul>
//                       <h4 className="mt-3">Ailments:</h4>
//                       <div className="row">
//                         {entry.ailments.map((ailment) => (
//                           <div
//                             key={ailment._id}
//                             className="col-md-4 mb-4 d-flex flex-column align-items-start border rounded p-3 shadow-sm bg-white"
//                           >
//                             <h5 className="font-weight-bold text-dark">
//                               {ailment.name}
//                             </h5>
//                             <p className="mb-1">
//                               <strong>Severity:</strong> {ailment.severity}
//                             </p>
//                             <p className="mb-0">
//                               <strong>Details:</strong> {ailment.details}
//                             </p>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* <div className="mt-4">
//               <h1>Provide Treatment</h1>
//               <form onSubmit={handleTreatmentSubmit} className="card p-4">
//                 <div className="mb-3">
//                   <label htmlFor="treatmentDetails" className="form-label">
//                     Treatment Details
//                   </label>
//                   <textarea
//                     id="treatmentDetails"
//                     className="form-control"
//                     rows="4"
//                     value={treatmentDetails}
//                     onChange={(e) => setTreatmentDetails(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="btn btn-primary"
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? "Submitting..." : "Submit Treatment"}
//                 </button>
//               </form>
//             </div> */}
//             <div className="mt-4">
//               <h1>Prescription Details</h1>
//               <form onSubmit={handlePrescriptionSubmit} className="card p-4">
//                 {prescriptions.map((prescription, index) => (
//                   <div key={index} className="row mb-3">
//                     <div className="col-md-4">
//                       <label
//                         htmlFor={`medicineName-${index}`}
//                         className="form-label"
//                       >
//                         Medicine Name
//                       </label>
//                       <input
//                         type="text"
//                         id={`medicineName-${index}`}
//                         className="form-control"
//                         value={prescription.medicineName}
//                         onChange={(e) =>
//                           handlePrescriptionChange(
//                             index,
//                             "medicineName",
//                             e.target.value
//                           )
//                         }
//                         required
//                       />
//                     </div>
//                     <div className="col-md-4">
//                       <label htmlFor={`dosage-${index}`} className="form-label">
//                         Dosage
//                       </label>
//                       <select
//                         id={`dosageType-${index}`}
//                         className="form-select mb-2"
//                         value={prescription.dosageType}
//                         onChange={(e) =>
//                           handlePrescriptionChange(
//                             index,
//                             "dosageType",
//                             e.target.value
//                           )
//                         }
//                         required
//                       >
//                         <option value="">Select Dosage Type</option>
//                         <option value="Tablet">Tablet</option>
//                         <option value="Syrup">Syrup</option>
//                       </select>
//                       <div className="d-flex align-items-center gap-3">
//                         <div className="form-check">
//                           <input
//                             type="checkbox"
//                             id={`1tab-${index}`}
//                             className="form-check-input"
//                             checked={prescription.dosage.includes("1 tab")}
//                             onChange={(e) =>
//                               handleDosageOptionChange(
//                                 index,
//                                 "1 tab",
//                                 e.target.checked
//                               )
//                             }
//                           />
//                           <label
//                             htmlFor={`1tab-${index}`}
//                             className="form-check-label"
//                           >
//                             1 Tab
//                           </label>
//                         </div>
//                         <div className="form-check">
//                           <input
//                             type="checkbox"
//                             id={`halfTab-${index}`}
//                             className="form-check-input"
//                             checked={prescription.dosage.includes("1/2 tab")}
//                             onChange={(e) =>
//                               handleDosageOptionChange(
//                                 index,
//                                 "1/2 tab",
//                                 e.target.checked
//                               )
//                             }
//                           />
//                           <label
//                             htmlFor={`halfTab-${index}`}
//                             className="form-check-label"
//                           >
//                             1/2 Tab
//                           </label>
//                         </div>
//                         <div className="form-check">
//                           <input
//                             type="checkbox"
//                             id={`10ml-${index}`}
//                             className="form-check-input"
//                             checked={prescription.dosage.includes("10 ml")}
//                             onChange={(e) =>
//                               handleDosageOptionChange(
//                                 index,
//                                 "10 ml",
//                                 e.target.checked
//                               )
//                             }
//                           />
//                           <label
//                             htmlFor={`10ml-${index}`}
//                             className="form-check-label"
//                           >
//                             10 ml
//                           </label>
//                         </div>
//                       </div>
//                     </div>

//                     {/* <div className="col-md-4">
//                       <label htmlFor={`dosage-${index}`} className="form-label">
//                         Dosage
//                       </label>
//                       <input
//                         type="text"
//                         id={`dosage-${index}`}
//                         className="form-control"
//                         value={prescription.dosage}
//                         onChange={(e) =>
//                           handlePrescriptionChange(
//                             index,
//                             "dosage",
//                             e.target.value
//                           )
//                         }
//                         required
//                       />
//                     </div> */}
//                     {/* <div className="col-md-4">
//                       <label
//                         htmlFor={`timings-${index}`}
//                         className="form-label"
//                       >
//                         Timings
//                       </label>
//                       <input
//                         type="text"
//                         id={`timings-${index}`}
//                         className="form-control"
//                         value={prescription.timings}
//                         onChange={(e) =>
//                           handlePrescriptionChange(
//                             index,
//                             "timings",
//                             e.target.value
//                           )
//                         }
//                         required
//                       />
//                     </div> */}
//                     <div className="col-md-4">
//                       <label className="form-label">Timings</label>
//                       <div className="d-flex align-items-center gap-3">
//                         <div className="form-check">
//                           <input
//                             type="checkbox"
//                             id={`morning-${index}`}
//                             className="form-check-input"
//                             checked={prescription.timings.includes("Morning")}
//                             onChange={(e) =>
//                               handleTimingChange(
//                                 index,
//                                 "Morning",
//                                 e.target.checked
//                               )
//                             }
//                           />
//                           <label
//                             htmlFor={`morning-${index}`}
//                             className="form-check-label"
//                           >
//                             Morning
//                           </label>
//                         </div>
//                         <div className="form-check">
//                           <input
//                             type="checkbox"
//                             id={`afternoon-${index}`}
//                             className="form-check-input"
//                             checked={prescription.timings.includes("Afternoon")}
//                             onChange={(e) =>
//                               handleTimingChange(
//                                 index,
//                                 "Afternoon",
//                                 e.target.checked
//                               )
//                             }
//                           />
//                           <label
//                             htmlFor={`afternoon-${index}`}
//                             className="form-check-label"
//                           >
//                             Afternoon
//                           </label>
//                         </div>
//                         <div className="form-check">
//                           <input
//                             type="checkbox"
//                             id={`evening-${index}`}
//                             className="form-check-input"
//                             checked={prescription.timings.includes("Evening")}
//                             onChange={(e) =>
//                               handleTimingChange(
//                                 index,
//                                 "Evening",
//                                 e.target.checked
//                               )
//                             }
//                           />
//                           <label
//                             htmlFor={`evening-${index}`}
//                             className="form-check-label"
//                           >
//                             Evening
//                           </label>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//                 <button
//                   type="button"
//                   className="btn btn-secondary mb-3"
//                   onClick={addPrescriptionRow}
//                 >
//                   Add More Medicine
//                 </button>
//                 <select
//                   className="form-select my-4"
//                   value={statusToChange}
//                   onChange={(e) => handleStatusChange(e.target.value)}
//                 >
//                   <option value="Appointment">Appointment</option>
//                   <option value="Active">Active</option>
//                   <option value="Discharged">Discharged</option>
//                   <option value="Admitted">Admitted</option>
//                   {/* <option value="Critical">Critical</option> */}
//                   {/* <option value="Recovered">Recovered</option> */}
//                   {/* <option value="Transferred">Transferred</option> */}
//                   {/* <option value="Awaiting Test Results">
//                     Awaiting Test Results
//                   </option> */}
//                   {/* <option value="Deceased">Deceased</option> */}
//                   {/* <option value="Discharge in Process">
//                     Discharge in Process
//                   </option> */}
//                   {/* <option value="Pending Admission">Pending Admission</option> */}
//                   {/* <option value="Stable">Stable</option> */}
//                 </select>
//                 <button
//                   type="submit"
//                   className="btn btn-primary"
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? "Submitting..." : "Submit"}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DoctorTreatPatient;

import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const DoctorTreatPatient = () => {
  const location = useLocation();
  const { patientName } = useParams(); // Access the dynamic route parameter
  const appointment = location.state?.appointment || {}; // Fallback to an empty object if undefined

  const [ailmentsData, setAilmentsData] = useState(null); // Handle the full ailments data structure
  const [treatmentDetails, setTreatmentDetails] = useState(""); // Track the treatment details input
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [prescriptions, setPrescriptions] = useState([]);
  const [statusToChange, setStatusToChange] = useState(appointment.status);
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const doctorId = useSelector((state) => state.auth.user.data._id);
  console.log(doctorId);
  // Destructure patient details from the appointment or default to an empty object
  const {
    firstName,
    middleName,
    lastName,
    email,
    phoneNumber,
    dateOfBirth,
    gender,
    status,
    age,
  } = appointment;

  console.log(appointment);

  // Fetch ailments of the patient
  useEffect(() => {
    const fetchAilments = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/patient/ailments/${appointment.id}`
        );

        if (!response.ok) throw new Error("Failed to fetch ailments");

        const data = await response.json();
        console.log(data);
        setAilmentsData(data.patientAilments);
      } catch (error) {
        console.error("Error fetching ailments:", error.message);
        setAilmentsData([]);
      }
    };

    if (appointment.id) fetchAilments();
  }, [appointment.id]);

  // Add a new row for prescription input
  const addPrescription = () => {
    setPrescriptions((prev) => [
      ...prev,
      { medicineName: "", dosage: [], timings: [] },
    ]);
  };

  // Handle changes in prescription fields
  const handlePrescriptionChange = (index, field, value) => {
    setPrescriptions((prev) => {
      const updated = [...prev];
      updated[index][field] = value;
      return updated;
    });
  };

  const handleDosageOptionChange = (index, option, isChecked) => {
    setPrescriptions((prev) => {
      const updated = [...prev];
      const dosage = updated[index].dosage;
      updated[index].dosage = isChecked
        ? [...dosage, option]
        : dosage.filter((item) => item !== option);

      return updated;
    });
  };

  // const handleTimingChange = (index, timeOfDay, isChecked) => {
  //   setPrescriptions((prev) => {
  //     const updated = [...prev];
  //     const timings = updated[index].timings;

  //     updated[index].timings = isChecked
  //       ? [...timings, timeOfDay]
  //       : timings.filter((time) => time !== timeOfDay);

  //     return updated;
  //   });
  // };

  // const handlePrescriptionSubmit = (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   // Handle data submission logic here
  // };

  const handleTimingChange = (index, timeOfDay, isChecked) => {
    setPrescriptions((prev) => {
      const updated = [...prev];
      const timings = updated[index].timings;

      updated[index].timings = isChecked
        ? timings.includes(timeOfDay)
          ? timings // If the value already exists, return the same array
          : [...timings, timeOfDay] // Add the new value if it doesn't exist
        : timings.filter((time) => time !== timeOfDay); // Remove the value if unchecked

      return updated;
    });
  };

  const handlePrescriptionSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submittig");
    setIsSubmitting(true);

    console.log({
      patientId: appointment.id,
      doctorId: doctorId,
      prescriptions: prescriptions,
      statusToChange: statusToChange,
    });

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/doctor/patient-treatment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          body: JSON.stringify({
            patientId: appointment.id,
            doctorId: doctorId,
            prescription: prescriptions,
            statusToChange: statusToChange,
          }),
        }
      );

      const data = await response.json();
      console.log(data, response);
      if (!response.ok) throw new Error("Failed to submit treatment details");
      // useNavigate("/doctor-appointment");
      alert("Treatment details submitted successfully!");
      navigate("/doctor-appointment");
      setTreatmentDetails(""); // Reset the input
    } catch (error) {
      console.error("Error submitting treatment:", error, error.message);
      alert("Failed to submit treatment details");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStatusChange = (newStatus) => {
    setStatusToChange(newStatus); // Update the status based on the selected option
  };

  const removePrescription = (indexToRemove) => {
    setPrescriptions((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <section className="bg-dashboard">
      <div className="container-fluid">
        <div className="row">
          <Sidebar colClass="col-xl-3 col-lg-4 col-md-5 col-12" />
          <div className="col-xl-9 col-lg-8 col-md-7 mt-4 mt-sm-0">
            <div>
              <h1 className="text-primary mb-4">Patient Details</h1>
              {appointment ? (
                <div className="card p-4 border rounded shadow-sm bg-light">
                  <div
                    className="d-grid"
                    style={{
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(250px, 1fr))",
                      gap: "1rem",
                    }}
                  >
                    <div>
                      <p className="mb-1">
                        <strong>Full Name:</strong>
                      </p>
                      <p>{`${firstName} ${middleName} ${lastName}`}</p>
                    </div>
                    <div>
                      <p className="mb-1">
                        <strong>Email:</strong>
                      </p>
                      <p>{email}</p>
                    </div>
                    <div>
                      <p className="mb-1">
                        <strong>Phone Number:</strong>
                      </p>
                      <p>{phoneNumber}</p>
                    </div>
                    <div>
                      <p className="mb-1">
                        <strong>Date of Birth:</strong>
                      </p>
                      <p>{new Date(dateOfBirth).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="mb-1">
                        <strong>Gender:</strong>
                      </p>
                      <p>{gender}</p>
                    </div>
                    <div>
                      <p className="mb-1">
                        <strong>Status:</strong>
                      </p>
                      <p>{status}</p>
                    </div>
                    <div>
                      <p className="mb-1">
                        <strong>Age:</strong>
                      </p>
                      <p>{age}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-danger">No patient details available.</p>
              )}
            </div>

            <div className="mt-4">
              <h1>Patient Ailments</h1>
              {ailmentsData === null ? (
                <p>Loading...</p>
              ) : ailmentsData.length === 0 ? (
                <p>No ailments found for this patient.</p>
              ) : (
                <div className="d-flex flex-column gap-5">
                  {ailmentsData.map((entry) => (
                    <div
                      key={entry._id}
                      className="mb-4 p-4 border rounded shadow-sm bg-light"
                    >
                      <h3 className="text-primary">
                        Diagnosed On:{" "}
                        {new Date(entry.dateAndTime).toLocaleString()}
                      </h3>
                      <h4 className="mt-3">Diagnosed By:</h4>
                      <ul className="list-unstyled">
                        {entry.diagnosedBy.map((staff) => (
                          <li key={staff.staffId} className="mb-2">
                            <strong>Role:</strong> {staff.role} (ID:{" "}
                            {staff.staffId})
                          </li>
                        ))}
                      </ul>
                      <h4 className="mt-3">Ailments:</h4>
                      <div className="row">
                        {entry.ailments.map((ailment) => (
                          <div
                            key={ailment._id}
                            className="col-md-4 mb-4 d-flex flex-column align-items-start border rounded p-3 shadow-sm bg-white"
                          >
                            <h5 className="font-weight-bold text-dark">
                              {ailment.name}
                            </h5>
                            <p className="mb-1">
                              <strong>Severity:</strong> {ailment.severity}
                            </p>
                            <p className="mb-0">
                              <strong>Details:</strong> {ailment.details}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-4">
              <h1>Prescription Details</h1>
              <form onSubmit={handlePrescriptionSubmit} className="card p-4">
                {prescriptions.map((prescription, index) => (
                  <div key={index} className="row mb-3">
                    <div className="col-md-4">
                      <label
                        htmlFor={`medicineName-${index}`}
                        className="form-label"
                      >
                        Medicine Name
                      </label>
                      <input
                        type="text"
                        id={`medicineName-${index}`}
                        className="form-control"
                        value={prescription.medicineName}
                        onChange={(e) =>
                          handlePrescriptionChange(
                            index,
                            "medicineName",
                            e.target.value
                          )
                        }
                        required
                      />
                    </div>
                    <div className="col-md-4">
                      <label
                        htmlFor={`dosageType-${index}`}
                        className="form-label"
                      >
                        Dosage
                      </label>
                      <select
                        id={`dosageType-${index}`}
                        className="form-select mb-2"
                        value={prescription.dosageType}
                        onChange={(e) =>
                          handlePrescriptionChange(
                            index,
                            "dosageType",
                            e.target.value
                          )
                        }
                        required
                      >
                        <option value="">Select Dosage Type</option>
                        <option value="Tablet">Tablet</option>
                        <option value="Syrup">Syrup</option>
                      </select>
                      <div className="d-flex align-items-center gap-3">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            id={`1tab-${index}`}
                            className="form-check-input"
                            checked={prescription.dosage.includes("1 tab")}
                            onChange={(e) =>
                              handleDosageOptionChange(
                                index,
                                "1 tab",
                                e.target.checked
                              )
                            }
                          />
                          <label
                            htmlFor={`1tab-${index}`}
                            className="form-check-label"
                          >
                            1 Tab
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            id={`halfTab-${index}`}
                            className="form-check-input"
                            checked={prescription.dosage.includes("1/2 tab")}
                            onChange={(e) =>
                              handleDosageOptionChange(
                                index,
                                "1/2 tab",
                                e.target.checked
                              )
                            }
                          />
                          <label
                            htmlFor={`halfTab-${index}`}
                            className="form-check-label"
                          >
                            1/2 Tab
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            id={`10ml-${index}`}
                            className="form-check-input"
                            checked={prescription.dosage.includes("10 ml")}
                            onChange={(e) =>
                              handleDosageOptionChange(
                                index,
                                "10 ml",
                                e.target.checked
                              )
                            }
                          />
                          <label
                            htmlFor={`10ml-${index}`}
                            className="form-check-label"
                          >
                            10 ml
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Timings</label>
                      <div className="d-flex align-items-center gap-3">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            id={`morning-${index}`}
                            className="form-check-input"
                            checked={prescription.timings.includes("Morning")}
                            onChange={(e) =>
                              handleTimingChange(
                                index,
                                "Morning",
                                e.target.checked
                              )
                            }
                          />
                          <label
                            htmlFor={`morning-${index}`}
                            className="form-check-label"
                          >
                            Morning
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            id={`afternoon-${index}`}
                            className="form-check-input"
                            checked={prescription.timings.includes("Afternoon")}
                            onChange={(e) =>
                              handleTimingChange(
                                index,
                                "Afternoon",
                                e.target.checked
                              )
                            }
                          />
                          <label
                            htmlFor={`afternoon-${index}`}
                            className="form-check-label"
                          >
                            Afternoon
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            id={`evening-${index}`}
                            className="form-check-input"
                            checked={prescription.timings.includes("Evening")}
                            onChange={(e) =>
                              handleTimingChange(
                                index,
                                "Evening",
                                e.target.checked
                              )
                            }
                          />
                          <label
                            htmlFor={`evening-${index}`}
                            className="form-check-label"
                          >
                            Evening
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 text-end">
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => removePrescription(index)}
                      >
                        &times;
                      </button>
                    </div>
                  </div>
                ))}

                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-secondary mt-2"
                    onClick={addPrescription}
                  >
                    Add Prescription
                  </button>
                </div>

                <div className="d-flex align-items-center gap-3 mt-4">
                  <select
                    className="form-select"
                    value={statusToChange}
                    onChange={(e) => handleStatusChange(e.target.value)}
                  >
                    <option value="Appointment">Appointment</option>
                    <option value="Active">Active</option>
                    <option value="Discharged">Discharged</option>
                    <option value="Admitted">Admitted</option>
                  </select>
                  <button type="submit" className="btn btn-primary">
                    Save Prescription
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorTreatPatient;
