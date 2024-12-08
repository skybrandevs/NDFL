import React, { useEffect, useState } from "react";
import joke from "../../images/joke.svg";
import arrowleft from "../../images/arrowleft.svg";
import arrowright from "../../images/arrowright.svg";
import people from "../../images/people.svg";
import quote from "../../images/quote.svg";
import { Link } from "react-router-dom";
import { getTestimonials } from "../../api/home";
import { toast } from "react-toastify";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [images, setImages] = useState([]);

  const fetchTestimonials = async () => {
    try {
      const { data } = await getTestimonials();
      setTestimonials(data);
      const dataImages = data.map((item) => item.image_path);
      setImages(dataImages);
    } catch (error) {
      toast.error("Failed to load Ceo Data.");
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="bac-testimonial">
              <div
                id="carouselExampleAutoplaying"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  {testimonials?.map((testimonial, index) => (
                    <div class="carousel-item active trans" key={index}>
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-12">
                            <img
                              src={quote}
                              className="img-fluid quote"
                              alt="quote"
                            />
                            <p className="testimonial-sentence">
                              {testimonial?.quote}
                            </p>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-6">
                            <img
                              src={testimonial?.image_path}
                              className="img-fluid testimonial-avatar"
                              alt="joke"
                            />
                            <p className="client-name">{testimonial?.name}</p>
                            <p className="client-position">
                              {testimonial?.designation}
                            </p>
                          </div>
                          <div className="col-lg-6">
                            <img
                              src={arrowleft}
                              className="img-fluid arrow-left"
                              alt="arrowleft"
                              type="button"
                              data-bs-target="#carouselExampleAutoplaying"
                              data-bs-slide="prev"
                            />
                            <img
                              src={arrowright}
                              className="img-fluid arrow-right"
                              alt="arrowright"
                              type="button"
                              data-bs-target="#carouselExampleAutoplaying"
                              data-bs-slide="next"
                            />
                            {/* {images.map((item, index) => (
                            <img
                            src={item}
                            className="img-fluid people"
                            alt="people"
                            key={index}
                          />
                           )) } */}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="abstract-2">
        <div className="container">
          <div className="row">
            <h3 className="lets-talk">Let’s talk about your project</h3>
            <Link to="/contact" className="line-removal">
              <button className="lets-talk-button">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
