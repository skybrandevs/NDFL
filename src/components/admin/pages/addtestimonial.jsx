import React, { useEffect, useRef, useState } from "react";
import Nav from "../partials/nav";
import backarrowadmin from "../../../images/backarrowadmin.svg";
import cloudup from "../../../images/cloudup.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createTestimony,
  getSingleTestimonial,
  updateSingleTestimonial,
} from "../../../api/home";
import loads from "../../../images/loads.gif";

const Addtestimonial = () => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    quote: "",
    image: null,
  });
  const [submitLoader, setSubmitLoader] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const imgRef = useRef();
  const { id } = useParams();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newFile = {
        file: file,
        preview: URL.createObjectURL(file),
      };
      setFormData({
        ...formData,
        image: newFile,
      });
    }
  };

  const handleSubmit = async (index) => {
    const { name, designation, quote, image } = formData;
    if (!quote || !name || !designation) {
      toast.warning("Please fill in all required fields!");
      return;
    }
    const form = new FormData();
    form.append("quote", quote);
    form.append("name", name);
    form.append("designation", designation);

    if (image && image.file instanceof File) {
      form.append("image", image.file, image.file.name);
    }
    setSubmitLoader(true);
    try {
      if (id && id !== undefined) {
        const { data } = await updateSingleTestimonial(id, form);
        if (data.name) {
          toast.success(`Testimony updated successfully!`);
          setSubmitLoader(false);
          navigate("/home");
          setSubmitLoader(false);
        }
      } else {
        const { data } = await createTestimony(form);
        if (data.quote) {
          toast.success(`Testimony uploaded successfully!`);
          setSubmitLoader(false);
          navigate("/home");
          setSubmitLoader(false);
        }
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.success(`An error occurred while uploading CEO quote.`);
      setSubmitLoader(false);
    }
  };

  useEffect(() => {
    if (id) {
      const fetchTestimoialDetails = async () => {
        try {
          setIsLoading(true);
          const { data } = await getSingleTestimonial(id);
          setFormData({
            name: data[0]?.name,
            designation: data[0]?.designation,
            quote: data[0]?.quote,
            image: {
              preview: data[0]?.image_path,
            },
          });
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
          toast.error("Failed to load blog details.");
        }
      };
      fetchTestimoialDetails();
    }
  }, [id]);

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
              <h3 className="admin-header-title">New Testimonial</h3>

              <div className="card-testimonial">
                <div className="row">
                  <div className="col-lg-4">
                    <p className="admin-sub-header-title">Name</p>
                    <input
                      type="text"
                      placeholder="Joke Silva"
                      className="text-field-testimonials"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-lg-4">
                    <p className="admin-sub-header-title">Designation</p>
                    <input
                      type="text"
                      placeholder="CEO Chicken Republic"
                      className="text-field-testimonials"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="row">
                    <div className="col-lg-8">
                      <p className="admin-sub-header-title">Quote</p>
                      <input
                        type="text"
                        placeholder="Crafting future-ready architectural designs that blend innovation with sustainability. Our meticulous approach ensures every structure stands out in aesthetics and functionality."
                        className="text-field-quote"
                        name="quote"
                        value={formData.quote}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-lg-4">
                      {formData.image && formData.image.preview ? (
                        <img
                          src={formData.image.preview}
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
                <button className="admin-save-3" onClick={handleSubmit}>
                  {" "}
                  {submitLoader ? (
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
        )}
      </div>
    </div>
  );
};

export default Addtestimonial;
