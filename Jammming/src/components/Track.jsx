import React, {useState} from "react";

function Track({ name, artist, album, onAddToPlaylist, onRemoveFromPlaylist, isInPlaylist }) {

    return (
        <div>
            <h3>{name}</h3>
            <p>{artist}</p>
            <p>{album}</p>
            {isInPlaylist ? (
                <button onClick={onRemoveFromPlaylist}>-</button>
            ) : (
                <button onClick={onAddToPlaylist}>+</button>
            )}
            {/* If the track is in the playlist, show a - button, otherwise show a + button */}
        </div>
    )
};

export default Track;