import React, {useState} from "react";
import TrackList from "./Tracklist";

function SearchResults({tracks}) {
    
    return (
        <div>
            <h2>Results</h2>
            <TrackList tracks={tracks}/>
        </div>
    )
};

export default SearchResults;
