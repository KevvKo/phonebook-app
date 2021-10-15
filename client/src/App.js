import React from 'react';
import './App.css';
import './scripts/i18n';
// Components
import SearchField from './components/SearchField/SearchField';
import PhoneBookTable from './components/PhoneBookTable/PhoneBookTable';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// Store
import { setPhoneBook } from './store/slices/phoneBook';
import { usePhoneBook } from './hooks/usePhoneBook';

function App() {

const { getPhoneBookEntrys , data, loading } = usePhoneBook();
const dispatch = useDispatch();
  useEffect(() => {

    getPhoneBookEntrys({ 
      variables: {
        query: ''
      }
    });
  }, []);

  useEffect(() => {

    if( data && !loading){
      dispatch( setPhoneBook( data.PhoneBookEntrys ));
    }
  }, [ data, loading ]);

  if(loading) return ' waiting....';
  
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
