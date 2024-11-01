import React from "react";
import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
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


function App() {

  return (
<Router>
<Routes>
  <Route path="/" element={<Landing/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/portfolio" element={<Portfolio/>}/>
  <Route path="/project" element={<Project/>}/>
  <Route path="/vendors" element={<Vendors/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/careers" element={<Careers/>}/>
  <Route path="/jobdescription" element={<Jobdescription/>}/>
  <Route path="/notfound" element={<Notfound/>}/>
  <Route path="/blog" element={<Blog/>}/>
  <Route path="/postdetials" element={<Postdetials/>}/>
  <Route path="/home" element={<Home/>}/>
  <Route path="/aboutpanel" element={<Aboutpanel/>}/>
  <Route path="/portfoliopanel" element={<Portfoliopanel/>}/>
  <Route path="/portfoliodetailspanel" element={<Portfoliodetailspanel/>}/>
  <Route path="/vendorspanel" element={<Vendorspanel/>}/>
  <Route path="/vendorsdetailspanel" element={<Vendorsdetailspanel/>}/>


</Routes>
</Router>

  );
}

export default App;
