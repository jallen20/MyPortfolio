import React from 'react';
import {ArrowRightWrapper} from "./ArrowRight.styles";

const ArrowRight = (props: {
    width: number,
    height: number
}) => {
    const {width, height} = props;
    
    return (
        <ArrowRightWrapper
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd" clipRule="evenodd">
            <path stroke='white' d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/>
        </ArrowRightWrapper>
    )
}
export default ArrowRight;