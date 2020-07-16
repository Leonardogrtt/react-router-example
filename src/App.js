import React from 'react';
import './App.css';
import Nav from './Nav';
import Posts from './components/Posts';
import Users from './components/Users';
import UserDetail from './components/UserDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">

        <Nav />

        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/posts" component={Posts} />
          <Route exact path="/users" component={Users} />
          <Route path="/users/:id" component={UserDetail} />
        </Switch>

      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export default App;
