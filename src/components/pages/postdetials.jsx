import React from 'react'
import Navbar from '../../components/partials/navbar';
import back from '../../images/back.svg';
import { Link } from 'react-router-dom';
import authorprofile from '../../images/authorprofile.svg';
import imagedetails from '../../images/imagedetails.png';
import Footer from '../../components/partials/footer';

const postdetials = () => {
  return (
    <div>
   <Navbar></Navbar>


<div className='container'>
    <div className='row'>
        <div className='col-lg-2'></div>
        <div className='col-lg-8'>
     

<span className='tag-details-blog'>Technology</span>
<Link to='/blog'>
<img src={back} className='img-fluid back-blog' alt='back'/>
</Link>
<h3 className='blog-details-title'>Interior Design vs Interior Architecture - 
the difference in roles and how they collaborate</h3>
<span><img src={authorprofile} className='img-fluid auth-profile' alt='authorprofile'/></span> <span className='author-name'>Seyi Oluwasola</span>  <span className='blog-date'>August 20, 2022</span>
<img src={imagedetails} className='img-fluid imagedetails' alt='imagedetails'/>

<p className='details-blog'>Step into this office space and experience the perfect blend of precision and elegance. It is a haven where professionalism meets timeless beauty, inspiring you to accomplish your best work with confidence and grace. </p>
<p className='details-blog'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta ultrices vulputate. Duis sapien ipsum, semper ut aliquam ac, maximus at quam. Aliquam rutrum, diam et ultrices tincidunt, velit tellus pharetra nisl, in consectetur mi est nec ex. Nam vel cursus magna, eget luctus lorem. Fusce tortor neque, feugiat sed feugiat dictum, varius eu metus. Cras massa enim, mollis sed nisl et, aliquet pellentesque eros. Cras commodo sit amet velit et euismod. Suspendisse potenti.</p>
<p className='details-blog'>Etiam dictum maximus dui at sagittis. Duis varius maximus augue, sed mattis sem. Morbi felis est, venenatis vel dignissim vel, faucibus molestie libero. Aliquam nisi diam, bibendum vitae dictum a, bibendum nec purus. Fusce et elit magna. Nullam sit amet consequat metus. Pellentesque tristique, massa vel lacinia hendrerit, velit augue sagittis enim, aliquet dictum erat risus finibus augue. Sed sem turpis, laoreet eget laoreet eget, euismod porta sapien. Donec consequat venenatis dictum.</p>
<p className='details-blog'>Nulla id luctus justo. Vivamus tincidunt dolor ac auctor maximus. Donec nec congue tortor. Nullam vitae consectetur turpis. Cras facilisis magna vel nisi vulputate, id sollicitudin mi scelerisque. Morbi eget vestibulum massa, ac sagittis diam. Morbi quis hendrerit dolor, id tincidunt nunc. Fusce neque ante, vulputate ac mollis eu, aliquam eget ligula. Phasellus iaculis velit sapien, et tincidunt arcu mollis quis.</p>

<img src={imagedetails} className='img-fluid imagedetails' alt='imagedetails'/>
<p className='details-blog'>Step into this office space and experience the perfect blend of precision and elegance. It is a haven where professionalism meets timeless beauty, inspiring you to accomplish your best work with confidence and grace. </p>
<p className='details-blog'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta ultrices vulputate. Duis sapien ipsum, semper ut aliquam ac, maximus at quam. Aliquam rutrum, diam et ultrices tincidunt, velit tellus pharetra nisl, in consectetur mi est nec ex. Nam vel cursus magna, eget luctus lorem. Fusce tortor neque, feugiat sed feugiat dictum, varius eu metus. Cras massa enim, mollis sed nisl et, aliquet pellentesque eros. Cras commodo sit amet velit et euismod. Suspendisse potenti.</p>
        </div>
        <div className='col-lg-2'></div>
    </div>
</div>

<div className='blog-details-divider'></div>

<Footer></Footer>

    </div>
  )
}

export default postdetials