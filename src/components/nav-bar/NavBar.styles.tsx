import styled from 'styled-components';
import {Link} from 'react-scroll';

const NavBarWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    height: 50px;
    background: #252934;
    margin: 0;
    width: 100vw;
`;
const NavItem = styled(Link)`
    font-size: 24px; 
    font-family: proxima-nova, sans-serif;
    font-weight: 400;
    font-style: normal;
    margin: 10px;
    color: white;
    
    &:hover {
        cursor: pointer;
    }
`;

export {
    NavBarWrapper,
    NavItem
}