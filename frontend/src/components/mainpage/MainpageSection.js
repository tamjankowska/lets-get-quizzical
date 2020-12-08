import React from 'react';
import './MainpageSection.css';


function MainpageSection(props) { 
    return (
        <div className="M-section-container">
            {/* <img class="M-section" id="m-section-image" src={props.photo} /> */}
            <h2 className="M-section" id="M-section-h">{props.heading}</h2>
            <p className="M-section" id="M-section-p">{props.text}</p>
            <button className="M-section" id="M-section-button">{props.button}</button>
        </div>
    )
}

export default MainpageSection;