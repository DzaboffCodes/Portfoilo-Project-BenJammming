import React, {useState} from "react";
import Track from "./Track";

function TrackList({ tracks, onAddToPlaylist }) {
  return (
    <div>
      {tracks.map(track => (
        <Track
          key={track.id}
          name={track.name}
          artist={track.artist}
          album={track.album}
          onAddToPlaylist={() => onAddToPlaylist(track)}
        />
      ))}
    </div>
  );
}

export default TrackList;