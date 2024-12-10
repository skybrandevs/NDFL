import React, { useEffect, useRef, useState } from "react";
import Nav from "../partials/nav";
import backarrowadmin from "../../../images/backarrowadmin.svg";
import cloudup from "../../../images/cloudup.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  createTeamMembers,
  getSingleTeamMember,
  updateTeamMember,
} from "../../../api/about-us";
import { toast } from "react-toastify";
import loads from "../../../images/loads.gif";
import {
  createHeroImage,
  getHeroImages,
  updateSingleHeroImage,
} from "../../../api/home";

const HeroImagesPanel = () => {
  const [images, setImages] = useState();
  const [imgSubmitLoading, setImgSubmitLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const imgRefs = useRef();
  const { id } = useParams();

  useEffect(() => {
    const fetchHeroImages = async () => {
      try {
        setIsLoading(true);
        const { data } = await getHeroImages();
        const currentImage = data.find((item) => item?.id == id);
        setImages({
          preview: currentImage.image_path,
        });
        setIsLoading(false);
      } catch (error) {
        toast.error("Failed to load section.");
        setIsLoading(false);
      }
    };

    if (id) {
      fetchHeroImages();
    }
  }, [id]);

  const navigate = useNavigate();
  const handleFileChange = (e, index) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      const newFile = {
        file: file,
        preview: URL.createObjectURL(file), // Generate preview
      };
      // Update specific image state in the array
      setImages(newFile);
    }
  };

  const submitSectionHeroImages = async () => {
    if (!images.file) {
      toast.warning("Please upload an image first.");
      return;
    }
    const formData = new FormData();
    if (images && images.file instanceof File) {
      formData.append("image", images.file, images.file.name);
    }

    setImgSubmitLoading(true);
    try {
      if (id) {
        const { data } = await updateSingleHeroImage(id, formData);
        if (data.image_path) {
          toast.success(`Image updated successfully!`);
          setImgSubmitLoading(false);
          navigate("/home");
        }
      } else {
        const { data } = await createHeroImage(formData);
        if (data.image_path) {
          toast.success(`Image uploaded successfully!`);
          setImgSubmitLoading(false);
          navigate("/home");
        }
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.success(`An error occurred while uploading image.`);
      setImgSubmitLoading(false);
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
              <h3 className="admin-header-title">Hero Section</h3>
              <p className="admin-sub-header-title">Add image</p>

              <div className="row">
                <div className="col-lg-3">
                  <div className="card-upload">
                    {images && images.preview ? (
                      <img
                        src={images.preview}
                        alt={`Uploaded Preview `}
                        className="img-fluid"
                      />
                    ) : (
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
                      onClick={() => imgRefs.current.click()}
                    >
                      Browse
                    </button>
                    <input
                      type="file"
                      accept="image/*"
                      ref={imgRefs}
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                  </div>
                  <button
                    className="admin-smaller"
                    onClick={submitSectionHeroImages}
                  >
                    {imgSubmitLoading ? (
                      <>
                        <img
                          src={loads}
                          className="img-fluid gif-loads"
                          alt="loads"
                        />{" "}
                      </>
                    ) : (
                     id ? "Update" : "Save"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroImagesPanel;
