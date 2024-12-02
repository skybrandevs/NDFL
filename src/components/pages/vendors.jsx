import React, { useState } from "react";
import Navbar from "../../components/partials/navbar";
import Footer from "../../components/partials/footer";
import axios from "axios";
import { Loader, LucideLoaderPinwheel } from "lucide-react";
import { toast } from "react-toastify";
import { createVendor } from "../../api/vendor";

const Vendors = () => {
  const [formData, setFormData] = useState({
    sector: "",
    email: "",
    phone: "",
    address: "",
  });
  const [document, setDocument] = useState(null);
  const [portfolioImages, setPortfolioImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "image/png",
      ];
      if (!validTypes.includes(file.type)) {
        alert("Invalid file type. Only PDF, DOC, and DOCX files are allowed.");
        return;
      }
      setDocument(file);
    }
  };

  const handleMultipleFilesChange = (e) => {
    setPortfolioImages(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if the required fields are not empty
    if (
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.sector
    ) {
      toast.error("All text fields must be filled!");
      return;
    }

    try {
      setIsLoading(true);

      // Create a FormData instance
      const form = new FormData();

      // Append other form data fields
      form.append("sector", formData.sector);
      form.append("email", formData.email);
      form.append("phone", formData.phone);
      form.append("address", formData.address);

      // Append the document file if available
      if (document) {
        form.append("document", document, document.name); // Include file name (optional)
      }
      // Append portfolio images if available
      portfolioImages.forEach((file, index) => {
        form.append(`portfolio_images[${index}]`, file, file.name);
      });
      // Make the API request
      const response = await createVendor(form);
      setIsLoading(false);
      // If the response indicates success, show a success toast
      if (response.message) {
        toast.success("Form submitted successfully!");
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      if (error.response && error.response && error.response.errors) {
        const errorMessage = error.response.errors.email
          ? error.response.errors.email[0]
          : "Failed to submit form.";
        toast.error(errorMessage);
      } else {
        // General error fallback
        toast.error("Failed to submit form.");
      }

      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="abstract-portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <h3 className="vendors-header">
                Explore the opportunity of working with big clients by signin up
                with us
              </h3>
              <p className="vendors-sentence">
                Fill in the details below and we will be in touch
              </p>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col">
                  <label htmlFor="companyName" className="form-label">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.companyName}
                    name="companyName"
                    id="companyName"
                    aria-describedby="companyName"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col">
                  <label htmlFor="sector" className="form-label">
                    Sector
                  </label>
                  <select
                    className="form-select"
                    id="sector"
                    name="sector"
                    value={formData.sector}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>
                      Select Option
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <label htmlFor="address" className="form-label">
                Full address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />

              <label htmlFor="document" className="form-label">
                CAC document
              </label>
              <input
                className="form-control element"
                type="file"
                id="document"
                name="document"
                onChange={handleFileChange}
                accept=".pdf, .doc, .docx"
              />

              <label htmlFor="portfolioImages" className="form-label">
                Portfolio/images of previous works
              </label>
              <input
                className="form-control element"
                type="file"
                id="portfolioImages"
                name="portfolioImages"
                multiple
                onChange={handleMultipleFilesChange}
                accept=".png, .jpg, .jpeg"
              />

              <button className="btn-contact-submit">
                {isLoading ? (
                  <>
                    <LucideLoaderPinwheel /> Loading{" "}
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Vendors;
// // Append text fields
// Object.keys(formData).forEach((key) => {
//   form.append(key, formData[key]);
// });

// // Append files
// if (document) {
//   form.append('document', document);
// }
// portfolioImages.forEach((image, index) => {
//   form.append(`portfolio_images[${index}]`, image);
// });
