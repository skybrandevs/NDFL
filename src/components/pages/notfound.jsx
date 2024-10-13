import React from 'react'
import Navbar from '../partials/navbar';
import Footer from '../partials/footer';
import notfoundtypo from '../../images/notfoundtypo.svg';

const notfound = () => {
  return (
    <div>
         <div className='abstract-portfolio'>
            <Navbar></Navbar>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-2'></div>
                <div className='col-lg-8'>
<img src={notfoundtypo} className='img-fluid notfoundtypo' alt='notfoundtypo'/>

                </div>
                <div className='col-lg-2'></div>
            </div>
        </div>
        </div>
        <h3 className='not-found'>Page not found</h3>
        <Footer></Footer>
    </div>
  )
}

export default notfound;