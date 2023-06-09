import React from 'react';
import ReactDOM from 'react-dom/client';
import Schedule from './ScheduleEditor'
import reportWebVitals from './reportWebVitals';

const cronEditor = ReactDOM.createRoot(document.getElementById('cronEditor'));
cronEditor.render(
  <React.StrictMode>
    <Schedule />
  </React.StrictMode>
);

reportWebVitals();
