import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

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

  const onVideoClick = (videoId) => {
    const video = videos.find((video) => video.id.videoId === videoId);
  };

// const onSubmit = 

  return (
    <div className="search"> 
    <form className="d-flex" style={{paddingTop:"60px", paddingBottom:"30px"}}>
      <input 
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search"
        id="searchInput"
        className="form-control me-2"

      />
       <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>

    </form>

      <div className="video-list">
        {videos.map((video) => (
          <Link to={`/video/${video.id.videoId}`}>
            <VideoCard key={video.id.videoId} video={video} onVideoClick={onVideoClick} />
          </Link>
        ))}
      </div>

    </div>
  );
};

export default SearchBar;
