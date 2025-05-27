import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import bg1 from '../../assets/images/bg/bg-chat.png';
import dr1 from '../../assets/images/doctors/01.jpg';
import dr2 from '../../assets/images/doctors/02.jpg';

import Sidebar from "../../components/Sidebar";
import AdminFooter from "../../components/dashboard/AdminFooter";
import ScrollTop from "../../components/ScrollTop";

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FaEllipsisH,FaRegSmile } from "react-icons/fa";
import { FiUser,FiSettings ,FiTrash ,FiClock ,FiArrowRight  } from "react-icons/fi";
import { BiSend } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";


import { chatData } from "../../data/data";

export default function DoctorChat() {
    const [showOptions, setShowOptions] = useState({ show: false, showSearch: false });
    const [show2, setShow2] = useState(false)
    const [show, setShow] = useState(false)

    const handleClickOutside = (event) => {
        if (event.target.closest('.dropdown-menu') === null) {
            setShowOptions({ show: false, showSearch: false });
        }
    };

    useEffect(() => {
        const modalClose = () => {
            setShow(false)
        }
        const modalClose2 = () => {
            setShow2(false)
        }
        document.addEventListener("mousedown", modalClose);
        document.addEventListener("mousedown", modalClose2);
        return () => {
            document.removeEventListener("mousedown", modalClose);
            document.removeEventListener("mousedown", modalClose2);
        }
    })

    return (
        <>
          <section className="bg-dashboard">
            <div className="container-fluid">
              <div className="row">
                <Sidebar colClass="col-xl-3 col-lg-4 col-md-5 col-12 d-none d-lg-block" />
    
                <div className="col-xl-9 col-lg-8 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="row">
                    {/* Chat List */}
                    <div className="col-xl-3 col-lg-5 col-md-5 col-12">
                      <div className="card border-0 rounded shadow">
                        <div className="text-center p-4 border-bottom">
                          <img src={dr1} className="avatar avatar-md-md rounded-pill shadow" alt="" />
                          <h5 className="mt-3 mb-1">Dr. Calvin Carlo</h5>
                          <p className="text-muted mb-0">Orthopedic</p>
                        </div>
    
                        <SimpleBar className="p-2 chat chat-list" style={{ maxHeight: '450px' }}>
                          {chatData.map((item, index) => (
                            <Link
                              to="#"
                              className={`${item.active ? 'active' : ''} d-flex chat-list p-2 rounded position-relative`}
                              key={index}
                            >
                              <div className="position-relative">
                                <img src={item.image} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                <GoDotFill className={`mdi mdi-checkbox-blank-circle ${item.status === 'online' ? 'text-success' : 'text-danger'} on-off align-text-bottom`} />
                                {/* <i className={`mdi mdi-checkbox-blank-circle ${item.status === 'online' ? 'text-success' : 'text-danger'} on-off align-text-bottom`} /> */}
                              </div>
                              <div className="overflow-hidden flex-1 ms-2">
                                <div className="d-flex justify-content-between">
                                  <h6 className="text-dark mb-0 d-block">{item.name}</h6>
                                  <small className="text-muted">{item.time}</small>
                                </div>
                                <div className="text-muted text-truncate">{item.message}</div>
                              </div>
                            </Link>
                          ))}
                        </SimpleBar>
                      </div>
                    </div>
    
                    {/* Chat Area */}
                    <div className="col-xl-9 col-lg-7 col-md-7 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                      <div className="card chat chat-person border-0 shadow rounded">
                        <div className="d-flex justify-content-between border-bottom p-4">
                          <div className="d-flex">
                            <img src={dr2} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                            <div className="overflow-hidden ms-3">
                              <Link to="#" className="text-dark mb-0 h6 d-block text-truncate">Cristino Murphy</Link>
                              <small className="text-muted">
                                <GoDotFill className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom" />
                                {/* <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>  */}
                                Online
                              </small>
                            </div>
                          </div>
    
                          <ul className=" list-unstyled mb-0 chat">
                            <li className="dropdown dropdown-primary list-inline-item">
                              <button type="button" className="btn btn-icon btn-pills btn-primary dropdown-toggle p-0" onClick={() => setShow2(!show2)}>
                                <IoSearch  className="mdi mdi-magnify"/>
                                {/* <i className="mdi mdi-magnify"></i> */}
                              </button>
                              <div className={`${show2 ? 'show' : ''} dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 py-0`} style={{ width: '200px', right: '0' }}>
                                <form>
                                  <input type="text" id="text1" name="name" className="form-control border bg-white" placeholder="Search..." />
                                </form>
                              </div>
                            </li>
                            <li className="dropdown dropdown-primary list-inline-item">
                              <button type="button" className="btn btn-icon btn-pills btn-soft-primary dropdown-toggle p-0" onClick={() => setShow(!show)}>
                                <FaEllipsisH />
                              </button>
                              <div className={`${show ? 'show' : ''} dropdown-menu dd-menu dropdown-menu-end shadow border-0 mt-3 py-3`} style={{ right: '0' }}>
                                <Link className="dropdown-item text-dark" to="#">
                                  <span className="mb-0 d-inline-block me-1"><FiUser className="align-middle h6 mb-0" /></span> Profile
                                </Link>
                                <Link className="dropdown-item text-dark my-2" to="#">
                                  <span className="mb-0 d-inline-block me-1"><FiSettings className="align-middle h6 mb-0" /></span> Profile Settings
                                </Link>
                                <Link className="dropdown-item text-dark" to="#">
                                  <span className="mb-0 d-inline-block me-1"><FiTrash className="align-middle h6 mb-0" /></span> Delete
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </div>
    
                        <SimpleBar style={{ backgroundImage: `url(${bg1})`, maxHeight: '500px', backgroundPosition: 'center' }}>
                          <ul className="p-4 list-unstyled mb-0 chat">
                            {/* Chat Messages */}
                            <li>
                              <div className="d-inline-block">
                                <div className="d-flex chat-type mb-3">
                                  <div className="position-relative">
                                    <img src={dr2} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                    <GoDotFill className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></GoDotFill>
                                  </div>
                                  <div className="chat-msg" style={{ maxWidth: '500px' }}>
                                    <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">Hey Calvin</p>
                                    <small className="text-muted msg-time"><FiClock className="me-1" /> 59 min ago</small>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="chat-right">
                              <div className="d-inline-block">
                                <div className="d-flex chat-type mb-3">
                                  <div className="position-relative chat-user-image">
                                    <img src={dr1} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                    <GoDotFill className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></GoDotFill>
                                  </div>
                                  <div className="chat-msg" style={{ maxWidth: '500px' }}>
                                    <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">Hello Cristino</p>
                                    <small className="text-muted msg-time"><FiClock className="me-1" /> 45 min ago</small>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="chat-right">
                              <div className="d-inline-block">
                                <div className="d-flex chat-type mb-3">
                                  <div className="position-relative chat-user-image">
                                    <img src={dr1} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                    <GoDotFill className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></GoDotFill>
                                  </div>
                                  <div className="chat-msg" style={{ maxWidth: '500px' }}>
                                    <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">How can i help you?</p>
                                    <small className="text-muted msg-time"><FiClock className="me-1" /> 44 min ago</small>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="d-inline-block">
                                <div className="d-flex chat-type mb-3">
                                  <div className="position-relative">
                                    <img src={dr2} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                    <GoDotFill className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></GoDotFill>
                                  </div>
                                  <div className="chat-msg" style={{ maxWidth: '500px' }}>
                                    <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">Nice to meet you

</p>
                                    <small className="text-muted msg-time"><FiClock className="me-1" /> 42 min ago</small>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="d-inline-block">
                                <div className="d-flex chat-type mb-3">
                                  <div className="position-relative">
                                    <img src={dr2} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                    <GoDotFill className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></GoDotFill>
                                  </div>
                                  <div className="chat-msg" style={{ maxWidth: '500px' }}>
                                    <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">Hope you are doing fine?
</p>
                                    <small className="text-muted msg-time"><FiClock className="me-1" /> 40 min ago</small>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="chat-right">
                              <div className="d-inline-block">
                                <div className="d-flex chat-type mb-3">
                                  <div className="position-relative chat-user-image">
                                    <img src={dr1} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                    <GoDotFill className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></GoDotFill>
                                  </div>
                                  <div className="chat-msg" style={{ maxWidth: '500px' }}>
                                    <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">I'm good thanks for asking

</p>
                                    <small className="text-muted msg-time"><FiClock className="me-1" /> 45 min ago</small>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="d-inline-block">
                                <div className="d-flex chat-type mb-3">
                                  <div className="position-relative">
                                    <img src={dr2} className="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                    <GoDotFill className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></GoDotFill>
                                  </div>
                                  <div className="chat-msg" style={{ maxWidth: '500px' }}>
                                    <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">I am intrested to know more about your prices and services you offer


</p>
                                    <small className="text-muted msg-time"><FiClock className="me-1" /> 40 min ago</small>
                                  </div>
                                </div>
                              </div>
                            </li>
                            {/* More Chat Messages... */}
                          </ul>
                        </SimpleBar>
    
                        <div className="p-2 rounded-bottom shadow">
                          <div className="row">
                            <div className="col">
                              <input type="text" className="form-control border" placeholder="Enter Message..." />
                            </div>
                            <div className="col-auto">
                              <button type="button" className="btn btn-icon  btn-primary mx-1">
                                <BiSend  />
                              </button>
                              <button type="button" className="btn btn-icon  btn-primary mx-1">
                                <FaRegSmile   />
                              </button>
                              <button type="button" className="btn btn-icon  btn-primary">
                                <FiArrowRight  />
                              </button>
                            </div>
                          </div>
                        </div>
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
