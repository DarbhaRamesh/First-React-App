import React from 'react';

const Card = ({id, name, email}) => {
    return (
        <div className= 'dib tc bg-light-green br3 pa3 ma2 grow dark-green'>
            <img className="ba b--dark-green bw2 b--dotted" alt = 'Robo' src = {`https://robohash.org/${id}?200*200`}/> 
            <div >
                <h2> {name}</h2>
                <p> {email} </p>
            </div>
        </div>
    )
}

export default Card