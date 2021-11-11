import React from 'react';
import './CardPequeno2.css'

function CardPequeno2(props) {
    return (
        <div className="minicard2-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.texto }</h4>
                
            </div>
            
        </div>

    )
}

export default CardPequeno2;