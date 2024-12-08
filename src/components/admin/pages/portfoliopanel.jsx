import React, { useEffect, useState } from "react";
import Nav from "../partials/nav";
import add from "../../../images/add.svg";
import { Link } from "react-router-dom";
import {
  deleteSinglePortfolios,
  getAllPortfolios,
} from "../../../api/portfolio";
import { toast } from "react-toastify";
import ConfirmDeleteModal from "../partials/DeleteModal";
import loads from "../../../images/loads.gif";

const Portfoliopanel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [portfolios, setPortfolios] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [portfolioToDelete, setPortfolioToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationMeta, setPaginationMeta] = useState({
    last_page: 1,
    total: 0,
  });

  const fetchPortfolios = async () => {
    try {
      setIsLoading(true);
      const { data } = await getAllPortfolios();
      console.log(data.last_page);
      const sortedData = data.data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
      setPortfolios(sortedData);
      setPaginationMeta({
        last_page: data.last_page,
        total: data.total,
      });
      setIsLoading(false);
    } catch (error) {
      toast.error("Failed to load portfolios.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolios();
  }, []);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1); // ReactPaginate is 0-indexed, so add 1
  };

  const handleDeleteClick = (portfolio) => {
    // Set the portfolio ID and show the modal
    setPortfolioToDelete(portfolio);
    setShowModal(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      const response = await deleteSinglePortfolios(portfolioToDelete?.id);
      setShowModal(false);
      fetchPortfolios();
      if (response.message) {
        toast.success("Portfolio Successfully Deleted");
      }
    } catch (error) {
      console.log("Error deleting Portfolio:", error);
      toast.error("Failed to delete Portfolio!");
    }
  };

  const handleDeleteCancel = () => {
    setShowModal(false); // Close the modal without deleting
  };

  return (
    <div>
      <ConfirmDeleteModal
        show={showModal}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        vendorName={portfolioToDelete?.project_name || "this career"}
      />
      <div className="row">
        <div className="col-lg-2">
          <Nav></Nav>
        </div>

        <div className="col-lg-10 bacc">
          <div className="card-admin-h">
            <h3 className="admin-header-title">Portfolio List</h3>
            {isLoading ? (
              <img
                src={loads}
                className="img-fluid gif-loads-pager"
                alt="loads"
              />
            ) : (
              <div className="row">
                {portfolios?.map((portfolio, index) => {
                  return (
                    <div className="col-lg-4" key={index}>
                      <div className="fancy-card-admin">
                        <div className="row">
                          <div className="col-lg-6">
                            <img
                              src={portfolio.featured_image}
                              className="img-fluid vendors-img-api"
                              alt="img"
                            />
                          </div>
                          <div className="col-lg-6">
                            <h3 className="port-panel-header excerpt-portfolio">
                              {portfolio.project_name}
                            </h3>
                            <Link to={`/portfoliodetailspanel/${portfolio.id}`} className="link">
                              <span className="edit">Edit</span>
                            </Link>
                            <span
                              className="delete"
                              onClick={() => handleDeleteClick(portfolio)}
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
                <Link to="/portfoliodetailspanel" className="link">
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

export default Portfoliopanel;
