import React from 'react'
import {Link} from 'react-router-dom';
/**
* @author
* @function blog
**/

const blog = (props) => {
  return(
    <div className="mb-4">
        <div className="row d-flex justify-content-center">
           <div className = "col-10">
                <h2>{props.currentBlog.title}</h2>
                
                <img alt="Blog Image" src={props.currentBlog.image} width="400px"/>
                <hr/>
                <p>Summary: {props.currentBlog.info}</p>
                <Link className="btn btn-outline-dark" to={`blogs/${props.currentBlog._id}`}>read more</Link>
           </div>
       </div>
    </div>
   )

 }

export default blog