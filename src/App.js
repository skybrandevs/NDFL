import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from "./components/pages/landing";
import About from "./components/pages/about";
import Portfolio from "./components/pages/portfolio";
import Project from "./components/pages/project";
import Vendors from "./components/pages/vendors";
import Contact from "./components/pages/contact";
import Careers from "./components/pages/careers";
import Jobdescription from "./components/pages/jobdescription";
import Notfound from "./components/pages/notfound";
import Blog from "./components/pages/blog";
import Postdetials from "./components/pages/postdetials";
import Home from "././components/admin/pages/home";
import Aboutpanel from "././components/admin/pages/aboutpanel";
import Portfoliopanel from "././components/admin/pages/portfoliopanel";
import Portfoliodetailspanel from "././components/admin/pages/portfoliodetailspanel";
import Vendorspanel from "././components/admin/pages/vendorspanel";
import Vendorsdetailspanel from "././components/admin/pages/vendorsdetailspanel";
import Blogpanel from "././components/admin/pages/blogpanel";
import Blogpostpanel from "././components/admin/pages/blogpostpanel";
import Careerspanel from "././components/admin/pages/careerspanel";
import Newcareer from "././components/admin/pages/newcareer";
import Candidate from "././components/admin/pages/candidate";
import Messagepanel from "././components/admin/pages/messagepanel";
import Addtestimonial from "././components/admin/pages/addtestimonial";
import Addteam from "././components/admin/pages/addteam";
import Preview from "././components/admin/pages/preview";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HeroImagesPanel from "./components/admin/pages/heroImagesPanel";
import CeoQuotePanel from "./components/admin/pages/ceoQuotePanel";
import Linkspanel from "./components/admin/pages/linkspanel";
import ClientPanel from "./components/admin/pages/clientPanel";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/project/:portfolioId" element={<Project />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/jobdescription/:careerId" element={<Jobdescription />} />
        <Route path="/notfound" element={<Notfound />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/postdetials/:blogId" element={<Postdetials />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hero-images" element={<HeroImagesPanel />} />
        <Route path="/hero-images/:id" element={<HeroImagesPanel />} />
        <Route path="/ceo-quote" element={<CeoQuotePanel />} />
        <Route path="/ceo-quote/:id" element={<CeoQuotePanel />} />
        <Route path="/links" element={<Linkspanel />} />
        <Route path="/links/:id" element={<Linkspanel />} />
        <Route path="/client" element={<ClientPanel />} />
        <Route path="/client/:id" element={<ClientPanel />} />
        <Route path="/aboutpanel" element={<Aboutpanel />} />
        <Route path="/portfoliopanel" element={<Portfoliopanel />} />
        <Route
          path="/portfoliodetailspanel"
          element={<Portfoliodetailspanel />}
        />
        <Route
          path="/portfoliodetailspanel/:portfolioId"
          element={<Portfoliodetailspanel />}
        />
        <Route path="/vendorspanel" element={<Vendorspanel />} />
        <Route path="/vendorsdetailspanel/:id" element={<Vendorsdetailspanel />} />
        <Route path="/blogpanel" element={<Blogpanel />} />
        <Route path="/blogpostpanel" element={<Blogpostpanel />} />
        <Route path="/blogpostpanel/:blogId" element={<Blogpostpanel />} />
        <Route path="/careerspanel" element={<Careerspanel />} />
        <Route path="/newcareer" element={<Newcareer />} />
        <Route path="/newcareer/:careerId" element={<Newcareer />} />
        <Route path="/candidate/:id" element={<Candidate />} />
        <Route path="/messagepanel" element={<Messagepanel />} />
        <Route path="/preview/:id" element={<Preview />} />
        <Route path="/addtestimonial" element={<Addtestimonial/>}/>
        <Route path="/addtestimonial/:id" element={<Addtestimonial/>}/>
        <Route path="/addteam" element={<Addteam/>}/>
        <Route path="/addteam/:id" element={<Addteam/>}/>
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
  );
}

export default App;
