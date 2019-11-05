import React from 'react';
import "./style.css"

function TeamImage(props) {
    return (
        <div className="card mx-auto d-block" onClick={() => props.click(props.id)}>
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    );
}

export default TeamImage;