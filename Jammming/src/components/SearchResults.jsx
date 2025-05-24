import React from "react";
import TrackList from "./Tracklist";

function SearchResults({ tracks, onAddToPlaylist }) {
    
    return (
        <div>
            <h2>Results</h2>
            <TrackList tracks={tracks} onAddToPlaylist={onAddToPlaylist} isInPlaylist={false}/>
        </div>
    )
};

export default SearchResults;
