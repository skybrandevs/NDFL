import React, { useState } from "react";
import Navbar from "../../components/partials/navbar";
import Footer from "../../components/partials/footer";
import ig from "../../images/ig.svg";
import fb from "../../images/fb.svg";
import x from "../../images/x.svg";
import p from "../../images/p.svg";
import be from "../../images/be.svg";
import youtube from "../../images/youtube.svg";
import { toast } from "react-toastify";
import { createMessage } from "../../api/messages";
import loads from "../../images/loads.gif";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitMessage = async () => {
    const { name, message, email } = formData;
    if (!name || !message || !email) {
      toast.warning("All fields are required");
      return;
    }
    setIsLoading(true);
    const dataSubmitted = {
        name, message, email
    }
    try {
      const { data } = await createMessage(dataSubmitted);
      if (data.name) {
        toast.success("Message successfully submited");
        setFormData({
          name: "",
          message: "",
          email: "",
        });
        setIsLoading(false);
        return;
      }
    } catch (error) {
      toast.error(error.response.data.message);
      setIsLoading(false);
      return;
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
              <h3 className="contact-header">
                We're Eager to Hear Your Ideas and Start Designing Together!
              </h3>
              <p className="vendors-sentence">
                Fill out the form below to contact our team.
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
            <div class="row">
              <div class="col">
                <label for="exampleInputEmail1" class="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div class="col">
                <label for="exampleInputEmail1" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <label for="exampleInputEmail1" class="form-label">
              Leave a message for us
            </label>
            <textarea
              type="message"
              class="form-control message"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />

            <button className="btn-contact-submit" onClick={submitMessage}>
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

            <div className="col-lg-12">
              <h3 className="contact-address-header">Visit Us</h3>
              <p className="contact-address-sentence">
                318 Ikorodu-Ososun Rd, Anthony, Ikorodu 105102, Lagos
              </p>
              <p className="contact-address-sentence">
                5 The Mall, London, England, United Kingdom
              </p>
            </div>

            <div className="col-lg-12">
              <h3 className="contact-address-header">Opening Hours</h3>
              <p className="contact-address-sentence">Monday - Friday</p>
              <p className="contact-address-sentence">9am - 5pm</p>
            </div>

            <div className="col-lg-12">
              <h3 className="contact-address-header">Contact Us</h3>
              <p className="contact-address-sentence">+234 708 354 9134</p>
              <p className="contact-address-sentence">
                projects@neilzdesignfitout.com
              </p>
            </div>

            <div className="col-lg-12">
              <h3 className="contact-address-header">
                Follow Us on social media
              </h3>
              <a
                href="https://www.instagram.com/neilzdesign/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={ig} className="img-fluid io" alt="ig" />
              </a>
              <a
                href="https://www.facebook.com/neilzdesign"
                target="_blank"
                rel="noreferrer"
              >
                <img src={fb} className="img-fluid io" alt="fb" />
              </a>
              <a href="https://x.com/home" target="_blank" rel="noreferrer">
                <img src={x} className="img-fluid io" alt="x" />
              </a>
              <a
                href="https://www.pinterest.com/neilzdesign/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={p} className="img-fluid io" alt="p" />
              </a>
              <img src={be} className="img-fluid io" alt="be" />
              <img src={youtube} className="img-fluid io" alt="youtube" />
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Contact;
