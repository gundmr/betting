import React from 'react';

function BracketCard(props){

            return (
                <div className="card" onClick={() => props.click(props.id)}>
                    <div className="img-container">
                        <img alt={props.name} src={props.image} />
                        vs
                        <img alt={props.name} src={props.image} />
                    </div>
                </div>
            );
}

export default BracketCard;

