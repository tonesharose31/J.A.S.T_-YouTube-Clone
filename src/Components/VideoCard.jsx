import React from "react";

const VideoCard = ({ video, onVideoClick }) => {
  const { title, thumbnails } = video.snippet;
  const { videoId } = video.id;

  const handleVideoClick = () => {
    onVideoClick(videoId);
  };

  return (
    <div className="card" style={{height:"100%", width:"85%"}}>
      <div key={videoId} className="video-card" onClick={handleVideoClick}>
        <img className="rounded" src={thumbnails.medium.url} alt={title} style={{ width:"100%"}}/>
        <div className="card-body d-block">
          <h3 className="card-title">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
