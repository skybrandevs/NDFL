import React, { useEffect, useRef, useState } from "react";
import Nav from "../partials/nav";
import backarrowadmin from "../../../images/backarrowadmin.svg";
import cloudup from "../../../images/cloudup.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createTeamMembers, getSingleTeamMember } from "../../../api/about-us";
import { toast } from "react-toastify";
import loads from "../../../images/loads.gif";


const Addteam = () => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
  });
  const [image, setImage] = useState(null);
  const [memberData, setMemberData] = useState()
  const [isLoading, setIsLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const imgRef = useRef();
  const navigation = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchBlogDetails = async () => {
        try {
          setIsLoading(true);
          const { data } = await getSingleTeamMember(id);
          setFormData({
            name: data.name,
            designation: data.designation
          });
          // setFiles({
          //   featured_image: data.featured_image || null,
          //   second_featured_image: data.second_featured_image || null,
          // })
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
          toast.error("Failed to load blog details.");
        }
      };
      fetchBlogDetails();
    }
  }, [id]);

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
      setSubmitLoading(true);
      let createResponse = await createTeamMembers(form);
      if (createResponse.data.name) {
        toast.success("Team Member created successfully!");
        setSubmitLoading(false);
        setFormData({
          name: "",
          designation: "",
        });
        setImage(null);
        navigation("/aboutpanel");
        return;
      }
    } catch (error) {
      toast.error("Failed to create team member!");
      setSubmitLoading(false);
    }
  };

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

            <div className="card-testimonial">
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
                        className="img-fluid cloudup"
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
            </div>
            <button className="admin-save-3" onClick={handleCreateTeamMember}>
              {" "}
              {submitLoading ? (
                <>
                  <img
                    src={loads}
                    className="img-fluid gif-loads"
                    alt="loads"
                  />{" "}
                </>
              ) : (
                "Save"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addteam;
