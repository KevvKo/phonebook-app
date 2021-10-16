
import React from 'react';
import PropTypes from 'prop-types';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { MockedProvider } from '@apollo/client/testing';
import phoneBookReducer from '../store/slices/phoneBook';


function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { phoneBook: phoneBookReducer }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    const mocks = []; 

    return (
      <MockedProvider mocks={mocks} addTypename={false}>
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