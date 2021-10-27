import React from 'react';
import {Content, Image, ImageTileWrapper} from "./ImageTile.styles";

const ImageTile = (props: {
    imgUrl: string,
    content: string
}) => {
    
    const { imgUrl, content } = props;
    
    return (
        <ImageTileWrapper>
            <img src={imgUrl} alt='img-tile'/>
            <Content>
                {content}
            </Content>
        </ImageTileWrapper>
    );
}
export default ImageTile;
