// This module handles interactions with the Spotify API, including searching for tracks, managing playlists, and saving them.
import { getAccessToken } from './SpotifyAuth';

// Search Spotify for tracks matching the searchTerm
export async function searchTracks(searchTerm) {
  const token = getAccessToken();
  console.log("Spotify Access Token:", token);
  if (!token) {
    throw new Error('No valid Spotify access token.');
  }

  const endpoint = `https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(searchTerm)}`;
  const response = await fetch(endpoint, {
    headers: { Authorization: `Bearer ${token}` }
  });

  const data = await response.json();

  // Convert the response to an array of { id, name, artist, album, uri }
  return (data.tracks?.items || []).map(track => ({
    id: track.id,
    name: track.name,
    artist: track.artists[0]?.name || '',
    album: track.album?.name || '',
    uri: track.uri
  }));
}

// Get the User's Spotify ID
export async function getCurrentUserId() {
    const token = getAccessToken();
    console.log("Spotify Access Token:", token);
    if (!token) {
        throw new Error('No valid Spotify access token.');
    }
    
    const response = await fetch('https://api.spotify.com/v1/me', {
        headers: { Authorization: `Bearer ${token}` }
    });
    
    const data = await response.json();
    return data.id;
}

// Create a new playlist for the user
export async function createPlaylist(userId, playlistName) {
    const token = getAccessToken();
    console.log("Spotify Access Token:", token);
    if (!token) {
        throw new Error('No valid Spotify access token.');
    }

    const endpoint = `https://api.spotify.com/v1/users/${userId}/playlists`;
    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: playlistName, desrciption:'Created with Jammming', public: false })
    });

    if (!response.ok) {
        throw new Error('Failed to create playlist');
    }

    const data = await response.json();
    return data.id; // Return the new playlist ID
}

// Add Tracks to the New User's Playlist
export async function addTracksToPlaylist(playlistId, trackURIs) {
    const token = getAccessToken();
    console.log("Spotify Access Token:", token);
    if (!token) {
        throw new Error('No valid Spotify access token.');
    }

    const endpoint = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ uris: trackURIs })
    });

    if (!response.ok) {
        throw new Error('Failed to add tracks to playlist');
    }

    return response.json(); // Return the response data
}