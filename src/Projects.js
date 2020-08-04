import React from 'react';
import moodAppPic from './images/MoodAppPic.png';


const Projects = () => {
    return (
        <div className='projects-cont'>
            <div className='projects-word'>
                Projects
            </div>
            <div>
                <ul className='projects-links'>
                    <li>
                        <div class='mood-link-word'><a class='mood-link' href='https://williamliu12.github.io/Mood-App/' target='_blank' rel="noopener noreferrer">Mood App</a></div>
                        <a class='mood-link' href='https://williamliu12.github.io/Mood-App/' target='_blank' rel="noopener noreferrer"><img className='mood-pic' src={moodAppPic} alt='MoodApp' /></a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Projects;