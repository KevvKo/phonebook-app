import React from 'react';
import { render , act} from './scripts/test-utils';
import App from './App';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test('should render App component', async () => {
  await act( async () => {
    render(
          <App />, container
    )}
  );
});
