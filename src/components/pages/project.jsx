import React, { useEffect, useState } from "react";
import Navbar from "../partials/navbar";
import Footer from "../partials/footer";
import back from "../../images/back.svg";
import account from "../../images/account.svg";
import timer from "../../images/timer.svg";
import ruler from "../../images/ruler.svg";
import location from "../../images/location.svg";
import home from "../../images/home.svg";
import pback from "../../images/pback.svg";
import { Link, useParams } from "react-router-dom";
import { getSinglePortfolio } from "../../api/portfolio";
import { toast } from "react-toastify";
import loads from "../../images/loads.gif";

const Project = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [portfolio, setPortfolio] = useState();
  const { portfolioId } = useParams();

  useEffect(() => {
    const fetchPortfolio = async () => {
      if (portfolioId) {
        try {
          setIsLoading(true);
          const { data } = await getSinglePortfolio(portfolioId);
          setPortfolio(data);
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

  return (
    <div>
      <Navbar></Navbar>
      {isLoading ? (
       <img
       src={loads}
       className="img-fluid gif-loads-pager"
       alt="loads"
     />
      ) : (
        <>
          <div className="abstract-portfolio">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <Link to="/portfolio">
                    <img
                      src={back}
                      className="img-fluid back-icon"
                      alt="back"
                    />
                  </Link>
                  <h3 className="project-title">{portfolio?.project_name}</h3>
                  <div className="span-setting">
                    <span className="tag">
                      <img
                        src={account}
                        className="img-fluid icon-tag"
                        alt="account"
                      />
                      {portfolio?.client_name}
                    </span>
                    <span className="tag">
                      <img
                        src={timer}
                        className="img-fluid icon-tag"
                        alt="timer"
                      />
                      {portfolio?.duration}
                    </span>
                    <span className="tag">
                      <img
                        src={ruler}
                        className="img-fluid icon-tag"
                        alt="ruler"
                      />
                      {portfolio?.size}
                    </span>
                    <span className="tag">
                      <img
                        src={location}
                        className="img-fluid icon-tag-2"
                        alt="location"
                      />
                      {portfolio?.location}
                    </span>
                    <span className="tag">
                      <img
                        src={home}
                        className="img-fluid icon-tag"
                        alt="home"
                      />
                       {portfolio?.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-10">
                <img
                  src={portfolio?.featured_image}
                  className="img-fluid resize"
                  alt="churchreception"
                />
                <h3 className="project-sub-title">Project Description</h3>
                <p className="project-sentence">
                  {portfolio?.project_description}
                </p>

                <h3 className="project-sub-title">Other Images</h3>

                <div className="row">
                  {portfolio?.images?.map((image, index) => (
                    <div className="col-lg-6" key={index}>
                      <img
                        src={image.image_path}
                        className="img-fluid"
                        alt="preview1"
                      />
                    </div>
                  ))}
                </div>
                <Link to="/portfolio" className="back-button">
                  <img src={pback} className="img-fluid pback" alt="pback" />
                  Go back
                </Link>
              </div>
              <div className="col-lg-1"></div>
            </div>
          </div>
        </>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Project;
