import React from 'react'
import Nav from "../partials/nav";
import backarrowadmin from "../../../images/backarrowadmin.svg";
import cloudup from "../../../images/cloudup.svg";
import { Link } from "react-router-dom";

const addteam = () => {

    
  return (
    <div>

<div className="row">
        <div className="col-lg-2">
          <Nav></Nav>
        </div>
        <div className="col-lg-10 bacc">
          <Link to="/aboutpanel" className="link">
            <img
              src={backarrowadmin}
              className="img-fluid backarrowadmin"
              alt="backarrowadmin"
            />
          </Link>

          <div className="card-admin-h">
          <h3 className="admin-header-title">New Team member</h3>

          <div className='card-testimonial'>
        

            <div className="row">
              <div className="col-3">
                <p className="admin-sub-header-title">Full Name</p>
                <input
                  type="text"
                  placeholder="Emmanuel Ukah"
                  className="text-field-testimonials"
                  /*
                  value={formData.name}
                  name="name"
                  onChange={handleInputChange}
                  */
                />
              </div>
              <div className="col-3">
                <p className="admin-sub-header-title">Designation</p>
                <input
                  type="text"
                  placeholder="Design Lead"
                  className="text-field-testimonials"
                  /*
                  value={formData.designation}
                  name="designation"
                  onChange={handleInputChange}
                  */
                />
              </div>
              <div className="col-3">
                <div className="card-upload-about">
               
                    <img
                      src={cloudup}
                      alt="Upload Placeholder"
                      className="img-fluid cloudup"
                    />
                
                  <p className="label-title">
                    JPG, PNG or WebP. Less than 10MB
                  </p>
                  <p className="label-title-2">Drag and drop here or </p>
                  <button
                  className="input-file"
                  /*
                    type="file"
                    ref={imgRef}
                    onClick={() => imgRef.current.click()}
                    */
                  >
                    Browse
                  </button>

             
                </div>
              </div>
            </div>
          </div>
          <button className='admin-save-3'>Save</button>  
            </div>
            </div>
            </div>



            </div>
)
}

export default addteam;