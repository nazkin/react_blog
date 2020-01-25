import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import './Header.css';
/**
* @author
* @function 
**/

const header = (props) => {
  return(
        <Navbar className="border-bottom mb-3" bg="light" expand="md">
          <Link className="navbar-brand" to = "/" >myThoughts</Link>
        <Navbar.Toggle aria-controls="toggle-navbar" />
        <Navbar.Collapse id="toggle-navbar">
        <Nav className="mr-auto">
          <Link className="nav-link" to = "/blogs" >Blogs</Link>
          <Link className="nav-link" to = "blogs/add" >Write a Blog</Link>
          <Link className="nav-link" to = "/user" >New User</Link> 
        </Nav>
        <Nav className="ml-auto">
          <Navbar.Brand className = "socialMedia" href="#home">Social Media</Navbar.Brand>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
   )

 }

export default header;