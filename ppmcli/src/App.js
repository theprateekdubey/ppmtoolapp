import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProject from "./components/projects/AddProject";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/addProject" component={AddProject} />
    </Router>
  );
}

export default App;
