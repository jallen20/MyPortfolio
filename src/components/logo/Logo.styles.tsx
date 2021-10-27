import styled from 'styled-components';

const LogoWrapper = styled.div`
	border-radius: 50%;
	border: 1px solid black;
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: utopia-std,serif;
    font-weight: 100;
    font-style: light;
    letter-spacing: 2px;
`;

const TextWrapper = styled.p`
	margin: 0;
	padding: 0;
`;

export {
	LogoWrapper,
	TextWrapper
}
