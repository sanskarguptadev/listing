import React, { useState } from 'react';
import { StrictMode } from 'react';
import GlobalStyle from './GlobalStyle';
import ContentList from './components/contentList';
import Header from './components/header';
import './App.css';

function App() {
  const [term, setTerm] = useState('');

  const handleSearch = (term) => {
    setTerm(term);
  }
  return (
    <StrictMode>
      <GlobalStyle />
      <Header onSearch={handleSearch} />
      <ContentList searchTerm={term} />
    </StrictMode>
  );
}

export default App;
