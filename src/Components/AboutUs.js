
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';


function AboutUs(props) {
    const [update,setUpdate]= useState('Befor updated')
    return (
        <div className='ps-5'>
           <h5> About us page ,{update}</h5> 
           <Button className='btn primary-btn' onClick={()=>{setUpdate(props.name)}}>Update Value</Button>
        </div>
    );
}

export default AboutUs;