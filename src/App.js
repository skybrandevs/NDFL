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


</Routes>
</Router>

  );
}

export default App;
