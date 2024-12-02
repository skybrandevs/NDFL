import React, { useEffect } from "react";
import Nav from "../partials/nav";
import present from "../../../images/present.png";
import add from "../../../images/add.svg";
import { Link } from "react-router-dom";
import pdf from "../../../images/pdf.svg";
import { useState } from "react";
import { deleteSingleCareer, getAllCareers } from "../../../api/careers";
import { toast } from "react-toastify";
import ConfirmDeleteModal from "../partials/DeleteModal";

const Careerspanel = () => {
  const [careers, setCareers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [careerToDelete, setCareerToDelete] = useState(null);

  const fetchCareers = async () => {
    setIsLoading(true);
    try {
      const response = await getAllCareers();
      console.log(response.data);
      setCareers(response.data);
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
      if (response.message) {
        toast.success("Career Successfully Deleted");
      }
    } catch (error) {
      console.log("Error deleting career:", error);
      toast.error("Failed to delete career!");
    }
  };

  const handleDeleteCancel = () => {
    setShowModal(false); // Close the modal without deleting
  };

  useEffect(() => {
    fetchCareers();
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

            <div className="row">
              {careers?.map((career) => (
                <div className="col-lg-6" key={career.id}>
                  <div className="fancy-card-admin">
                    <div className="row">
                      <div className="col-lg-6">
                        {career.featured_image ? (
                          <img
                            src={career.featured_image}
                            className="img-fluid"
                            alt="img"
                            style={{
                              width: "100px",
                              height: "100px",
                              objectFit: "contain",
                            }}
                          />
                        ) : (
                          <div
                            className="d-flex justify-content-center align-items-center border border-secondary rounded"
                            style={{
                              width: "100px",
                              height: "100px",
                              backgroundColor: "#f8f9fa",
                            }}
                          >
                            <p className="text-muted mb-0">No Image</p>
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
                  <th scope="col">Phone number</th>
                  <th scope="col">Cv</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>0814538956094</td>
                  <td>
                    <img src={pdf} className="img-fluid pdf" alt="pdf" />
                  </td>

                  <td>
                    <Link to="/candidate" className="link">
                      <span className="v">View</span>
                    </Link>
                    <span className="d">Delete</span>
                  </td>
                </tr>

                <tr>
                  <td>John Doe</td>
                  <td>0814538956094</td>
                  <td>
                    <img src={pdf} className="img-fluid pdf" alt="pdf" />
                  </td>
                  <td>
                    <span className="v">View</span>
                    <span className="d">Delete</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careerspanel;
