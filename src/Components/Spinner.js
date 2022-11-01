
import React from 'react';
import  spinner from '../Images/spinner.gif'

function Spinner(props) {
    
    return (
        <div  className='text-center'>
            <div > <img src={spinner} alt="no gif" width={100} height={100} /></div>
           
        </div>
        // 
    //     <div className="spinner">
    //   <div className="loading-spinner">
    //   </div>
    // </div>
    );
}

export default Spinner;