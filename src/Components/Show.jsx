import React from 'react';
import { useParams } from 'react-router-dom';

const Show = () => {
    const { videoId } = useParams();
    return (
        <div>
            <h1>Video Show Page</h1>
            <p>Video ID: {videoId}</p>
        </div>
    );
}

export default Show;
