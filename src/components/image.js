import React, { useState } from 'react';
import styled from 'styled-components';

const Thumbnail = styled.img`
    width: 100%;
    aspect-ration: 3/2;
    object-fit: cover;
`;

const Image = ({ source, fb, alt }) => {
    const [prmSource, setPrmSource] = useState(source);
    const handleError = () => {
        setPrmSource(fb);
    }

    return (
        <Thumbnail src={prmSource} alt={alt} onError={handleError} />
    )
}

export default Image;
