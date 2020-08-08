import React from 'react';
import htmlIcon from './WilliamLiu/SVGs/Programming Icons/html-icon.svg';
import jsIcon from './WilliamLiu/SVGs/Programming Icons/js-icon.svg';
import cssIcon from './WilliamLiu/SVGs/Programming Icons/css-icon.svg';
import cppIcon from './WilliamLiu/SVGs/Programming Icons/cpp-icon.svg';
import javaIcon from './WilliamLiu/SVGs/Programming Icons/java-icon.svg';
import reactIcon from './WilliamLiu/SVGs/Programming Icons/react.svg';

const Skills = () => {
    return (
        <div className='skills-cont'>
            <div className='skills-word'>
                Skills
            </div>
            <div className='skills-area'>
                <div>
                    <ul className='skills-icon-first'>
                        <li><img src={htmlIcon} alt='HtmlIcon'></img><div>HTML</div></li>
                        <li><img src={jsIcon} alt='JsIcon'></img><div className='js-word'>Javascript</div></li>
                        <li><img src={cssIcon} alt='CssIcon'></img><div>CSS</div></li>

                    </ul>

                </div>
                <div>
                    <ul className='skills-icon-second'>
                        <li><img src={javaIcon} alt='JavaIcon'></img><div>Java</div></li>
                        <li><img src={reactIcon} alt='ReactIcon'></img><div>React</div></li>
                        <li><img src={cppIcon} alt='CppIcon'></img><div>C/C++</div></li>
                        
                    </ul>

                </div>
            </div>

        </div>
    );
}

export default Skills;