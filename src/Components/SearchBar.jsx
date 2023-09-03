import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
 import { Link } from "react-router-dom";

const SearchBar = ({ URL }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
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

    fetchVideos();

  }, [searchQuery, URL]);
  const inputSearch = (e) => {
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
    if (video) {
      alert(`Clicked on video: ${video.snippet.title}`);
    }
  };

// const onSubmit = 

  return (
    <div className="search"> 
    <form className="d-flex" style={{paddingTop:"60px"}}>
      <input 
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search"
        id="searchInput"
        className="form-control me-2"

      />
       <button  type="submit" className="btn btn-primary">
        Search
      </button>

    </form>

      <div className="video-list row row-cols-1 row-cols-md-2 g-4">
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
