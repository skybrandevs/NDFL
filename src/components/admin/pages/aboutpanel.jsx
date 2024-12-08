import React, { useEffect, useRef, useState } from "react";
import Nav from "../partials/nav";
import cloudup from "../../../images/cloudup.svg";
import add from "../../../images/add.svg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createSection,
  createTeamMembers,
  deleteSingleMember,
  getAllTeamMembers,
} from "../../../api/about-us";
import loads from "../../../images/loads.gif";
import kosie from "../../../images/kosie.png";
import { Link } from "react-router-dom";
import ConfirmDeleteModal from "../partials/DeleteModal";

const Aboutpanel = () => {
  const [section1, setSection1] = useState(null);
  const [isSectionLoading, setIsSectionLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [allTeamMembers, setAllTeamMembers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [memberToDelete, setMemberToDelete] = useState(null);
  const imgRef2 = useRef();

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

  const handleFileChange2 = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newFile = {
        file,
        preview: URL.createObjectURL(file),
      };
      setSection1(newFile);
    }
  };

  const handleCreateSection = async () => {
    if (!section1) {
      toast.error("Please fill in all required fields!");
      return;
    }
    const form = new FormData();
    form.append("image", section1.file, section1.file.name);
    try {
      setIsSectionLoading(true);
      let createResponse = await createSection(form);
      if (createResponse.data.image_path) {
        toast.success("Section created successfully!");
        setIsSectionLoading(false);
        setSection1(null);
        return;
      }
    } catch (error) {
      toast.error("Failed to create Section!");
      setIsSectionLoading(false);
    }
  };

  const handleDeleteClick = (member) => {
    setMemberToDelete(member);
    setShowModal(true);
  };

  const handleDeleteConfirm = async () => {
    // Call your delete function here with the vendorIdToDelete
    try {
      const response = await deleteSingleMember(memberToDelete?.id);
      setShowModal(false);
      fetchTeamMembers();
      if (response.message) {
        toast.success(`${memberToDelete.name} successsfully deleted`);
      }
    } catch (error) {
      console.log("Error deleting Team member:", error);
      toast.error("Failed to delete Team member!");
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
        vendorName={memberToDelete?.name || "this member"}
      />
      <div className="row">
        <div className="col-lg-2">
          <Nav></Nav>
        </div>
        <div className="col-lg-10 bacc">
          <div className="card-admin-h">
            <h3 className="admin-header-title">Section 1</h3>
            <p className="admin-sub-header-title">Images</p>

            <div className="row">
              <div className="col-lg-3">
                <div className="card-upload">
                  {section1 ? (
                    <>
                      <img
                        src={section1.preview}
                        alt={`Image`}
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
                    ref={imgRef2}
                    onClick={() => imgRef2.current.click()}
                  >
                    Browse
                  </button>

                  <input
                    type="file"
                    accept="image/*"
                    ref={imgRef2}
                    style={{ display: "none" }}
                    onChange={handleFileChange2}
                  />
                </div>
                <button className="admin-save-2" onClick={handleCreateSection}>
                  {isSectionLoading ? (
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

          <div className="card-admin-h">
            <h3 className="admin-header-title">Our team</h3>

            <div className="row">
              {allTeamMembers?.map((member, index) => (
                <div className="col-lg-6" key={index}>
                  <div className="fancy-card-admin">
                    <div className="row">
                      <div className="col-lg-6">
                        <img
                          src={member?.image_path}
                          className="img-fluid"
                          alt="client-face"
                        />
                      </div>

                      <div className="col-lg-6">
                        <h3>{member.name}</h3>
                        <Link to={`/addteam/${member.id}`} className="link">
                          <span className="edit">Edit</span>
                        </Link>
                        <span
                          className="delete"
                          onClick={() => handleDeleteClick(member)}
                          style={{ cursor: "pointer" }}
                        >
                          Delete
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="col-lg-11">
                <Link to="/addteam" className="link">
                  <span className="flotter">
                    <img src={add} className="img-fluid add" alt="add" />
                    Add another
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpanel;
