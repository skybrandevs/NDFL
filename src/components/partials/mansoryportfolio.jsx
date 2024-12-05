import React, { useState } from "react";
import mansory1 from "../../images/mansory1.png";
import mansory2 from "../../images/mansory2.png";
import mansory3 from "../../images/mansory3.png";
import { Link } from "react-router-dom";
import loads from "../../images/loads.gif";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { getAllPortfolios } from "../../api/portfolio";
import Pagination from "./PaginationComponent";

const Mansoryportfolio = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [portfolios, setPortfolios] = useState([]);
  const [selectedCategory, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationMeta, setPaginationMeta] = useState({
    last_page: 1,
    total: 0,
  });

  const fetchPortfolios = async (page = 1) => {
    try {
      setIsLoading(true);
      const { data } = await getAllPortfolios(page);
      setPortfolios(data.data);
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
    fetchPortfolios(currentPage);
  }, [currentPage]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1); // ReactPaginate is 0-indexed, so add 1
  };

  const handleSelectCategory = (category) => {
    setCategory(category);
  };

  useEffect(() => {
    fetchPortfolios();
  }, []);

  // Filter portfolios based on selected category
  const filteredPortfolios =
    selectedCategory === "All"
      ? portfolios
      : portfolios.filter(
          (portfolio) => portfolio.category === selectedCategory
        );

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <div className="background-mansory">
              <ul class="nav nav-pills" id="pills-tab" role="tablist">
                {["All", "Commercial", "Residential", "E-design"].map(
                  (category, index) => (
                    <li
                      className={`${index == 0 ? "push" : ""} nav-item`}
                      role="presentation"
                      key={index}
                    >
                      <button
                        className={`nav-link ${
                          category === selectedCategory ? "active" : ""
                        }`}
                        onClick={() => handleSelectCategory(category)}
                      >
                        {category}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div class="tab-content" id="pills-tabContent">
              {isLoading ? (
                <img src={loads} className="img-fluid gif-loads" alt="loads" />
              ) : (
                <div
                  class="tab-pane fade show active trans"
                  id="pills-all"
                  role="tabpanel"
                  aria-labelledby="pills-all-tab"
                  tabindex="0"
                >
                  <div className="row">
                    {filteredPortfolios.map((portfolio, index) => (
                      <div className="col-lg-4 col-md-6 highlight" key={index}>
                        <img
                          src={portfolio.featured_image}
                          className="img-fluid mansory-img"
                          alt="mansory"
                          style={{ objectFit: "contain" }}
                        />
                        <div className="middle">
                          <div className="text">
                            {portfolio.project_name || "Portfolio Title"}
                          </div>
                          <p className="text2">
                            {portfolio.location || "Location, Year"}
                          </p>
                        </div>
                      </div>
                    ))}
                    {filteredPortfolios.length == 0 && (
                      <p className="text-center">
                        No portfolio under this category
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
      {filteredPortfolios.length > 0 && (
        <Pagination
          pageCount={paginationMeta.last_page}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default Mansoryportfolio;
