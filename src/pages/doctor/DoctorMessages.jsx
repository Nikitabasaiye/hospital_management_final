import React, { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import ComposeMail from "../../components/dashboard/ComposeMail";
import AdminFooter from "../../components/dashboard/AdminFooter";
import ScrollTop from "../../components/ScrollTop";
import { MdOutlineInbox } from "react-icons/md";
import { RiMailStarLine,RiMailCloseLine,RiMailSettingsLine ,RiDeleteBin7Line   } from "react-icons/ri";
import { TbMailUp } from "react-icons/tb";
import { MdOutlineEventNote } from "react-icons/md";
import { ImSpinner11 } from "react-icons/im";
import { FiChevronLeft,FiChevronRight   } from "react-icons/fi";

import { FiStar } from "react-icons/fi";

import { mailData } from "../../data/data";

export default function DoctorMessages() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <>

      <section className="bg-dashboard">
        <div className="container-fluid">
          <div className="row">
            <Sidebar colClass="col-xl-3 col-lg-4 col-md-5 col-12" />
            <div className="col-xl-9 col-lg-8 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <h5 className="mb-0">Messages</h5>
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-4 col-12 mt-4 pt-2">
                  <div className="card rounded-0 border-0 shadow p-4">
                    <ComposeMail />

                    <ul className="nav nav-pills nav-link-soft nav-justified flex-column mt-4 mb-0">
                      <li className="nav-item">
                        <Link
                          className={`${activeIndex === 1 ? "active" : ""} nav-link rounded`}
                          to="#"
                          onClick={() => setActiveIndex(1)}
                        >
                          <div className="text-start px-3">
                            <span className="mb-0">
                              <MdOutlineInbox className="h5 align-middle me-2 mb-0" />
                              Inbox
                            </span>
                          </div>
                        </Link>
                      </li>

                      <li className="nav-item mt-3 ms-0">
                        <Link
                          className={`${activeIndex === 2 ? "active" : ""} nav-link rounded`}
                          to="#"
                          onClick={() => setActiveIndex(2)}
                        >
                          <div className="text-start px-3">
                            <span className="mb-0">
                              <RiMailStarLine className="h5 align-middle me-2 mb-0" />
                              Starred
                            </span>
                          </div>
                        </Link>
                      </li>

                      <li className="nav-item mt-3 ms-0">
                        <Link
                          className={`${activeIndex === 3 ? "active" : ""} nav-link rounded`}
                          to="#"
                          onClick={() => setActiveIndex(3)}
                        >
                          <div className="text-start px-3">
                            <span className="mb-0">
                              <RiMailCloseLine className="h5 align-middle me-2 mb-0" />
                              Spam
                            </span>
                          </div>
                        </Link>
                      </li>

                      <li className="nav-item mt-3 ms-0">
                        <Link
                          className={`${activeIndex === 4 ? "active" : ""} nav-link rounded`}
                          to="#"
                          onClick={() => setActiveIndex(4)}
                        >
                          <div className="text-start px-3">
                            <span className="mb-0">
                              <TbMailUp className="h5 align-middle me-2 mb-0" />
                              Sent
                            </span>
                          </div>
                        </Link>
                      </li>

                      <li className="nav-item mt-3 ms-0">
                        <Link
                          className={`${activeIndex === 5 ? "active" : ""} nav-link rounded`}
                          to="#"
                          onClick={() => setActiveIndex(5)}
                        >
                          <div className="text-start px-3">
                            <span className="mb-0">
                              <RiMailSettingsLine className="h5 align-middle me-2 mb-0" />
                              Drafts
                            </span>
                          </div>
                        </Link>
                      </li>

                      <li className="nav-item mt-3 ms-0">
                        <Link
                          className={`${activeIndex === 6 ? "active" : ""} nav-link rounded`}
                          to="#delete"
                          onClick={() => setActiveIndex(6)}
                        >
                          <div className="text-start px-3">
                            <span className="mb-0">
                              <RiDeleteBin7Line className="h5 align-middle me-2 mb-0" />
                              Delete
                            </span>
                          </div>
                        </Link>
                      </li>

                      <li className="nav-item mt-3 ms-0">
                        <Link
                          className={`${activeIndex === 7 ? "active" : ""} nav-link rounded`}
                          to="#notes"
                          onClick={() => setActiveIndex(7)}
                        >
                          <div className="text-start px-3">
                            <span className="mb-0">
                              <MdOutlineEventNote className="h5 align-middle me-2 mb-0" />
                              Notes
                            </span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-xl-9 col-lg-9 col-md-8 col-12 mt-4 pt-2">
                  <div className="tab-content rounded-0 shadow">
                    {activeIndex === 1 && (
                      <div className="tab-pane fade bg-white show active">
                        <div className="table-responsive bg-white shadow rounded">
                          <table className="table mb-0 table-center">
                            <thead>
                              <tr>
                                <th className="border-bottom p-3" style={{ minWidth: "15px" }}>
                                  <div className="form-check">
                                    <input className="form-check-input check" type="checkbox" id="checkAll" />
                                    <label className="form-check-label fw-normal" htmlFor="checkAll"></label>
                                  </div>
                                </th>
                                <th className="border-bottom p-3" style={{ minWidth: "15px" }}>
                                  <Link to="#" className="text-muted">
                                    <ImSpinner11 />
                                  </Link>
                                </th>
                                <th className="border-bottom p-3" style={{ minWidth: "150px" }}></th>
                                <th className="border-bottom p-3" style={{ minWidth: "600px" }}></th>
                                <th className="border-bottom p-3 text-end" style={{ minWidth: "150px" }}>
                                  <Link to="#" className="btn btn-icon btn-sm btn-pills btn-soft-light me-1">
                                    <FiChevronLeft className="fs-5" />
                                  </Link>
                                  <Link to="#" className="btn btn-icon btn-sm btn-pills btn-soft-light">
                                    <FiChevronRight className="fs-5" />
                                  </Link>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {mailData.map((item, index) => (
                                <tr key={index}>
                                  <th className="p-3">
                                    <div className="form-check">
                                      <input className="form-check-input check" type="checkbox" />
                                      <label className="form-check-label"></label>
                                    </div>
                                  </th>
                                  <th className="p-3">
                                    <FiStar className="text-muted"/>
                                  </th>
                                  <td className="p-3">{item.name}</td>
                                  <td className="p-3">
                                    <p className="text-muted mb-0">{item.desc}</p>
                                  </td>
                                  <td className="text-end class p-3">
                                    <small>{item.date}</small>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <p className="text-end text-muted mb-0 py-2 mx-2">See more 14 of 35</p>
                      </div>
                    )}

                    {activeIndex === 2 && (
                      <div className="tab-pane fade bg-white rounded show active">
                        <div className="table-responsive bg-white shadow rounded">
                          <table className="table mb-0 table-center">
                            <thead>
                              <tr>
                                <th className="border-bottom p-3" style={{ minWidth: "15px" }}>
                                  <div className="form-check">
                                    <input className="form-check-input check" type="checkbox" id="checkAll1" />
                                    <label className="form-check-label fw-normal" htmlFor="checkAll1"></label>
                                  </div>
                                </th>
                                <th className="border-bottom p-3" style={{ minWidth: "15px" }}>
                                  <Link to="#" className="text-muted">
                                    <ImSpinner11 />
                                  </Link>
                                </th>
                                <th className="border-bottom p-3" style={{ minWidth: "150px" }}></th>
                                <th className="border-bottom p-3" style={{ minWidth: "600px" }}></th>
                                <th className="border-bottom p-3 text-end" style={{ minWidth: "150px" }}>
                                  <Link to="#" className="btn btn-icon btn-sm btn-pills btn-soft-light me-1">
                                    <FiChevronLeft className="fs-5" />
                                  </Link>
                                  <Link to="#" className="btn btn-icon btn-sm btn-pills btn-soft-light">
                                    <FiChevronRight className="fs-5" />
                                  </Link>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {mailData.map((item, index) => (
                                <tr key={index}>
                                  <th className="p-3">
                                    <div className="form-check">
                                      <input className="form-check-input check" type="checkbox" />
                                      <label className="form-check-label"></label>
                                    </div>
                                  </th>
                                  <th className="p-3">
                                    <FiStar className="text-warning" />
                                  </th>
                                  <td className="p-3">{item.name}</td>
                                  <td className="p-3">
                                    <p className="text-muted mb-0">{item.desc}</p>
                                  </td>
                                  <td className="text-end class p-3">
                                    <small>{item.date}</small>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <p className="text-end text-muted mb-0 py-2 mx-2">See more 14 of 35</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <AdminFooter />
            </div>
          </div>
        </div>
      </section>
      <ScrollTop />
    </>
  );
}
