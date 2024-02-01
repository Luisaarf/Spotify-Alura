import './reset.css'
import './vars.css'
import './App.css';
import './media-queries.css'
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import React, { useState } from 'react';

function App() {

  const [searchField, setSearchField] = useState('');

  const handleInputChange = (e) => {
    setSearchField(e.target.value.toLowerCase());
  }
  
  return (
    <body>
      <Sidebar/>
      <div className="main-container">
        <Header searchValue={searchField} onInputChange={handleInputChange}/> 
        <Main searchValue={searchField}/>
      </div>
      <Footer/>
    </body>
  );
}

export default App;
