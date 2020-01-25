import React, { Component } from 'react'
import axios from 'axios'
import Blog from './Blog/Blog'
import './Blogs.css'
/**
* @author
* @class BlogsList
**/

class BlogsList extends Component {
 state = {
     blogList: []
 }

 componentDidMount(){
    axios.get('http://localhost:5000/blogs/')
     .then(response => {
       this.setState({
         blogList: response.data
       });
     })
     .catch(err => console.log(err));
  }
  deleteBlogHandler = () =>{
      console.log("This should delete a blog")
  }
  listOfBlogs = ()=> {
      return this.state.blogList.map(blog => {
          return (
              <Blog currentBlog = {blog}
                    key = {blog._id}
                    removeBlog = {this.deleteBlogHandler}
              />
          )
      })
  }
 render() {
     //This is where you need to call a get request and retrieve the JSON date from backend
     //Then list the content accordingly
  return(
   <div>
      <p className="title-bloglist">Featured BlogPosts...enjoy</p>
      {this.listOfBlogs()}
   </div>
    )
   }
 }



export default BlogsList