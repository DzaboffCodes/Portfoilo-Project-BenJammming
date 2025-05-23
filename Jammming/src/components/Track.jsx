import React, {useState} from "react";

function Track({ name, artist, album, onAddToPlaylist }) {

    return (
        <div>
            <h3>{name}</h3>
            <p>{artist}</p>
            <p>{album}</p>
            <button onClick={onAddToPlaylist}>+</button>
        </div>
    )
};

export default Track;