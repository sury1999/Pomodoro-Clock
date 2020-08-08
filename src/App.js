import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Break } from './components/Break';
import { Work } from './components/Work';
import { Display } from './components/Display';

function App() {

  return (
    <div>
    <Header />
    <div className = "workandbreak">
    <Break />
    <Work />
    </div>
    <Display />
    </div>
  );
}

export default App;
