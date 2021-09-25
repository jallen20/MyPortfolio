import styled from 'styled-components';
import {Link} from 'react-scroll';

const NavBarWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 10px;
    height: 30px;
    background: #252934;
    margin: 0;
    width: 100%;
`;
const NavItem = styled(Link)`
    font-size: 24px;
    margin: 0 10px;
    color: white;
    
    &:hover {
        cursor: pointer;
    }
`;

export {
    NavBarWrapper,
    NavItem
}