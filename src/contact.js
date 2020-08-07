import React from 'react';
import instaIcon from './WilliamLiu/SVGs/Social Icons/instagram.svg';
import linkedlinIcon from './WilliamLiu/SVGs/Social Icons/linkedin.svg';
import githubIcon from './WilliamLiu/SVGs/Social Icons/github.svg';


const Contact = () => {
    return (
        <div className='contact-cont'>
            <div className='contact-word'>
                Contact
            </div>
            <div className='lets-connect'>
                Lets connect!
            </div>
            <div>
                <div className='email-me'>
                    <div>
                        Email Me: <a href='mailto:williamliu204@gmail.com'>Williamliu204@gmail.com</a>
                    </div>
                </div>
                <ul className='contact-area'>
                    <li>
                        <a href='https://www.instagram.com/will_liu12/'><img className='social-icons' src={instaIcon} alt='Instagram'></img></a>
                    </li>
                    <li>
                        <a href='https://github.com/williamliu12'><img className='social-icons' src={githubIcon} alt='Github'></img></a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/william-liu-8b068b156/'><img className='social-icons' src={linkedlinIcon} alt='Linkedlin'></img></a>
                    </li>
                   
                </ul>
            </div>
        </div>
    );
};

export default Contact;