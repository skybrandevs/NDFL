import React, { useEffect, useState } from "react";
import functionmark from "../../images/functionmark.svg";
import { Link } from "react-router-dom";
import { getHeroImages } from "../../api/home";
import { toast } from "react-toastify";
import loads from "../../images/loads.gif";


const Hero = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allImages, setAllImages] = useState([]);

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
  }, []);

  return (
    <div className="bac-ndfl">
      <div className="container">
        { isLoading ?  <img src={loads} className="img-fluid gif-loads-pager" alt="loads" /> :
          <div className="row">
          <div className="col-lg-12">
            <div className="box">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <h3 className="ndfl-heading">
                      Where{" "}
                      <span className="special">
                        function{" "}
                        <img
                          src={functionmark}
                          className="img-fluid functionmark"
                          alt="functionmark"
                        />
                      </span>
                      meets beauty, and{" "}
                      <span className="special">
                        dreams{" "}
                        <img
                          src={functionmark}
                          className="img-fluid functionmark"
                          alt="functionmark"
                        />{" "}
                      </span>
                      take shape.
                    </h3>
                    <p className="ndfl-sentence">
                      Utilise our exceptional interior and architectural design
                      services to transform your Nigerian workplaces and home
                      spaces. This is where the journey to extraordinary space
                      starts to unfold.
                    </p>

                    <Link to="/portfolio">
                      <button className="btn-full-colo">View Portfolio</button>
                    </Link>
                    <Link to="/contact">
                      <button className="btn-border-colo">Contact Us</button>
                    </Link>
                  </div>

                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-lg-6">
                        <img
                          src={allImages?.[0]?.image_path}
                          className="img-fluid style1 zoom"
                          alt="Empty slot 1"
                        />
                      </div>
                      <div className="col-lg-6">
                        <img
                          src={allImages?.[1]?.image_path}
                          className="img-fluid style2 zoom"
                          alt="Empty slot 2"
                        />
                      </div>
                      <div className="col-lg-6">
                        <img
                          src={allImages?.[2]?.image_path}
                          className="img-fluid style3 zoom"
                          alt="Empty slot 3"
                        />
                      </div>
                      <div className="col-lg-6">
                        <img
                          src={allImages?.[3]?.image_path}
                          className="img-fluid style4 zoom"
                          alt="Empty slot 4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        }
      </div>
    </div>
  );
};

export default Hero;
