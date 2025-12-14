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
                    <p>This is my old high school website! It hosts many of the projects I worked on my senior year. Now I'm a college student at Rochester Institute of Technology. A lot of the stuff on this website is a bit dated now, so if you're interested in the more recent stuff I've been up to visit my <a href = "www.linkedin.com/in/caroline-p-richards">LinkedIn</a> or my <a href = "https://github.com/nixandruin">GitHub</a>.</p>
                    <h4>(Highschool) Extracirriculars</h4>
                    <ul>
                        <li>LB Varisity Rifle (Co-Captain)</li>
                        <li>Latin Club and Certamen (Consul)</li>
                        <li>CyberPatriot (Co-Founder)</li>
                    </ul>
                    <h4> (Highschool) Work Experience</h4>
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