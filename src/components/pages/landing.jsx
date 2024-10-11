import React from 'react'
import Navbar from '../partials/navbar';
import Hero from '../partials/hero';
import Statement from '../partials/statement';
import Video from '../partials/video';
import Services from '../partials/services';
import Testimonial from '../partials/testimonial';
import Footer from '../partials/footer';

const landing = () => {
  return (

    <div>

  <Navbar></Navbar>     
  <Hero></Hero>
  <Statement></Statement>
  <Video></Video>
  <Services></Services>
  <Testimonial></Testimonial>
  <Footer></Footer>

   </div>
  )
}

export default landing;