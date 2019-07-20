import React from 'react';
import {Counter} from './Counter';

export const Player = ({name, score, removePlayer, id, changeScore}) => {
    return (
        <div className="player">
			<span className="player-name">
				<button className="remove-player" onClick={() => removePlayer(id)}>x</button>
                {name}
			</span>
            <Counter score={score} changeScore={changeScore} id={id}/>
        </div>
    );
}