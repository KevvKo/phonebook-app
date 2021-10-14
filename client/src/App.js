import React from 'react';
import './App.css';
import './scripts/i18n';
// Components
import SearchField from './components/SearchField/SearchField';
import PhoneBookTable from './components/PhoneBookTable/PhoneBookTable';
// Hooks
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
        <SearchField ></SearchField>
        <PhoneBookTable></PhoneBookTable>
      </div>
    </div>
  );
}

export default App;
