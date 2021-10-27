import React from 'react';
import {HeaderWrapper} from "./Header.styles";
import Logo from "../logo";
import Navigation from "../navigation";

const Header = () => (
    <HeaderWrapper>
        <Logo/>
        <Navigation/>
    </HeaderWrapper>
);
export default Header;
