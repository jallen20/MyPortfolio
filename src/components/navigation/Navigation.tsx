import React from 'react';
import {Item, NavigationWrapper} from "./Navigation.styles";

const Navigation = () => (
    <NavigationWrapper>
        <Item to={'/'}>Home</Item>
        <Item to={'/about'}>About</Item>
        <Item to={'/'}>Work</Item>
        <Item to={'/'}>Contact</Item>
    </NavigationWrapper>
);
export default Navigation;
