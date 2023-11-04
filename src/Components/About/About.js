import React from 'react';
import './About.css';

import picOfMe from '../../Assets/newyorkme.jpg';
import piper from '../../Assets/piper.jpg';

function About() {
    return (
        <section id = 'about'>
            <h2>About Me</h2>

            <div className = 'flex-parent'>
                <img src = {picOfMe} className = 'flex-child' alt = ""/>
                <img src = {piper} className = 'flex-child' alt = ""/>
                <div className = 'flex-child'>
                    <h3>Hi</h3>
                    <p>Hey! My name is Caroline Richards. I'm a 17 year old student passionate about books, nature, and computers. Originally I wanted to be a writer but then was accidentally placed in a coding class and discovered coding and hacking too. Now I do some of both, and compete in CTFs and design games outside of school.</p>
                    <h4>Extracirriculars</h4>
                    <ul>
                        <li>LB Varisity Rifle (Co-Captain)</li>
                        <li>Latin Club and Certamen (Consul)</li>
                        <li>CyberPatriot (Co-Founder)</li>
                    </ul>
                    <h4>Work Experience</h4>
                    <ul>
                        <li>NOVA Children's Science Center Spring Inter (spring 2023)</li>
                        <li>Camp Seafarer Archery CILT (summer 2023)</li>
                    </ul>
                    <h4>Hobbies</h4>
                    <ul>
                        <li>Hiking</li>
                        <li>Learning languages</li>
                        <li>Violin</li>
                        <li>Reading</li>
                    </ul>
                </div>
            </div>

        </section>
    );
}

export default About; 