import React from 'react';
import './App.css';
import './Media.css';
import MainScreen from './MainScreen';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
    <MainScreen/>
    <AboutMe/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  );
};

export default App;
