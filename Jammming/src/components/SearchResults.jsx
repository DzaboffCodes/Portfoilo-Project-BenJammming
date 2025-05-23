import React, {useState} from "react";
import TrackList from "./Tracklist";

function SearchResults({songInfo}) {
    
    return (
        <div>
            <h2>Results</h2>
            <TrackList tracks={songInfo} />
        </div>
    )
};

export default SearchResults;
