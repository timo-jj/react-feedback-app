import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Feedback from './pages/Feedback';
import About from './pages/About';
import Post from './pages/Post';
import NotFound from './pages/NotFound';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* FEEDBACK APP */}
        <Route path="/" element={<Feedback />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id/:title" element={<Post />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
