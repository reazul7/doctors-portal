import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Router path="/appointment">
          <Appointment/>
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
