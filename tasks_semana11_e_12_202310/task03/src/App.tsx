import React from 'react';
import './App.css';
import Navbar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import Home from './paginas/home/Home';


function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Footer/>
    </>
);
}
export default App;