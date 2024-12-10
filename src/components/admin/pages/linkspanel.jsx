import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Nav from "../partials/nav";
import backarrowadmin from "../../../images/backarrowadmin.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import cloudup from "../../../images/cloudup.svg";
import loads from "../../../images/loads.gif";
import { createSection3, getSection3 } from "../../../api/home";

const Linkspanel = () => {
  const [section3, setSection3] = useState({
    video_link: "",
    years_of_experience: "",
    completed_projects: "",
    satisfied_clients: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [sect3Loading, setSect3LoadingLoading] = useState(false);
  const { id } = useParams();
const navigate = useNavigate()
  const handleChangeSection = (e) => {
    const { name, value } = e.target;
    setSection3({ ...section3, [name]: value });
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
        navigate('/home')
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.success(`An error occurred while uploading section 3.`);
      setSect3LoadingLoading(false);
    }
  };

  useEffect(() => {
    const fetchSection3 = async () => {
        try {
          setIsLoading(true);
          const { data } = await getSection3();
          const currentLink = data
          setSection3({
            video_link: currentLink?.video_link,
            years_of_experience: currentLink?.years_of_experience,
            completed_projects: currentLink?.completed_projects,
            satisfied_clients: currentLink?.satisfied_clients,
          });
          setIsLoading(false);
        } catch (error) {
          toast.error("Failed to load link Data.");
          setIsLoading(false);
        }
      };
    if (id) {
      fetchSection3();
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Linkspanel;
