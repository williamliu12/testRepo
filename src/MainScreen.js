import React from 'react';
import logoW from './WilliamLiu/SVGs/WL Logo/WL-rounded-colored.svg'
import williamLiu from './WilliamLiu/SVGs/WilliamLiu.svg';
import bigLogo from './WilliamLiu/SVGs/WL-Bkg.svg'

const MainScreen = () => {
  return (
    <div>
      <div className='split-background'></div>
      <div className='big-logo-div'>
        <img className='big-logo' src={bigLogo} alt='bigLogo'></img>
      </div>
      <nav>
        <ul className='nav-bar'>
          <li className='logo'>
            <img src={logoW} alt='logo'></img>
          </li>
          <li>
            <button className='contact-btn'>Contact</button>
          </li>
        </ul>
      </nav>
      <div className='name-div'>
        <img className='main-name' src={williamLiu} alt='WilliamLiu'></img>
      </div>
      <div className='name-desc'>
        I am a developer based out of Arizona
          </div>
    </div>
  );
};

export default MainScreen;