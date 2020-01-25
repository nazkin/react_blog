import React, { Component } from 'react'
import axios from 'axios'
import Jumbotron from 'react-bootstrap/Jumbotron'
import "./BlogDetailed.css"
import {Link} from 'react-router-dom';

/**
* @author
* @class 
**/

class BlogDetailed extends Component {
 state = {
     user: '',
     title:'',
     info: '',
     image: '',
     date: ''
 }
 componentDidMount(){
    axios.get(`/blogs/${this.props.match.params.id}`)
     .then(response => {
       this.setState({
         user: response.data.user,
         title: response.data.title,
         info: response.data.info,
         image: response.data.image,
         date: response.data.date
       });
     })
     .catch(err => console.log(err));
  }
  deleteBlogHandler = ()=> {
    axios.delete(`/blogs/${this.props.match.params.id}`)
      .then(res=> console.log(res.data))
      .catch(err => console.log(`Error deleting exercise: ${err}`));

      window.location = "/";
   }
   editBlogHandler = ()=> {
     console.log(`Edit Blog`);
   }

 render() {
  return(
   <div>
       <Jumbotron>
           <div className="container title-container-section">
            <h1>{this.state.title}</h1>
             <p class="user-date">Posted: {this.state.date} by {this.state.user}</p>
           </div>
            
       </Jumbotron>
       <div className="container">
            <div className="row justify-content-center">
                <div className="col-6 image-btn-section">
                    <img alt="blog image" src={this.state.image} width="100%" />
                    <hr/>
                    <Link
                     className="btn btn-outline-warning"
                      to = {`/edit/${this.props.match.params.id}`} >Edit Blog
                    </Link>
                    <button onClick = {this.deleteBlogHandler} className ="btn btn-outline-danger mx-5">Delete</button>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-8">
                    <h3>{this.state.info}</h3> 
                </div>
                
            </div>
       </div>      
   </div>
    )
   }
 }



export default BlogDetailed;