import React, { useEffect, useState } from "react";
import Navbar from "../../components/partials/navbar";
import Footer from "../../components/partials/footer";
import teamwork from "../../images/teamwork.svg";
import secured from "../../images/secured.svg";
import learning from "../../images/learning.svg";
import improved from "../../images/improved.svg";
import careerarrow from "../../images/careerarrow.svg";
import { Link } from "react-router-dom";
import { getAllCareers } from "../../api/careers";
import { toast } from "react-toastify";
import loads from "../../images/loads.gif";

const Careers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allCareers, setAllCareers] = useState([]);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        setIsLoading(true);
        const { data } = await getAllCareers();
        setAllCareers(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        toast.error("Failed to load blog details.");
      }
    };
    fetchCareers();
  }, []);

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
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                  <h3 className="contact-header">Be a part of our journey</h3>
                  <p className="careers-sentence">
                    We recognize that compensation and benefits play a major
                    part in making sure that you feel you can focus on your
                    work. We offer generous packages to make sure you feel
                    respected and appreciated as an employee.
                  </p>
                </div>
                <div className="col-lg-2"></div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-8">
                <h3 className="joinus">Why you should join us</h3>
                <div className="row">
                  <div className="col-lg-6">
                    <img
                      src={teamwork}
                      className="img-fluid careers-icon"
                      alt="teamwork"
                    />
                    <h3 className="careers-title">Team work</h3>
                    <p className="careers-sentence-2">
                      Collaborate with skilled professionals on innovative
                      projects, fostering a supportive and creative work
                      environment.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <img
                      src={secured}
                      className="img-fluid careers-icon"
                      alt="secured"
                    />
                    <h3 className="careers-title">Secured Future</h3>
                    <p className="careers-sentence-2">
                      Build a stable career with a reputable company that values
                      its employees and offers long-term growth opportunities.
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <img
                      src={learning}
                      className="img-fluid careers-icon"
                      alt="learning"
                    />
                    <h3 className="careers-title">Learning Opportunity</h3>
                    <p className="careers-sentence-2">
                      Continuously expand your knowledge and expertise through
                      professional development programs and on-the-job training.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <img
                      src={improved}
                      className="img-fluid careers-icon"
                      alt="improved"
                    />
                    <h3 className="careers-title">Improved Skills</h3>
                    <p className="careers-sentence-2">
                      Enhance your architectural abilities and technical skills
                      through challenging projects and mentorship from industry
                      experts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2"></div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-8">
                <h3 className="joinus">Open positions</h3>

                {allCareers?.map((career, index) => (
                  <div className="card-career-listing" key={index}>
                    <div className="row">
                      <div className="col-lg-6">
                        <h3 className="role">{career.job_title}</h3>
                      </div>

                      <div className="col-lg-2">
                        <h6 className="exp-header">Experience</h6>
                        <span className="exp-tag">1 Years</span>
                      </div>

                      <div className="col-lg-2">
                        <h6 className="exp-header">Deadline</h6>
                        <span className="exp-tag">30/08/2024</span>
                      </div>

                      <div className="col-lg-2">
                        <Link to={`/jobdescription/${career.id}`}>
                          <img
                            src={careerarrow}
                            className="img-fluid careerarrow"
                            alt="careerarrow"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="col-lg-2"></div>
            </div>
          </div>

          <div className="line-spacer"></div>
        </>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Careers;
