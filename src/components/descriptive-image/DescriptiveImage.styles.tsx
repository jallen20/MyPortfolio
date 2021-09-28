import styled from 'styled-components';

const DescriptiveImageWrapper = styled.div`
    width: 50%;
    height: auto;
`;

const ImageWrapper = styled.div`
    width: 300px;
    height: 300px;
    position: relative;
    overflow: hidden;
    border-radius: 100%;
    borer: 1px solid;
    border-color: transparent;
    margin: auto;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;
const Title = styled.h2`
    color: #252934;
    font-weight: 700;
    font-size: 24px;
    font-style: normal;
    position: relative;
    margin: 5px 0;
`;
const Description = styled.p`
    color: #252934;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    width: 300px;
    position: relative;
    margin: auto;
    line-height: 1.6;
`;
export {
    DescriptiveImageWrapper,
    ImageWrapper,
    Image,
    Title,
    Description
}