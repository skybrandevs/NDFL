import React, { useEffect, useState } from "react";
import Navbar from "../../components/partials/navbar";
import Footer from "../../components/partials/footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import back from "../../images/back.svg";
import { getSingleCareer } from "../../api/careers";
import { toast } from "react-toastify";
import loads from "../../images/loads.gif";
import { createJobSubmissionEntry } from "../../api/jobSubmission";

const Jobdescription = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [jobDetail, setJobDetail] = useState();
  const [formData, setFormData] = useState({
    resume: null,
    full_name: "",
    email: "",
    cover_letter: "",
    portfolio_images: null,
  });
  const { careerId } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        resume: file,
      });
    }
  };

  const handleMultipleFilesChange = (e) => {
    setFormData({
      ...formData,
      portfolio_images: Array.from(e.target.files),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { full_name, resume, portfolio_images, email, cover_letter } =
      formData;
    if (!full_name || !resume || !portfolio_images || !email || !cover_letter) {
      toast.error("All fields must be filled!");
      return;
    }

    try {
      setSubmitLoading(true);

      const form = new FormData();
      form.append("career_id", jobDetail?.id)
      form.append("full_name", full_name);
      form.append("email", email);
      form.append("cover_letter", cover_letter);

      if (resume) {
        form.append("resume", resume, resume.name); // Include file name (optional)
      }

      portfolio_images.forEach((file, index) => {
        form.append(`portfolio_images[${index}]`, file, file.name);
      });
      // Make the API request
      const { data } = await createJobSubmissionEntry(form);
      setSubmitLoading(false);

      if (data.full_name) {
        toast.success("Form submitted successfully!");
        setFormData({
          resume: null,
          full_name: "",
          email: "",
          cover_letter: "",
          portfolio_images: null,
        });
        navigate("/careers");
      }
    } catch (error) {
      setSubmitLoading(false);
      console.log(error);
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

  useEffect(() => {
    if (careerId) {
      const fetchCareerDetails = async () => {
        try {
          setIsLoading(true);
          const { data } = await getSingleCareer(careerId);
          setJobDetail(data);
          setIsLoading(false);
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } catch (error) {
          setIsLoading(false);
          toast.error("Failed to load job details.");
        }
      };
      fetchCareerDetails();
    }
  }, [careerId]);

  return (
    <div>
      <Navbar></Navbar>
      {isLoading ? (
        <img src={loads} className="img-fluid gif-loads-pager" alt="loads" />
      ) : (
        <>
          <div className="abstract-portfolio">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <Link to="/careers">
                    <img
                      src={back}
                      className="img-fluid back-icon-2"
                      alt="back"
                    />
                
                  <img
                    src={jobDetail?.featured_image}
                    className="img-fluid jd"
                    alt="jd"
                  />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-10">
                <h3 className="jd-title">{jobDetail?.job_title}</h3>
                <p className="jd-sentence">
                {jobDetail?.body}
                </p>
              </div>
              <div className="col-lg-1"></div>
            </div>
          </div>

          <div className="careers-background">
            <div className="container">
              <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                  <h3 className="career-sentence">
                    Fill in the details below and we will be in touch
                  </h3>
                  <div class="row">
                    <div class="col">
                      <label for="exampleInputEmail1" class="form-label">
                        Full Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col">
                      <label for="exampleInputEmail1" class="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <label for="exampleInputEmail1" class="form-label">
                    Cover Letter
                  </label>
                  <textarea
                    type="message"
                    class="form-control message"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="cover_letter"
                    value={formData.cover_letter}
                    onChange={handleChange}
                  />

                  <label for="formFile" class="form-label">
                    CV
                  </label>
                  <input
                    class="form-control element"
                    type="file"
                    id="formFile"
                    onChange={handleFileChange}
                    accept=".pdf, .doc, .docx"
                  />

                  <label for="formFile" class="form-label">
                    Portfolio/images of previous works
                  </label>
                  <input
                    class="form-control element"
                    type="file"
                    id="formFile"
                    multiple={true}
                    onChange={handleMultipleFilesChange}
                    accept=".png, .jpg, .jpeg"
                  />

                  <button className="btn-contact-submit" onClick={handleSubmit}>
                    {submitLoading ? (
                      <>
                        <img
                          src={loads}
                          className="img-fluid gif-loads"
                          alt="loads"
                        />{" "}
                        Loading{" "}
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
                <div className="col-lg-3"></div>
              </div>
            </div>
          </div>
        </>
      )}

      <Footer></Footer>
    </div>
  );
};

export default Jobdescription;
