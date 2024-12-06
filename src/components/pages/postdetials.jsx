import React, { useEffect, useState } from "react";
import Navbar from "../../components/partials/navbar";
import back from "../../images/back.svg";
import { Link, useParams } from "react-router-dom";
import loads from "../../images/loads.gif";
import Footer from "../../components/partials/footer";
import { getSingleBlogPost } from "../../api/blogs";
import { toast } from "react-toastify";
import { getAllTeamMembers } from "../../api/about-us";

const Postdetials = () => {
  const [blogPost, setBlogPost] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [allTeamMembers, setAllTeamMembers] = useState([]);
  const { blogId } = useParams();

  const fetchTeamMembers = async () => {
    try {
      setIsLoading(true);
      const { data } = await getAllTeamMembers();
      setAllTeamMembers(data);
      setIsLoading(false);
    } catch (error) {
      toast.error("Failed to load portfolios.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  useEffect(() => {
    if (blogId) {
      const fetchBlogDetails = async () => {
        try {
          setIsLoading(true);
          const { data } = await getSingleBlogPost(blogId);
          setBlogPost(data);
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
          toast.error("Failed to load blog details.");
        }
      };
      fetchBlogDetails();
    }
  }, [blogId]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const authorImg = allTeamMembers?.find(
    (teamMember) => teamMember?.name == blogPost?.posted_by
  )?.image_path;
  return (
    <div>
      <Navbar></Navbar>

      <div className="container">
        {isLoading ? (
           <img
           src={loads}
           className="img-fluid gif-loads-pager"
           alt="loads"
         />
        ) : (
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <span className="tag-details-blog">{blogPost?.category}</span>
              <Link to="/blog">
                <img src={back} className="img-fluid back-blog" alt="back" />
              </Link>
              <h3 className="blog-details-title">{blogPost?.title}</h3>
              <span>
                <img
                  src={authorImg}
                  className="img-fluid auth-profile"
                  alt="authorprofile"
                />
              </span>{" "}
              <span className="author-name">{blogPost?.posted_by}</span>{" "}
              <span className="blog-date">
                {blogPost?.created_at
                  ? new Date(blogPost.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long", // Displays the month in words
                      day: "numeric",
                    })
                  : "No date available"}
              </span>
              <img
                src={blogPost?.featured_image}
                className="img-fluid imagedetails"
                alt="imagedetails"
              />
              <p className="details-blog">{blogPost?.body}</p>
              {blogPost?.second_featured_image && (
                <img
                  src={blogPost?.second_featured_image}
                  className="img-fluid imagedetails"
                  alt="imagedetails"
                />
              )}
              <p className="details-blog">{blogPost?.second_body}</p>
            </div>
            <div className="col-lg-2"></div>
          </div>
        )}
      </div>

      <div className="blog-details-divider"></div>

      <Footer></Footer>
    </div>
  );
};

export default Postdetials;
