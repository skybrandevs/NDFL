import React, { useEffect, useState } from "react";
import Nav from "../partials/nav";
import add from "../../../images/add.svg";
import { Link } from "react-router-dom";
import { deleteSingleVendors, getAllVendors } from "../../../api/vendor";
import ConfirmDeleteModal from "../partials/DeleteModal";
import { toast } from "react-toastify";
import loads from "../../../images/loads.gif";
import noimage from "../../../images/noimage.svg";

const Vendorspanel = () => {
  const [allVendors, setAllVendors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [vendorToDelete, setVendorToDelete] = useState(null);

  const fetchVendors = async () => {
    setIsLoading(true);
    try {
      const response = await getAllVendors();
      console.log(response);
      setAllVendors(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteClick = (vendor) => {
    // Set the vendor ID and show the modal
    setVendorToDelete(vendor);
    setShowModal(true);
  };

  const handleDeleteConfirm = async () => {
    // Call your delete function here with the vendorIdToDelete
    try {
      const response = await deleteSingleVendors(vendorToDelete?.id);
      setShowModal(false);
      fetchVendors();
      toast.success("Vendor Successfully Deleted");
    } catch (error) {
      console.log("Error deleting vendor:", error);
      toast.error("Failed to delete vendor!");
    }
  };

  const handleDeleteCancel = () => {
    setShowModal(false); // Close the modal without deleting
  };

  useEffect(() => {
    fetchVendors();
  }, []);
  return (
    <div>
      <ConfirmDeleteModal
        show={showModal}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        vendorName={vendorToDelete?.company_name || "this vendor"}
      />
      <div className="row">
        <div className="col-lg-2">
          <Nav></Nav>
        </div>

        <div className="col-lg-10 bacc">
          <div className="card-admin-h">
            <h3 className="admin-header-title">List of Vendors</h3>
            {isLoading ? (
            <img src={loads} className="img-fluid gif-loads-pager" alt="loads"/>
            ) : (
              <div className="row">
                {allVendors?.map((vendor, item) => {
                  return (
                    <div className="col-lg-6" key={item}>
                      <div className="fancy-card-admin">
                        <div className="row">
                          <div className="col-lg-6">
                            {vendor?.portfolio_images?.[0]?.image_path ? (
                              <img
                                src={vendor.portfolio_images[0].image_path}
                                //   className="img-fluid rounded"
                                alt={vendor.name || "Vendor Image"}
                               className="vendors-img-api"
                              />
                            ) : (
                              <div>
                                <img src={noimage} className="img-fluid no-img-api" alt="no-image"/>
                              </div>
                            )}
                          </div>
                          <div className="col-lg-6">
                            <h3 className="vendors-title">
                              {vendor.company_name}
                            </h3>
                             <span className="vendors-work">Capentry</span> 
                            <div className="push-admin"></div>
                            <Link
                              to={`/vendorsdetailspanel/${vendor.id}`}
                              className="link"
                            >
                              <span className="edit-vendors">View</span>
                            </Link>
                            <span
                              className="delete-vendors"
                              onClick={() => handleDeleteClick(vendor)}
                              style={{ cursor: "pointer" }}
                            >
                              Delete
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            <div className="row">
              <div className="col-lg-11 add-mr-top">
                <Link to="/vendors" className="link">
                  {" "}
                  <span className="flotter">
                    <img src={add} className="img-fluid add-2" alt="add" />
                    Add another
                  </span>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vendorspanel;
