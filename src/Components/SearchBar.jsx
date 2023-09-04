import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
 import { Link } from "react-router-dom";

const SearchBar = ({ URL }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [videos, setVideos] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);


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
   fetchVideos();
  };


  const onVideoClick = (videoId) => {
    const video = videos.find((video) => video.id.videoId === videoId);
    if (video) {
      alert(`Clicked on video: ${video.snippet.title}`);
    }
  };


  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="container mt-4"> 
 <div className="row">
        <div className={`col-md-8 ${sidebarOpen ? "offset-md-4" : ""}`}>
          <button
            className="navbar-toggler d-md-none"
            type="button"
            onClick={toggleSidebar}
>
<span className="navbar-toggler-icon"></span>
</button>


    <form className="d-flex" style={{paddingTop:"30px"}}
     onSubmit={inputSearch} >
      <input 
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search"
        id="searchInput"
        className="form-control me-2"

      />
       <button  type="submit" className="btn btn-danger">
        Search
      </button>
    </form>

      <div className="video-list">
        {videos.map((video) => (
          <Link to={`/video/${video.id.videoId}`}key={video.id.videoId}>
            <VideoCard video={video} onVideoClick={onVideoClick} />
          </Link>
        ))}
      </div>
      </div>
      </div>

      <div
       className={`col-md-4 ${
         sidebarOpen ? "show" : "collapse"
       }`}
     >
      {/* sidebar content */}
      <h3>Sidebar Menu</h3>
      <ul className="list-unstyled">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link> 
        </li>
      </ul>
    </div>
</div>
  );
};

export default SearchBar;
