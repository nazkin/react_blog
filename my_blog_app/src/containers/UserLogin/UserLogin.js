import React, { Component } from 'react';
import './UserLogin.css';
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
/**
* @author
* @class UsrLogin
**/

class UsrLogin extends Component {
 state = {}
 render() {
  return(
   <div className="backdrop">
     <Container>
        <Link to="/">Home</Link>
        <div className="authenticate">
          <h2>Login as an existing user</h2>
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
               <button value="Sign-up" type="submit" className="btn btn-outline-primary btn-lg">Log-In</button>
            </form>
          </div>
          <div className="row links">
            <div className = "col-6 auth-link ">
            <Link to="/user">Sign-Up</Link>
            </div>
            <div className = "col-6 auth-link active">
              <h5>Log-In</h5>
            </div>
          </div>
        </div>

     </Container>  
   </div>
    )
   }
 }


export default UsrLogin;