


import Table from 'react-bootstrap/Table'
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Spinner from './Spinner';

function UserList(props) {

    const [user, setUser] = useState([])
    const [isloading, setIsloading] = useState(false)
    useEffect( () => {
      setIsloading(true)
      // setTimeout(()=>{

      // },2000)
        axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setUser(response.data)
        setIsloading(false)
      } )
      

    }, [])
    return (
        <div className='p-4'>
            <Table  striped bordered hover>
        <thead>
                <tr>
                    <th>#</th>
                    <th>category</th>
                    <th>price</th>
                    <th>title</th>
                    <th>Image</th>
                    <th>rating</th>
                </tr>
                </thead>
                <tbody>
                {
                  isloading? <Spinner />:
                   user.map((item,i)=>
                   <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.category}</td>
                    <td>{item.price <50? <span>less than 50</span>: item.price}</td>
                    <td>{item.title}</td>
                    <td>{<img src={item.image} width={50} height={50} alt='blank' />}</td>
                    <td>{item.rating.rate}</td>
                   
                     </tr>
                   )  
                }
               </tbody>
            </Table>
        </div>
    );
}

export default UserList;