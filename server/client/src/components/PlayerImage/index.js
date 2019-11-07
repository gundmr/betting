import React from 'react';
import "./style.css"

function PlayerImage(props) {
    return (
        <div className="card mx-auto d-block">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    );
}

export default PlayerImage;