import React from 'react'; 
import './PortfolioItem.css'; 

function PortfolioItem(props) {

    let title = props.title; 
    let content = props.content; 


    return (
        <div className = 'portfolio-item'>
            <h3 id = {props.id}>{title}</h3>
            <article className = "background-section">
                {content}
            </article>
        </div>
    );
}

export default PortfolioItem; 