import React from "react";

const VideoCard = ({ video, onVideoClick }) => {
  const { title, thumbnails } = video.snippet;
  const { videoId } = video.id;

  const handleVideoClick = () => {
    onVideoClick(videoId);
  };

  return (
    <div className="card" style={{height:"100%"}}>
      <div key={videoId} className="video-card rounded" onClick={handleVideoClick}>
        <img src={thumbnails.medium.url} alt={title} style={{height:"250px", width:"100%"}}/>
        <div className="card-body d-block">
          <h3 className="card-title">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
