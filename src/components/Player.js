import React from 'react';
import {Counter} from './Counter';

// export const Player = ({name, score, removePlayer, id, changeScore}) => {
//     console.log(name,'rendered');
//     return (
//         <div className="player">
// 			<span className="player-name">
// 				<button className="remove-player" onClick={() => removePlayer(id)}>x</button>
//                 {name}
// 			</span>
//             <Counter score={score} changeScore={changeScore} id={id}/>
//         </div>
//     );
//
// }

export class Player extends React.PureComponent{
    render() {
        const {name, score, removePlayer, id, changeScore} = this.props;

        console.log(name,'rendered');

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
}