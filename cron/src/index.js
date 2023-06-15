import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import CronEditor from './CronEditor';

const cronEditor = ReactDOM.createRoot(document.getElementById('cronEditor'));

cronEditor.render(
  <React.StrictMode>
    <CronEditor/>
  </React.StrictMode>
);

reportWebVitals();
