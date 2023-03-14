import React from 'react';
import Headphone from '../../images/Headphone.mp4';

const Video = () => {
    return (
        <div>
            <div className="DarkOverlay"></div>
            <div className="video-container">
                <video src={Headphone} type="video/mp4" autoPlay muted loop></video>
            </div>
        </div>
    );
};

export default Video;
