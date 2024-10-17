import React from 'react'
import bloghero from '../../images/bloghero.png';
import authorprofile from '../../images/authorprofile.svg';
import blogpicture from '../../images/blogpicture.png';
import Navbar from '../../components/partials/navbar';
import { Link } from 'react-router-dom';


const blog = () => {
  return (
    <div>
          <Navbar></Navbar>
         <div className='abstract-portfolio'>
<div className='container'>
    <div className='row'>
        <div className='col-lg-2'></div>
        <div className='col-lg-8'>

        <div className='wrapper-blog'>
            <img src={bloghero} className='img-fluid bloghero' alt='blog=hero'/>
            <div className='wrapper-mini'>
            <span className='tag-blog'>Technology</span>
            <p className='title-blog-post'>Interior Design vs Interior Architecture - the difference in roles and how they collaborate</p>
            <span><img src={authorprofile} className='img-fluid auth-profile' alt='authorprofile'/></span> <span className='author-name'>Seyi Oluwasola</span>  <span className='blog-date'>August 20, 2022</span>
            </div>
            </div>
        </div>
        <div className='col-lg-2'></div>

    </div>
</div>
         </div>

{/** blog post list component*/}

<div className='container'>
    <div className='row'>
        <div className='col-lg-2'></div>
        <div className='col-lg-8'>
            <h3 className='blog-component-header'>Latest Post</h3>
<div className='row'>
    <div className='col-lg-4'>
        <div className='blog-card-ndfl'>
            <Link to="/postdetials">
        <img src={blogpicture} className='img-fluid blog-img-component' alt='blog=hero'/>
        <span className='tag-blog-main-component'>Interior Design</span>
        <p className='title-blog-post-main-component'>Interior Design vs Interior Architecture - the difference in roles and how they collaborate</p>
        </Link>
        <span><img src={authorprofile} className='img-fluid auth-profile' alt='authorprofile'/></span> <span className='author-name-main-blog-component'>Seyi Oluwasola</span>  <span className='blog-date-main-blog-component'>August 20, 2022</span>
        </div>
    </div>
    <div className='col-lg-4'>
    <div className='blog-card-ndfl'>
    <img src={blogpicture} className='img-fluid blog-img-component' alt='blog=hero'/>
        <span className='tag-blog-main-component'>Interior Design</span>
        <p className='title-blog-post-main-component'>Interior Design vs Interior Architecture - the difference in roles and how they collaborate</p>
        <span><img src={authorprofile} className='img-fluid auth-profile' alt='authorprofile'/></span> <span className='author-name-main-blog-component'>Seyi Oluwasola</span>  <span className='blog-date-main-blog-component'>August 20, 2022</span>
</div>
    </div>
    <div className='col-lg-4'>
    <div className='blog-card-ndfl'>
    <img src={blogpicture} className='img-fluid blog-img-component' alt='blog=hero'/>
        <span className='tag-blog-main-component'>Interior Design</span>
        <p className='title-blog-post-main-component'>Interior Design vs Interior Architecture - the difference in roles and how they collaborate</p>
        <span><img src={authorprofile} className='img-fluid auth-profile' alt='authorprofile'/></span> <span className='author-name-main-blog-component'>Seyi Oluwasola</span>  <span className='blog-date-main-blog-component'>August 20, 2022</span>
</div>
    </div>
</div>
        </div>
        <div className='col-lg-2'></div>
    </div>

    <div className='row'>
        <div className='col-lg-2'></div>
        <div className='col-lg-8'>
            
<div className='row'>
    <div className='col-lg-4'>
        <div className='blog-card-ndfl'>
        <img src={blogpicture} className='img-fluid blog-img-component' alt='blog=hero'/>
        <span className='tag-blog-main-component'>Interior Design</span>
        <p className='title-blog-post-main-component'>Interior Design vs Interior Architecture - the difference in roles and how they collaborate</p>
        <span><img src={authorprofile} className='img-fluid auth-profile' alt='authorprofile'/></span> <span className='author-name-main-blog-component'>Seyi Oluwasola</span>  <span className='blog-date-main-blog-component'>August 20, 2022</span>
        </div>
    </div>
    <div className='col-lg-4'>
    <div className='blog-card-ndfl'>
    <img src={blogpicture} className='img-fluid blog-img-component' alt='blog=hero'/>
        <span className='tag-blog-main-component'>Interior Design</span>
        <p className='title-blog-post-main-component'>Interior Design vs Interior Architecture - the difference in roles and how they collaborate</p>
        <span><img src={authorprofile} className='img-fluid auth-profile' alt='authorprofile'/></span> <span className='author-name-main-blog-component'>Seyi Oluwasola</span>  <span className='blog-date-main-blog-component'>August 20, 2022</span>
</div>
    </div>
    <div className='col-lg-4'>
    <div className='blog-card-ndfl'>
    <img src={blogpicture} className='img-fluid blog-img-component' alt='blog=hero'/>
        <span className='tag-blog-main-component'>Interior Design</span>
        <p className='title-blog-post-main-component'>Interior Design vs Interior Architecture - the difference in roles and how they collaborate</p>
        <span><img src={authorprofile} className='img-fluid auth-profile' alt='authorprofile'/></span> <span className='author-name-main-blog-component'>Seyi Oluwasola</span>  <span className='blog-date-main-blog-component'>August 20, 2022</span>
</div>
    </div>
</div>
        </div>
        <div className='col-lg-2'></div>
    </div>
</div>

{/** end*/}
      
    </div>
  )
}

export default blog