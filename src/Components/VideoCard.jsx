import React from 'react';

const VideoCard = ({video}) => {

    const {title, description, thumbnails } = video.snippet;
    return (
        <div className='video-card'>
            <img src={thumbnails.medium.url} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default VideoCard;
