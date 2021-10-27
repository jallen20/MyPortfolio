import styled from 'styled-components';

const ImageTileWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 500px;
	height: 500px;
	overflow: hidden;
`;

const Image = styled.img`
	width: 100%;
`;

const Content = styled.p`
	font-size: 14px;
`;


export {
	ImageTileWrapper,
	Image,
	Content
}
