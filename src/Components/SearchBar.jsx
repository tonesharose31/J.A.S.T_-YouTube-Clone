import React, { useState } from "react";
import VideoCard from "./VideoCard";
import VideoList from "./VideoList"

import React, { useState } from "react";

const SearchBar = ({ URL }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [videos, setVideos] = useState([]);

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
    <form className="d-flex">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search"
        className="form-control me-2"
      />
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
