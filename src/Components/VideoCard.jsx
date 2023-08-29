import React from 'react';

const VideoCard = ({video, onVideoClick}) => {

    const {title, description, thumbnails, } = video.snippet
    const { videoId } = video.id

    const handleVideoClick = () => {
        onVideoClick(videoId);
      };

    return (
        <div className='video-card' onClick={handleVideoClick}>
            <img src={thumbnails.medium.url} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default VideoCard;
