import React, { useEffect, useState } from "react";
import videocover from "../../images/videocover.png";
import { toast } from "react-toastify";
import { getSection3 } from "../../api/home";
import close from "../../images/close.svg";

const Video = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [section3, setSection3] = useState();

  const fetchSection3 = async () => {
    try {
      setIsLoading(true);
      const { data } = await getSection3();
      setSection3(data);
      setIsLoading(false);
    } catch (error) {
      toast.error("Failed to load Ceo Data.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSection3();
  }, []);

  return (
    <div className="videobackground">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {/*Modal*/}

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-body">
                    <div class="ratio ratio-4x3">
                      <iframe
                        src={section3?.video_link}
                        title="YouTube video"
                        allowfullscreen
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      ></iframe>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn-ndfl-modal"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/*end*/}

            <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img
                src={videocover}
                className="img-fluid videocover"
                alt="cover"
              />
            </a>
          </div>

          <div className="col-lg-6 mrg-top">
            <div className="adjuster-gen">
              <h3 className="number">{section3?.years_of_experience}+</h3>
              <span className="numbers-sentence">years of experience</span>
            </div>

            <div className="adjuster-gen">
              <h3 className="number">{section3?.completed_projects}+</h3>
              <span className="numbers-sentence">completed projects.</span>
            </div>

            <div className="adjuster-gen">
              <h3 className="number">{section3?.satisfied_clients}+</h3>
              <span className="numbers-sentence">satisfied clients</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
