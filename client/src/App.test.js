import React from 'react';
import { render , act } from './scripts/test-utils';
import App from './App';

describe(' App Component', () => {

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
