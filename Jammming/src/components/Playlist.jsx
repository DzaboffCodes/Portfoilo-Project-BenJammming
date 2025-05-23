import React, {useState} from "react";
import TrackList from "./Tracklist";
import '../App.css'

function Playlist({playlistName, playlistTracks, handlePlaylistNameChange, handleRemoveTrack}) {

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
                    <TrackList 
                    tracks={playlistTracks} 
                    onRemoveFromPlaylist={handleRemoveTrack} 
                    isInPlaylist={true}
                    />
                </div>
                <button type='submit' className="button-style"> SAVE TO SPOTIFY </button>
            </form>
        </div>
    )
};

export default Playlist;
