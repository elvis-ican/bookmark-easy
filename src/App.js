import React from 'react';
import './App.css';
import NavComponent from './components/common/nav-component';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Bookmarks from './components/bookmark/bookmarks';
import Login from './components/login/login';
import Explore from './components/explore/explore';
import Community from './components/community/community';
import Update from './components/update/update';
import Logout from './components/logout/logout';
import Home from './components/home/home';
import Register from './components/register/register';


function App() {
  return (
    <Router>
      <NavComponent></NavComponent>
      <Container>
        <Route path="/bookmarks">
          <Bookmarks />
        </Route>
        <Route path="/explore">
          <Explore />
        </Route>
        <Route path="/community">
          <Community />
        </Route>
        <Route path="/update">
          <Update />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
      </Container>
    </Router>
  );
}

export default App;
