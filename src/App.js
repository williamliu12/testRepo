import React from 'react';
import './App.css';
import MainScreen from './MainScreen';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
    <MainScreen/>
    <AboutMe/>
    <Skills/>
    <Projects/>
    </div>
  );
};

export default App;
