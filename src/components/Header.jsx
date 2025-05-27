import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return <>
     <div className="row no-margin-padding">
                <div className="col-md-6">
                    <h3 className="block-title">Quick Statistics</h3>
                </div>
                <div className="col-md-6">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="index.html">
								<span className="ti-home"></span>
							</Link>
                        </li>
                        <li className="breadcrumb-item active">Dashboard</li>
                    </ol>
                </div>
            </div>
  </>
}

export default Header