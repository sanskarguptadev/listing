import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import useList from '../utils/useList';
import Image from './image';

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    padding: 10px;
`;

const P = styled.p`
    margin-top: 25%;
    display: flex;
    justify-content: center;
`;

const ContentList = ({ searchTerm }) => {
    const [page, setPage] = useState(1);
    const { items, loading } = useList(page);

    const handleScroll = useCallback(() => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            setPage(prevState => prevState + 1);
        }
    }, [loading]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll])

    const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

    if(loading) return <div>Loading...</div>

    return (
        <Grid>
            { filteredItems.length > 0 ? filteredItems.map((item, index) => (
                <div key={index}>
                    <Image 
                        source={`https://test.create.diagnal.com/images/${item?.['poster-image']}`}
                        fb={'https://test.create.diagnal.com/images/poster1.jpg'}
                        alt={item.name}
                    />
                    <span>{item.name}</span>
                </div>
            )) : <P>Not Found!!!</P> }
        </Grid>
    )
};

export default ContentList;