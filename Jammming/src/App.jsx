import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Playlist from './components/Playlist'
import { getCurrentUserId, createPlaylist, addTracksToPlaylist } from './Spotify'
import './App.css'

import { ensureSpotifyAuth } from './SpotifyAuth'
import { getAccessToken } from './SpotifyAuth'

import { searchTracks } from './Spotify'


function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchTerm) => {
    try {
      const tracks = await searchTracks(searchTerm);
      setSearchResults(tracks); // This updates the searchResults state
    } catch (e) {
      console.error('Spotify search failed:', e);
    }
  };

  useEffect(() => {
    // Ensure Spotify authentication is set up when the app loads
    ensureSpotifyAuth().then(() => {
      const token = getAccessToken();
      console.log("Spotify Access Token:", token);
    });
  }, []);

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
  const handleSavePlaylist = async () => {
    try {
      if(!playlistName || playlistName.trim() === "") {
        alert("Please enter a valid playlist name before saving.");
        return;
      }
      if (playlistTracks.length === 0) {
        alert("Your playlist is empty. Please add tracks before saving.");
        return;
      }
      const userId = await getCurrentUserId();
      const trackUris = playlistTracks.map(track => track.uri);
      const playlistId = await createPlaylist(userId, playlistName);
      if (!playlistId) {
        throw new Error('Playlist Id is undefined');
      }
      await addTracksToPlaylist(playlistId, trackUris);
      alert(`Playlist "${playlistName}" saved successfully!`);
      setPlaylistTracks([]); // Clear the playlist after saving
      setPlayListName(""); // Reset the playlist name
      alert(`Playlist "${playlistName}" saved successfully!`);
    } catch (error) {
      console.error('Error saving playlist:', error);
      alert('Failed to save playlist. Please try again.');
    }
  }


  return (
    <>
      <header className="app-header">
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White.png" alt="Spotify Logo" style={{ width: '175px', height: '50px' }} />
        <h1 style={{ fontSize: '1.5em', margin: '0', padding: '15' }}>Jammming</h1>
        <p style={{ fontSize: '1.2em', margin: '0' }}>Search for your favorite songs and add them to your playlist!</p>
      </header>

      <div style={{paddingTop: '100px'}}>
        <SearchBar onSearch={handleSearch}/>

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
