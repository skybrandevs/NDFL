import React, { useEffect, useState } from "react";
import Navbar from "../../components/partials/navbar";
import { Link } from "react-router-dom";
import { getAllBlogPosts } from "../../api/blogs";
import { toast } from "react-toastify";
import { getAllTeamMembers } from "../../api/about-us";
import loads from "../../images/loads.gif";

const Blog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allBlogPosts, setAllBlogPosts] = useState([]);
  const [allTeamMembers, setAllTeamMembers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationMeta, setPaginationMeta] = useState({
    last_page: 1,
    total: 0,
  });

  const fetchBlogPosts = async (page = 1) => {
    try {
      setIsLoading(true);
      const { data } = await getAllBlogPosts(page);
      setAllBlogPosts(data.data);
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
    fetchBlogPosts(currentPage);
  }, [currentPage]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1); // ReactPaginate is 0-indexed, so add 1
  };

  useEffect(() => {
    fetchBlogPosts();
    fetchTeamMembers();
  }, []);
  const post = allBlogPosts && allBlogPosts[0];
  return (
    <div>
      <Navbar></Navbar>
     {
        isLoading ? 
        <img
        src={loads}
        className="img-fluid gif-loads-pager"
        alt="loads"
      />:
     <>
      <div className="abstract-portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <div className="wrapper-blog">
               <div className="overlay"></div>
                <img
                  src={post?.featured_image}
                  className="img-fluid bloghero"
                />
                <div className="wrapper-mini">
                  <span className="tag-blog">{post?.category}</span>
                  <p className="title-blog-post">{post?.title}</p>
                  <span>
                    <img
                      src={post?.featured_image}
                      className="img-fluid auth-profile"
                     />
                     
                  </span>{" "}
                  <span className="author-name">{post?.posted_by}</span>{" "}
                  <span className="blog-date">
                    {post?.created_at
                      ? new Date(post.created_at).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long", // Displays the month in words
                          day: "numeric",
                        })
                      : "Nothing to read here yet, check back"}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>

      {/** blog post list component*/}

      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <h3 className="blog-component-header">Latest Post</h3>
            <div className="row">
              {allBlogPosts?.map((blogPost, index) => {
                const author = allTeamMembers?.find((item) => item.name == blogPost.posted_by)
                return (
                  <div className="col-lg-4 col-md-6" key={index}>
                    <div className="blog-card-ndfl">
                      <Link to={`/postdetials/${blogPost.id}`} className="line-removal">
                        <img
                          src={blogPost.featured_image}
                          className="img-fluid blog-img-component"
                          alt="blog=hero"
                        />
                        <span className="tag-blog-main-component">
                        {post?.category}
                        </span>
                        <p className="title-blog-post-main-component excerpt">
                         {blogPost.title}
                        </p>
                      </Link>
                      <span>
                        <img
                          src={author?.image_path}
                          className="img-fluid auth-profile"
                          alt="authorprofile"
                        />
                      </span>{" "}
                      <span className="author-name-main-blog-component">
                       {blogPost.posted_by}
                      </span>{" "}
                      <span className="blog-date-main-blog-component">
                      {blogPost?.created_at
                      ? new Date(post.created_at).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long", // Displays the month in words
                          day: "numeric",
                        })
                      : "Nothing here yet, check back"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
      </>}
      {/** end*/}
    </div>
  );
};

export default Blog;
