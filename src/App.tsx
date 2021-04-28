import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
