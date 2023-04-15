import './index.css';
import React from 'react';
import Title from './Title'
import Main from './Main'
import Status from './Status'
import Footer from './Footer'


function App() {
  return (
    <div className="App">
      <div className="container">
        <Title/>
        <Main/>
        <Status/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
