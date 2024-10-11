import React from 'react'
import emmanuelukah from '../../images/emmanuelukah.png';
import stripe from '../../images/stripe.svg';

const statement = () => {
  return (
    <div>
        <div className='container'>
            <div className='row'>

                <div className='col-lg-7'>
<p className='state-sentence-1'>As the founder and design lead, I, Emmanuel Obiajulu Ukah, welcome you to the Neilz Design Fit-Out experience.</p>
<p className='state-sentence-2'>We guarantee unwavering attention to detail, adherence to timelines, and budget compliance, ensuring every project surpasses expectations. </p>
                </div>

                <div className='col-lg-4'>
       <img src={emmanuelukah} className='img-fluid ceo' alt='emmanuelukah'/>            
                    </div>


            </div>
        </div>

<div className='strip-background'>
 
 <img src={stripe} className='img-fluid strip scroll' alt='stripe'/>  
 
</div>

    </div>
  )
}

export default statement