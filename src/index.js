import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import './components/Section/section.css';
import './components/FeedbackOptions/feedbackOptions.css';
import './components/Statistics/statistics.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
