import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './components/TopNav'
import About from './components/About'
import Index from './components/Index'
import ApiTester from './components/ApiTester'
import Upload from './components/UploadFiles/Upload'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    
    <div className="BgColorLightSilver">
    <TopNav></TopNav>
    <Router>
      <Route path="/" exact component={Index}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/apitester" component={ApiTester}></Route>
      <Route path="/upload" component={Upload}></Route>
    </Router>
    </div>
  );
}

export default App;
