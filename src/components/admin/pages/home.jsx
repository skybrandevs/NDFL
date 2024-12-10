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
  deleteSingleClientImage,
  deleteSingleHeroImage,
  deleteSingleTestimonial,
  getCeoData,
  getClientsImage,
  getHeroImages,
  getSection3,
  getTestimonials,
} from "../../../api/home";
import { toast } from "react-toastify";
import loads from "../../../images/loads.gif";
import ConfirmDeleteModal from "../partials/DeleteModal";

const Home = () => {
  const [clientLoading, setClientLoading] = useState(false);
  const [allTestimonies, setAllTestimonies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [testimonialToDelete, setTestimonialToDelete] = useState(null);
  const [showHeroModal, setShowHeroModal] = useState(false);
  const [heroImageToDelete, setHeroImageToDelete] = useState(null);
  const [showCeoModal, setShowCeoModal] = useState(false);
  const [ceoInfoToDelete, setCeoInfoToDelete] = useState(null);
  const [allImages, setAllImages] = useState([]);
  const [ceoData, setCeoData] = useState();
  const [section3Data, setSection3Data] = useState();
  const [clients, setClients] = useState();
  const [singleClient, setSingleClient] = useState();

  const fetchClients = async () => {
    try {
      setIsLoading(true);
      const { data } = await getClientsImage();
      setClients(data);
      setIsLoading(false);
    } catch (error) {
      toast.error("Failed to load Ceo Data.");
      setIsLoading(false);
    }
  };

  const fetchSection3 = async () => {
    try {
      setIsLoading(true);
      const { data } = await getSection3();
      setSection3Data(data);
      setIsLoading(false);
    } catch (error) {
      toast.error("Failed to load Ceo Data.");
      setIsLoading(false);
    }
  };

  const fetchCeoData = async () => {
    try {
      setIsLoading(true);
      const { data } = await getCeoData();
      setCeoData(data);
      setIsLoading(false);
    } catch (error) {
      toast.error("Failed to load Ceo Data.");
      setIsLoading(false);
    }
  };

  const fetchHeroImages = async () => {
    try {
      setIsLoading(true);
      const { data } = await getHeroImages();
      setAllImages(data);
      setIsLoading(false);
    } catch (error) {
      toast.error("Failed to load section.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHeroImages();
    fetchCeoData();
    fetchSection3();
    fetchClients();
  }, []);

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

  const handleDeleteClickHero = (heroImage) => {
    setHeroImageToDelete(heroImage);
    setShowHeroModal(true);
  };

  const handleDeleteConfirmHero = async () => {
    try {
      const response = await deleteSingleHeroImage(heroImageToDelete?.id);
      setShowHeroModal(false);
      fetchHeroImages();
      if (response.message == "Hero section deleted successfully") {
        toast.success(`Hero image successsfully deleted`);
      }
    } catch (error) {
      console.log("Error deleting Hero image:", error);
      toast.error("Failed to delete Hero image!");
    }
  };

  const handleDeleteCancelHero = () => {
    setShowHeroModal(false); // Close the modal without deleting
  };

  const handleDeleteClickCeo = (id) => {
    setCeoInfoToDelete(id);
    setShowCeoModal(true);
  };

  const handleDeleteConfirmCeo = async () => {
    // Call your delete function here with the vendorIdToDelete
    setShowHeroModal(false);
    // toast.loading('deleting...')
    try {
      const response = await deleteSingleHeroImage(heroImageToDelete?.id);
      setShowHeroModal(false);
      fetchHeroImages();
      if (response.message == "Hero section deleted successfully") {
        toast.success(`Hero image successsfully deleted`);
      }
    } catch (error) {
      console.log("Error deleting Hero image:", error);
      toast.error("Failed to delete Hero image!");
    }
  };

  const handleDeleteCancelCeo = () => {
    setShowCeoModal(false); // Close the modal without deleting
  };

  const handleDeleteClient = async (id) => {
    setSingleClient(id);
    try {
      setClientLoading(true);
      const response = await deleteSingleClientImage(id);
      setShowHeroModal(false);
      fetchClients();
      if (response.message == "Client deleted successfully") {
        toast.success(`Client successsfully deleted`);
        setClientLoading(false);
      }
    } catch (error) {
      console.log("Error deleting Hero image:", error);
      toast.error("Failed to delete Hero image!");
      setClientLoading(false);
    }
  };

  return (
    <div>
      <ConfirmDeleteModal
        show={showModal}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        vendorName={testimonialToDelete?.id || "this testimonial"}
      />
      <ConfirmDeleteModal
        show={showHeroModal}
        onClose={handleDeleteCancelHero}
        onConfirm={handleDeleteConfirmHero}
        vendorName={heroImageToDelete?.id || "this Image"}
      />
      <div className="row">
        <div className="col-lg-2">
          <Nav></Nav>
        </div>
        {isLoading ? (
          <img src={loads} className="img-fluid gif-loads-pager" alt="loads" />
        ) : (
          <div className="col-lg-10 bacc">
            <div className="card-admin-h">
              <h3 className="admin-header-title">Hero Section</h3>
              <div className="row">
                {allImages?.map((image, index) => (
                  <div className="col-lg-6" key={index}>
                    <div className="fancy-card-admin">
                      <div className="row">
                        <div className="col-lg-6">
                          <img
                            src={image?.image_path}
                            className="img-fluid"
                            alt="client-face"
                          />
                        </div>

                        <div className="col-lg-6">
                          <Link
                            to={`/hero-images/${image.id}`}
                            className="link"
                          >
                            <span className="edit">Edit</span>
                          </Link>
                          <span
                            className="delete"
                            onClick={() => handleDeleteClickHero(image)}
                            style={{ cursor: "pointer" }}
                          >
                            Delete
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="row">
                  <div className="col-lg-11 add-mr-top">
                    <Link to="/hero-images" className="link">
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
                          src={ceoData?.image_path}
                          className="img-fluid"
                          alt="client-face"
                        />
                      </div>

                      <div className="col-lg-6">
                        <h3>{ceoData?.quote}</h3>
                        <p>{ceoData?.subtext}</p>
                        <Link to={`/ceo-quote/${ceoData?.id}`} className="link">
                          <span className="edit">Edit</span>
                        </Link>
                        <span
                          className="delete"
                          onClick={() => handleDeleteConfirmCeo(ceoData?.id)}
                          style={{ cursor: "pointer" }}
                        >
                          Delete
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-11 add-mr-top">
                    <Link to="/ceo-quote" className="link">
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
                        <p>yrs of Exp. : {section3Data?.years_of_experience}</p>
                        <p>
                          Completed Projects :{" "}
                          {section3Data?.completed_projects}
                        </p>
                        <p>
                          Satisfied Clients : {section3Data?.satisfied_clients}
                        </p>
                        <Link
                          to={`/links/${section3Data?.id}`}
                          className="link"
                        >
                          <span className="edit">Edit</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-11 add-mr-top">
                    <Link to="/links" className="link">
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
                {clients?.map((client, index) => (
                  <div className="col-lg-3 em-border" key={index}>
                    <img
                      src={client.image_path}
                      className="img-fluid client-logo"
                      alt="client-logo"
                    />
                    <span
                      className="remove-client-logo"
                      onClick={() => handleDeleteClient(client?.id)}
                    >
                      {clientLoading && client?.id == singleClient ? (
                        <>
                          <img
                            src={loads}
                            className="img-fluid gif-loads"
                            alt="loads"
                          />{" "}
                        </>
                      ) : (
                        "Remove"
                      )}
                    </span>
                  </div>
                ))}
              </div>
              <div className="row">
                <div className="col-lg-11 add-mr-top">
                  <Link to="/client" className="link">
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
                            <p>{testimonial.quote}</p>
                            <Link
                              to={`/addtestimonial/${testimonial.id}`}
                              className="link"
                            >
                              <span className="edit">Edit</span>
                            </Link>
                            <span
                              className="delete"
                              onClick={() => handleDeleteClick(testimonial)}
                              style={{ cursor: "pointer" }}
                            >
                              Delete
                            </span>
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
        )}
      </div>
    </div>
  );
};

export default Home;
