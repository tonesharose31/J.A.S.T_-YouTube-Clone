import React, { useState } from "react";
import VideoCard from "./VideoCard";

const SearchBar = ({URL}) => {

  const [searchQuery, setSearchQuery] = useState("");
  const [videos, setVideos] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${searchQuery}&maxResults=8&key=${URL}`
      );
      const data = await response.json();
      console.log(data)
      setVideos(data.items);
      console.log(data.items)
    } catch (error) {
        console.error(`Error fetchig search results:`, error);
    }
  };

  const onVideoClick = (videoId) => {
    const video = videos.find((video) => video.id.videoId === videoId)

  }

  return (
    <form>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search"
      />
      <button onClick={handleSearch}>Search</button>
      <div className="video-list">
        {videos.map((video) => (
          <VideoCard key={video.id.videoId} video={video} onVideoClick={onVideoClick} />
        ))}
      </div>
    </form>
  );
};

export default SearchBar;