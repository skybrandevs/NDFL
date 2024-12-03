import React, { useEffect, useState } from "react";
import Nav from "../partials/nav";
import backarrowadmin from "../../../images/backarrowadmin.svg";

import pdf from "../../../images/pdf.svg";
import { Link, useParams } from "react-router-dom";
import { getSingleVendors } from "../../../api/vendor";
import { toast } from "react-toastify";

const Vendorsdetailspanel = () => {
  const [singleVendor, setSingleVendor] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchVendorDetails = async () => {
      setIsLoading(true);
      try {
        const data = await getSingleVendors(id);
        setSingleVendor(data.data);
        console.log(data, 44);
      } catch (error) {
        console.log("Error fetching vendor details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchVendorDetails();
    }
  }, [id]);


  if (!singleVendor) {
    return <p>Vendor not found.</p>;
  }

  const downloadDocument = () => {
    toast.success("Downloading CAC Document", {
      autoClose: 5,
    });
    const link = document.createElement("a");
    link.href = singleVendor.document_path;
    link.download = "vendor_cac_document"; // Optional, name the document
    link.click();
  };

  return (
    <div>
      <div className="row">
        <div className="col-lg-2">
          <Nav></Nav>
        </div>

        <div className="col-lg-10 bacc">
          <Link to="/vendorspanel" className="link">
            <img
              src={backarrowadmin}
              className="img-fluid backarrowadmin"
              alt="backarrowadmin"
            />
          </Link>
          <div className="card-admin-h">
            {isLoading ? (
              <p>Loading vendor details...</p>
            ) : (
              <>
                <h3 className="admin-header-title">
                  {singleVendor.company_name}
                </h3>

                <div className="row">
                  <div className="col-lg-3">
                    <p className="admin-sub-header-title">Sector</p>
                    <div className="text-field-testimonials d-flex ps-3 align-items-center">
                      {singleVendor?.sector}
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <p className="admin-sub-header-title">Email</p>
                    <div className="text-field-testimonials d-flex ps-3 align-items-center">
                      {singleVendor?.email}
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <p className="admin-sub-header-title">Phone Number</p>
                    <div className="text-field-testimonials d-flex ps-3 align-items-center">
                      {singleVendor?.phone}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <p className="admin-sub-header-title">Address</p>
                    <div className="text-field-testimonials d-flex ps-3 align-items-center">
                      {singleVendor?.address}
                    </div>
                  </div>

                  <div className="col-lg-12" onClick={downloadDocument}>
                    <p className="admin-sub-header-title">CAC Document</p>
                    <img
                      src={pdf}
                      className="img-fluid cursor-pointer"
                      alt="document"
                    />
                    <p className="cursor-pointer" style={{ cursor: "pointer" }}>
                      Open
                    </p>
                  </div>
                </div>

                <div className="row">
                  <p className="admin-sub-header-title">Portfolio images</p>
                  {singleVendor.portfolio_images &&
                  singleVendor.portfolio_images.length > 0 ? (
                    singleVendor.portfolio_images.map((image, index) => (
                      <div className="col-lg-3" key={index}>
                        {/* <div className="card-upload"> */}
                        <img
                          src={image.image_path}
                          alt={`portfolio-image-${index}`}
                          className="img-fluid"
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "contain",
                            border: "1px solid #ddd",
                            borderRadius: "4px",
                          }}
                        />
                        {/* </div> */}
                      </div>
                    ))
                  ) : (
                    <div className="col-lg-3">
                      <div className="card-upload">
                        <p className="label-title">
                          No Portfolio Images Available
                        </p>
                      </div>
                    </div>
                  )}
                  <div className="col-lg-3">
                    <div className="card-upload">
                      <p className="label-title">
                        Portfolio Images would be here
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vendorsdetailspanel;
