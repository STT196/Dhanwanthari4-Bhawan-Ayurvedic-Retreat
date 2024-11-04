// src/components/VideoSection/VideoComponent.jsx
import React from 'react';
import './VideoStyles.css'; // Ensure there are no extra spaces in this line

const VideoComponent = () => {
    return (
        <div className="video-container">
            <iframe
                className="video-frame"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/MZ--wYpMhWw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoComponent;
