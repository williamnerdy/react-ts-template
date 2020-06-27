import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Template from '../Template';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Template />
  </Router>
);

export default App;
