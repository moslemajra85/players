import React from 'react'

const PlayerList = ({ players }) => {
    return (
        <div className="player-list">
            {players.map((player) => (
         <div        className="player-card" key={player.id}>
                    <img
                        src={player.pic}
                        alt={player.name}
                        className="player-pic"
                    />
                    <div className="player-info">
                        <h3 className="player-name">{player.name}</h3>
                        <p className="player-age">Age: {player.age}</p>
                        <p className="player-team">{player.team}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PlayerList