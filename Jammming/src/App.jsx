import { useState } from 'react'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Playlist from './components/Playlist'
import './App.css'

function App() {

  const mockTracks = [
    {
      id: 1,
      name: "Song 1",
      artist: "Artist 1",
      album: "Album 1"
    },
    {
      id: 2,
      name: "Song 2",
      artist: "Artist 2",
      album: "Album 2"
    },
    {
      id: 3,
      name: "Song 3",
      artist: "Artist 3",
      album: "Album 3"
    }
  ];

  const headerStyle = {
    width: '100%',
    backgroundColor: '#222',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000
  }

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row', // or 'column' for vertical
    gap: '200px',
    justifyContent: 'center',
    alignItems: 'flex-start'
  };

  return (
    <>
      <header style={headerStyle}>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White.png" alt="Spotify Logo" style={{ width: '175px', height: '50px' }} />
        <h1 style={{ fontSize: '1.5em', margin: '0', padding: '15' }}>Jammming</h1>
        <p style={{ fontSize: '1.2em', margin: '0' }}>Search for your favorite songs and add them to your playlist!</p>
      </header>

      <SearchBar />
      <div style={containerStyle}>
        <SearchResults tracks={mockTracks} />
        <Playlist />
      </div>
    </>
  )
}

export default App
