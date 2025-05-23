import React, {useState} from "react";
import Track from "./Track";

function TrackList({ tracks, onAddToPlaylist, onRemoveFromPlaylist, isInPlaylist }) {
  return (
    <div>
        {tracks.map(track => (
        <Track
            key={track.id}
            name={track.name}
            artist={track.artist}
            album={track.album}
            onAddToPlaylist={onAddToPlaylist ? () => onAddToPlaylist(track) : undefined}
            onRemoveFromPlaylist={onRemoveFromPlaylist ? () => onRemoveFromPlaylist(track) : undefined}
            isInPlaylist={isInPlaylist}
        />
        ))}
    </div>
  );
}

export default TrackList;