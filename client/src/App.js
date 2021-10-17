import React from 'react';
import './App.css';
import './scripts/i18n';
// Components
import SearchField from './components/SearchField/SearchField';
import PhoneBookTable from './components/PhoneBookTable/PhoneBookTable';
import AppHeader from './components/AppHeader/AppHeader';
import Progress from './components/Progress/Progress';
import Error from './components/Error/Error';
//Hooks
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// Store
import { setPhoneBook } from './store/slices/phoneBook';
import { usePhoneBook } from './hooks/usePhoneBook';

function App() {

  const { getPhoneBookEntrys , data, loading , error } = usePhoneBook();
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
  
  return (
    <div className="App">
      <AppHeader />
      <div className='container'>
        <SearchField></SearchField>
        { loading && <Progress /> }
        { error && <Error /> }
        { data && !loading &&
          <PhoneBookTable></PhoneBookTable>
        }
      </div>
    </div>
  );
}

export default App;
