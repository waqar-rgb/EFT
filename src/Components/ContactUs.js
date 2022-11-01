
import React, { Component } from 'react';

class ContactUs extends Component {
   constructor(props){
    super();
  
   }
    componentDidMount(){
        console.warn(this.props);
    }
    render() {
        return (
            <div className='ps-5'>
                <h5>ContactUs page :{this.props.name}</h5>
            </div>
        );
    }
}

export default ContactUs;