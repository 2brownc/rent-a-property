import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './index.css';
import App from './App';
import store from './store/store';

import Home from './pages/Home';
import About from './pages/About';
import Search from './pages/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} >
            <Route index element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
