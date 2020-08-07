import React from 'react';
import willPic from './images/IMG_6705.PNG'

const AboutMe = () => {
    return (
        <div className='about-me-cont'>
            <div>
                <img className='about-me-pic' src={willPic} alt='willPic'></img>
                <div className='about-me-area'>
                    <div id='about-me-word'>
                        About Me
                    </div>
                    <div id = 'about-me-desc'>
                    <p>
                    Hi there, I'm Will.
                    </p>
                    <p>
                    I am a web developer and I am passionate in improving myself and in helping others through my work.
                    </p>
                    <p>
                    I started coding about two years ago after starting university in Arizona. I am determined to learn something new every single day and I am always opened to new opportunites to improve and create. My hobbies include coding, video editing, dancing and skateboarding. Always intrigued by what others are going through and what they have build/created in their live times.
                    </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutMe;