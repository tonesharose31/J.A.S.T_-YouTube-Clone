import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const SearchBar = ({ URL }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [videos, setVideos] = useState([]);
  const [isEmptySearch, setIsEmptySearch] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${searchQuery}&maxResults=8&key=${URL}`
        );
        const data = await response.json();
        setVideos(data.items);
        setIsEmptySearch(false);
      } catch (error) {
        console.error(`Error fetching search results:`, error);
      }
    };

    fetchVideos();
  }, [searchQuery, URL]);

  const inputSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      setIsEmptySearch(true);
    }
  };

  const onVideoClick = (videoId) => {
    const video = videos.find((video) => video.id.videoId === videoId);
    if (video) {
      alert(`Clicked on video: ${video.snippet.title}`);
    }
  };

  return (
    <div className="container mt-4">
      <form
        className="d-flex"
        style={{ paddingTop: "30px" }}
        onSubmit={inputSearch}
      >
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
          id="searchInput"
          className="form-control"
        />
        <button type="submit" className="btn btn-danger">
          Search
        </button>
      </form>

      {isEmptySearch && (
        <div className="alert alert-danger mt-3">
          Please enter a search query.
        </div>
      )}

      {videos && videos.length > 0 && (
        <div className="video-list row-cols-1 row-cols-md-2 g-4">
          {videos.map((video) => (
            <Link to={`/video/${video.id.videoId}`} key={video.id.videoId}>
              <VideoCard video={video} onVideoClick={onVideoClick} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
