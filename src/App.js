import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Jumbotron/>
      <Footer/>
    </React.Fragment> 
  );
}

export default App;
