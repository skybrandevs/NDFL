import React, { useEffect, useRef, useState } from "react";
import { createCEOQuote, createClientsImage, getCeoData, updateCEOQuote } from "../../../api/home";
import { toast } from "react-toastify";
import Nav from "../partials/nav";
import backarrowadmin from "../../../images/backarrowadmin.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import cloudup from "../../../images/cloudup.svg";
import loads from "../../../images/loads.gif";

const ClientPanel = () => {
  const [clientLoading, setClientLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fileInputRefs = useRef();
const navigate = useNavigate()
  const handleClientsFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      const newFile = {
        file: file,
        preview: URL.createObjectURL(file), // Generate preview
      };
      setSelectedFiles(newFile);
    }
  };

  const submitClients = async () => {
    if (!selectedFiles?.file) {
      toast.warning("Please upload an image first.");
      return;
    }
    const formData = new FormData();
    formData.append(
      "image",
      selectedFiles.file,
      selectedFiles.file.name
    );
    setClientLoading(true);
    try {
      const { data } = await createClientsImage(formData);
      if (data.image_path) {
        toast.success(`Image uploaded successfully!`);
        setClientLoading(false);
        navigate('/home')
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.success(`An error occurred while uploading image.`);
      setClientLoading(false);
    }
  };
  return (
    <div>
      <div className="row">
        <div className="col-lg-2">
          <Nav></Nav>
        </div>
        {isLoading ? (
          <img src={loads} className="img-fluid gif-loads-pager" alt="loads" />
        ) : (
          <div className="col-lg-10 bacc">
            <Link to="/home" className="link">
              <img
                src={backarrowadmin}
                className="img-fluid backarrowadmin"
                alt="backarrowadmin"
              />
            </Link>
            <div className="card-admin-h">
              <h3 className="admin-header-title">Add Clients</h3>

              <div className="row">
                    <div className="col-lg-3">
                      <div className="card-upload">
                        {selectedFiles &&
                        selectedFiles.preview ? (
                          <img
                            src={selectedFiles.preview}
                            alt={`Uploaded Preview`}
                            className="img-fluid"
                          />
                        ) : (
                          // Display placeholder for empty slots
                          <img
                            src={cloudup}
                            alt="Upload Placeholder"
                            className="img-fluid cloudup"
                          />
                        )}
                        <p className="label-title">
                          JPG, PNG, or WebP. Less than 10MB
                        </p>
                        <p className="label-title-2">Drag and drop here or </p>
                        <button
                          type="button"
                          className="input-file"
                          onClick={() => fileInputRefs.current.click()}
                        >
                          Browse
                        </button>
                        <input
                          type="file"
                          accept="image/*"
                          ref={fileInputRefs}
                          style={{ display: "none" }}
                          onChange={handleClientsFileChange}
                        />
                        <button
                          className="admin-smaller"
                          onClick={submitClients}
                        >
                          {clientLoading ? (
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
        )}
      </div>
    </div>
  );
};

export default ClientPanel;
