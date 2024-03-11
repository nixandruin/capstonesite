import React from 'react';
import capstoneDesign from '../../Assets/projectDesign.pdf';

let march = (
    <div id = "march">
        <div className = 'flex-parent'>
            <div clasName = "flex-child">
                <h4>CS Capstone Design Documentt</h4>
                <figure className>
                    <object data = {capstoneDesign} type = 'application/pdf' aria-label = 'cs capstone planning doc'/>
                </figure>
            </div>
            <div className = "flex-child">
                <h4>Project Design</h4>
                <p>
                    This month focused on project design. I created a data table to keep track of the custom classes I will need to create. 
                    This will be a huge help when it comes to actually start coding. I also pseudocoded some algorithms that will act upon that data, 
                    sketched out some rudimentary "screen shots" of different game menus and overlays, and created a flowchart detailing how navigation between screens will work. 
                    Finally I created a task list and plan to keep me on track throughout the next two months with my work. 
                </p>
            </div>
        </div>
    </div>
);

export default march; 