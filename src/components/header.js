import React, { useState } from "react";
import styled from "styled-components";
import { FaArrowLeft, FaSearch } from 'react-icons/fa'

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    background: #252537;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px 20px;
    z-index: 1000;
`;

const Title = styled.h1`
    flex: 1;
    text-align: center;
    font-size: 10px;
    margin: 0;
`;
const Button = styled.button`
    background: none;
    border: none;
    color: #FFFFFF;
    cursor: pointer;
    margin-right: 10%;
`;

const SearchInput = styled.input`
    position: fixed;
    width: 80%;
    top: 5px;
    right: 5px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
    display: ${props => (props.visible ? 'block' : 'none' )};
`;

const Header = ({ onSearch }) => {
    const [visible, setVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchClick = () => {
        setVisible(!visible);
    }

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    }
    
    const handleClose = () => {
        setVisible(!visible);
    }

    return (
        <HeaderContainer>
            <Button onClick={handleClose}>
                <FaArrowLeft />
            </Button>
            <Title>Romantic Comedy</Title>
            { !visible ? 
                <Button onClick={handleSearchClick}>
                    <FaSearch />
                </Button> :
             null }
            <SearchInput 
                type="text"
                placeholder="Search..."
                visible={visible}
                value={searchTerm}
                onChange={handleSearchChange}
            />
        </HeaderContainer>
    )
};

export default Header;