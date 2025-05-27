import React from "react";
import Sidebar from "../../components/Sidebar";

const AdminManageDoctors = () => {
  return (
    <section className="bg-dashboard">
      <div className="container-fluid">
        <div className="row">
          <Sidebar colClass="col-xl-3 col-lg-4 col-md-5 col-12" />
        </div>
      </div>
    </section>
  );
};

export default AdminManageDoctors;
