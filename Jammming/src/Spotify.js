// This module handles interactions with the Spotify API, including searching for tracks, managing playlists, and saving them.
import { getAccessToken } from './SpotifyAuth';

// Search Spotify for tracks matching the searchTerm
export async function searchTracks(searchTerm) {
  const token = getAccessToken();
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