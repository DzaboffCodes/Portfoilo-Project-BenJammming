import { useState } from 'react'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Playlist from './components/Playlist'
import './App.css'

function App() {

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

  return (
    <>
      <header style={headerStyle}>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White.png" alt="Spotify Logo" style={{ width: '175px', height: '50px' }} />
        <h1 style={{ fontSize: '1.5em', margin: '0', padding: '15' }}>Jammming</h1>
        <p style={{ fontSize: '1.2em', margin: '0' }}>Search for your favorite songs and add them to your playlist!</p>
      </header>


      <SearchBar />
      <SearchResults />
      <Playlist />
    </>
  )
}

export default App
