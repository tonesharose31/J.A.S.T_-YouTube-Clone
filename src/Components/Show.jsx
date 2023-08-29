import React from 'react';
import { useParams } from 'react-router-dom';

const Show = () => {
    const { videoId } = useParams();
    return (
        <div>
            <iframe width={'420'} height={'315'} src={`https://www.youtube.com/embed/${videoId}`}></iframe>
        </div>
    );
}

export default Show;
