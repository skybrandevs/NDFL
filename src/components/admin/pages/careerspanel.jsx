import React, { useEffect } from "react";
import Nav from "../partials/nav";
import add from "../../../images/add.svg";
import { Link } from "react-router-dom";
import pdf from "../../../images/pdf.svg";
import { useState } from "react";
import { deleteSingleCareer, getAllCareers } from "../../../api/careers";
import { toast } from "react-toastify";
import ConfirmDeleteModal from "../partials/DeleteModal";
import loads from "../../../images/loads.gif";
import noimage from "../../../images/noimage.svg";
import { getJobSubmissionEntries } from "../../../api/jobSubmission";

const Careerspanel = () => {
  const [careers, setCareers] = useState([]);
  const [jobSubmissions, setJobSubmissions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [careerToDelete, setCareerToDelete] = useState(null);
  const [showJobModal, setShowJobModal] = useState(false);
  const [jobEntryToDelete, setJobEntryToDelete] = useState(null);


  const fetchCareers = async () => {
    setIsLoading(true);
    try {
      const {data} = await getAllCareers();
      // Sort the data by created_at in descending order (newest first)
      const sortedData = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
      setCareers(sortedData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchJobsubmission = async () => {
    setIsLoading(true);
    try {
      const { data } = await getJobSubmissionEntries();
      const sortedData = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      setJobSubmissions(sortedData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteClick = (career) => {
    // Set the career ID and show the modal
    setCareerToDelete(career);
    setShowModal(true);
  };

  const handleDeleteConfirm = async () => {
    // Call your delete function here with the vendorIdToDelete
    try {
      const response = await deleteSingleCareer(careerToDelete?.id);
      setShowModal(false);
      fetchCareers();
      // if (response.message) {
      //   toast.success("Career Successfully Deleted");
      // }
    } catch (error) {
      console.log("Error deleting career:", error);
      toast.error("Failed to delete career!");
    }
  };

  const handleDeleteCancel = () => {
    setShowModal(false); // Close the modal without deleting
  };

  const handleJobDeleteCancel = () => {
    setShowJobModal(false); // Close the modal without deleting
  };

  const downloadDocument = (item) => {
    toast.success("Downloading Job Resume", {
      autoClose: 5,
    });
    const link = document.createElement("a");
    link.href = item.resume_path;
    link.download = `${item.full_name} Resume`; // Optional, name the document
    link.click();
  };

  useEffect(() => {
    fetchCareers();
    fetchJobsubmission()
  }, []);

  return (
    <div>
      <ConfirmDeleteModal
        show={showModal}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        vendorName={careerToDelete?.job_title || "this career"}
      />
      <div className="row">
        <div className="col-lg-2">
          <Nav></Nav>
        </div>

        <div className="col-lg-10 bacc">
          <div className="card-admin-h">
            <h3 className="admin-header-title">Careers</h3>
            {isLoading ? (
            <img src={loads} className="img-fluid gif-loads-pager" alt="loads"/>
            ) : (
            <div className="row">
              {careers?.map((career) => (
                <div className="col-lg-6" key={career.id}>
                  <div className="fancy-card-admin">
                    <div className="row">
                      <div className="col-lg-6">
                        {career.featured_image ? (
                          <img
                            src={career.featured_image}
                            className="img-fluid vendors-img-api"
                            alt="img"
                          />
                        ) : (
                          <div>
                          <img src={noimage} className="img-fluid no-img-api" alt="no-image"/>
                          </div>
                        )}
                      </div>
                      <div className="col-lg-6">
                        <h3 className="blog-title">{career.job_title}</h3>
                        <div className="push-admin"></div>
                        <Link to={`/newcareer/${career.id}`} className="link">
                          <span className="edit-vendors">View</span>
                        </Link>
                        <span
                          className="delete-vendors"
                          onClick={() => handleDeleteClick(career)}
                          style={{ cursor: "pointer" }}
                        >
                          Delete
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
           )}
            <div className="row">
              <div className="col-lg-11 add-mr-top">
                <Link to="/newcareer" className="link">
                  {" "}
                  <span className="flotter">
                    <img src={add} className="img-fluid add-2" alt="add" />
                    Add another
                  </span>{" "}
                </Link>
              </div>
            </div>
          </div>

          <div className="card-admin-h">
            <h3 className="admin-header-title">Submissions</h3>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Cv</th>
                </tr>
              </thead>
              <tbody>
                {jobSubmissions?.map((jobDetail, index) => (
                     <tr key={index}>
                     <td>{jobDetail.full_name}</td>
                     <td>{jobDetail.email}</td>
                     <td onClick={() => downloadDocument(jobDetail)} style={{cursor: "pointer"}}>
                       <img src={pdf} className="img-fluid pdf" alt="pdf" />
                     </td>
   
                     <td>
                       <Link to={`/candidate/${jobDetail.id}`}className="link">
                         <span className="v">View</span>
                       </Link>
                       {/* <span className="d">Delete</span> */}
                     </td>
                   </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careerspanel;
