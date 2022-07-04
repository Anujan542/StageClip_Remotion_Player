import React from 'react';
import {AbsoluteFill, Video} from 'remotion';
import intro from '../assets/intro.mp4';

const IntroVideo = () => {
	return (
		<AbsoluteFill>
			<Video src={intro} />
		</AbsoluteFill>
	);
};

export default IntroVideo;
