import React ,{ useState } from 'react'
import './MedicinePage.css'; 


const categories = [
  { title: 'Tablets', items: ['Paracetamol', 'Ibuprofen', 'Aspirin', 'Lisinopril'] },
  { title: 'Capsules', items: ['Amoxicillin', 'Ciprofloxacin', 'Ibuprofen', 'Ibuprofen'] },
  { title: 'Topical medicines', items: ['Neosporin', 'Polysporin', 'Bacitracin', 'Aquaphor'] },
  { title: 'Suppositories', items: ['Anusol-HC', 'Preparation', 'Anusol', 'Canesten'] },
  { title: 'Inhalers', items: ['Ventolin', 'Proventil', 'Advair', 'Dulera'] },
  { title: 'Transdermal patches', items: ['Fentanyl', 'Nicoderm', 'Estradiol', 'Clonidine'] },
  { title: 'Syrups', items: ['Robitussin', 'Tixylix', 'Zyrtec', 'Calpol'] },
  { title: 'Injections', items: ['Influenza', 'Hepatitis', 'COVID-19', 'Ketorolac'] },
];
const MedicinePredictions = () => {
  const [selected, setSelected] = useState('');
  return <>
    <div className="container medicine-page">
      {/* Search Bar */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <input
          type="text"
          className="form-control search-input"
          placeholder="eg. Tablets/syrups"
        />
        <button className="btn btn-light dropdown-toggle">All</button>
      </div>

      {/* Categories */}
      <div className="row">
        {categories.map((category, index) => (
          <div key={index} className="col-md-3 mb-4 category-card">
            <h5 className="category-title">{category.title}</h5>
            <div className="category-items">
              {category.items.map((item, idx) => (
                <button
                  key={idx}
                  className={`btn btn-light btn-sm item-button ${selected === item ? 'selected' : ''}`}
                  onClick={() => setSelected(item)}
                >
                  {item}
                </button>
              ))}
              <div className="more-button">
                <button className="btn btn-info btn-sm">more ➔</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <div className="text-center">
        <button className="btn btn-primary next-button">
          NEXT ➔
        </button>
      </div>
    </div>

  </>
}

export default MedicinePredictions