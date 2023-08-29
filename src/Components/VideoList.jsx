import React from 'react';


const VideoList = ({videos}) => {
    return (
        <div className='video-list'>
            {videos.map((video) => (
                <VideoCard key={video.id.videoId} video={video} />
            ))}
        </div>
    );
}

export default VideoList;
