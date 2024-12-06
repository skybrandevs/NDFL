import React, { useEffect, useRef, useState } from "react";
import Nav from "../partials/nav";
import backarrowadmin from "../../../images/backarrowadmin.svg";
import cloudup from "../../../images/cloudup.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  createPortfolio,
  getSinglePortfolio,
  updateSinglePortfolio,
} from "../../../api/portfolio";
import { toast } from "react-toastify";
import loads from "../../../images/loads.gif";

const Portfoliodetailspanel = () => {
  const [formData, setFormData] = useState({
    project_name: "",
    client_name: "",
    duration: "",
    size: "",
    location: "",
    category: "",
    project_description: "",
  });
  const [featuredImage, setFeaturedImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { portfolioId } = useParams();
  const navigation = useNavigate();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [image, setImage] = useState();

  // Array of refs for each input
  const featuredImgRef = useRef();
  const fileInputRefs = useRef([]);

  // Handle file selection
  const handleOtherImagesChange = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const newFile = {
        file,
        preview: URL.createObjectURL(file),
      };

      // Update the state with the new file for the corresponding index
      setSelectedFiles((prevFiles) => {
        const updatedFiles = [...prevFiles];
        updatedFiles[index] = newFile;
        return updatedFiles;
      });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newFile = {
        file,
        preview: URL.createObjectURL(file),
      };
      setFeaturedImage(newFile);
    }
  };

  const handleBrowseClick = (index) => {
    if (fileInputRefs.current[index]) {
      fileInputRefs.current[index].click(); // Programmatically trigger the file input click
    }
  };

  // Fetch portfolio data if editing
  useEffect(() => {
    const fetchPortfolio = async () => {
      if (portfolioId) {
        setIsEditing(true); // Switch to editing mode
        try {
          setIsLoading(true);
          const { data } = await getSinglePortfolio(portfolioId);
          setFormData({
            project_name: data?.project_name,
            client_name: data?.client_name,
            duration: data?.duration,
            size: data?.size,
            location: data?.location,
            category: data?.category,
            project_description: data?.project_description,
          });
          setImage(data.featured_image);
          setSelectedFiles(
            (data.images || []).map((imageUrl) => ({
              preview: imageUrl.image_path, // URL of the image
              isExisting: true, // Mark as an existing image
            }))
          );
          setIsLoading(false);
          // Assuming backend returns image URLs
          setIsLoading(false);
        } catch (error) {
          toast.error("Failed to load portfolio details.");
          setIsLoading(false);
        }
      }
    };

    fetchPortfolio();
  }, [portfolioId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRemoveImage = (index) => {
    setSelectedFiles((prevFiles) => {
      const updatedFiles = [...prevFiles];
      updatedFiles[index] = null; // Remove the selected file at this index
      return updatedFiles;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input fields
    if (!formData.project_name || !formData.client_name) {
      toast.error("Please fill in all required fields!");
      return;
    }

    const form = new FormData();
    form.append("project_name", formData.project_name);
    form.append("client_name", formData.client_name);
    form.append("duration", formData.duration);
    form.append("size", formData.size);
    form.append("location", formData.location);
    form.append("category", formData.category);
    form.append("project_description", formData.project_description);

    // Add the featured image
    if (featuredImage) {
      form.append(
        "featured_image",
        featuredImage.file,
        featuredImage.file.name
      );
    }

    // Add other images
    selectedFiles.forEach((file, index) => {
      if (file && file.file instanceof File) {
        form.append(`other_images[${index}]`, file.file, file.file.name);
      }
    });

    try {
      setIsLoading(true);
      if (isEditing) {
        // Update portfolio
        let updateResponse = await updateSinglePortfolio(portfolioId, form);
        if (updateResponse.message)
          toast.success("Portfolio updated successfully!");
        navigation("/portfoliopanel");
        setIsLoading(false);
        return;
      } else {
        // Create new portfolio
        let createResponse = await createPortfolio(form); // Create API call
        if (createResponse.data.project_name) {
          toast.success("Portfolio created successfully!");
          navigation("/portfoliopanel");
          setIsLoading(false);
          return;
        }
      }

      // Reset form
      setFormData({
        project_name: "",
        client_name: "",
        duration: "",
        size: "",
        location: "",
        category: "",
        project_description: "",
      });
      setFeaturedImage(null);
      setSelectedFiles([]);
      setIsLoading(false);
    } catch (error) {
      console.error("Error submitting portfolio:", error);
      toast.error("Failed to submit portfolio!");
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-lg-2">
          <Nav></Nav>
        </div>

        <div className="col-lg-10 bacc">
          <Link to="/portfoliopanel" className="link">
            <img
              src={backarrowadmin}
              className="img-fluid backarrowadmin"
              alt="backarrowadmin"
            />
          </Link>

          <div className="card-admin-h">
            <h3 className="admin-header-title">Section 1</h3>
            <div className="row">
              <div className="col-lg-4">
                <p className="admin-sub-header-title">Project Name</p>
                <input
                  type="text"
                  placeholder="Churchgate"
                  className="text-field-testimonials"
                  name="project_name"
                  value={formData.project_name}
                  onChange={handleChange}
                />

                <p className="admin-sub-header-title">Featured Image</p>
                <div className="card-upload">
                  {featuredImage ? (
                    <>
                      <img
                        src={featuredImage.preview}
                        alt={"featured image"}
                        className="img-fluid"
                      />
                    </>
                  ) : (
                    <img
                      src={isEditing ? image : cloudup}
                      alt="Upload Placeholder"
                      className="img-fluid cloudup"
                    />
                  )}
                  <p className="label-title">
                    JPG, PNG or WebP. Less than 10MB
                  </p>
                  <p className="label-title-2">Drag and drop here or </p>
                  {!isEditing && (
                    <button
                      type="file"
                      className="input-file"
                      ref={featuredImgRef}
                      onClick={() => featuredImgRef.current.click()}
                    >
                      Browse
                    </button>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    ref={featuredImgRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3">
                <p className="admin-sub-header-title">Client Name</p>
                <input
                  type="text"
                  placeholder="Churchgate"
                  className="text-field-testimonials"
                  name="client_name"
                  value={formData.client_name}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-3">
                <p className="admin-sub-header-title">Duration</p>
                <input
                  type="text"
                  placeholder="4 weeks"
                  className="text-field-testimonials"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-3">
                <p className="admin-sub-header-title">Size</p>
                <input
                  type="text"
                  placeholder="120 sqm"
                  className="text-field-testimonials"
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3">
                <p className="admin-sub-header-title">Location</p>
                <input
                  type="text"
                  placeholder="Lagos"
                  className="text-field-testimonials"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-3">
                <p className="admin-sub-header-title">Category</p>
                <input
                  type="text"
                  placeholder="Commercial"
                  className="text-field-testimonials"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="card-admin-h">
            <h3 className="admin-header-title">Section 2</h3>
            <div className="row">
              <div className="col-lg-12">
                <p className="admin-sub-header-title">Project Description</p>
                <textarea
                  type="text"
                  placeholder="Enter Project description"
                  className="text-field-description"
                  name="project_description"
                  value={formData.project_description}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="card-admin-h">
            <h3 className="admin-header-title">Other Images</h3>

            <div className="row">
              {Array.from({ length: 16 }).map((_, index) => {
                const file = selectedFiles[index];
                console.log(file, 344); // Get the file at the current slot
                return (
                  <div className="col-lg-3" key={index}>
                    <div className="card-upload">
                      {file && file.preview ? (
                        // Display preview for selected files
                        <>
                          <img
                            src={file.preview}
                            alt={`Selected ${index}`}
                            className="img-fluid"
                          />
                          {!isEditing && (
                            <button
                              type="button"
                              className="btn btn-sm btn-danger mt-2"
                              onClick={() => handleRemoveImage(index)}
                            >
                              Remove
                            </button>
                          )}
                        </>
                      ) : (
                        // Display placeholder for empty slots
                        <>
                          <img
                            src={cloudup}
                            alt="Upload Placeholder"
                            className="img-fluid cloudup"
                          />
                          <p className="label-title">
                            JPG, PNG, or WebP. Less than 10MB
                          </p>
                          <p className="label-title-2">
                            Drag and drop here or{" "}
                          </p>
                          {!isEditing && (
                            <button
                              type="button"
                              className="input-file"
                              onClick={() => handleBrowseClick(index)}
                            >
                              Browse
                            </button>
                          )}
                          <input
                            type="file"
                            accept="image/*"
                            ref={(el) => (fileInputRefs.current[index] = el)}
                            style={{ display: "none" }}
                            onChange={(e) => handleOtherImagesChange(e, index)}
                          />
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <button className="admin-save" onClick={handleSubmit}>
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
    </div>
  );
};

export default Portfoliodetailspanel;
