import React, { Component } from 'react'

import './Home.css';


/**
* @author
* @class Home
**/

class Home extends Component {
 state = {}
 render() {
  return(
  <div>
     <div className="hero jumbotron">
       <h1>Make  <span class="life">YOUR</span>  thoughts come to  <span class="life">LIFE</span></h1>
       <h3>One letter at a time...</h3>
       <button className="btn btn-outline-light my-5">Explore Thoughts</button>
   </div>
  
    <div className="blog-card">
        <div className="media">
          <div className="card-body">
            <h4 className="title text-center">Why I write ?</h4>
            <section className="divider" />
            <p className="paragraph text-justify"> Lorem ipsum dolor sit amet, consectetur adipisicing
                       elit. Ad aliquam a incidunt fuga, ducimus nisi iusto ipsum sit deleniti
                       suscipit atque aliquid, velit at? At quasi magni voluptates molestiae aperiam</p>
          </div>
        </div>
      </div>
      <div className = "container-fluid">
        < div className="row">
          < div className="col-4">
            <img alt="personal Pictures" src = "https://images.unsplash.com/photo-1558981420-87aa9dad1c89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" width="100%"></img>
          </div>
          < div className="col-4">
            <img alt="personal Pictures" src = "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" width="100%"></img>
          </div>
          < div className="col-4">
            <img alt="personal Pictures" src = "https://images.unsplash.com/photo-1558980394-0a06c4631733?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" width="100%"></img>
          </div>
        </div>

      </div>
  
 

  </div>
  
    )
   }
 }


// Home.propTypes = {}
export default Home