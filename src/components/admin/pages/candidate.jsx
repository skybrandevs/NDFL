import React, { useEffect, useState } from "react";
import Nav from "../partials/nav";
import backarrowadmin from "../../../images/backarrowadmin.svg";
import pdf from "../../../images/pdf.svg";
import { Link, useParams } from "react-router-dom";
import { getSingleJobSubmissionEntry } from "../../../api/jobSubmission";
import { toast } from "react-toastify";
import loads from "../../../images/loads.gif";

const Candidate = () => {
    const [singleJobEntryDetail, setSingleJobEntryDetail] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
  
    useEffect(() => {
      const fetchJobEntryDetails = async () => {
        setIsLoading(true);
        try {
          const {data} = await getSingleJobSubmissionEntry(id);
          setSingleJobEntryDetail(data);
          console.log(data, 44);
        } catch (error) {
          toast.error("Error fetching candidate details");
        } finally {
          setIsLoading(false);
        }
      };
  
      if (id) {
        fetchJobEntryDetails();
      }
    }, [id]);

    const downloadDocument = () => {
      toast.success("Downloading Job Resume", {
        autoClose: 5,
      });
      const link = document.createElement("a");
      link.href = singleJobEntryDetail.resume_path;
      link.download = `${singleJobEntryDetail.full_name} Resume`; // Optional, name the document
      link.click();
    };

  return (
    <div>
      <div className="row">
        <div className="col-lg-2">
          <Nav></Nav>
        </div>

        <div className="col-lg-10 bacc">
          <Link to="/careerspanel" className="link">
            <img
              src={backarrowadmin}
              className="img-fluid backarrowadmin"
              alt="backarrowadmin"
            />
          </Link>

          <div className="card-admin-h">
            <h3 className="admin-header-title">John Doe</h3>

            <div className="row">
              <div className="col-lg-3">
                <p className="admin-sub-header-title">Full Name</p>
                <div  className="text-field-testimonials d-flex ps-3 align-items-center">{singleJobEntryDetail?.full_name}</div>
              </div>

              <div className="col-lg-3">
                <p className="admin-sub-header-title">Email</p>
                <div  className="text-field-testimonials d-flex ps-3 align-items-center">{singleJobEntryDetail?.email}</div>

              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <p className="admin-sub-header-title">Cover Letter</p>
                <div  className="text-field-blog d-flex ps-3 align-items-center">{singleJobEntryDetail?.cover_letter}</div>
              </div>

              <div className="col-lg-12">
                <p className="admin-sub-header-title">CV</p>
                <img src={pdf} className="img-fluid" alt="document" onClick={downloadDocument} style={{cursor: "pointer"}} />
                <p onClick={downloadDocument} style={{cursor: "pointer"}}>Open</p>
              </div>
            </div>

            <div className="row">
              <p className="admin-sub-header-title">Portfolio images</p>
              {singleJobEntryDetail?.portfolio_images &&
                  singleJobEntryDetail?.portfolio_images.length > 0 ? (
                    singleJobEntryDetail?.portfolio_images.map((image, index) => (
                      <div className="col-lg-3" key={index}>
                        {/* <div className="card-upload"> */}
                        <img
                          src={image}
                          alt={`portfolio-image-${index}`}
                          className="img-fluid"
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "contain",
                            border: "1px solid #ddd",
                            borderRadius: "4px",
                          }}
                        />
                        {/* </div> */}
                      </div>
                    ))
                  ) : (
                    <div className="col-lg-3">
                      <div className="card-upload">
                        <p className="label-title">
                          No Portfolio Images Available
                        </p>
                      </div>
                    </div>
                  )}
              {/* <div className="col-lg-3">
                <div className="card-upload">
                  <p className="label-title">Portfolio Images would be here</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidate;
