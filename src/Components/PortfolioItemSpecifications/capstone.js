import React from 'react';
import capstoneEvaluation from '../../Assets/projectEvaluation.pdf'; 

//TO-DO: add capstone evaluation document when finished with interview; insert YouTube video source of demo when uploaded. 
let capstone = (
    <div id = "capstone-project">
        <section className = "flex-parent">
            <div className = "flex-child">
                <h4>CS Capstone Evaluation</h4>
                <object data = {capstoneEvaluation} type = 'application/pdf' aria-label = 'cs capstone evaluation doc'/>
            </div>
            <div className = "flex-child learning-showcase">
                <h4>Final Project Video Demo</h4>
                <figure>
                    <iframe className = "video" src = "https://youtu.be/-2BYCkKAeQI" title = "showcase thing" />
                    <figcaption>https://youtu.be/-2BYCkKAeQI</figcaption>
                </figure>
            </div>
        </section>
    </div>
);

export default capstone; 