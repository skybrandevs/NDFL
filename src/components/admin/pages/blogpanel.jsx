import React, { useState } from "react";
import Nav from "../partials/nav";
import blogimage from "../../../images/blogimage.png";
import { Link } from "react-router-dom";
import add from "../../../images/add.svg";
import { deleteSingleBlogSpot, getAllBlogPosts } from "../../../api/blogs";
import { useEffect } from "react";
import { toast } from "react-toastify";
import ConfirmDeleteModal from "../partials/DeleteModal";
import Pagination from "../../partials/PaginationComponent";
import loads from "../../../images/loads.gif";

const Blogpanel = () => {
  const [allBlogPosts, setAllBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [blogPostToDelete, setBlogPostToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationMeta, setPaginationMeta] = useState({
    last_page: 1,
    total: 0,
  });

  useEffect(() => {
    fetchBlogSpots(currentPage);
  }, [currentPage]);

  const fetchBlogSpots = async (page = 1) => {
    setIsLoading(true);
    try {
      const response = await getAllBlogPosts(page);
      setAllBlogPosts(response.data.data);
      console.log(response.data, 34);
      setPaginationMeta({
        last_page: response.data.last_page,
        total: response.data.total,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1); // ReactPaginate is 0-indexed, so add 1
  };

  const handleDeleteClick = (career) => {
    // Set the career ID and show the modal
    setBlogPostToDelete(career);
    setShowModal(true);
  };

  const handleDeleteConfirm = async () => {
    // Call your delete function here with the vendorIdToDelete
    try {
      const response = await deleteSingleBlogSpot(blogPostToDelete?.id);
      setShowModal(false);
      fetchBlogSpots();
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
    fetchBlogSpots();
  }, []);

  return (
    <div>
      <ConfirmDeleteModal
        show={showModal}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        vendorName={blogPostToDelete?.title || "this blog post"}
      />
      <div className="row">
        <div className="col-lg-2">
          <Nav></Nav>
        </div>

        <div className="col-lg-10 bacc">
          <div className="card-admin-h">
            <h3 className="admin-header-title">Blogs</h3>

            <div className="row">
              {isLoading ? (
                <p>Loading... <img src={loads} className="img-fluid gif-loads-pager" alt="loads"/></p>
              ) : allBlogPosts.length > 0 ? (
                allBlogPosts.map((post) => (
                  <div className="col-lg-6" key={post.id}>
                    <div className="fancy-card-admin">
                      <div className="row">
                        <div className="col-lg-6">
                          <img
                            src={post.featured_image || blogimage}
                            className="img-fluid vendors-img-api"
                            alt={post.title}
                            />
                        </div>
                        <div className="col-lg-6">
                          <h3 className="blog-title">{post.title}</h3>
                          <div className="push-admin"></div>
                          <Link
                            to={`/blogpostpanel/${post.id}`}
                            className="link"
                          >
                            <span className="edit-vendors">Edit</span>
                          </Link>
                          <span
                            className="delete-vendors"
                            onClick={() => handleDeleteClick(post)}
                            style={{ cursor: "pointer" }}
                          >
                            Delete
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No blog posts available.</p>
              )}
            </div>

            {allBlogPosts.length > 0 && (
              <Pagination
                pageCount={paginationMeta.last_page}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            )}

            <div className="row">
              <div className="col-lg-11 add-mr-top">
                <Link to="/blogpostpanel" className="link">
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
    // </div>
  );
};

export default Blogpanel;
