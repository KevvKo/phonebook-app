import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';
import { usePhoneBook } from './usePhoneBook';
import { MockedProvider } from '@apollo/client/testing';
import { PHONE_BOOK_QUERY } from '../graphql/phonebook/phoneBookQuery';


// create an apollo client mock wrapper and returns the lazy Query hook for the phonebook
function getHookWrapper( mocks = [] ) {
    const wrapper = ({ children }) => (
      <MockedProvider mocks={mocks} addTypename={false}>
        {children}
      </MockedProvider>
    );
    const { result } = renderHook(
        () => usePhoneBook(), { wrapper });

    const { data, loading, error, getPhoneBookEntrys } = result.current;

    // Test the initial state of the request
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeUndefined();
    expect(result.current.data).toBeUndefined();
    expect(result.current.getPhoneBookEntrys).toBeTruthy();

    getPhoneBookEntrys({ 
      variables: {
        query: ''
      }
    });

    return {
      getPhoneBookEntrys,
      wrapper,
      data,
      loading
    }
}

describe('usePhoneBook', () => {

    // Data
    const contact1 = {
        name: 'Kevin Klein',
        phone: '0164/3424134'
    };
    const contact2 = {
        name: 'Günther Müller',
        phone: '0162/3431345'
    };
    const contact3={
        name: 'Toufik Szrerba',
        phone: '0156/24514531'
    };

    const mock = [
      contact1,
      contact2,
      contact3
    ];

    // Mocks
    const contactsQueryMock = {
        request: {
            query: PHONE_BOOK_QUERY,
            variables: { query: 'Kevin' },
          },
          result: {
            data: {
                PhoneBookEntrys: [contact1, contact2, contact3]
            }
          }
    };


    it('should return an array of contacts', async () => {

        const { getPhoneBookEntrys, wrapper, data, loading } = getHookWrapper([ contactsQueryMock ]);
        await act( async () => {

          renderHook( () => getPhoneBookEntrys(), { wrapper });
        });  
    });

    it('should return error when requests fails', async () => {

    });
});