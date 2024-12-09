import React, { useEffect, useRef, useState } from "react";
import Nav from "././../partials/nav";
import cloudup from "../../../images/cloudup.svg";
import add from "../../../images/add.svg";
import kosie from "../../../images/kosie.png";
import noimage from "../../../images/noimage.svg";
import { Link } from "react-router-dom";
import betaglass from "../../../images/betaglass.png";
import {
  createCEOQuote,
  createClientsImage,
  createHeroImage,
  createSection3,
  deleteSingleTestimonial,
  getTestimonials,
} from "../../../api/home";
import { toast } from "react-toastify";
import loads from "../../../images/loads.gif";
import ConfirmDeleteModal from "../partials/DeleteModal";

const Home = () => {
  const [images, setImages] = useState([null, null, null, null]);
  const [ceoForm, setCeoForm] = useState({
    quote: "",
    subtext: "",
    image: null,
  });
  const [section3, setSection3] = useState({
    video_link: "",
    years_of_experience: "",
    completed_projects: "",
    satisfied_clients: "",
  });
  const [imgSubmitLoading, setImgSubmitLoading] = useState(false);
  const [ceoLoading, setCeoLoading] = useState(false);
  const [sect3Loading, setSect3LoadingLoading] = useState(false);
  const [clientLoading, setClientLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [allTestimonies, setAllTestimonies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [testimonialToDelete, setTestimonialToDelete] = useState(null);

  const fileInputRefs = useRef([]);
  const imgRefs = useRef([null, null, null, null]);
  const ceoImgRef = useRef();

  const fetchTestimonies = async () => {
    try {
      setIsLoading(true);
      const { data } = await getTestimonials();
      console.log(data);
      setAllTestimonies(data);
      setIsLoading(false);
    } catch (error) {
      toast.error("Failed to load portfolios.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonies();
  }, []);

  const handleFileChange = (e, index) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      const newFile = {
        file: file,
        preview: URL.createObjectURL(file), // Generate preview
      };
      // Update specific image state in the array
      const updatedImages = [...images];
      updatedImages[index] = newFile;
      setImages(updatedImages);
    }
  };

  const handleClientsFileChange = (e, index) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      const newFile = {
        file: file,
        preview: URL.createObjectURL(file), // Generate preview
      };
      // Update specific image state in the array
      const updatedImages = [...selectedFiles];
      updatedImages[index] = newFile;
      setSelectedFiles(updatedImages);
    }
  };

  const handleCeoFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newFile = {
        file: file,
        preview: URL.createObjectURL(file),
      };
      setCeoForm({
        ...ceoForm,
        image: newFile,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCeoForm({ ...ceoForm, [name]: value });
  };

  const handleChangeSection = (e) => {
    const { name, value } = e.target;
    setSection3({ ...section3, [name]: value });
  };

  const submitSectionHeroImages = async (index) => {
    if (!images[index]?.file) {
      toast.warning("Please upload an image first.");
      return;
    }
    const formData = new FormData();
    formData.append("image", images[index].file);
    setImgSubmitLoading(true);
    try {
      const { data } = await createHeroImage(formData);
      console.log(data);
      if (data.image_path) {
        toast.success(`Image ${index + 1} uploaded successfully!`);
        setImgSubmitLoading(false);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.success(`An error occurred while uploading image ${index + 1}.`);
      setImgSubmitLoading(false);
    }
  };

  const submitCeoQuotes = async (index) => {
    const { quote, subtext, image } = ceoForm;
    if (!quote || !subtext) {
      toast.warning("Please fill in all required fields!");
      return;
    }

    const formData = new FormData();
    formData.append("quote", quote);
    formData.append("subtext", subtext);

    if (image && image.file instanceof File) {
      formData.append("image", image.file, image.file.name);
    }

    setCeoLoading(true);
    try {
      const { data } = await createCEOQuote(formData);
      console.log(data);
      if (data.quote) {
        toast.success(`CEO quote uploaded successfully!`);
        setCeoLoading(false);
        setCeoForm({
          quote: "",
          subtext: "",
          image: null,
        });
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.success(`An error occurred while uploading CEO quote.`);
      setCeoLoading(false);
    }
  };

  const submitSection3 = async () => {
    const {
      satisfied_clients,
      years_of_experience,
      video_link,
      completed_projects,
    } = section3;
    if (
      !satisfied_clients ||
      !years_of_experience ||
      !video_link ||
      !completed_projects
    ) {
      toast.warning("Please fill in all required fields!");
      return;
    }
    const dataSubmitted = {
      satisfied_clients,
      years_of_experience,
      video_link,
      completed_projects,
    };
    setSect3LoadingLoading(true);
    try {
      const { data } = await createSection3(dataSubmitted);
      if (data.satisfied_clients) {
        toast.success(`Section 3 uploaded successfully!`);
        setSect3LoadingLoading(false);
        setSection3({
          video_link: "",
          years_of_experience: "",
          completed_projects: "",
          satisfied_clients: "",
        });
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.success(`An error occurred while uploading section 3.`);
      setSect3LoadingLoading(false);
    }
  };

  const submitClients = async (index) => {
    if (!selectedFiles[index]?.file) {
      toast.warning("Please upload an image first.");
      return;
    }
    const formData = new FormData();
    formData.append(
      "image",
      selectedFiles[index].file,
      selectedFiles[index].file.name
    );
    setClientLoading(true);
    try {
      const { data } = await createClientsImage(formData);
      console.log(data);
      if (data.image_path) {
        toast.success(`Image ${index + 1} uploaded successfully!`);
        setClientLoading(false);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.success(`An error occurred while uploading image ${index + 1}.`);
      setClientLoading(false);
    }
  };

  const handleDeleteClick = (testimonial) => {
    setTestimonialToDelete(testimonial);
    setShowModal(true);
  };

  const handleDeleteConfirm = async () => {
    // Call your delete function here with the vendorIdToDelete
    try {
      const response = await deleteSingleTestimonial(testimonialToDelete?.id);
      setShowModal(false);
      fetchTestimonies();
      if (response.message) {
        toast.success(`Testimonial successsfully deleted`);
      }
    } catch (error) {
      console.log("Error deleting testimonial:", error);
      toast.error("Failed to delete testimonial!");
    }
  };

  const handleDeleteCancel = () => {
    setShowModal(false); // Close the modal without deleting
  };

  return (
    <div>
       <ConfirmDeleteModal
        show={showModal}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        vendorName={testimonialToDelete?.id || "this testimonial"}
      />
      <div className="row">
        <div className="col-lg-2">
          <Nav></Nav>
        </div>
        <div className="col-lg-10 bacc">
          <div className="card-admin-h">
            <h3 className="admin-header-title">Hero Section</h3>
            <p className="admin-sub-header-title">Images</p>

            <div className="row">
              {Array.from({ length: 1}).map((_, index) => {
                const file = images[index];
                return (
                  <div className="col-lg-3" key={index}>
                    <div className="card-upload">
                      {images[index] && images[index].preview ? (
                        <img
                          src={images[index].preview}
                          alt={`Uploaded Preview ${index + 1}`}
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
                        onClick={() => imgRefs.current[index].click()}
                      >
                        Browse
                      </button>
                      <input
                        type="file"
                        accept="image/*"
                        ref={(el) => (imgRefs.current[index] = el)}
                        style={{ display: "none" }}
                        onChange={(e) => handleFileChange(e, index)}
                      />
                    </div>
                    <button
                      className="admin-smaller"
                      onClick={() => submitSectionHeroImages(index)}
                    >
                      {imgSubmitLoading && file ? (
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
                );
              })}
            </div>
          </div>

          <div className="card-admin-h">
            <h3 className="admin-header-title">Ceo Quote</h3>

            <p className="admin-sub-header-title">Quote</p>
            <textarea
              type="text"
              placeholder="Enter Ceo Quote"
              className="text-field-admin"
              name="quote"
              value={ceoForm.quote}
              onChange={handleChange}
            />

            <p className="admin-sub-header-title">Sub Text</p>
            <input
              type="text"
              placeholder="Enter Sub Text"
              className="text-field-admin"
              name="subtext"
              value={ceoForm.subtext}
              onChange={handleChange}
            />
            <p className="admin-sub-header-title">Images</p>

            <div className="row">
              <div className="col-lg-3">
                <div className="card-upload">
                  {ceoForm.image && ceoForm.image.preview ? (
                    <img
                      src={ceoForm.image.preview}
                      alt={`CEO image`}
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
                    onClick={() => ceoImgRef.current.click()}
                  >
                    Browse
                  </button>
                  <input
                    type="file"
                    accept="image/*"
                    ref={ceoImgRef}
                    style={{ display: "none" }}
                    onChange={handleCeoFileChange}
                  />
                </div>
              </div>
            </div>
            <button className="admin-save-3" onClick={submitCeoQuotes}>
              {" "}
              {ceoLoading ? (
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

          <div className="card-admin-h">
            <h3 className="admin-header-title">Section 3</h3>

            <p className="admin-sub-header-title">Video link</p>

            <input
              type="text"
              placeholder="youtube.com/hhsjseeheueueqnwhqw"
              className="text-field-video"
              name="video_link"
              value={section3.video_link}
              onChange={handleChangeSection}
            />

            <div className="row">
              <div className="col-lg-3">
                <p className="admin-sub-header-title">Years of Experience</p>
                <input
                  type="number"
                  placeholder="11"
                  className="text-field-counter"
                  name="years_of_experience"
                  value={section3.years_of_experience}
                  onChange={handleChangeSection}
                />
              </div>

              <div className="col-lg-3">
                <p className="admin-sub-header-title">Completed Project</p>
                <input
                  type="number"
                  placeholder="60"
                  className="text-field-counter"
                  name="completed_projects"
                  value={section3.completed_projects}
                  onChange={handleChangeSection}
                />
              </div>

              <div className="col-lg-3">
                <p className="admin-sub-header-title">Satisfied Clients</p>
                <input
                  type="number"
                  placeholder="30"
                  className="text-field-counter"
                  name="satisfied_clients"
                  value={section3.satisfied_clients}
                  onChange={handleChangeSection}
                />
              </div>
            </div>
            <button className="admin-save-3" onClick={submitSection3}>
              {sect3Loading ? (
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

        
          <div className="card-admin-h">
            <h3 className="admin-header-title">Add Clients</h3>

            <div className="row">
              {Array.from({ length: 1 }).map((_, index) => {
                const file = selectedFiles[index];
                return (
                  <div className="col-lg-3" key={index}>
                    <div className="card-upload">
                      {selectedFiles[index] && selectedFiles[index].preview ? (
                        <img
                          src={selectedFiles[index].preview}
                          alt={`Uploaded Preview ${index + 1}`}
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
                        onClick={() => fileInputRefs.current[index].click()}
                      >
                        Browse
                      </button>
                      <input
                        type="file"
                        accept="image/*"
                        ref={(el) => (fileInputRefs.current[index] = el)}
                        style={{ display: "none" }}
                        onChange={(e) => handleClientsFileChange(e, index)}
                      />
                      <button
                        className="admin-smaller"
                        onClick={() => submitClients(index)}
                      >
                        {clientLoading && file ? (
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
                );
              })}
            </div>
          </div>

          <div className="card-admin-h">
            <h3 className="admin-header-title">Hero Section</h3>
            <div className="row">
             
                  <div className="col-lg-6">
                    <div className="fancy-card-admin">
                      <div className="row">
                        <div className="col-lg-6">
                          <img
                            src={kosie}
                            className="img-fluid"
                            alt="client-face"
                          />
                        </div>

                        <div className="col-lg-6">
                          <Link to="" className="link">
                            <span className="edit">Edit</span>
                          </Link>
                          <span className="delete">Delete</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="fancy-card-admin">
                      <div className="row">
                        <div className="col-lg-6">
                          <img
                            src={kosie}
                            className="img-fluid"
                            alt="client-face"
                          />
                        </div>

                        <div className="col-lg-6">
                          <Link to="" className="link">
                            <span className="edit">Edit</span>
                          </Link>
                          <span className="delete">Delete</span>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="col-lg-6">
                    <div className="fancy-card-admin">
                      <div className="row">
                        <div className="col-lg-6">
                          <img
                            src={kosie}
                            className="img-fluid"
                            alt="client-face"
                          />
                        </div>

                        <div className="col-lg-6">
                          <Link to="" className="link">
                            <span className="edit">Edit</span>
                          </Link>
                          <span className="delete">Delete</span>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="col-lg-6">
                    <div className="fancy-card-admin">
                      <div className="row">
                        <div className="col-lg-6">
                          <img
                            src={kosie}
                            className="img-fluid"
                            alt="client-face"
                          />
                        </div>

                        <div className="col-lg-6">
                          <Link to="" className="link">
                            <span className="edit">Edit</span>
                          </Link>
                          <span className="delete">Delete</span>
                        </div>
                      </div>
                    </div>
                  </div>
           

              <div className="row">
                <div className="col-lg-11 add-mr-top">
                  <Link to="/addtestimonial" className="link">
                    <span className="flotter">
                      <img src={add} className="img-fluid add-2" alt="add" />
                      Add another
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>


          <div className="card-admin-h">
            <h3 className="admin-header-title">Ceo Quote</h3>
            <div className="row">
             
                  <div className="col-lg-6">
                    <div className="fancy-card-admin">
                      <div className="row">
                        <div className="col-lg-6">
                          <img
                            src={kosie}
                            className="img-fluid"
                            alt="client-face"
                          />
                        </div>

                        <div className="col-lg-6">
                        <h3>Quote here</h3>
                        <p>subtext here</p>
                       <Link  className="link">
                            <span className="edit">Edit</span>
                          </Link>
                          <span className="delete">Delete</span>
                        </div>
                      </div>
                    </div>
                  </div>
             
              <div className="row">
                <div className="col-lg-11 add-mr-top">
                  <Link to="/addtestimonial" className="link">
                    <span className="flotter">
                      <img src={add} className="img-fluid add-2" alt="add" />
                      Write Quote
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="card-admin-h">
            <h3 className="admin-header-title">Section 3</h3>
            <div className="row">
             
                  <div className="col-lg-6">
                    <div className="fancy-card-admin">
                      <div className="row">
                        <div className="col-lg-6">
                          <img
                            src={noimage}
                            className="img-fluid"
                            alt="client-face"
                          />
                        </div>

                        <div className="col-lg-6">
                     <p>yrs of Exp. : 10</p>
                     <p>Completed Projects : 10</p>
                     <p>Satisfied Clients : 10</p>
                       <Link  className="link">
                            <span className="edit">Edit</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
             
              <div className="row">
                <div className="col-lg-11 add-mr-top">
                  <Link to="/addtestimonial" className="link">
                    <span className="flotter">
                      <img src={add} className="img-fluid add-2" alt="add" />
                      Manage
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>


          <div className="card-admin-h">
            <h3 className="admin-header-title">list of clients</h3>
           <div className="row">
<div className="col-lg-3 em-border">
  <img src={betaglass} className="img-fluid client-logo" alt="client-logo"/>
  <span className="remove-client-logo">Remove</span>
</div>

<div className="col-lg-3 em-border">
  <img src={betaglass} className="img-fluid client-logo" alt="client-logo"/>
  <span className="remove-client-logo">Remove</span>
</div>

<div className="col-lg-3 em-border">
  <img src={betaglass} className="img-fluid client-logo" alt="client-logo"/>
  <span className="remove-client-logo">Remove</span>
</div>

<div className="col-lg-3 em-border">
  <img src={betaglass} className="img-fluid client-logo" alt="client-logo"/>
  <span className="remove-client-logo">Remove</span>
</div>

<div className="col-lg-3 em-border">
  <img src={betaglass} className="img-fluid client-logo" alt="client-logo"/>
  <span className="remove-client-logo">Remove</span>
</div>

<div className="col-lg-3 em-border">
  <img src={betaglass} className="img-fluid client-logo" alt="client-logo"/>
  <span className="remove-client-logo">Remove</span>
</div>

<div className="col-lg-3 em-border">
  <img src={betaglass} className="img-fluid client-logo" alt="client-logo"/>
  <span className="remove-client-logo">Remove</span>
</div>

<div className="col-lg-3 em-border">
  <img src={betaglass} className="img-fluid client-logo" alt="client-logo"/>
  <span className="remove-client-logo">Remove</span>
</div>

</div>
<div className="row">
   <div className="col-lg-11 add-mr-top">
    <Link to="/" className="link">
     <span className="flotter">
     <img src={add} className="img-fluid add-2" alt="add" />
      Add another
       </span>
       </Link>
       </div>
      </div>
</div>



          <div className="card-admin-h">
            <h3 className="admin-header-title">Testimonials</h3>
            <div className="row">
              {allTestimonies?.map((testimonial, index) => {
                return (
                  <div className="col-lg-6" key={index}>
                    <div className="fancy-card-admin">
                      <div className="row">
                        <div className="col-lg-6">
                          <img
                            src={testimonial.image_path}
                            className="img-fluid"
                            alt="client-face"
                          />
                        </div>

                        <div className="col-lg-6">
                          <p>
                            {testimonial.quote}
                          </p>
                          <Link to={`/addtestimonial/${testimonial.id}`} className="link">
                            <span className="edit">Edit</span>
                          </Link>
                          <span className="delete"
                           onClick={() => handleDeleteClick(testimonial)}
                           style={{ cursor: "pointer" }}
                          >Delete</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="row">
                <div className="col-lg-11 add-mr-top">
                  <Link to="/addtestimonial" className="link">
                    <span className="flotter">
                      <img src={add} className="img-fluid add-2" alt="add" />
                      Add another
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
