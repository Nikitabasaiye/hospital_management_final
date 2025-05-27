// import React from "react";
// import { Link } from "react-router-dom";

// import image1 from "../../assets/images/doctors/01.jpg";

// import Sidebar from "../../components/Sidebar";
// import AdminFooter from "../../components/dashboard/AdminFooter";
// import { toast } from "react-toastify";

// export default function DoctorProfileSetting() {
//   const handleUpdatePersonalInfo = () => {
//     console.log();
//   };
//   return (
//     <>
//       <section className="bg-dashboard">
//         <div className="container">
//           <div className="row justify-content-center">
//             <Sidebar colClass="col-xl-4 col-lg-4 col-md-5 col-12" />
//             <div className="col-xl-8 col-lg-8 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
//               <h5 className="mb-0 pb-2"> Schedule Timing </h5>{" "}
//               <div className="rounded shadow mt-4">
//                 <div className="p-4 border-bottom">
//                   <h5 className="mb-0"> Personal Information: </h5>{" "}
//                 </div>
//                 <div className="p-4 border-bottom">
//                   <div className="row align-items-center">
//                     <div className="col-lg-2 col-md-4">
//                       <img
//                         src={image1}
//                         className="avatar avatar-md-md rounded-pill shadow mx-auto d-block"
//                         alt=""
//                       />
//                     </div>
//                     <div className="col-lg-5 col-md-8 text-center text-md-start mt-4 mt-sm-0">
//                       <h5 className=""> Upload your picture </h5>{" "}
//                       <p className="text-muted mb-0">
//                         {" "}
//                         For best results, use an image at least 256 px by 256 px
//                         in either.jpg or.png format{" "}
//                       </p>{" "}
//                     </div>
//                     <div className="col-lg-5 col-md-12 text-lg-end text-center mt-4 mt-lg-0">
//                       <Link to="#" className="btn btn-primary">
//                         {" "}
//                         Upload{" "}
//                       </Link>{" "}
//                       <Link to="#" className="btn btn-soft-primary ms-2">
//                         {" "}
//                         Remove{" "}
//                       </Link>{" "}
//                     </div>{" "}
//                   </div>{" "}
//                 </div>
//                 <div className="p-4">
//                   <form onSubmit={handleUpdatePersonalInfo}>
//                     <div className="row">
//                       <div className="col-md-6">
//                         <div className="mb-3">
//                           <label className="form-label"> First Name </label>{" "}
//                           <input
//                             name="name"
//                             id="name"
//                             type="text"
//                             className="form-control"
//                             placeholder="First Name :"
//                           />
//                         </div>{" "}
//                       </div>
//                       <div className="col-md-6">
//                         <div className="mb-3">
//                           <label className="form-label"> Last Name </label>{" "}
//                           <input
//                             name="name"
//                             id="name2"
//                             type="text"
//                             className="form-control"
//                             placeholder="Last Name :"
//                           />
//                         </div>{" "}
//                       </div>
//                       <div className="col-md-6">
//                         <div className="mb-3">
//                           <label className="form-label"> Your Email </label>{" "}
//                           <input
//                             name="email"
//                             id="email"
//                             type="email"
//                             className="form-control"
//                             placeholder="Your email :"
//                           />
//                         </div>{" "}
//                       </div>
//                       <div className="col-md-6">
//                         <div className="mb-3">
//                           <label className="form-label"> Phone no. </label>{" "}
//                           <input
//                             name="number"
//                             id="number"
//                             type="text"
//                             className="form-control"
//                             placeholder="Phone no. :"
//                           />
//                         </div>
//                       </div>
//                       <div className="col-md-6">
//                         <div className="mb-3">
//                           <label className="form-label">Speciality </label>{" "}
//                           <input
//                             name="number"
//                             id="number"
//                             type="text"
//                             className="form-control"
//                             placeholder="Speciality :"
//                           />
//                         </div>
//                       </div>
//                       {/* <div className="col-md-12">
//                         <div className="mb-3">
//                           <label className="form-label"> Your Bio Here </label>{" "}
//                           <textarea
//                             name="comments"
//                             id="comments"
//                             rows="4"
//                             className="form-control"
//                             placeholder="Bio :"
//                           >
//                             {" "}
//                           </textarea>{" "}
//                         </div>{" "}
//                       </div> */}
//                     </div>
//                     <div className="row">
//                       <div className="col-sm-12">
//                         <input
//                           type="submit"
//                           id="submit"
//                           name="send"
//                           className="btn btn-primary"
//                           value="Save changes"
//                         />
//                       </div>{" "}
//                     </div>{" "}
//                   </form>{" "}
//                 </div>{" "}
//               </div>
//               <div className="rounded shadow mt-4">
//                 <div className="p-4 border-bottom">
//                   <h5 className="mb-0"> Change Password: </h5>{" "}
//                 </div>
//                 <div className="p-4">
//                   <form>
//                     <div className="row">
//                       <div className="col-lg-12">
//                         <div className="mb-3">
//                           <label className="form-label"> Old password: </label>{" "}
//                           <input
//                             type="password"
//                             className="form-control"
//                             placeholder="Old password"
//                             required=""
//                           />
//                         </div>{" "}
//                       </div>
//                       <div className="col-lg-12">
//                         <div className="mb-3">
//                           <label className="form-label"> New password: </label>{" "}
//                           <input
//                             type="password"
//                             className="form-control"
//                             placeholder="New password"
//                             required=""
//                           />
//                         </div>{" "}
//                       </div>
//                       <div className="col-lg-12">
//                         <div className="mb-3">
//                           <label className="form-label">
//                             {" "}
//                             Re - type New password:{" "}
//                           </label>{" "}
//                           <input
//                             type="password"
//                             className="form-control"
//                             placeholder="Re-type New password"
//                             required=""
//                           />
//                         </div>{" "}
//                       </div>
//                       <div className="col-lg-12 mt-2 mb-0">
//                         <button className="btn btn-primary">
//                           {" "}
//                           Save password{" "}
//                         </button>{" "}
//                       </div>{" "}
//                     </div>{" "}
//                   </form>{" "}
//                 </div>{" "}
//               </div>
//               {/* <div className="rounded shadow mt-4">
//                 <div className="p-4 border-bottom">
//                   <h5 className="mb-0"> Account Notifications: </h5>{" "}
//                 </div>
//                 <div className="p-4">
//                   <div className="d-flex justify-content-between pb-4">
//                     <h6 className="mb-0 fw-normal">
//                       {" "}
//                       When someone mentions me{" "}
//                     </h6>{" "}
//                     <div className="form-check">
//                       <input
//                         type="checkbox"
//                         className="form-check-input"
//                         value=""
//                         id="customSwitch1"
//                       />
//                       <label
//                         className="form-check-label"
//                         htmlFor="customSwitch1"
//                       >
//                         {" "}
//                       </label>{" "}
//                     </div>{" "}
//                   </div>{" "}
//                   <div className="d-flex justify-content-between py-4 border-top">
//                     <h6 className="mb-0 fw-normal">
//                       {" "}
//                       When someone follows me{" "}
//                     </h6>{" "}
//                     <div className="form-check">
//                       <input
//                         type="checkbox"
//                         className="form-check-input"
//                         id="customSwitch2"
//                         defaultChecked
//                       />
//                       <label
//                         className="form-check-label"
//                         htmlFor="customSwitch2"
//                       >
//                         {" "}
//                       </label>{" "}
//                     </div>{" "}
//                   </div>{" "}
//                   <div className="d-flex justify-content-between py-4 border-top">
//                     <h6 className="mb-0 fw-normal">
//                       {" "}
//                       When shares my activity{" "}
//                     </h6>{" "}
//                     <div className="form-check">
//                       <input
//                         type="checkbox"
//                         className="form-check-input"
//                         id="customSwitch3"
//                       />
//                       <label
//                         className="form-check-label"
//                         htmlFor="customSwitch3"
//                       >
//                         {" "}
//                       </label>{" "}
//                     </div>{" "}
//                   </div>{" "}
//                   <div className="d-flex justify-content-between py-4 border-top">
//                     <h6 className="mb-0 fw-normal">
//                       {" "}
//                       When someone messages me{" "}
//                     </h6>{" "}
//                     <div className="form-check">
//                       <input
//                         type="checkbox"
//                         className="form-check-input"
//                         id="customSwitch4"
//                         defaultChecked
//                       />
//                       <label
//                         className="form-check-label"
//                         htmlFor="customSwitch4"
//                       >
//                         {" "}
//                       </label>{" "}
//                     </div>{" "}
//                   </div>{" "}
//                 </div>{" "}
//               </div>
//               <div className="rounded shadow mt-4">
//                 <div className="p-4 border-bottom">
//                   <h5 className="mb-0"> Marketing Notifications: </h5>{" "}
//                 </div>
//                 <div className="p-4">
//                   <div className="d-flex justify-content-between pb-4">
//                     <h6 className="mb-0 fw-normal">
//                       {" "}
//                       There is a sale or promotion{" "}
//                     </h6>{" "}
//                     <div className="form-check">
//                       <input
//                         type="checkbox"
//                         className="form-check-input"
//                         id="customSwitch5"
//                         defaultChecked
//                       />
//                       <label
//                         className="form-check-label"
//                         htmlFor="customSwitch5"
//                       >
//                         {" "}
//                       </label>{" "}
//                     </div>{" "}
//                   </div>{" "}
//                   <div className="d-flex justify-content-between py-4 border-top">
//                     <h6 className="mb-0 fw-normal"> Company news </h6>{" "}
//                     <div className="form-check">
//                       <input
//                         type="checkbox"
//                         className="form-check-input"
//                         id="customSwitch6"
//                       />
//                       <label
//                         className="form-check-label"
//                         htmlFor="customSwitch6"
//                       >
//                         {" "}
//                       </label>{" "}
//                     </div>{" "}
//                   </div>{" "}
//                   <div className="d-flex justify-content-between py-4 border-top">
//                     <h6 className="mb-0 fw-normal"> Weekly jobs </h6>{" "}
//                     <div className="form-check">
//                       <input
//                         type="checkbox"
//                         className="form-check-input"
//                         id="customSwitch7"
//                       />
//                       <label
//                         className="form-check-label"
//                         htmlFor="customSwitch7"
//                       >
//                         {" "}
//                       </label>{" "}
//                     </div>{" "}
//                   </div>{" "}
//                   <div className="d-flex justify-content-between py-4 border-top">
//                     <h6 className="mb-0 fw-normal"> Unsubscribe News </h6>{" "}
//                     <div className="form-check">
//                       <input
//                         type="checkbox"
//                         className="form-check-input"
//                         id="customSwitch8"
//                         defaultChecked
//                       />
//                       <label
//                         className="form-check-label"
//                         htmlFor="customSwitch8"
//                       >
//                         {" "}
//                       </label>{" "}
//                     </div>{" "}
//                   </div>{" "}
//                 </div>{" "}
//               </div> */}{" "}
//               {/** No need here for now */}
//               <div className="rounded shadow mt-4">
//                 <div className="p-4 border-bottom">
//                   <h5 className="mb-0 text-danger"> Delete Account: </h5>{" "}
//                 </div>
//                 <div className="p-4">
//                   <h6 className="mb-0 fw-normal">
//                     {" "}
//                     Do you want to delete the account ? Please press below
//                     "Delete" button
//                   </h6>{" "}
//                   <div className="mt-4">
//                     <button className="btn btn-danger"> Delete Account </button>{" "}
//                   </div>{" "}
//                 </div>{" "}
//               </div>{" "}
//             </div>{" "}
//           </div>{" "}
//         </div>{" "}
//       </section>{" "}
//       <AdminFooter />
//     </>
//   );
// }

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import image1 from "../../assets/images/doctors/01.jpg";
import Sidebar from "../../components/Sidebar";
import AdminFooter from "../../components/dashboard/AdminFooter";

export default function DoctorProfileSetting() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    speciality: "",
  });

  const [passwordForm, setPasswordForm] = useState({
    newPassword: "",
    confirmPassword: "",
    oldPassword: "",
  });

  const [token, setToken] = useState(localStorage.getItem("token"));
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdatePersonalInfo = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, speciality } = formData;

    // Basic validation
    if (!firstName || !lastName || !email || !phone || !speciality) {
      toast.error("Please fill out all fields!");
      return;
    }

    try {
      // Update user data in the database
      // Replace this with your actual API call
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/doctor/update-info`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          body: JSON.stringify({ formData }),
        }
      );
      const data = await response.json();
      toast.success(`${data.message}`);
    } catch (error) {
      toast.error(error);
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    const { oldPassword, newPassword, confirmPassword } = passwordForm;

    // Basic validation
    if (!newPassword || !confirmPassword || !oldPassword) {
      toast.error("Please fill out all fields!");
      return;
    }

    // Check if new password and confirm password match
    if (newPassword !== confirmPassword) {
      toast.error("New password and confirm password do not match!");
      return;
    }

    try {
      // Make sure the token is available before making the request
      if (!token) {
        toast.error("Authorization token is missing!");
        return;
      }

      // Make the API call to update the password
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/doctor/update-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`, // Ensure the token is passed correctly
          },
          body: JSON.stringify({ passwordForm }),
        }
      );

      // Check if the response is ok (status 2xx)
      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.message || "Something went wrong.");
        return;
      }

      const data = await response.json();
      toast.success(`${data.message}`);

      // Reset the form after successful update
      setPasswordForm({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error) {
      toast.error(
        error.message || "An error occurred while updating the password."
      );
    }
  };

  return (
    <>
      <section className="bg-dashboard">
        <div className="container">
          <div className="row justify-content-center">
            <Sidebar colClass="col-xl-4 col-lg-4 col-md-5 col-12" />
            <div className="col-xl-8 col-lg-8 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <h5 className="mb-0 pb-2">Schedule Timing</h5>
              <div className="rounded shadow mt-4">
                <div className="p-4 border-bottom">
                  <h5 className="mb-0">Personal Information:</h5>
                </div>
                <div className="p-4 border-bottom">
                  <div className="row align-items-center">
                    <div className="col-lg-2 col-md-4">
                      <img
                        src={image1}
                        className="avatar avatar-md-md rounded-pill shadow mx-auto d-block"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-5 col-md-8 text-center text-md-start mt-4 mt-sm-0">
                      <h5 className="">Upload your picture</h5>
                      <p className="text-muted mb-0">
                        For best results, use an image at least 256 px by 256 px
                        in either .jpg or .png format
                      </p>
                    </div>
                    <div className="col-lg-5 col-md-12 text-lg-end text-center mt-4 mt-lg-0">
                      <Link to="#" className="btn btn-primary">
                        Upload
                      </Link>
                      <Link to="#" className="btn btn-soft-primary ms-2">
                        Remove
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <form onSubmit={handleUpdatePersonalInfo}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">First Name</label>
                          <input
                            name="firstName"
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Last Name</label>
                          <input
                            name="lastName"
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Your Email</label>
                          <input
                            name="email"
                            type="email"
                            className="form-control"
                            placeholder="Your email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Phone no.</label>
                          <input
                            name="phone"
                            type="text"
                            className="form-control"
                            placeholder="Phone no."
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Speciality</label>
                          <select
                            name="speciality"
                            className="form-control"
                            value={formData.speciality}
                            onChange={handleChange}
                          >
                            <option value="" disabled>
                              Select Speciality
                            </option>
                            <option value="Psychologist">Psychologist</option>
                            <option value="Cardiologist">Cardiologist</option>
                            <option value="Neurologist">Neurologist</option>
                            <option value="Pediatrician">Pediatrician</option>
                            <option value="Dermatologist">Dermatologist</option>
                            <option value="Orthopedic">Orthopedic</option>
                            <option value="General Physician">
                              General Physician
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <input
                          type="submit"
                          id="submit"
                          name="send"
                          className="btn btn-primary"
                          value="Save changes"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="p-4">
                  {" "}
                  <form onSubmit={handleUpdatePassword}>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">Old Password:</label>
                        <input
                          // type="password"
                          className="form-control"
                          name="oldPassword"
                          placeholder="Enter old password"
                          value={passwordForm.oldPassword}
                          onChange={(e) =>
                            setPasswordForm({
                              ...passwordForm,
                              oldPassword: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">New Password:</label>
                        <input
                          type="password"
                          className="form-control"
                          name="newPassword"
                          placeholder="Enter new password"
                          value={formData.newPassword}
                          onChange={(e) =>
                            setPasswordForm({
                              ...passwordForm,
                              newPassword: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Re-type New Password:
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          name="confirmPassword"
                          placeholder="Re-type new password"
                          value={formData.confirmPassword}
                          onChange={(e) =>
                            setPasswordForm({
                              ...passwordForm,
                              confirmPassword: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 mt-2 mb-0">
                      <button type="submit" className="btn btn-primary">
                        Save Password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="rounded shadow mt-4">
                <div className="p-4 border-bottom">
                  <h5 className="mb-0 text-danger">Delete Account:</h5>
                </div>
                <div className="p-4">
                  <h6 className="mb-0 fw-normal">
                    Do you want to delete the account? Please press below
                    "Delete" button
                  </h6>
                  <div className="mt-4">
                    <button className="btn btn-danger">Delete Account</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AdminFooter />
    </>
  );
}
