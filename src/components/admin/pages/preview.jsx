import React, { useEffect, useState } from "react";
import Nav from "../partials/nav";
import backarrowadmin from "../../../images/backarrowadmin.svg";
import { Link, useParams } from "react-router-dom";
import { getSingleMessage } from "../../../api/messages";
import { toast } from "react-toastify";
import loads from "../../../images/loads.gif";

const Preview = () => {
  const [message, setMessage] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleMessage = async () => {
      setIsLoading(true);
      try {
        const { data } = await getSingleMessage(id);
        setMessage(data);
        setIsLoading(false);
      } catch (error) {
        toast.error("Error fetching message details");
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchSingleMessage();
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
            <Link to="/messagepanel" className="link">
              <img
                src={backarrowadmin}
                className="img-fluid backarrowadmin"
                alt="backarrowadmin"
              />
            </Link>

            <div className="card-admin-h">
              <h3 className="admin-header-title">{message?.name}</h3>

              <div className="row">
                <div className="col-lg-12">
                  <p className="admin-sub-header-title">Cover Letter</p>
                  <div className="text-field-blog d-flex ps-3">
                    {message?.message}
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

export default Preview;
