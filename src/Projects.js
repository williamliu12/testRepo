import React from 'react';
import RecipeAppPic from './images/RecipeAppPic.png';
import moodAppPic from './images/MoodAppPic.png';


const Projects = () => {
    return (
        <div className='projects-cont'>
            <div className='projects-word'>
                Projects
            </div>
            <div>
                <ul className='projects-links'>
                    <li id = 'recipe-app-link'>
                        <div className = 'apps-link-word'><a className='apps-link' href='https://williamliu12.github.io/Recipe-Search-App/' target='_blank' rel="noopener noreferrer">Recipe Search App</a></div>
                        <a className='apps-link' href='https://williamliu12.github.io/Recipe-Search-App/' target='_blank' rel="noopener noreferrer"><img className='apps-pic' src={RecipeAppPic} alt='Recipe App' /></a>
                    </li>
                    <li>
                        <div className='apps-link-word'><a className='apps-link' href='https://williamliu12.github.io/Mood-App/' target='_blank' rel="noopener noreferrer">Mood App</a></div>
                        <a className='apps-link' href='https://williamliu12.github.io/Mood-App/' target='_blank' rel="noopener noreferrer"><img className='apps-pic' src={moodAppPic} alt='Mood App' /></a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Projects;