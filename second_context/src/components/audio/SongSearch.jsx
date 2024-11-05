import React, { useState } from 'react';
import axios from 'axios';

const SongSearch = () => {
  const [query, setQuery] = useState('');
  const [songs, setSongs] = useState([]);

  const searchSongs = async () => {
    try {
      const response = await axios.get(`https://itunes.apple.com/search?term=${query}&media=music`);
      console.log(response);
      
      setSongs(response.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Song Search App</h1>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for a song..." 
      />
      <button onClick={searchSongs}>Search</button>

      <div>
        {songs.map((song) => (
          <div key={song.trackId}>
            <h3>{song.trackName} by {song.artistName}</h3>
            <img src={song.artworkUrl100} alt={song.trackName} />
            <audio controls>
              <source src={song.previewUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongSearch;
