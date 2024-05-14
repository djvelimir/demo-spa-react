import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import PageNotFoundView from './views/PageNotFoundView.js';
import HomeView from './views/HomeView.js';
import AboutView from './views/AboutView.js';
import ContactView from './views/ContactView.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
        <Routes>
          <Route path="/" element={<App />}>
            {/* <Route index element={<HomeView />} /> */}
            <Route path="home" element={<HomeView />} />
            <Route path="about" element={<AboutView />} />
            <Route path="contact" element={<ContactView />} />
            <Route exact path="/"  element={<Navigate to="/home" replace />} />
            <Route path="*" element={<PageNotFoundView />} />
          </Route>
        </Routes>
      </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
