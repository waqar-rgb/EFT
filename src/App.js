import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';
import InputField from './Components/InputField';
import Home from './Components/Home'
// import Spinner from './Components/Spinner';
import {   useEffect } from 'react';
import UserList from './Components/UserList';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  
  useEffect(() => {

  })

  return (
    <div>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><Link to="/">Navbar</Link></Navbar.Brand>
          <Nav className="me-auto">
            
            <Nav.Link ><Link to="/contact">Contact Us</Link></Nav.Link>
            <Nav.Link ><Link to="/about">About Us</Link></Nav.Link>
            <Nav.Link ><Link to="/form">Form</Link></Nav.Link>
            <Nav.Link ><Link to="/userlist">UserList</Link></Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      {/* <Spinner ></Spinner> */}
      
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutUs name="About updated" />} />
        <Route path="contact" element={<ContactUs  />} />
        <Route path="form" element={<InputField />} />
        <Route path="userlist" element={<UserList />} />
      </Routes>

    </div>
  );
}

export default App;
