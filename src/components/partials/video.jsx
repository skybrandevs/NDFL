import React from 'react'
import videocover from '../../images/videocover.png';

const video = () => {
  return (
    <div className='videobackground'>

<div className='container'>
    <div className='row'>
        <div className='col-lg-6'>
<img src={videocover} className='img-fluid videocover' alt='cover'/>
        </div>

        <div className='col-lg-6 mrg-top'>
            
<div className='adjuster-gen'>
    <h3 className='number plus'>11</h3>
    <span className='numbers-sentence'>years of experience</span>

</div>


<div className='adjuster-gen'>
    <h3 className='number'>60+</h3>
    <span className='numbers-sentence'>completed projects.</span>

</div>


<div className='adjuster-gen'>
    <h3 className='number'>30+</h3>
    <span className='numbers-sentence'>satisfied clients</span>

</div>

            </div>
    </div>
</div>

    </div>
  )
}

export default video