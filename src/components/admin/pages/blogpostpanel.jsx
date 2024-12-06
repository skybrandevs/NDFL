import React, { useEffect, useRef, useState } from "react";
import Nav from "../partials/nav";
import backarrowadmin from "../../../images/backarrowadmin.svg";
import cloudup from "../../../images/cloudup.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  createBlog,
  getSingleBlogPost,
  updateSingleBlogSpot,
} from "../../../api/blogs";
import { toast } from "react-toastify";
import loads from "../../../images/loads.gif";
import { getAllTeamMembers } from "../../../api/about-us";

const Blogpostpanel = () => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    second_body: "",
    posted_by: "",
    category: "",
  });
  const [featured_image, setFeaturedImage] = useState();
  const [second_featured_image, setSecondFeaturedImage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [allTeamMembers, setAllTeamMembers] = useState([]);

  const navigate = useNavigate();
  const { blogId } = useParams();

  
const fetchTeamMembers = async () => {
    try {
      setIsLoading(true);
      const { data } = await getAllTeamMembers();
      console.log(data)
      setAllTeamMembers(data);
      setIsLoading(false);
    } catch (error) {
      toast.error("Failed to load portfolios.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTeamMembers()
  }, [])

  console.log(allTeamMembers)

  useEffect(() => {
    if (blogId) {
      const fetchBlogDetails = async () => {
        try {
          setIsLoading(true);
          const { data } = await getSingleBlogPost(blogId);
          setFormData({
            title: data.title,
            body: data.body,
            second_body: data.second_body,
            posted_by: data.posted_by,
            category: data.category,
          });
          // setFiles({
          //   featured_image: data.featured_image || null,
          //   second_featured_image: data.second_featured_image || null,
          // });
          setFeaturedImage(data.featured_image);
          setSecondFeaturedImage(data.second_featured_image || null);
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
          toast.error("Failed to load blog details.");
        }
      };
      fetchBlogDetails();
    }
  }, [blogId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newFile = {
        file,
        preview: URL.createObjectURL(file),
      };
      setFeaturedImage(newFile);
    }
  };

  const handleFileChange2 = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newFile = {
        file,
        preview: URL.createObjectURL(file),
      };
      setSecondFeaturedImage(newFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, body, second_body, posted_by, category } = formData;
    if (!title || !body || !second_body || !posted_by || !category) {
      toast.error("All fields are required.");
      return;
    }

    try {
      setIsLoading(true);
      const form = new FormData();
      form.append("title", title);
      form.append("body", body);
      form.append("second_body", second_body);
      form.append("posted_by", posted_by);
      form.append("category", category);

      if (featured_image && featured_image.file instanceof File) {
        form.append(
          "featured_image",
          featured_image.file,
          featured_image.file.name
        );
      }
      if (second_featured_image && second_featured_image.file instanceof File) {
        form.append(
          "second_featured_image",
          second_featured_image.file,
          second_featured_image.file.name
        );
      }

      // Determine if creating or editing
      if (blogId && blogId != undefined) {
        let updateResponse = await updateSingleBlogSpot(blogId, form);
        if (updateResponse.data.title) {
          toast.success("Blog updated successfully!");
          setIsLoading(false);
          navigate("/blogpanel");
          return;
        }
      } else {
        let createResponse = await createBlog(form);
        if (createResponse.data.title) {
          // Create API call
          toast.success("Blog created successfully!");
          setIsLoading(false);
          navigate("/blogpanel");
          return;
        }
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.error("Failed to submit the blog.");
    }
  };

  console.log(featured_image,55)

  const img1 = useRef();
  const img2 = useRef();

  return (
    <div>
      <div className="row">
        <div className="col-lg-2">
          <Nav></Nav>
        </div>

        <div className="col-lg-10 bacc">
          <Link to="/blogpanel" className="link">
            <img
              src={backarrowadmin}
              className="img-fluid backarrowadmin"
              alt="backarrowadmin"
            />
          </Link>

          {isLoading ? (
               <img
               src={loads}
               className="img-fluid gif-loads-pager"
               alt="loads"
             />
          ) : (
            <div className="card-admin-h">
              <h3 className="admin-header-title">New Blog Post</h3>
              <div className="row">
                <div className="col-lg-9">
                  <p className="admin-sub-header-title">Title</p>
                  <textarea
                    type="text"
                    placeholder="Write Post title"
                    className="text-field-blog"
                    value={formData.title}
                    name="title"
                    onChange={handleInputChange}
                  />

                  <p className="admin-sub-header-title">Featured Image</p>
                  <div className="card-upload">
                    {featured_image ? (
                      <>
                        <img
                          src={!featured_image.preview ? featured_image : featured_image.preview}
                          alt={"featured image"}
                          className="img-fluid"
                        />
                      </>
                    ) : (
                      <img
                        src={cloudup}
                        alt="Upload Placeholder"
                        className="img-fluid cloudup"
                      />
                    )}
                    <p className="label-title">
                      JPG, PNG or WebP. Less than 10MB
                    </p>
                    <p className="label-title-2">Drag and drop here or </p>
                      <button
                        type="file"
                        className="input-file"
                        ref={img1}
                        onClick={() => img1.current.click()}
                      >
                        Browse
                      </button>
                    <input
                      type="file"
                      accept="image/*"
                      ref={img1}
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-9">
                  <p className="admin-sub-header-title">Body</p>
                  <textarea
                    type="text"
                    placeholder="Tell your story"
                    className="text-field-description"
                    value={formData.body}
                    name="body"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="row">
                <p className="admin-sub-header-title">Second Featured Image</p>
                <div className="card-upload">
                  {second_featured_image ? (
                    <>
                      <img
                        src={
                          !second_featured_image.preview
                            ? second_featured_image
                            : second_featured_image.preview
                        }
                        alt={"featured image"}
                        className="img-fluid"
                      />
                    </>
                  ) : (
                    <img
                      src={cloudup}
                      alt="Upload Placeholder"
                      className="img-fluid cloudup"
                    />
                  )}
                  <p className="label-title">
                    JPG, PNG or WebP. Less than 10MB
                  </p>
                  <p className="label-title-2">Drag and drop here or </p>
                    <button
                      type="file"
                      className="input-file"
                      ref={img2}
                      onClick={() => img2.current.click()}
                    >
                      Browse
                    </button>
                  <input
                    type="file"
                    accept="image/*"
                    ref={img2}
                    style={{ display: "none" }}
                    onChange={handleFileChange2}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-9">
                  <p className="admin-sub-header-title"> Second Body</p>
                  <textarea
                    type="text"
                    placeholder="Continue your story"
                    className="text-field-description"
                    value={formData.second_body}
                    name="second_body"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4">
                  <p className="admin-sub-header-title">Posted By</p>
                  <select
                    type="text"
                    placeholder="Commercial"
                    className="text-field-testimonials"
                    value={formData.posted_by}
                    name="posted_by"
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>
                      Select Poster
                    </option>
                    {allTeamMembers?.map((teamMember, index) => {
                      return (
                        <option value={teamMember.name} key={index}>{teamMember.name}</option>
                      )
                    })}
                  </select>
                </div>

                <div className="col-lg-4">
                  <p className="admin-sub-header-title">Category</p>
                  <select
                    type="text"
                    placeholder="Commercial"
                    className="text-field-testimonials"
                    value={formData.category}
                    name="category"
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>
                      Select Option
                    </option>
                    <option value="Technology">Technology</option>
                    <option value="Interior Design">Interior Design</option>
                    <option value="Architecture">Architecture</option>
                    <option value="Events">Events</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          <div>
            <button className="admin-save" onClick={handleSubmit}>
              {isLoading ? (
                <>
                  <img
                    src={loads}
                    className="img-fluid gif-loads"
                    alt="loads"
                  />{" "}
                </>
              ) : (
                "Save"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogpostpanel;
