import React, { useRef, useState } from "react";
import Nav from "../partials/nav";
import cloudup from "../../../images/cloudup.svg";
import add from "../../../images/add.svg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createSection, createTeamMembers } from "../../../api/about-us";
import loads from "../../../images/loads.gif";

const Aboutpanel = () => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
  });
  const [image, setImage] = useState(null);
  const [section1, setSection1] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSectionLoading, setIsSectionLoading] = useState(false);
  const imgRef = useRef();
  const imgRef2 = useRef();
  const navigation = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newFile = {
        file,
        preview: URL.createObjectURL(file),
      };
      setImage(newFile);
    }
  };

  const handleFileChange2 = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newFile = {
        file,
        preview: URL.createObjectURL(file),
      };
      setSection1(newFile);
    }
  };

  const handleCreateTeamMember = async () => {
    const { name, designation } = formData;
    if (!name || !designation) {
      toast.error("Please fill in all required fields!");
      return;
    }
    const form = new FormData();
    form.append("name", formData.name);
    form.append("designation", formData.designation);

    if (image) {
      form.append("image", image.file, image.file.name);
    }

    try {
      setIsLoading(true);
      let createResponse = await createTeamMembers(form);
      if (createResponse.data.name) {
        toast.success("Team Member created successfully!");
        setIsLoading(false);
        setFormData({
          name: "",
          designation: "",
        });
        setImage(null);
        return;
      }
    } catch (error) {
      toast.error("Failed to create team member!");
      setIsLoading(false);
    }
  };

  const handleCreateSection = async () => {
    if (!section1) {
      toast.error("Please fill in all required fields!");
      return;
    }
    const form = new FormData();
    form.append("image", section1.file, section1.file.name);
    try {
      setIsSectionLoading(true);
      let createResponse = await createSection(form);
      if (createResponse.data.image_path) {
        toast.success("Section created successfully!");
        setIsSectionLoading(false);
        setSection1(null);
        return;
      }
    } catch (error) {
      toast.error("Failed to create Section!");
      setIsSectionLoading(false);
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-lg-2">
          <Nav></Nav>
        </div>
        <div className="col-lg-10 bacc">
          <div className="card-admin-h">
            <h3 className="admin-header-title">Section 1</h3>
            <p className="admin-sub-header-title">Images</p>

            <div className="row">
              <div className="col-lg-3">
                <div className="card-upload">
                  {section1 ? (
                    <>
                      <img
                        src={section1.preview}
                        alt={formData.name}
                        className="img-fluid"
                      />
                    </>
                  ) : (
                    <img
                      src={cloudup}
                      alt="Upload Placeholder"
                      className="img-fluid"
                    />
                  )}
                  <p className="label-title">
                    JPG, PNG or WebP. Less than 10MB
                  </p>
                  <p className="label-title-2">Drag and drop here or </p>
                  <button
                    type="file"
                    className="input-file"
                    ref={imgRef2}
                    onClick={() => imgRef2.current.click()}
                  >
                    Browse
                  </button>

                  <input
                    type="file"
                    accept="image/*"
                    ref={imgRef2}
                    style={{ display: "none" }}
                    onChange={handleFileChange2}
                  />
                </div>
                <button className="admin-save-2" onClick={handleCreateSection}>
                {isSectionLoading ? (
              <>
                <img src={loads} className="img-fluid gif-loads" alt="loads" />{" "}
              </>
            ) : (
              "Save"
            )}
                </button>
              </div>
            </div>
          </div>

          <div className="card-admin-h">
            <h3 className="admin-header-title">Our team</h3>

            <div className="row">
              <div className="col-3">
                <p className="admin-sub-header-title">Full Name</p>
                <input
                  type="text"
                  placeholder="Emmanuel Ukah"
                  className="text-field-testimonials"
                  value={formData.name}
                  name="name"
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-3">
                <p className="admin-sub-header-title">Designation</p>
                <input
                  type="text"
                  placeholder="Design Lead"
                  className="text-field-testimonials"
                  value={formData.designation}
                  name="designation"
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-3">
                <div className="card-upload-about">
                  {image ? (
                    <>
                      <img
                        src={image.preview}
                        alt={formData.name}
                        className="img-fluid"
                      />
                    </>
                  ) : (
                    <img
                      src={cloudup}
                      alt="Upload Placeholder"
                      className="img-fluid"
                    />
                  )}
                  <p className="label-title">
                    JPG, PNG or WebP. Less than 10MB
                  </p>
                  <p className="label-title-2">Drag and drop here or </p>
                  <button
                    type="file"
                    className="input-file"
                    ref={imgRef}
                    onClick={() => imgRef.current.click()}
                  >
                    Browse
                  </button>

                  <input
                    type="file"
                    accept="image/*"
                    ref={imgRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-11">
                <span className="flotter">
                  <img src={add} className="img-fluid add" alt="add" />
                  Add another
                </span>
              </div>
            </div>
          </div>
          <button className="admin-save" onClick={handleCreateTeamMember}>
            {isLoading ? (
              <>
                <img src={loads} className="img-fluid gif-loads" alt="loads" />{" "}
              </>
            ) : (
              "Save"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aboutpanel;
