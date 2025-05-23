import React, {useState} from "react";
import '../App.css'

function Playlist({songInfo}) {

    return (
        <div>
            <h2>Create Your Playlist</h2>
            <form className="form-style">
                <input type='text' placeholder='Title of Playlist' className="input-style" />
                <button type='submit' className="button-style"> SAVE TO SPOTIFY </button>
            </form>
        </div>
    )
};

export default Playlist;
