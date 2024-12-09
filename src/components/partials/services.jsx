import React, { useEffect, useState } from "react";
import maskgroup from "../../images/maskgroup.png";
import arrowservice from "../../images/arrowservice.svg";
import interiordesign from "../../images/interiordesign.png";
import consulting from "../../images/consulting.png";
import facility from "../../images/facility.png";
import edesign from "../../images/edesign.png";
import officespace from "../../images/officespace.png";
import qucoon from "../../images/qucoon.png";
import dsm from "../../images/dsm.png";
import welltec from "../../images/welltec.png";
import betaglass from "../../images/betaglass.png";
import bucch from "../../images/bucch.png";
import churchgate from "../../images/churchgate.png";
import creo from "../../images/creo.png";
import cala from "../../images/cala.png";
import tbo from "../../images/tbo.png";
import powergas from "../../images/powergas.png";
import { Link } from "react-router-dom";
import { getClientsImage } from "../../api/home";
import { toast } from "react-toastify";

const Services = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [clients, setClients] = useState();

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

  useEffect(() => {
    fetchClients();
  }, []);
  return (
    <div className="service-background">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="service-header">Our Services</h3>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <img
              src={maskgroup}
              className="img-fluid service-img"
              alt="service-image"
            />
          </div>

          <div className="col-lg-5">
            <div className="pink ish">
              <h3 className="h33">Architectural Design</h3>
              <p className="p33">
                Powerful spaces make a difference in our lives. These spaces are
                where we come to work, learn, play, heal and live. We never lose
                sight of this as we combine passion, creativity, research and
                expertise to deliver innovative spaces.
              </p>
              <Link to="/about" className="line-removal">
                <button className="btn-service sg-1">
                  Learn More{" "}
                  <span>
                    <img
                      src={arrowservice}
                      className="img-fluid arrow-2"
                      alt="arrow"
                    />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="row baked-twist">
          <div className="col-lg-5">
            <div className="blue">
              <h3 className="h33">Interior Design</h3>
              <p className="p33">
                Interior design is more than what hit the eyes as it makes a
                powerful difference in our lives. Neilz Design provides
                everything you need to turn an empty shell into a vibrant and
                enjoyable environment.
              </p>
              <Link to="/about" className="line-removal">
                <button className="btn-service">
                  Learn More{" "}
                  <span>
                    <img
                      src={arrowservice}
                      className="img-fluid arrow-2"
                      alt="arrow"
                    />
                  </span>
                </button>
              </Link>
            </div>
          </div>

          <div className="col-lg-7">
            <img
              src={interiordesign}
              className="img-fluid service-img"
              alt="service-image"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-7">
            <img
              src={consulting}
              className="img-fluid service-img"
              alt="service-image"
            />
          </div>

          <div className="col-lg-5">
            <div className="green">
              <h3 className="h33">Consulting</h3>
              <p className="p33">
                Is your workplace a through reflection of your Brand? The world
                is changing and corporations must rethink how they do business:
                how they manage their company, where and when they convene
                workers, generational differences, the impact of technology on
                the workplace, etc.
              </p>
              <Link to="/about" className="line-removal">
                <button className="btn-service sg-1">
                  Learn More{" "}
                  <span>
                    <img
                      src={arrowservice}
                      className="img-fluid arrow-2"
                      alt="arrow"
                    />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="row baked-twist">
          <div className="col-lg-5">
            <div className="orange">
              <h3 className="h33">Facility Management</h3>
              <p className="p33">
                Do you need experts to manage and maintain your building assets?
                We provides facilities management services for both commercial
                and residential spaces.
              </p>
              <Link to="/about" className="line-removal">
                <button className="btn-service">
                  Learn More{" "}
                  <span>
                    <img
                      src={arrowservice}
                      className="img-fluid arrow-2"
                      alt="arrow"
                    />
                  </span>
                </button>
              </Link>
            </div>
          </div>

          <div className="col-lg-7">
            <img
              src={facility}
              className="img-fluid service-img"
              alt="service-image"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-7">
            <img
              src={edesign}
              className="img-fluid service-img"
              alt="service-image"
            />
          </div>

          <div className="col-lg-5">
            <div className="black">
              <h3 className="h33">E-design</h3>
              <p className="p33">
                We offer electronic design services to client who only needs us
                to provide design for their space, this service is only design
                based and for online purposes as the name implies.
              </p>
              <Link to="/about" className="line-removal">
                <button className="btn-service">
                  Learn More{" "}
                  <span>
                    <img
                      src={arrowservice}
                      className="img-fluid arrow-2"
                      alt="arrow"
                    />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="row baked-twist">
          <div className="col-lg-5">
            <div className="pink">
              <h3 className="h33">Office Space Listings</h3>
              <p className="p33">
                As an esteemed partner of Churchgate and WTC, renowned brands in
                the business industry, we are uniquely positioned to offer our
                clients seamless access to premium office spaces.
              </p>
              <Link to="/about" className="line-removal">
                <button className="btn-service">
                  Learn More{" "}
                  <span>
                    <img
                      src={arrowservice}
                      className="img-fluid arrow-2"
                      alt="arrow"
                    />
                  </span>
                </button>
              </Link>
            </div>
          </div>

          <div className="col-lg-7">
            <img
              src={officespace}
              className="img-fluid service-img"
              alt="service-image"
            />
          </div>
        </div>
      </div>

      {/** clients logo section */}

      <div className="container abstract">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="service-clients">Some of Our Clients</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-1"></div>

          <div className="col-lg-11">
            {clients?.map((image, index) => (
              <img
                src={image.image_path}
                className="img-fluid qucoon"
                alt="qucoon"
                key={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/** end **/}
    </div>
  );
};

export default Services;
