import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
/**
* @author
* @class CreateBlog
**/

class CreateBlog extends Component {
 state = {
    user: '',
    title: '',
    info: '',
    image: '',
    date: new Date()

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
   axios.post('http://localhost:5000/blogs/add', blog)
      .then(result=> console.log(`New blog addded successfully: ${result.data}`))
      .catch(err => console.log(`error adding a value to database: ${err}`));

      window.location = '/';
}



 render() {
  return(
   <div className="my-5 p-4">
       <h1 className="mb-3 p-2 border-bottom" >Submit A New Blog</h1>
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
        <button value="Create a Blog" type="submit" className="btn btn-outline-primary btn-lg">Submit Blog</button>

       </form>
       
   </div>
    )
   }
 }


export default CreateBlog