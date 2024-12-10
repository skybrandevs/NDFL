import React, { useEffect, useState } from "react";
import scroll from "../../images/scroll.svg";
import { getCeoData } from "../../api/home";
import { toast } from "react-toastify";

const Statement = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [ceoData, setCeoData] = useState();

  const fetchCeoData = async () => {
    try {
      setIsLoading(true);
      const { data } = await getCeoData();
      setCeoData(data);
      setIsLoading(false);
    } catch (error) {
      toast.error("Failed to load Ceo Data.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCeoData();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <p className="state-sentence-1">
              {ceoData?.quote}
            </p>
            <p className="state-sentence-2">
             {ceoData?.subtext}
            </p>
          </div>

          <div className="col-lg-4">
            <img
              src={ceoData?.image_path}
              className="img-fluid ceo"
            />
          </div>
        </div>
      </div>

      <div className="strip-background">
        <div className="diagonal-cut">
          <marquee width="100%" direction="left">
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Design Consultation</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Interior Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Facility Management</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Architecture</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">E-Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Design Consultation</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Interior Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Facility Management</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Architecture</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">E-Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Design Consultation</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Interior Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Facility Management</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Architecture</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">E-Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Design Consultation</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Interior Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Facility Management</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Architecture</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">E-Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Design Consultation</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Interior Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Facility Management</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Architecture</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">E-Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Design Consultation</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Interior Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Facility Management</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Architecture</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">E-Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Design Consultation</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Interior Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Facility Management</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Architecture</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">E-Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Design Consultation</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Interior Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Facility Management</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Architecture</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">E-Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Design Consultation</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Interior Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Facility Management</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Architecture</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">E-Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Design Consultation</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Interior Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Facility Management</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Architecture</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">E-Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Design Consultation</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Interior Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Facility Management</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Architecture</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">E-Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Design Consultation</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Interior Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Facility Management</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Architecture</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">E-Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Design Consultation</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Interior Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Facility Management</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Architecture</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">E-Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Design Consultation</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Interior Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Facility Management</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Architecture</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">E-Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Design Consultation</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Interior Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Facility Management</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Architecture</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">E-Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Design Consultation</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Interior Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Facility Management</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Architecture</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">E-Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Design Consultation</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Interior Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Facility Management</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Architecture</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">E-Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Design Consultation</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Interior Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Facility Management</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Architecture</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">E-Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Design Consultation</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Interior Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Facility Management</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Architecture</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">E-Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Design Consultation</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Interior Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Facility Management</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Architecture</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">E-Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Design Consultation</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Interior Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Facility Management</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Architecture</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">E-Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Design Consultation</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Interior Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Facility Management</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Architecture</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">E-Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Design Consultation</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Interior Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Facility Management</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Architecture</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">E-Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Design Consultation</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Interior Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Facility Management</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Architecture</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">E-Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Design Consultation</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Interior Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Facility Management</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Architecture</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">E-Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Design Consultation</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Interior Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Facility Management</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Architecture</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">E-Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Design Consultation</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Interior Design</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Facility Management</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">Architecture</span>
            <img src={scroll} className="img-fluid scroll" alt="scroll" />
            <span className="text-scroll">E-Design</span>
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default Statement;
