import React from "react";

const VideoCard = ({ video, onVideoClick }) => {
  const { title, description, thumbnails } = video.snippet;
  const { videoId } = video.id;

  const handleVideoClick = () => {
    onVideoClick(videoId);
  };

  return (
    <div className="col">
      <ul className="video-list">
        <div className="card">
          <li>
            <div
              key={videoId}
              className="video-card"
              onClick={handleVideoClick}
            >
              <img src={thumbnails.medium.url} alt={title} />
              <div className="card-body d-block">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{description}</p>
              </div>
            </div>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default VideoCard;
