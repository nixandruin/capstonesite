import React from 'react';
import capstonePlanning from '../../Assets/capstonePlanning.pdf';

let february = (
    <div id = "february">
        <div className = 'flex-parent'>
            <div clasName = "flex-child">
                <h4>CS Capstone Planning Document</h4>
                <figure className>
                    <object data = {capstonePlanning} type = 'application/pdf' aria-label = 'cs capstone planning doc'/>
                </figure>
            </div>
            <div className = "flex-child">
                <h4>Other Planning Actions:</h4>
                <p>I created an empty 2D template project in Unity and synched it with the cloud and version control so that when I start development that's already done, installed the .NET development package and Mono on my computer so that I could have Unity autocomplete in Visual Studio Code. This is a beautiful thing. 
                    I updated Node and npm (the JavaScript packages running this site), as they were several versions behind, which fixed some security vulnerabilites. 
                    Finally, I cleaned up my repository a bit so that my commit process for this site is smoother. 
                </p>
            </div>
        </div>
    </div>
);

export default february; 