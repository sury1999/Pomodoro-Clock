import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Break } from './components/Break';
import { Work } from './components/Work';
import { Display } from './components/Display';

import {GlobalProvider} from './context/GlobalState';

function App() {

  return (
    <GlobalProvider>
    <Header />
    <div className = "workandbreak">
    <Break />
    <Work />
    </div>
    <Display />
    </GlobalProvider>
  );
}

export default App;
