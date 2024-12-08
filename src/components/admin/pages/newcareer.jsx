import React, { useEffect, useRef } from "react";
import Nav from "../partials/nav";
import backarrowadmin from "../../../images/backarrowadmin.svg";
import cloudup from "../../../images/cloudup.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { LucideLoaderPinwheel } from "lucide-react";
import loads from "../../../images/loads.gif";
import { toast } from "react-toastify";
import { createCareer, getSingleCareer, updateSingleCareer } from "../../../api/careers";

const NewCareer = () => {
  const [formData, setFormData] = useState({
    job_title: "",
    body: "",
  });
  const [featuredImage, setFeaturedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const imgRef = useRef();
  const { careerId } = useParams();
  const navigation = useNavigate();

  useEffect(() => {
    if (careerId) {
      const fetchCareerDetails = async () => {
        try {
          setIsLoading(true);
          const { data } = await getSingleCareer(careerId);
          setFormData({
            job_title: data.job_title,
            body: data.body,
          });
          setFeaturedImage({
            preview: data.featured_image
          })
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
          toast.error("Failed to load blog details.");
        }
      };
      fetchCareerDetails();
    }
  }, [careerId]);

  const handleDelete = () => {
    setFeaturedImage(null);
    imgRef.current.value = null;
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if(file) {
      const newFile = {
        file: file,
        preview: URL.createObjectURL(file)
      }
      setFeaturedImage(newFile);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if the required fields are not empty
    if (!formData.job_title || !formData.body) {
      toast.error("All text fields must be filled!");
      return;
    }

    try {
      setIsLoading(true);

      // Create a FormData instance
      const form = new FormData();

      // Append other form data fields
      form.append("job_title", formData.job_title);
      form.append("body", formData.body);

      // Append the document file if available
      if (featuredImage && featuredImage.file instanceof File) {
        form.append("featured_image", featuredImage.file, featuredImage.file.name); // Include file name (optional)
      }

      // Make the API request
      if (careerId && careerId != undefined) {
        let updateResponse = await updateSingleCareer(careerId, form); 
        if(updateResponse.message) toast.success("Blog updated successfully!");
        navigation("/careerspanel");
        return
      } else {
        let createResponse = await createCareer(form); // Create API call
        if (createResponse.data.job_title) {
          toast.success("Career created successfully!");
          setFormData({
            job_title: "",
            body: "",
          });
          setFeaturedImage(null);
          imgRef.current.value = null;
          navigation("/careerspanel");
        }
      }
      
    } catch (error) {
      setIsLoading(false);
      if (error.response && error.response && error.response.errors) {
        const errorMessage = error.response.errors.email
          ? error.response.errors.email[0]
          : "Failed to submit form.";
        toast.error(errorMessage);
      } else {
        // General error fallback
        toast.error("Failed to submit form.");
      }
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-lg-2">
          <Nav></Nav>
        </div>

        <div className="col-lg-10 bacc">
          <Link to="/careerspanel" className="link">
            <img
              src={backarrowadmin}
              className="img-fluid backarrowadmin"
              alt="backarrowadmin"
            />
          </Link>

          <div className="card-admin-h">
            <h3 className="admin-header-title">New Career</h3>
            <div className="row">
              <div className="col-lg-4">
                <p className="admin-sub-header-title">Job Title</p>
                <input
                  type="text"
                  placeholder="Presentation Architect"
                  className="text-field-testimonials"
                  value={formData.job_title}
                  name="job_title"
                  onChange={handleInputChange}
                />

                <p className="admin-sub-header-title">Featured Image</p>
                <div className="card-upload">
                  {
                    featuredImage ? 
                    <img
                    src={featuredImage.preview}
                    className="img-fluid cloudup"
                    alt="cloudup"
                  /> :
                  <img
                  src={cloudup}
                  className="img-fluid cloudup"
                  alt="cloudup"
                />
                  }
                  
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
                    className="form-control element"
                    ref={imgRef}
                    Browse
                    type="file"
                    id="portfolioImages"
                    name="portfolioImages"
                    multiple
                    onChange={handleFileChange}
                    accept=".png, .jpg, .jpeg"
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <p className="admin-sub-header-title">Body</p>
              <textarea
                type="text"
                placeholder="Career Benefits"
                className="text-field-description"
                value={formData.body}
                name="body"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div>
            <button className="admin-save" onClick={handleSubmit}>
              {" "}
              {isLoading ? (
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

export default NewCareer;
