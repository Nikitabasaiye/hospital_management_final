// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// import profileImage from "../../assets/images/doctors/dr-profile.png";

// import AdminFooter from "../../components/dashboard/AdminFooter";
// import ScrollTop from "../../components/ScrollTop";
// import { useSelector } from "react-redux";

// import {
//   doctorData,
//   experienceData,
//   patientsData,
//   partners,
// } from "../../data/data";
// import {
//   FiHeart,
//   FiFacebook,
//   FiLinkedin,
//   FiGithub,
//   FiTwitter,
//   FiArrowRight,
//   FiPhone,
//   FiMail,
// } from "react-icons/fi";
// import {
//   RiMapPinLine,
//   RiMoneyDollarCircleLine,
//   RiTimeFill,
// } from "react-icons/ri";

// import TinySlider from "tiny-slider-react";
// import "tiny-slider/dist/tiny-slider.css";
// import Sidebar from "../../components/Sidebar";

// const DoctorProfile = () => {
//   const [activeIndex, setActiveIndex] = useState(1);

//   const settings = {
//     items: 4,
//     controls: false,
//     mouseDrag: true,
//     loop: true,
//     rewind: true,
//     autoplay: true,
//     autoplayTimeout: 3000,
//     speed: 400,
//     gutter: 24,
//     responsive: {
//       992: { items: 4 },
//       767: { items: 2 },
//       320: { items: 1 },
//     },
//   };

//   const settings2 = {
//     items: 1,
//     controls: false,
//     mouseDrag: true,
//     loop: true,
//     rewind: true,
//     autoplay: true,
//     autoplayTimeout: 3000,
//     speed: 400,
//     gutter: 16,
//   };

//   const renderActiveTab = () => {
//     switch (activeIndex) {
//       case 1:
//         return (
//           <div className="tab-pane fade show active">
//             <h5 className="mb-1">Dr. Christopher Burrell</h5>
//             <Link to="#" className="text-primary">
//               Gynecologist
//             </Link>
//             , &nbsp;{" "}
//             <Link to="#" className="text-primary">
//               Ph.D
//             </Link>
//             <p className="text-muted mt-4">
//               A gynecologist is a surgeon who specializes in the female
//               reproductive system...
//             </p>
//             <h6>Specialties:</h6>
//             <ul className="list-unstyled mt-4">
//               <li className="mt-1 ms-0">
//                 <FiArrowRight className="text-primary" /> Womens health services
//               </li>
//               <li className="mt-1 ms-0">
//                 <FiArrowRight className="text-primary" /> Pregnancy care
//               </li>
//               <li className="mt-1 ms-0">
//                 <FiArrowRight className="text-primary" /> Surgical procedures
//               </li>
//               <li className="mt-1 ms-0">
//                 <FiArrowRight className="text-primary" /> Specialty care
//               </li>
//             </ul>
//             <h6>My Team:</h6>
//             <div className="row">
//               {doctorData.slice(0, 4).map((item, index) => (
//                 <div
//                   className="col-xl-3 col-lg-3 col-md-6 mt-4 pt-2"
//                   key={index}
//                 >
//                   <div className="card team border-0 rounded shadow overflow-hidden">
//                     <div className="team-person position-relative overflow-hidden">
//                       <img src={item.image} className="img-fluid" alt="" />
//                       <ul className="list-unstyled team-like">
//                         <li>
//                           <Link
//                             to="#"
//                             className="btn btn-icon btn-pills btn-soft-danger"
//                           >
//                             <FiHeart className="icons" />
//                           </Link>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="card-body">
//                       <Link to="#" className="title text-dark h5 d-block mb-0">
//                         {item.name}
//                       </Link>
//                       <small className="text-muted speciality">
//                         {item.speciality}
//                       </small>
//                       <div className="d-flex justify-content-between align-items-center mt-2">
//                         <ul className="list-unstyled mb-0">
//                           {Array(5)
//                             .fill()
//                             .map((_, i) => (
//                               <li className="list-inline-item" key={i}>
//                                 <i className="mdi mdi-star text-warning"></i>
//                               </li>
//                             ))}
//                         </ul>
//                         <p className="text-muted mb-0">5 Star</p>
//                       </div>
//                       <ul className="list-unstyled mt-2 mb-0">
//                         <li className="d-flex align-items-center ms-0">
//                           <RiMapPinLine className="text-primary align-middle mb-0" />
//                           <small className="text-muted ms-2">
//                             {item.location}
//                           </small>
//                         </li>
//                         <li className="d-flex mt-2 align-items-center ms-0">
//                           <RiTimeFill className="text-primary align-middle mb-0" />
//                           <small className="text-muted ms-2">{item.time}</small>
//                         </li>
//                         <li className="d-flex mt-2 align-items-center ms-0">
//                           <RiMoneyDollarCircleLine className="text-primary align-middle mb-0" />
//                           <small className="text-muted ms-2">
//                             {item.charges}
//                           </small>
//                         </li>
//                       </ul>
//                       <ul className="list-unstyled mt-2 mb-0">
//                         <li className="list-inline-item">
//                           <Link
//                             to="#"
//                             className="btn btn-icon btn-pills btn-soft-primary"
//                           >
//                             <FiFacebook className="icons" />
//                           </Link>
//                         </li>
//                         <li className="mt-2 list-inline-item">
//                           <Link
//                             to="#"
//                             className="btn btn-icon btn-pills btn-soft-primary"
//                           >
//                             <FiLinkedin className="icons" />
//                           </Link>
//                         </li>
//                         <li className="mt-2 list-inline-item">
//                           <Link
//                             to="#"
//                             className="btn btn-icon btn-pills btn-soft-primary"
//                           >
//                             <FiGithub className="icons" />
//                           </Link>
//                         </li>
//                         <li className="mt-2 list-inline-item">
//                           <Link
//                             to="#"
//                             className="btn btn-icon btn-pills btn-soft-primary"
//                           >
//                             <FiTwitter className="icons" />
//                           </Link>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         );

//       case 2:
//         return (
//           <div className="tab-pane fade show active">
//             <h5 className="mb-1">Experience:</h5>
//             <p className="text-muted mt-4">
//               The most well-known dummy text is the Lorem Ipsum...
//             </p>
//             <h6>Professional Experience:</h6>
//             <div className="row">
//               <div className="col-12 mt-4">
//                 <TinySlider settings={settings}>
//                   {experienceData.map((item, index) => (
//                     <div className="tiny-slide text-center" key={index}>
//                       <div className="card border-0 p-4 item-box mb-2 shadow rounded">
//                         <p className="text-muted mb-0">{item.time}</p>
//                         <h6 className="mt-1">{item.title}</h6>
//                         <p className="text-muted mb-0">{item.name}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </TinySlider>
//               </div>
//             </div>
//           </div>
//         );

//       case 3:
//         return (
//           <div className="tab-pane fade show active">
//             <div className="row justify-content-center">
//               <div className="col-lg-8 mt-4 pt-2 text-center">
//                 <TinySlider settings={settings2}>
//                   {patientsData.map((item, index) => (
//                     <div className="tiny-slide text-center" key={index}>
//                       <p className="text-muted fw-normal fst-italic">
//                         {item.desc}
//                       </p>
//                       <img
//                         src={item.image}
//                         className="img-fluid avatar avatar-small rounded-circle mx-auto shadow my-3"
//                         alt=""
//                       />
//                       <h6 className="text-primary">
//                         {item.name}{" "}
//                         <small className="text-muted">{item.title}</small>
//                       </h6>
//                       <ul className="list-unstyled mb-0">
//                         {Array(5)
//                           .fill()
//                           .map((_, i) => (
//                             <li className="list-inline-item" key={i}>
//                               <i className="mdi mdi-star text-warning"></i>
//                             </li>
//                           ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </TinySlider>
//               </div>
//             </div>
//             <div className="row justify-content-center">
//               {partners.map((item, index) => (
//                 <div
//                   className="col-lg-2 col-md-2 col-6 text-center py-4"
//                   key={index}
//                 >
//                   <img src={item} className="avatar avatar-client" alt="" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         );

//       case 4:
//         return (
//           <div className="tab-pane fade show active">
//             <div className="row">
//               <div className="col-12">
//                 <div className="card map border-0">
//                   <div className="card-body p-0">
//                     <iframe
//                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.749508171170155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640f3c20d97b9b9%3A0xd928aa2252875a52!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1623043848815!5m2!1sen!2sus"
//                       style={{ border: "0", width: "100%", height: "350px" }}
//                       allowFullScreen=""
//                       loading="lazy"
//                       title="Google Map"
//                     ></iframe>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <Sidebar />
//       <div className="main-content">
//         <div className="page-content">
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col-lg-8">
//                 <div className="card border-0 rounded shadow">
//                   <div className="card-body">
//                     <div className="d-flex align-items-center">
//                       <img
//                         src={profileImage}
//                         alt=""
//                         className="avatar-lg rounded-circle shadow"
//                       />
//                       <div className="ms-3">
//                         <h4 className="mt-0 mb-1">Dr. Christopher Burrell</h4>
//                         <small className="text-muted">
//                           <FiPhone /> +1 234 567 890
//                         </small>
//                         <br />
//                         <small className="text-muted">
//                           <FiMail /> dr.christopher@example.com
//                         </small>
//                       </div>
//                     </div>
//                     <ul className="nav nav-tabs custom-nav mt-4">
//                       <li className="nav-item">
//                         <Link
//                           to="#"
//                           className={`nav-link ${
//                             activeIndex === 1 ? "active" : ""
//                           }`}
//                           onClick={() => setActiveIndex(1)}
//                         >
//                           Overview
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           to="#"
//                           className={`nav-link ${
//                             activeIndex === 2 ? "active" : ""
//                           }`}
//                           onClick={() => setActiveIndex(2)}
//                         >
//                           Experience
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           to="#"
//                           className={`nav-link ${
//                             activeIndex === 3 ? "active" : ""
//                           }`}
//                           onClick={() => setActiveIndex(3)}
//                         >
//                           Reviews
//                         </Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link
//                           to="#"
//                           className={`nav-link ${
//                             activeIndex === 4 ? "active" : ""
//                           }`}
//                           onClick={() => setActiveIndex(4)}
//                         >
//                           Location
//                         </Link>
//                       </li>
//                     </ul>
//                     <div className="tab-content mt-4">{renderActiveTab()}</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <AdminFooter />
//       <ScrollTop />
//     </div>
//   );
// };

// export default DoctorProfile;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Avatar,
//   Box,
//   Button,
//   Card,
//   CardContent,
//   Grid,
//   Tab,
//   Tabs,
//   Typography,
// } from "@mui/material";
// import {
//   FiHeart,
//   FiFacebook,
//   FiLinkedin,
//   FiGithub,
//   FiTwitter,
//   FiArrowRight,
//   FiPhone,
//   FiMail,
// } from "react-icons/fi";
// import {
//   RiMapPinLine,
//   RiMoneyDollarCircleLine,
//   RiTimeFill,
// } from "react-icons/ri";
// import TinySlider from "tiny-slider-react";
// import "tiny-slider/dist/tiny-slider.css";

// import profileImage from "../../assets/images/doctors/dr-profile.png";
// import AdminFooter from "../../components/dashboard/AdminFooter";
// import ScrollTop from "../../components/ScrollTop";
// import Sidebar from "../../components/Sidebar";
// import {
//   doctorData,
//   experienceData,
//   patientsData,
//   partners,
// } from "../../data/data";

// const DoctorProfile = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   const handleTabChange = (event, newValue) => setActiveTab(newValue);

//   const sliderSettings = {
//     items: 3,
//     controls: false,
//     mouseDrag: true,
//     loop: true,
//     rewind: true,
//     autoplay: true,
//     autoplayTimeout: 3000,
//     speed: 400,
//     gutter: 24,
//     responsive: {
//       992: { items: 4 },
//       767: { items: 2 },
//       320: { items: 1 },
//     },
//   };

//   const renderActiveTabContent = () => {
//     switch (activeTab) {
//       case 1:
//         return (
//           <Card variant="outlined">
//             <CardContent>
//               <Typography variant="h5" gutterBottom>
//                 Dr. Christopher Burrell
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 A gynecologist specializes in the female reproductive system...
//               </Typography>
//               <Typography variant="subtitle1" gutterBottom>
//                 Specialties:
//               </Typography>
//               <ul>
//                 <li>
//                   <FiArrowRight /> Women’s health services
//                 </li>
//                 <li>
//                   <FiArrowRight /> Pregnancy care
//                 </li>
//                 <li>
//                   <FiArrowRight /> Surgical procedures
//                 </li>
//                 <li>
//                   <FiArrowRight /> Specialty care
//                 </li>
//               </ul>
//               <Typography variant="subtitle1" gutterBottom>
//                 My Team:
//               </Typography>
//               <Grid container spacing={3}>
//                 {doctorData.slice(0, 4).map((item, index) => (
//                   <Grid item xs={12} sm={6} md={3} key={index}>
//                     <Card>
//                       <Box
//                         display="flex"
//                         flexDirection="column"
//                         alignItems="center"
//                         p={2}
//                       >
//                         <Avatar
//                           src={item.image}
//                           alt={item.name}
//                           sx={{ width: 80, height: 80 }}
//                         />
//                         <Typography variant="h6">{item.name}</Typography>
//                         <Typography variant="body2" color="textSecondary">
//                           {item.speciality}
//                         </Typography>
//                       </Box>
//                     </Card>
//                   </Grid>
//                 ))}
//               </Grid>
//             </CardContent>
//           </Card>
//         );
//       case 3:
//         return (
//           <Card variant="outlined">
//             <CardContent>
//               <Typography variant="h5">Experience:</Typography>
//               <Typography variant="body2" color="textSecondary" paragraph>
//                 The most well-known dummy text is Lorem Ipsum...
//               </Typography>
//               <TinySlider settings={sliderSettings}>
//                 {experienceData.map((item, index) => (
//                   <Card key={index}>
//                     <CardContent>
//                       <Typography variant="body2">{item.time}</Typography>
//                       <Typography variant="h6">{item.title}</Typography>
//                       <Typography variant="body2" color="textSecondary">
//                         {item.name}
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </TinySlider>
//             </CardContent>
//           </Card>
//         );
//       case 2:
//         return (
//           <Card variant="outlined">
//             <CardContent>
//               <Typography variant="h5">Reviews:</Typography>
//               <TinySlider settings={sliderSettings}>
//                 {patientsData.map((item, index) => (
//                   <Box key={index} textAlign="center">
//                     <Avatar
//                       src={item.image}
//                       alt={item.name}
//                       sx={{ width: 60, height: 60, mx: "auto" }}
//                     />
//                     <Typography variant="body2" color="textSecondary">
//                       {item.desc}
//                     </Typography>
//                     <Typography variant="h6">{item.name}</Typography>
//                   </Box>
//                 ))}
//               </TinySlider>
//             </CardContent>
//           </Card>
//         );
//       // case 4:
//       //   return (
//       //     <iframe
//       //       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.749508171170155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640f3c20d97b9b9%3A0xd928aa2252875a52!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1623043848815!5m2!1sen!2sus"
//       //       style={{ border: "0", width: "100%", height: "350px" }}
//       //       allowFullScreen
//       //       title="Google Map"
//       //     ></iframe>
//       //   );
//       default:
//         return (
//           <Card variant="outlined">
//             <CardContent>
//               <Typography variant="h5" gutterBottom>
//                 Dr. Christopher Burrell
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 A gynecologist specializes in the female reproductive system...
//               </Typography>
//               <Typography variant="subtitle1" gutterBottom>
//                 Specialties:
//               </Typography>
//               <ul>
//                 <li>
//                   <FiArrowRight /> Women’s health services
//                 </li>
//                 <li>
//                   <FiArrowRight /> Pregnancy care
//                 </li>
//                 <li>
//                   <FiArrowRight /> Surgical procedures
//                 </li>
//                 <li>
//                   <FiArrowRight /> Specialty care
//                 </li>
//               </ul>
//               <Typography variant="subtitle1" gutterBottom>
//                 My Team:
//               </Typography>
//               <Grid container spacing={3}>
//                 {doctorData.slice(0, 4).map((item, index) => (
//                   <Grid item xs={12} sm={6} md={3} key={index}>
//                     <Card>
//                       <Box
//                         display="flex"
//                         flexDirection="column"
//                         alignItems="center"
//                         p={2}
//                       >
//                         <Avatar
//                           src={item.image}
//                           alt={item.name}
//                           sx={{ width: 80, height: 80 }}
//                         />
//                         <Typography variant="h6">{item.name}</Typography>
//                         <Typography variant="body2" color="textSecondary">
//                           {item.speciality}
//                         </Typography>
//                       </Box>
//                     </Card>
//                   </Grid>
//                 ))}
//               </Grid>
//             </CardContent>
//           </Card>
//         );
//     }
//   };

//   return (
//     <section className="bg-dashboard d-flex flex-column flex-md-row">
//       <Sidebar colClass="col-md-4 col-lg-3" />
//       <Box flex={1} className="container-fluid py-4">
//         <Card variant="outlined" className="shadow-sm">
//           <CardContent>
//             <Box display="flex" alignItems="center" mb={3}>
//               <Avatar
//                 src={profileImage}
//                 alt="Profile"
//                 sx={{ width: 80, height: 80, mr: 2 }}
//                 className="me-3"
//               />
//               <Box>
//                 <Typography variant="h4" gutterBottom>
//                   Dr. Christopher Burrell
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   <FiPhone className="me-2" /> +1 234 567 890
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   <FiMail className="me-2" /> dr.christopher@example.com
//                 </Typography>
//               </Box>
//             </Box>
//             <Tabs
//               value={activeTab}
//               onChange={handleTabChange}
//               variant="fullWidth"
//               textColor="primary"
//               indicatorColor="primary"
//             >
//               <Tab label="Overview" />
//               <Tab label="Experience" />
//               <Tab label="Reviews" />
//               <Tab label="Location" />
//             </Tabs>
//             <Box mt={3}>{renderActiveTabContent()}</Box>
//           </CardContent>
//         </Card>
//         <AdminFooter className="mt-4" />
//         <ScrollTop />
//       </Box>
//     </section>
//   );

//   // return (
//   //   <section className="bg-dashboard">
//   //     <Sidebar colClass="col-xl-4 col-lg-4 col-md-5 col-12" />
//   //     <Box flex={1}>
//   //       <Box className="container-fluid">
//   //         <Card variant="outlined">
//   //           <CardContent>
//   //             <Box display="flex" alignItems="center" mb={2}>
//   //               <Avatar
//   //                 src={profileImage}
//   //                 alt="Profile"
//   //                 sx={{ width: 80, height: 80, mr: 2 }}
//   //               />
//   //               <Box>
//   //                 <Typography variant="h4">Dr. Christopher Burrell</Typography>
//   //                 <Typography variant="body2" color="textSecondary">
//   //                   <FiPhone /> +1 234 567 890
//   //                 </Typography>
//   //                 <Typography variant="body2" color="textSecondary">
//   //                   <FiMail /> dr.christopher@example.com
//   //                 </Typography>
//   //               </Box>
//   //             </Box>
//   //             <Tabs
//   //               value={activeTab}
//   //               onChange={handleTabChange}
//   //               variant="fullWidth"
//   //             >
//   //               <Tab label="Overview" />
//   //               <Tab label="Experience" />
//   //               <Tab label="Reviews" />
//   //               <Tab label="Location" />
//   //             </Tabs>
//   //             <Box mt={3}>{renderActiveTabContent()}</Box>
//   //           </CardContent>
//   //         </Card>
//   //       </Box>
//   //       <AdminFooter />
//   //       <ScrollTop />
//   //     </Box>
//   //   </section>
//   // );
// };

// export default DoctorProfile;

import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { FiPhone, FiMail, FiArrowRight } from "react-icons/fi";
import TinySlider from "tiny-slider-react";
import "tiny-slider/dist/tiny-slider.css";

import profileImage from "../../assets/images/doctors/dr-profile.png";
import AdminFooter from "../../components/dashboard/AdminFooter";
import ScrollTop from "../../components/ScrollTop";
import Sidebar from "../../components/Sidebar";
import { doctorData, experienceData, patientsData } from "../../data/data";

const DoctorProfile = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => setActiveTab(newValue);

  const sliderSettings = {
    items: 3,
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayTimeout: 3000,
    speed: 400,
    gutter: 24,
    responsive: {
      992: { items: 4 },
      767: { items: 2 },
      320: { items: 1 },
    },
  };

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 1:
        return (
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Dr. Christopher Burrell
              </Typography>
              <Typography variant="body2" color="textSecondary">
                A gynecologist specializing in the female reproductive system...
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Specialties:
              </Typography>
              <ul>
                <li>
                  <FiArrowRight /> Women’s health services
                </li>
                <li>
                  <FiArrowRight /> Pregnancy care
                </li>
                <li>
                  <FiArrowRight /> Surgical procedures
                </li>
                <li>
                  <FiArrowRight /> Specialty care
                </li>
              </ul>
              <Typography variant="subtitle1" gutterBottom>
                My Team:
              </Typography>
              <Grid container spacing={3}>
                {doctorData.slice(0, 4).map((item, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Card>
                      <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        p={2}
                      >
                        <Avatar
                          src={item.image}
                          alt={item.name}
                          sx={{ width: 80, height: 80 }}
                        />
                        <Typography variant="h6">{item.name}</Typography>
                        <Typography variant="body2" color="textSecondary">
                          {item.speciality}
                        </Typography>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        );
      case 2:
        return (
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5">Reviews:</Typography>
              <TinySlider settings={sliderSettings}>
                {patientsData.map((item, index) => (
                  <Box key={index} textAlign="center">
                    <Avatar
                      src={item.image}
                      alt={item.name}
                      sx={{ width: 60, height: 60, mx: "auto" }}
                    />
                    <Typography variant="body2" color="textSecondary">
                      {item.desc}
                    </Typography>
                    <Typography variant="h6">{item.name}</Typography>
                  </Box>
                ))}
              </TinySlider>
            </CardContent>
          </Card>
        );
      case 3:
        return (
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5">Experience:</Typography>
              <Typography variant="body2" color="textSecondary" paragraph>
                The most well-known dummy text is Lorem Ipsum...
              </Typography>
              <TinySlider settings={sliderSettings}>
                {experienceData.map((item, index) => (
                  <Card key={index}>
                    <CardContent>
                      <Typography variant="body2">{item.time}</Typography>
                      <Typography variant="h6">{item.title}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {item.name}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </TinySlider>
            </CardContent>
          </Card>
        );
      default:
        return (
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Dr. Christopher Burrell
              </Typography>
              <Typography variant="body2" color="textSecondary">
                A gynecologist specializing in the female reproductive system...
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Specialties:
              </Typography>
              <ul>
                <li>
                  <FiArrowRight /> Women’s health services
                </li>
                <li>
                  <FiArrowRight /> Pregnancy care
                </li>
                <li>
                  <FiArrowRight /> Surgical procedures
                </li>
                <li>
                  <FiArrowRight /> Specialty care
                </li>
              </ul>
              <Typography variant="subtitle1" gutterBottom>
                My Team:
              </Typography>
              <Grid container spacing={3}>
                {doctorData.slice(0, 4).map((item, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Card>
                      <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        p={2}
                      >
                        <Avatar
                          src={item.image}
                          alt={item.name}
                          sx={{ width: 80, height: 80 }}
                        />
                        <Typography variant="h6">{item.name}</Typography>
                        <Typography variant="body2" color="textSecondary">
                          {item.speciality}
                        </Typography>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <section className="bg-dashboard d-flex flex-column flex-md-row">
      <Sidebar colClass="col-md-4 col-lg-3" />
      <Box flex={1} className="container-fluid py-4">
        <Card variant="outlined" className="shadow-sm">
          <CardContent>
            <Box display="flex" alignItems="center" mb={3}>
              <Avatar
                src={profileImage}
                alt="Dr. Christopher Burrell"
                sx={{ width: 80, height: 80, mr: 2 }}
              />
              <Box>
                <Typography variant="h4" gutterBottom>
                  Dr. Christopher Burrell
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <FiPhone className="me-2" /> +1 234 567 890
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <FiMail className="me-2" /> dr.christopher@example.com
                </Typography>
              </Box>
            </Box>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="fullWidth"
              textColor="primary"
              indicatorColor="primary"
            >
              <Tab label="Overview" />
              <Tab label="Experience" />
              <Tab label="Reviews" />
            </Tabs>
            <Box mt={3}>{renderActiveTabContent()}</Box>
          </CardContent>
        </Card>
        <AdminFooter className="mt-4" />
        <ScrollTop />
      </Box>
    </section>
  );
};

export default DoctorProfile;
