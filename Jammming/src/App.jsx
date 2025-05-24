import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Playlist from './components/Playlist'
import './App.css'

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      name: "Song 1",
      artist: "Artist 1",
      album: "Album 1",
      uri: "spotify:track:1"
    },
    {
      id: 2,
      name: "Song 2",
      artist: "Artist 2",
      album: "Album 2",
      uri: "spotify:track:2"
    },
    {
      id: 3,
      name: "Song 3",
      artist: "Artist 3",
      album: "Album 3",
      uri: "spotify:track:3"
    }
  ]);

  const [playlistName, setPlayListName] = useState("");
  const handlePlaylistNameChange = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Update the playlist name when the user types in the input field
    setPlayListName(event.target.value);
  }

  const [playlistTracks, setPlaylistTracks] = useState([]);
  // handle adding a track to the playlist when the user clicks the + button
  const handlePlayTrackChange = (track) => {
    // Check if the track is already in the playlist
    const isTrackInPlaylist = playlistTracks.some(playlistTrack => playlistTrack.id === track.id);
    if (!isTrackInPlaylist) {
      setPlaylistTracks([...playlistTracks, track]);
    } else {
      alert("This track is already in your playlist!");
    }
  }
  // handle removing a track from the playlist when the user clicks the - button
  const handleRemoveTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id));
  }

  // handle saving the playlist to Spotify
  const handleSavePlaylist = () => {
    const trackURIs = playlistTracks.map(track => track.uri);
    // Call Spotify API to save the playlist with the given name and track URIs
    console.log(`Saving playlist "${playlistName}" with tracks: ${trackURIs}`);
    setPlayListName("");
    setPlaylistTracks([]);
    alert(`Playlist "${playlistName}" saved successfully!`);
  }


  return (
    <>
      <header className="app-header">
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White.png" alt="Spotify Logo" style={{ width: '175px', height: '50px' }} />
        <h1 style={{ fontSize: '1.5em', margin: '0', padding: '15' }}>Jammming</h1>
        <p style={{ fontSize: '1.2em', margin: '0' }}>Search for your favorite songs and add them to your playlist!</p>
      </header>

      <div style={{paddingTop: '100px'}}>
        <SearchBar />
        <div className="container-main">
          <SearchResults 
          tracks={searchResults} 
          onAddToPlaylist={handlePlayTrackChange}
          />

          <Playlist 
          playlistName={playlistName} 
          playlistTracks={playlistTracks}
          handlePlaylistNameChange={handlePlaylistNameChange}
          handleRemoveTrack={handleRemoveTrack}
          handleSavePlaylist={handleSavePlaylist}
          />
        </div>
      </div>
    </>
  )
}

export default App
