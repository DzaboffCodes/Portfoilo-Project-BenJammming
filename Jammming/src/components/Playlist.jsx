import React, { useState } from "react";
import TrackList from "./Tracklist";
import '../App.css'

function Playlist({ playlistName, playlistTracks, handlePlaylistNameChange, handleRemoveTrack,handleSavePlaylist }) {
    const [editing, setEditing] = useState(false);

    return (
        <form className="form-style">
            <div>
                {editing ? (
                    <input
                        type='text'
                        className="input-style"
                        value={playlistName}
                        onChange={handlePlaylistNameChange}
                        onBlur={() => setEditing(false)}
                        autoFocus
                    />
                ) : (
                    <h2 onClick={() => setEditing(true)}>
                        {playlistName || "Create Your Playlist"}
                    </h2>
                )}
            </div>
            <div>
                <TrackList
                    tracks={playlistTracks}
                    onRemoveFromPlaylist={handleRemoveTrack}
                    isInPlaylist={true}
                />
            </div>
            <button type='submit' className="button-style" onClick={handleSavePlaylist}>SAVE TO SPOTIFY</button>
        </form>
    );
}

export default Playlist;
