import styled from 'styled-components';
import {Link} from "react-router-dom";

const SocialsWrapper = styled.div`
	width: 300px;
	height: auto;
`;
const SocialMedia = styled(Link)`
	margin: 0 10px;
`;
const Icon = styled.img`
	width: 24px;
	height: 24px;
`;

export {
	SocialsWrapper,
	SocialMedia,
	Icon
}
