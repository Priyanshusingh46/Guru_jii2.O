import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import App from './App';
import Blogs from './Screens/Blogs';
import Contact from './Screens/Contact';
import GalleryPhoto from './Screens/GalleryPhoto';
import GalleryVideos from './Screens/GalleryVideos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route path="/galleryPhoto" element={<GalleryPhoto />}></Route>
    <Route path="/galleryVideo" element={<GalleryVideos />}></Route>
    <Route path="/blog" element={<Blogs />}></Route>

    
    </Routes>
</BrowserRouter>,
document.getElementById("root")
);
