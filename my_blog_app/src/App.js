import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Home from './containers/Home/Home';
import Blogs from './containers/Blogs/Blogs';
import BlogCreate from './containers/BlogCreate/BlogCreate';
import UserCreate from './containers/UserCreate/UserCreate';
import BlogDetail from './containers/BlogDetailed/BlogDetailed';
import BlogEdit from './containers/BlogEdit/BlogEdit';
import UserLogin from './containers/UserLogin/UserLogin';
function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Header />
            {/* <Hero /> */}
            <Switch>
            <Route path = "/" exact component= {Home} />
            <Route path = "/blogs" exact component= {Blogs} />
            <Route path = "/user" exact component= {UserCreate} />
            <Route path = "/user/login" exact component = {UserLogin} />
            <Route path = "/blogs/add" exact component= {BlogCreate} />
            <Route path = "/edit/:id" component = {BlogEdit} />
            <Route path = "/blogs/:id"  component = {BlogDetail}/>
            </Switch>
        </Container>
      </Router>

    </div>
  );
}

export default App;
