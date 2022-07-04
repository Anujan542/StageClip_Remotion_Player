import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const MainTitle = ({
	title1,
	title2,
	titleColor,
	top,
	size,
	marginLeft,
	fontWeight,
	fontStyle,
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const up = () =>
		spring({
			fps,
			frame,
			config: {
				damping: 400,
			},
		});
	return (
		<AbsoluteFill
			style={{
				alignItems: 'center',
				justifyContent: 'center',
				marginLeft,
			}}
		>
			<div
				style={{
					fontSize: size,
					titleColor,
					fontWeight,
					fontStyle,
					top,
					textAlign: 'center',
					position: 'absolute',
					color: titleColor,
					display: 'inline-block',
					transform: `translateY(${interpolate(up(10), [0, 1], [100, 0])}px)`,
				}}
			>
				{title1} <br /> {title2}
			</div>
		</AbsoluteFill>
	);
};
