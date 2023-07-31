import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ExpenseProvider } from "./contexts/ExpenseContext"
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ExpenseProvider>
      <App />
    </ExpenseProvider>
    </BrowserRouter>
    
  </React.StrictMode>
);


reportWebVitals();
