import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import App from './App';
import Contact from './Screens/Contact';
import GalleryPhoto from './Screens/GalleryPhoto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route path="/galleryPhoto" element={<GalleryPhoto />}></Route>
    
    </Routes>
</BrowserRouter>,
document.getElementById("root")
);
