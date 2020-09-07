import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import '../src/styles/main.scss';

const history = createMemoryHistory();

export const decorators = [
  (Story) => (
    <MemoryRouter history={history}>
      <Story />
    </MemoryRouter>
  )
];
