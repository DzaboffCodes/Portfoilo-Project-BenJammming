import React, {useState} from "react";

function Playlist({songInfo}) {

        const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        margin: '30px 0'
    };

    const inputStyle = {
        padding: '10px',
        width: '250px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '1em'
    };

    const buttonStyle = {
        padding: '10px 20px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#1db954',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '1em',
        cursor: 'pointer'
    };

    return (
        <div>
            <h2>Create Your Playlist</h2>
            <form style={formStyle}>
                <input type='text' placeholder='Title of Playlist' style={inputStyle} />
                <button type='submit' style={buttonStyle}>SAVE TO SPOTIFY</button>
            </form>
        </div>
    )
};

export default Playlist;
