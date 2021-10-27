import React from 'react';
import {Icon, SocialMedia, SocialsWrapper} from "./Socials.styles";
import {IMG_BASE_PATH} from "../../constants";

const Socials = () => (
    <SocialsWrapper>
        <SocialMedia to={'/'}>
            <Icon src={`${IMG_BASE_PATH}/ig.png`}/>
        </SocialMedia>
        <SocialMedia to={'/'}>
            <Icon src={`${IMG_BASE_PATH}/linkedin.png`}/>
        </SocialMedia>
        <SocialMedia to={'/'}>
            <Icon src={`${IMG_BASE_PATH}/github.png`}/>
        </SocialMedia>
    </SocialsWrapper>
);
export default Socials;
