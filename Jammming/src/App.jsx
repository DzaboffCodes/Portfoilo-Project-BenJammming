import { useState } from 'react'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Playlist from './components/Playlist'
import './App.css'

function App() {


  return (
    <>
    <h1>Hello World</h1>
    <SearchBar />
    <SearchResults />
    <Playlist />
    </>
  )
}

export default App
