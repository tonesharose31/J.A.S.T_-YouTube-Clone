import React from 'react';

const VideoCard = ({video, onVideoClick}) => {

    const {title, description, thumbnails, } = video.snippet
    const { videoId } = video.id
    // console.log(videoId)


    return (
        <div className='video-card' onClick={onVideoClick}>
            {/* <iframe width={'420'} height={'315'} src={`https://www.youtube.com/embed/${videoId}`}></iframe> */}
            <img src={thumbnails.medium.url} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default VideoCard;
