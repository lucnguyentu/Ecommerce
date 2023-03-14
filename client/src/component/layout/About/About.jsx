import React from 'react';
import './aboutSection.css';
import { Button, Typography, Avatar } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import ongHoang from '../../../images/onghoang.jpg';

const About = () => {
    const visitInstagram = () => {
        window.location = 'https://facebook.com/laohac0511';
    };
    return (
        <div className="aboutSection">
            <div></div>
            <div className="aboutSectionGradient"></div>
            <div className="aboutSectionContainer">
                <Typography component="h1">About Us</Typography>

                <div>
                    <div>
                        <Avatar
                            style={{ width: '10vmax', height: '10vmax', margin: '2vmax 0' }}
                            src={ongHoang}
                            alt="Founder"
                            target="_blank"
                        />
                        <Typography>Nguyễn Tự Lực</Typography>
                        <Button onClick={visitInstagram} color="primary">
                            Visit FaceBook
                        </Button>
                        <span>
                            This is a sample wesbite made by @lucnguyentu45. Just to create MERN project to aply to my
                            CV
                        </span>
                    </div>
                    <div className="aboutSectionContainer2">
                        <Typography component="h2">Our Brands</Typography>
                        <a href="https://www.youtube.com/watch?v=9G51IqjCfac&ab_channel=EVERYDAYENGLISH" target="blank">
                            <YouTubeIcon className="youtubeSvgIcon" />
                        </a>

                        <a href="https://www.youtube.com/watch?v=9G51IqjCfac&ab_channel=EVERYDAYENGLISH" target="blank">
                            <InstagramIcon className="instagramSvgIcon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
