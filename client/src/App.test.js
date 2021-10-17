import React from 'react';
import { render , act } from './scripts/test-utils';
import App from './App';

// The testcases for App.js are reducued to a minimum, because of with Apollo 3, 
// there are several problems with Mockedprovider and mocked data 
 
describe(' App Component', () => {

  it('should render', async () => {
    await act( async () => {
      render(<App />)}
    );
  });

  it('should contain a PhoneBookTable Component', async () => {
    await act( async () => {
      const { getByTestId } = render(<App />);
      const PhoneBookTable = getByTestId('phone-book-table');  
      expect(PhoneBookTable).toBeTruthy();
    });
  });
  it('should contain a Searchfield Component', async () => {
    await act( async () => {
      const { getByTestId } = render(<App />);
      const SearchField = getByTestId('search-field');  
      expect(SearchField).toBeTruthy();
    });
  });
});
