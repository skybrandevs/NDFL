import React, { useEffect, useRef, useState } from "react";
import Nav from "../partials/nav";
import backarrowadmin from "../../../images/backarrowadmin.svg";
import cloudup from "../../../images/cloudup.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createBlog, getSingleBlogPost, updateSingleBlogSpot } from "../../../api/blogs";
import { toast } from "react-toastify";
import loads from "../../../images/loads.gif";

const Blogpostpanel = () => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    second_body: "",
    posted_by: "",
    category: "",
  });

  const [files, setFiles] = useState({
    featured_image: null,
    second_featured_image: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { blogId } = useParams();

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
          setFiles({
            featured_image: data.featured_image || null,
            second_featured_image: data.second_featured_image || null,
          });
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
          toast.error("Failed to load blog details.");
        }
      };
      fetchBlogDetails();
    }
  }, [blogId]);

  console.log(files, 34)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (event, fieldName) => {
    if(blogId) {
      return;
    }
    const file = event.target.files[0];
    setFiles((prev) => ({
      ...prev,
      [fieldName]: file,
    }));
  };

  const handleDelete = (fileName) => {
    setFiles((prev) => ({
      ...prev,
      [fileName]: null,
    }));
    img1.current.value = null;
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

      if (files.featured_image instanceof File) {
        form.append(
          "featured_image",
          files.featured_image,
          files.featured_image.name
        );
      }
      if (files.second_featured_image instanceof File) {
        form.append(
          "second_featured_image",
          files.second_featured_image,
          files.second_featured_image.name
        );
      }

      // Determine if creating or editing
      if (blogId && blogId != undefined) {
        let updateResponse = await updateSingleBlogSpot(blogId, form); 
        console.log(updateResponse.message)
        if(updateResponse.message) toast.success("Blog updated successfully!");
        
      } else {
        let createResponse = await createBlog(form); // Create API call
        toast.success("Blog created successfully!");
      }
      setIsLoading(false);
      navigate("/blogpanel");
    } catch (error) {
      console.log(error)
      setIsLoading(false);
      toast.error("Failed to submit the blog.");
    }
  };

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
                  <img
                    src={cloudup}
                    className="img-fluid cloudup"
                    alt="cloudup"
                  />
                  <p className="label-title">
                    JPG, PNG or WebP. Less than 10MB
                  </p>
                  <p className="label-title-2">Drag and drop here or </p>
                  <button
                    type="file"
                    className="input-file"
                    onClick={() => img1.current.click()}
                    ref={img1}
                  >
                    Browse
                  </button>
                  <input
                    className="form-control element"
                    ref={img1}
                    Browse
                    type="file"
                    id="portfolioImages"
                    name="portfolioImages"
                    multiple
                    onChange={(e) => handleFileChange(e, "featured_image")}
                    accept=".png, .jpg, .jpeg"
                    style={{ display: "none" }}
                  />
                </div>
                {(files.featured_image && !blogId)&& (
                  <div className="flex">
                    <p style={{ marginTop: "-20px" }}>
                      {files.featured_image.name}{" "}
                      <span
                        onClick={() => handleDelete("featured_image")}
                        style={{
                          color: "#FF4239",
                          cursor: "pointer",
                          marginLeft: "40px",
                        }}
                      >
                        {" "}
                        x{" "}
                      </span>
                    </p>
                  </div>
                )}
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
                <img
                  src={cloudup}
                  className="img-fluid cloudup"
                  alt="cloudup"
                />
                <p className="label-title">JPG, PNG or WebP. Less than 10MB</p>
                <p className="label-title-2">Drag and drop here or </p>
                <button
                  type="file"
                  className="input-file"
                  onClick={() => img2.current.click()}
                  ref={img2}
                >
                  Browse
                </button>
                <input
                  className="form-control element"
                  ref={img2}
                  Browse
                  type="file"
                  id="portfolioImages"
                  name="portfolioImages"
                  multiple
                  onChange={(e) => handleFileChange(e, "second_featured_image")}
                  accept=".png, .jpg, .jpeg"
                  style={{ display: "none" }}
                />
              </div>
              {(files.second_featured_image && !blogId) && (
                <div className="flex">
                  <p style={{ marginTop: "-20px" }}>
                    {files.second_featured_image.name}{" "}
                    <span
                      onClick={() => handleDelete("second_featured_image")}
                      style={{
                        color: "#FF4239",
                        cursor: "pointer",
                        marginLeft: "40px",
                      }}
                    >
                      {" "}
                      x{" "}
                    </span>
                  </p>
                </div>
              )}
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
                  <option value="1">Poster One</option>
                  <option value="2">Poster Two</option>
                  <option value="3">Poster Three</option>
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
                  <option value="1">Technology</option>
                  <option value="2">Interior Design</option>
                  <option value="3">Architecture</option>
                  <option value="4">Events</option>
                  <option value="5">Others</option>
                </select>
              </div>
            </div>
          </div>

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


