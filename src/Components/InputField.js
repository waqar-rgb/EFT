
import React, { useState } from 'react';

function InputField(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAdress] = useState('')
    let object
    const getvalue = ((event) => {
        event.preventDefault();
        object = { name, email, address }
        console.warn('object form data', object);
        let array = []
        array.push(object)
        console.warn('array of object', array)
    })

    return (
        <div className='p-5'>
            {/* <input type="text" placeholder='name' classNameName="form-control" onChange={(e)=>{setName(e.target.value)}} value={name}/>
            <input type="email" placeholder='email' classNameName="form-control" onChange={(e)=>{setEmail(e.target.value)}} value={email} />
            <input type="address" placeholder='address' classNameName="form-control" onChange={(e)=>{setAdress(e.target.value)}} value={address}/>
            <button onClick={getvalue} >Submit </button> */}


            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control" onChange={(e) => { setName(e.target.value) }} value={name}   placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Email</label>
                    <input type="emial" className="form-control" onChange={(e) => { setEmail(e.target.value) }} value={email}  placeholder="Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Address</label>
                    <input type="text" onChange={(e) => { setAdress(e.target.value) }} value={address} className="form-control"  placeholder="Adress" />
                </div>
                <button onClick={getvalue} className="btn btn-primary mt-4">Submit</button>
                </form>
        </div>
    );
}

export default InputField;