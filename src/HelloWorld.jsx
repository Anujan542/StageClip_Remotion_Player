import React from 'react'
import { Sequence } from 'remotion'
import { Fade } from './StageComponents/Effect/Fade'

import IntroVideo from './StageComponents/Intro/IntroVideo'
import FinalOuttro from './StageComponents/Outro/FinalOuttro'
import FinalEffects from './StageComponents/StudentImageSlide/FinalEffects'
import { ParagraphTitle } from './StageComponents/StudentImageSlide/ParagraphTitle'
import StudentImage from './StageComponents/StudentImageSlide/StudentImage'
import UnderlineEffect from './StageComponents/StudentImageSlide/UnderlineEffect'
import StudentPersonalVideo from './StageComponents/StudentPersonal/StudentPersonal'
import { GradientCircle } from './StageComponents/StudentVideo/FIrstVideoEffect'
import StudentVideo from './StageComponents/StudentVideo/StudentVideo'

export const HelloWorld = () => {
	return (
		<>
	<div style={{flex:1,backgroundColor:'black'}} >
				<Sequence from={0} durationInFrames={180} >
					<IntroVideo />
				</Sequence>
				<Sequence from={180} durationInFrames={240}  >
			  	<Fade type="in" duration={30}>
						<StudentImage color="red" />
				  </Fade>
				</Sequence>
				<Sequence from={250} durationInFrames={170} >
				<ParagraphTitle x={2} y={800} text="This has been a learning journey for me" marginLeft="49rem" />
				</Sequence>
				<Sequence from={270} durationInFrames={150} >
				<ParagraphTitle x={2} y={850} text="being 6 hours away from home.I thank" marginLeft="49.5rem" />
				</Sequence>
				<Sequence from={290} durationInFrames={130} >
				<ParagraphTitle x={2} y={900} text="everyone who has believed in me and" marginLeft="49.5rem" />
				</Sequence>
				<Sequence from={310} durationInFrames={110} >
				<ParagraphTitle x={2} y={950} text="supported me from day one" marginLeft="53rem" />
				</Sequence>
				<Sequence from={380} durationInFrames={20} >
					<UnderlineEffect color="white" />
				</Sequence>
				<Sequence from={400} durationInFrames={20} >
					<FinalEffects color="white" />
				</Sequence>
				<Sequence from={420} durationInFrames={472}>
					<Fade type="in" duration={50}>
						<StudentVideo title="#NPCGrad" speed={1} volume={1} />
					</Fade>
				</Sequence>
				<Sequence from={875} durationInFrames={20} >
					<GradientCircle color="#00bfff" />
				</Sequence>
				<Sequence from={880}  durationInFrames={665} >
					<Fade type="in" duration={10}>
						<StudentVideo title="#NPCGrad" speed={0.7} volume={0} />
					</Fade>
				</Sequence>
				<Sequence from={1540} durationInFrames={20} >
					<GradientCircle color="white" />
				</Sequence>
				<Sequence from={1560} durationInFrames={230} >
					<StudentPersonalVideo title="#NPCGrad" />
				</Sequence>
				<Sequence from={1770} durationInFrames={20} >
					<GradientCircle color="#00bfff" />
				</Sequence>
				<Sequence from={1790}  durationInFrames={200} >
					<Fade type="out" duration={50}>
						<FinalOuttro />
					</Fade>
				</Sequence>
			</div>
		</>
	)
}

