import React, {useState} from "react";

function Track({ name, artist, album }) {

    return (
        <div>
            <h3>{name}</h3>
            <p>{artist}</p>
            <p>{album}</p>
            <button>+</button>
        </div>
    )
};

export default Track;