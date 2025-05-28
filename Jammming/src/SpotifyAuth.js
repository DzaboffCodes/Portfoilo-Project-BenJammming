// Generate the code verifier and code challenge for PKCE
// Redirect the user to Spotify's authorization page
// Extract the authorization code from the URL after redirection


const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID
const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
const scope = 'user-read-private user-read-email playlist-modify-private playlist-modify-public playlist-read-collaborative user-library-read user-library-modify user-top-read user-follow-read user-follow-modify streaming app-remote-control user-read-playback-state user-modify-playback-state user-read-currently-playing';

function generateRandomString(length) {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const values = crypto.getRandomValues(new Uint8Array(length));
  return Array.from(values).map(x => possible[x % possible.length]).join('');
}

async function sha256(plain) {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return window.crypto.subtle.digest('SHA-256', data);
}

function base64encode(input) {
  return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

// Exported function to start the auth flow if needed
export async function ensureSpotifyAuth() {
  // Check if we already have a valid access token
  const accessToken = localStorage.getItem('access_token');
  const expiresAt = localStorage.getItem('expires_at');
  if (accessToken && expiresAt && Date.now() < Number(expiresAt)) {
    return accessToken;
  }

  // Check if we have a code in the URL
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
  if (!code) {
    // No code, start the auth flow
    const codeVerifier = generateRandomString(64);
    localStorage.setItem('code_verifier', codeVerifier);

    const hashed = await sha256(codeVerifier);
    const codeChallenge = base64encode(hashed);

    const params = new URLSearchParams({
      response_type: 'code',
      client_id: clientId,
      scope,
      code_challenge_method: 'S256',
      code_challenge: codeChallenge,
      redirect_uri: redirectUri,
    });

    window.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
    return null; // The page will redirect
  } else {
    // We have a code, exchange it for a token
    try {
      const codeVerifier = localStorage.getItem('code_verifier');
      const payload = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          client_id: clientId,
          grant_type: 'authorization_code',
          code,
          redirect_uri: redirectUri,
          code_verifier: codeVerifier,
        }),
      };

      const response = await fetch('https://accounts.spotify.com/api/token', payload);
      const data = await response.json();

      if (data.access_token) {
        localStorage.setItem('access_token', data.access_token);
        // Set expiry time (in ms)
        const expiresAt = Date.now() + Number(data.expires_in) * 1000;
        localStorage.setItem('expires_at', expiresAt.toString());

        // Clear code from URL
        window.history.replaceState({}, document.title, window.location.pathname);

        return data.access_token;
      } else {
        throw new Error(data.error || 'Failed to get access token');
      }
    } catch (e) {
      console.error('Spotify Auth Error:', e);
      return null;
    }
  }
}

// Export a function to get the current access token (if valid)
export function getAccessToken() {
  const accessToken = localStorage.getItem('access_token');
  const expiresAt = localStorage.getItem('expires_at');
  if (accessToken && expiresAt && Date.now() < Number(expiresAt)) {
    return accessToken;
  }
  return null;
}
