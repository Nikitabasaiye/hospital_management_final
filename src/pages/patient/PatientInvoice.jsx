import React from "react";
import { Link } from "react-router-dom";

import logoDark from "../../assets/images/logo-dark.png";
// import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { RiPrinterLine } from "react-icons/ri";

export default function PatientInvoice() {
    return (
      <>
        {/* <Navigation navDark={true} manuClass="navigation-menu nav-left" containerClass="container" /> */}
        <section className="bg-half-170 bg-light">
          <div className="container">
            <div className="row mt-5 justify-content-center">
              <div className="col-lg-10">
                <div className="card border-0 rounded shadow px-4 py-5">
                  <div className="row mb-4">
                    <div className="col-lg-8 col-md-6">
                      <img src={logoDark} height="22" alt="" />
                      <h6 className="mt-4 pt-2">Address:</h6>
                      <small className="text-muted mb-0">
                        1419 Riverwood Drive, <br />
                        Redding, CA 96001
                      </small>
                    </div>
  
                    <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                      <ul className="list-unstyled">
                        <li className="d-flex ms-0">
                        <small className="mb-0 text-muted">Invoice no. : </small>
                          {/* <small className="mb-0 text-muted">Invoice no.:</small> */}
                          <small class="mb-0 text-dark">&nbsp;&nbsp;#54638990jnn</small>
                        </li>
                        <li className="d-flex ms-0 mt-2">
                          <small className="mb-0 text-muted">Email:</small>
                          <small className="mb-0">
                            &nbsp;&nbsp; <Link to="mailto:contact@example.com" className="text-dark">info@doctris.com</Link>
                          </small>
                        </li>
                        <li className="d-flex ms-0 mt-2">
                          <small className="mb-0 text-muted">Phone:</small>
                          <small className="mb-0">
                            &nbsp;&nbsp; <Link to="tel:+152534-468-854" className="text-dark">(+12) 1546-456-856</Link>
                          </small>
                        </li>
                        <li className="d-flex ms-0 mt-2">
                          <small className="mb-0 text-muted">Website:</small>
                          <small className="mb-0">
                            &nbsp;&nbsp; <Link to="" className="text-dark">www.doctris.com</Link>
                          </small>
                        </li>
                        <li className="d-flex ms-0 mt-2">
                          <small className="mb-0 text-muted">Patient Name:</small>
                          <small className="mb-0">&nbsp;&nbsp; Mary Skeens</small>
                        </li>
                      </ul>
                    </div>
                  </div>
  
                  <div className="pt-4 border-top">
                    <div className="row">
                      <div className="col-lg-8 col-md-6">
                        <h5 className="text-muted fw-bold">
                          Invoice <span className="badge rounded-pill bg-soft-success fw-normal ms-2">Paid</span>
                        </h5>
                        <h6>Surgery (Gynecology)</h6>
                      </div>
  
                      <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <ul className="list-unstyled">
                          <li className="d-flex mt-2 ms-0">
                            <small className="mb-0 text-muted">Issue Dt.:</small>
                            <small className="mb-0 text-dark">&nbsp;&nbsp; 25th Sep.2020</small>
                          </li>
                          <li className="d-flex mt-2 ms-0">
                            <small className="mb-0 text-muted">Due Dt.:</small>
                            <small className="mb-0 text-dark">&nbsp;&nbsp; 11th Oct.2020</small>
                          </li>
                          <li className="d-flex mt-2 ms-0">
                            <small className="mb-0 text-muted">Dr. Name:</small>
                            <small className="mb-0 text-dark">&nbsp;&nbsp; Dr. Calvin Carlo</small>
                          </li>
                        </ul>
                      </div>
                    </div>
  
                    <div className="invoice-table pb-4">
                      <div className="table-responsive shadow rounded mt-4">
                        <table className="table table-center invoice-tb mb-0">
                          <thead>
                            <tr>
                              <th scope="col" className="text-start border-bottom p-3" style={{ minWidth: '60px' }}>No.</th>
                              <th scope="col" className="text-start border-bottom p-3" style={{ minWidth: '200px' }}>Item</th>
                              <th scope="col" className="text-center border-bottom p-3" style={{ minWidth: '60px' }}>Qty</th>
                              <th scope="col" className="border-bottom p-3" style={{ minWidth: '130px' }}>Rate</th>
                              <th scope="col" className="border-bottom p-3" style={{ minWidth: '130px' }}>Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row" className="text-start p-3">1</th>
                              <td className="text-start p-3">Hospital Charges</td>
                              <td className="text-center p-3">1</td>
                              <td className="p-3">$125</td>
                              <td className="p-3">$125</td>
                            </tr>
                            <tr>
                              <th scope="row" className="text-start p-3">2</th>
                              <td className="text-start p-3">Medicine</td>
                              <td className="text-center p-3">1</td>
                              <td className="p-3">$245</td>
                              <td className="p-3">$245</td>
                            </tr>
                            <tr>
                              <th scope="row" className="text-start p-3">3</th>
                              <td className="text-start p-3">Special Visit Fee (Doctor)</td>
                              <td className="text-center p-3">1</td>
                              <td className="p-3">$150</td>
                              <td className="p-3">$150</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
  
                      <div className="row">
                        <div className="col-lg-4 col-md-5 ms-auto">
                          <ul className="list-unstyled h6 fw-normal mt-4 mb-0 ms-md-5 ms-lg-4">
                            <li className="text-muted d-flex justify-content-between pe-3 ms-0">
                              Subtotal: <span>$520</span>
                            </li>
                            <li className="text-muted d-flex justify-content-between pe-3 ms-0">
                              Taxes: <span>0</span>
                            </li>
                            <li className="d-flex justify-content-between pe-3 ms-0">
                              Total: <span>$520</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
  
                    <div className="border-top pt-4">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="text-sm-start text-muted text-center">
                            <small className="mb-0">
                              Customer Services: <Link to="tel:+152534-468-854" className="text-warning">(+12) 1546-456-856</Link>
                            </small>
                          </div>
                        </div>
  
                        <div className="col-sm-6">
                          <div className="text-sm-end text-muted text-center">
                            <small className="mb-0">
                              <Link to="" className="text-primary">Terms & Conditions</Link>
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <div className="text-end mt-4 pt-2">
                      <Link to="#" onClick={() => window.print()} className="btn btn-soft-primary d-print-none">
                        <RiPrinterLine /> Print
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
