import React, { useEffect, useRef, useState } from "react";
import { createCEOQuote, getCeoData, updateCEOQuote } from "../../../api/home";
import { toast } from "react-toastify";
import Nav from "../partials/nav";
import backarrowadmin from "../../../images/backarrowadmin.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import cloudup from "../../../images/cloudup.svg";
import loads from "../../../images/loads.gif";

const CeoQuotePanel = () => {
  const [ceoForm, setCeoForm] = useState({
    quote: "",
    subtext: "",
    image: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [ceoLoading, setCeoLoading] = useState(false);
  const { id } = useParams();
  const ceoImgRef = useRef();
  const navigate = useNavigate()

  const handleCeoFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newFile = {
        file: file,
        preview: URL.createObjectURL(file),
      };
      setCeoForm({
        ...ceoForm,
        image: newFile,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCeoForm({ ...ceoForm, [name]: value });
  };

  const submitCeoQuotes = async (index) => {
    const { quote, subtext, image } = ceoForm;
    if (!quote || !subtext) {
      toast.warning("Please fill in all required fields!");
      return;
    }

    const formData = new FormData();
    formData.append("quote", quote);
    formData.append("subtext", subtext);

    if (image && image.file instanceof File) {
      formData.append("image", image.file, image.file.name);
    }

    setCeoLoading(true);
    try {
      if (id) {
        // const { data } = await updateCEOQuote(id, formData);
        const { data } = await createCEOQuote(formData);

        if (data.quote) {
          toast.success(`CEO quote updated successfully!`);
          setCeoLoading(false);
          navigate('/home')
        }
      } else {
        const { data } = await createCEOQuote(formData);
        if (data.quote) {
          toast.success(`CEO quote uploaded successfully!`);
          setCeoLoading(false);
          setCeoForm({
            quote: "",
            subtext: "",
            image: null,
          });
          navigate('/home')
        }
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.success(`An error occurred while uploading CEO quote.`);
      setCeoLoading(false);
    }
  };

  useEffect(() => {
    const fetchCeoData = async () => {
      try {
        setIsLoading(true);
        const { data } = await getCeoData();
        setCeoForm({
          quote: data?.quote,
          subtext: data?.subtext,
          image: {
            preview: data?.image_path,
          },
        });
        setIsLoading(false);
      } catch (error) {
        toast.error("Failed to load Ceo Data.");
        setIsLoading(false);
      }
    };

    if (id) {
      fetchCeoData();
    }
  }, [id]);

  return (
    <div>
      <div className="row">
        <div className="col-lg-2">
          <Nav></Nav>
        </div>
        {isLoading ? (
          <img src={loads} className="img-fluid gif-loads-pager" alt="loads" />
        ) : (
          <div className="col-lg-10 bacc">
            <Link to="/home" className="link">
              <img
                src={backarrowadmin}
                className="img-fluid backarrowadmin"
                alt="backarrowadmin"
              />
            </Link>
            <div className="card-admin-h">
              <h3 className="admin-header-title">Ceo Quote</h3>

              <p className="admin-sub-header-title">Quote</p>
              <textarea
                type="text"
                placeholder="Enter Ceo Quote"
                className="text-field-admin"
                name="quote"
                value={ceoForm.quote}
                onChange={handleChange}
              />

              <p className="admin-sub-header-title">Sub Text</p>
              <input
                type="text"
                placeholder="Enter Sub Text"
                className="text-field-admin"
                name="subtext"
                value={ceoForm.subtext}
                onChange={handleChange}
              />
              <p className="admin-sub-header-title">Images</p>

              <div className="row">
                <div className="col-lg-3">
                  <div className="card-upload">
                    {ceoForm.image && ceoForm.image.preview ? (
                      <img
                        src={ceoForm.image.preview}
                        alt={`CEO image`}
                        className="img-fluid"
                      />
                    ) : (
                      <img
                        src={cloudup}
                        alt="Upload Placeholder"
                        className="img-fluid cloudup"
                      />
                    )}
                    <p className="label-title">
                      JPG, PNG, or WebP. Less than 10MB
                    </p>
                    <p className="label-title-2">Drag and drop here or </p>
                    <button
                      type="button"
                      className="input-file"
                      onClick={() => ceoImgRef.current.click()}
                    >
                      Browse
                    </button>
                    <input
                      type="file"
                      accept="image/*"
                      ref={ceoImgRef}
                      style={{ display: "none" }}
                      onChange={handleCeoFileChange}
                    />
                  </div>
                </div>
              </div>
              <button className="admin-save-3" onClick={submitCeoQuotes}>
                {" "}
                {ceoLoading ? (
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
        )}
      </div>
    </div>
  );
};

export default CeoQuotePanel;
