# Jammming

Jammming is a React app that lets users search for songs using the Spotify API, build custom playlists, and save them directly to their Spotify account.

---

## Features

- **Spotify Authentication (PKCE flow)**
- **Search for tracks, albums, or artists**
- **Add and remove tracks to/from a custom playlist**
- **Edit playlist name**
- **Save playlist to your Spotify account**

---

## Demo

> ![image](https://github.com/user-attachments/assets/f60f4375-4c48-4c74-b2a8-ff6d2ba35b48)


---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [ngrok](https://ngrok.com/) (for secure HTTPS tunneling during development)

---

### 1. Clone the Repository

```sh
git clone https://github.com/your-username/jammming.git
cd jammming
```

---

### 2. Register a Spotify App

1. Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications).
2. Click **"Create an App"**.
3. Add a **Redirect URI** (e.g., your ngrok HTTPS URL, see below).
4. Copy your **Client ID**.

---

### 3. Set Up Environment Variables

Create a `.env` file in the project root:

```
VITE_SPOTIFY_CLIENT_ID=your_spotify_client_id_here
VITE_SPOTIFY_REDIRECT_URI=https://your-ngrok-url.ngrok-free.app
```

**Note:**  
- The redirect URI must match exactly in both your `.env` file and the Spotify dashboard.
- Do **not** commit your `.env` file (it is in `.gitignore`).

---

### 4. Start ngrok for HTTPS (Development Only)

In a separate terminal, run:

```sh
ngrok http 5173
```

Copy the HTTPS forwarding URL and use it as your `VITE_SPOTIFY_REDIRECT_URI`.

---

### 5. Install Dependencies

```sh
npm install
# or
yarn install
```

---

### 6. Start the App

```sh
npm run dev
# or
yarn dev
```

Open your ngrok HTTPS URL in your browser.

---

## Usage

1. **Authenticate with Spotify** when prompted.
2. **Search** for tracks, albums, or artists.
3. **Add tracks** to your playlist.
4. **Edit the playlist name** if desired.
5. **Save to Spotify**—the playlist will appear in your Spotify account.

---

## Testing & Debugging

- Use the browser console and React Developer Tools for debugging.
- Test all features: search, add/remove tracks, edit playlist name, save playlist.
- Edge cases: empty playlist name, empty playlist, duplicate tracks, network errors.

---

## Project Structure

```
src/
  components/
    SearchBar.jsx
    SearchResults.jsx
    Playlist.jsx
    TrackList.jsx
  Spotify.js
  SpotifyAuth.js
  App.jsx
  ...
```

---

## Security

- The app uses the [PKCE OAuth flow](https://developer.spotify.com/documentation/web-api/tutorials/code-flow) for secure authentication.
- **Never share your client secret.** Only the client ID is used in this flow.
- Each user should register their own Spotify app and use their own credentials.

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## License

MIT

---

## Acknowledgments

- [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
- [ngrok](https://ngrok.com/)
- [Create React App](https://create-react-app.dev/) / [Vite](https://vitejs.dev/)

