
import React, { Component } from 'react';
import axios from 'axios'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

/**
* @author
* @class BlogEdit
**/

class BlogEdit extends Component {
 state = {
  user: '',
  title: '',
  info: '',
  image: '',
  date: new Date()
 }

 componentDidMount(){
  axios.get(`/blogs/${this.props.match.params.id}`)
   .then(response => {
     this.setState({
       user: response.data.user,
       title: response.data.title,
       info: response.data.info,
       image: response.data.image,
       date:  new Date(response.data.date)
     });
   })
   .catch(err => console.log(err));
}

 userOnChange = (e)=> {
  this.setState({
     user: e.target.value
  });
}
titleOnChange = (e)=> {
  this.setState({
     title: e.target.value
  });
}
infoOnChange = (e)=> {
  this.setState({
     info: e.target.value
  });
}
imageOnChange = (e)=> {
  this.setState({
     image: e.target.value
  });
}
dateOnChange = (dateSelector)=> {
  this.setState({
     date: dateSelector
  });
}
submitFormHandler = (e)=> {
  e.preventDefault();

  const blog = {
     user: this.state.user,
     title: this.state.title,
     info: this.state.info,
     image: this.state.image,
     date: this.state.date
  }
  console.log(blog);
  axios.post('/edit/'+this.props.match.params.id, blog)
     .then(res=> console.log(`New blog added : ${res.data}`))
     .catch(err=> console.log(err));

     
}
 render() {
  return(
   <div>
     <div className="my-5 p-4">
     <h1 className="mb-3 p-2 border-bottom" >Edit: {this.state.title}</h1>
       <form onSubmit= {this.submitFormHandler}>
       <div className="form-group">
           <label >User</label>
           <input type="text" className="form-control"
                  value = {this.state.user}
                  onChange = {this.userOnChange}
           />
        </div>
        <div className="form-group">
           <label >Title</label>
           <input type="text" className="form-control"
                  value = {this.state.title}
                  onChange = {this.titleOnChange}
           />
        </div>
        <div className="form-group">
           <label>Image</label>
           <input type="text" className="form-control"
                  value = {this.state.image}
                  onChange = {this.imageOnChange}
           />
        </div>

        <div className="form-group">
           <label >Body</label>
           <textarea className="form-control"
                     value={this.state.info}
                     onChange={this.infoOnChange}
           ></textarea>
        </div>
       
        <div className="form-group">
           <label >Date</label>
           <DatePicker  selected ={this.state.date}
                        onChange ={this.dateOnChange}
           />
        </div>
        <button value="Update a Blog" type="submit" className="btn btn-outline-warning btn-lg">Edit Blog</button>

       </form> 
      </div>
   </div>
    )
   }
 }


export default BlogEdit