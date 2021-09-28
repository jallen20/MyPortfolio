import React from 'react';
import {Description, DescriptiveImageWrapper, Image, ImageWrapper, Title} from "./DescriptiveImage.styles";

const DescriptiveImage = (props: {
    imageUrl?: string,
    description: string
}) => {
    const { imageUrl, description } = props;
    
    return (
        <DescriptiveImageWrapper>
            <ImageWrapper>
                <Image src={imageUrl}/>
            </ImageWrapper>
            <Title>
                Who's This?
            </Title>
            <Description>
                {description}
            </Description>
        </DescriptiveImageWrapper>
    )
}
export default DescriptiveImage;