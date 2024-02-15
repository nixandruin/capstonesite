import React from 'react';
import capstonePlanning from '../../Assets/capstonePlanning.pdf';

let february = (
    <div id = "february">
        <h4>CS Capstone Planning Document</h4>
        <figure className = "flex-child">
                <object data = {capstonePlanning} type = 'application/pdf' aria-label = 'cs capstone planning doc'/>
        </figure>
    </div>
);

export default february; 