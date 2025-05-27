import React, { useState } from "react";
import "./AddMedicines.css";

const AddMedicines = () => {
  const [formData, setFormData] = useState({
    age: "",
    weight: "",
    height: "",
    symptoms: "",
    diseaseName: "",
    syrupName: "",
    tabletName: "",
    topicalMedicine: "",
    suppository: "",
    transdermalPatch: "",
    injection: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (<div className="">
    
    <div className="container mt-5">
      <div className="form-card shadow p-4 rounded">
        <h2 className="text-center mb-4">Add Medicine Details</h2>
        <form onSubmit={handleSubmit}>
          {/* Age */}
          <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              className="form-control"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>

          {/* Weight */}
          <div className="mb-3">
            <label htmlFor="weight" className="form-label">Weight (kg)</label>
            <input
              type="number"
              id="weight"
              name="weight"
              className="form-control"
              value={formData.weight}
              onChange={handleChange}
              required
            />
          </div>

          {/* Height */}
          <div className="mb-3">
            <label htmlFor="height" className="form-label">Height (cm)</label>
            <input
              type="number"
              id="height"
              name="height"
              className="form-control"
              value={formData.height}
              onChange={handleChange}
              required
            />
          </div>

          {/* Symptoms */}
          <div className="mb-3">
            <label htmlFor="symptoms" className="form-label">Symptoms</label>
            <textarea
              id="symptoms"
              name="symptoms"
              className="form-control"
              value={formData.symptoms}
              onChange={handleChange}
              rows="3"
              required
            ></textarea>
          </div>

          {/* Disease Name */}
          <div className="mb-3">
            <label htmlFor="diseaseName" className="form-label">Disease Name</label>
            <input
              type="text"
              id="diseaseName"
              name="diseaseName"
              className="form-control"
              value={formData.diseaseName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Syrup Name */}
          <div className="mb-3">
            <label htmlFor="syrupName" className="form-label">Syrup Name</label>
            <input
              type="text"
              id="syrupName"
              name="syrupName"
              className="form-control"
              value={formData.syrupName}
              onChange={handleChange}
            />
          </div>

          {/* Tablet Name */}
          <div className="mb-3">
            <label htmlFor="tabletName" className="form-label">Tablet Name</label>
            <input
              type="text"
              id="tabletName"
              name="tabletName"
              className="form-control"
              value={formData.tabletName}
              onChange={handleChange}
            />
          </div>

          {/* Topical Medicine */}
          <div className="mb-3">
            <label htmlFor="topicalMedicine" className="form-label">Topical Medicine</label>
            <input
              type="text"
              id="topicalMedicine"
              name="topicalMedicine"
              className="form-control"
              value={formData.topicalMedicine}
              onChange={handleChange}
            />
          </div>

          {/* Suppositories */}
          <div className="mb-3">
            <label htmlFor="suppository" className="form-label">Suppositories</label>
            <input
              type="text"
              id="suppository"
              name="suppository"
              className="form-control"
              value={formData.suppository}
              onChange={handleChange}
            />
          </div>

          {/* Transdermal Patches */}
          <div className="mb-3">
            <label htmlFor="transdermalPatch" className="form-label">Transdermal Patches</label>
            <input
              type="text"
              id="transdermalPatch"
              name="transdermalPatch"
              className="form-control"
              value={formData.transdermalPatch}
              onChange={handleChange}
            />
          </div>

          {/* Injections */}
          <div className="mb-3">
            <label htmlFor="injection" className="form-label">Injections</label>
            <input
              type="text"
              id="injection"
              name="injection"
              className="form-control"
              value={formData.injection}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
    </div>);
};

export default AddMedicines;
