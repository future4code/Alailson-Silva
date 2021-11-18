import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="minicard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.texto }</h4>
                
            </div>
            
        </div>

    )
}

export default CardPequeno;