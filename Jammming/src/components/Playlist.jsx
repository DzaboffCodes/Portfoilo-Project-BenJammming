import React, {useState} from "react";
import '../App.css'

function Playlist({playlistName, playlistTracks, handlePlaylistNameChange, handlePlayTrackChange}) {

    return (
        <div>
            <h2>Create Your Playlist</h2>
            <form className="form-style">
                <input 
                type='text' 
                placeholder='Title of Playlist' 
                className="input-style" 
                value={playlistName} 
                onChange={handlePlaylistNameChange}
                />
                {/* Display Playlist Tracks */}
                <div>
                    {playlistTracks.map((track) => (
                        <p key={track.id}>{track.name} - {track.artist}</p>
                    ))}
                </div>
                <button type='submit' className="button-style"> SAVE TO SPOTIFY </button>
            </form>
        </div>
    )
};

export default Playlist;
