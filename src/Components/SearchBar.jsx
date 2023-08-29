import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";

const SearchBar = ({ URL }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchInitialVids = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${searchQuery}&maxResults=8&key=${URL}`
        );
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.error(`Error fetching initial search results:`, error);
      }
    };

    fetchInitialVids();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${searchQuery}&maxResults=8&key=${URL}`
      );
      const data = await response.json();
      setVideos(data.items);
    } catch (error) {
      console.error(`Error fetching search results:`, error);
    }
  };

  return (
    <form>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search"
        id="searchInput"
      />
      <button onClick={handleSearch}>Search</button>
      <div className="video-list">
        {videos.map((video) => (
          <VideoCard key={video.id.videoId} video={video} />
        ))}
      </div>
    </form>
  );
};

export default SearchBar;
