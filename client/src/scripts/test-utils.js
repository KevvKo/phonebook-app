
import React from 'react';
import PropTypes from 'prop-types';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { MockedProvider } from '@apollo/client/testing';
import phoneBookReducer from '../store/slices/phoneBook';
import { PHONE_BOOK_QUERY } from '../graphql/phonebook/phoneBookQuery';

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { phoneBook: phoneBookReducer }}),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
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
            variables: { query: '' },
          },
          result: {
            data: {
                PhoneBookEntrys: [contact1, contact2, contact3]
            }
          }
    };
    return (
      <MockedProvider mocks={[contactsQueryMock]} addTypename={false}>
        <Provider store={store}>
            {children}
        </Provider>
      </MockedProvider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
export { render };

render.propTypes = {
    children: PropTypes.node
}