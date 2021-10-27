import styled from 'styled-components';
import {Link} from "react-router-dom";

const NavigationWrapper = styled.div`
	width: 300px;
	height: auto;
	display: flex;
`;
const Item = styled(Link)`
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    font-family: utopia-std,serif;
    font-weight: 100;
    font-style: light;
    letter-spacing: 2px;
    font-size: 16px;
	margin: 5px;
`;

export {
	NavigationWrapper,
	Item
}
