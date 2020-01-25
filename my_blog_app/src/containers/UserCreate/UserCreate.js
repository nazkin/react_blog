import React, { Component } from 'react';
import './UserCreate.css';
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
/**
* @author
* @class UsrCreate
**/

class UsrCreate extends Component {
 state = {}
 render() {
  return(
   <div className="backdrop">
     <Container>
       <Link to="/">Home</Link>
        <div className="authenticate">
          <h2>Sign-up for exclusive content</h2>
          <div className="auth-form">
            <form>
               <div className="form-group">
                <label >User</label>
                <input type="text" className="form-control" placeholder="Enter your username"

                />
               </div>
               <div className="form-group">
                <label >Password</label>
                <input type="text" className="form-control" placeholder="Enter your password"

                />
               </div>
               <button value="Sign-up" type="submit" className="btn btn-outline-success btn-lg">Sign-up</button>
            </form>
          </div>
          <div className="row links">
            <div className = "col-6 auth-link active">
              <h5>Sign-Up</h5>
            </div>
            <div className = "col-6 auth-link">
              <Link to="/user/login">Login</Link>
            </div>
          </div>
        </div>

     </Container>  
   </div>
    )
   }
 }


export default UsrCreate;