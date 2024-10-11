import React from 'react'
import Navbar from '../partials/navbar'
import Footer from '../partials/footer'
import Mansoryportfolio from '../partials/mansoryportfolio'

const portfolio = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className='abstract-portfolio'>

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h3 className='port-header'>Exploring the Neilz Design Fit-Out Portfolio: <span className='color-special'>A Showcase of Design Mastery</span></h3>
                    </div>
                </div>
                </div>
           </div>
           <Mansoryportfolio></Mansoryportfolio>
<Footer></Footer>

    </div>
  )
}

export default portfolio