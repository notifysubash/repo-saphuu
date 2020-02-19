import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './components/TopNav'
import Playlist from './components/Youtube/Playlist'
function App() {
  return (
    <div>
    <TopNav></TopNav>
    
    <Playlist></Playlist>
    
    
  
   
    </div>
    
  );
}

export default App;
