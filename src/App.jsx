import { useEffect, useState } from 'react'
import './App.css';
import "./style.css";
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNavbar from './components/MainNavbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Preloader from "../src/components/Pre";
import Home from './components/Home/Home';
import About from './components/About/About';
import Skill from './components/Skills/Skill';
import Projects from './components/Projects/Projects'


function App() {
  const [load, upadateLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader load={load}/>
      <div className='App' id={load ? "no-scroll" : "scroll"}>
        <MainNavbar/>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/skill" element = {<Skill/>}/>
          <Route path="/project" element = {<Projects/>}/>
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
