import styled from 'styled-components';
import {animated} from "react-spring";

const WavyBackgroundWrapper = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	background: #28313b;
`;

const WavyPath = styled(animated.path)`
	fill-opacity: 1;
	filter: drop-shadow(3px -5px 2px rgb(0 0 0 / 0.4));
`;
const PathWrapper = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
`;

export {
	WavyBackgroundWrapper,
	WavyPath,
	PathWrapper
}
