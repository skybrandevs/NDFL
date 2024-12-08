import React, { useEffect, useState } from "react";
import Nav from "../partials/nav";
import { Link } from "react-router-dom";
import { getMessage } from "../../../api/messages";
import { toast } from "react-toastify";
import ConfirmDeleteModal from "../partials/DeleteModal";
import loads from "../../../images/loads.gif";


const Messagepanel = () => {
  const [allMessages, setAllMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [messageToDelete, setMessageToDelete] = useState(null);

  const fetchMessages = async () => {
    setIsLoading(true);
    try {
      const { data } = await getMessage();
      setAllMessages(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteClick = (career) => {
    // Set the career ID and show the modal
    setMessageToDelete(career);
    setShowModal(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      const response = await getMessage();
      setShowModal(false);
      fetchMessages();
      if (response.message) {
        toast.success("Blog post Successfully Deleted");
      }
    } catch (error) {
      console.log("Error deleting blog post:", error);
      toast.error("Failed to delete blog post!");
    }
  };

  const handleDeleteCancel = () => {
    setShowModal(false); // Close the modal without deleting
  };

  useEffect(() => {
    fetchMessages();
  }, []);


  return (
    <div>
      <ConfirmDeleteModal
        show={showModal}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        vendorName={`Message by ${messageToDelete?.name}`}
      />
      <div className="row">
        <div className="col-lg-2">
          <Nav></Nav>
        </div>
  
        <div className="col-lg-10 bacc">
          {
            isLoading ? <img src={loads} className="img-fluid gif-loads-pager" alt="loads"/> :
          <div className="card-admin-h">
            <h3 className="admin-header-title">Message</h3>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Phone number</th>
                  <th scope="col">Message</th>
                </tr>
              </thead>
              <tbody>
                {allMessages?.map((message, index) => (
                  <tr key={index}>
                  <td>{message.name}</td>
                  <td>{message.phone_number}</td>
                  <td>{message.message}</td>

                  <td>
                    <Link to="/preview" className="link">
                      <span className="v">View</span>
                    </Link>
                    <span className="d"
                     onClick={() => handleDeleteClick(message)}
                     style={{ cursor: "pointer" }}
                    >Delete</span>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
}
        </div>
        
      </div>
    </div>
  );
};

export default Messagepanel;
