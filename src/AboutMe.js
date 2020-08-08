import React from 'react';
import willPic from './images/IMG_6705.PNG'

const AboutMe = () => {
    return (
        <div className='about-me-cont'>
            <div className='about-me-resp'>
                <img className='about-me-pic' src={willPic} alt='willPic'></img>
                <div className='about-me-area'>
                    <div id='about-me-word'>
                        About Me
                    </div>
                    <div id='about-me-desc'>
                        <p>
                            Hi there, I'm Will.
                    </p>
                        <p>
                            I am a web developer from Arizona and I am passionate in improving myself and in helping others through my work.
                    </p>
                        <p>
                            I started coding about three years ago after starting university in Arizona. I am determined to learn something new every single day and I am always opened to new opportunites to improve and create. My hobbies include coding, video editing, traveling, skateboarding and dancing.
                            If you would like to reach me, my email and my socials are in the contact section on the bottom of the page. I would love to discuss new projects and ideas! Or send me anything (*cough* memes), that's cool too.
                    </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutMe;