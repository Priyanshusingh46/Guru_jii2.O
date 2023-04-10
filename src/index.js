import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import App from './App';
import About1 from './Screens/About1';
import Aboutkundali from './Screens/About/Aboutkundali';
import AboutHoroscope from './Screens/About/AboutHoroscope';
import AboutGorchar from './Screens/About/AboutGorchar';
import AboutVedic from './Screens/About/AboutVedic';
import Blogs from './Screens/Blogs';
import BlogsDescription from './Screens/BlogsDescription';
import Contact from './Screens/Contact';
import GalleryPhoto from './Screens/GalleryPhoto';
import GalleryVideos from './Screens/GalleryVideos';
import Product_page1 from './Screens/Product_page1';
import Servicedescription from './Screens/Servicedescription';
import OurService from './Screens/Services';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route path="/galleryPhoto" element={<GalleryPhoto />}></Route>
    <Route path="/galleryVideo" element={<GalleryVideos />}></Route>
    <Route path="/blog" element={<Blogs />}></Route>
    <Route path="/blogdescription/:id" element={<BlogsDescription />}></Route>
    <Route path="/service" element={<OurService/>}></Route>
    <Route path="/servicedescription/:id" element={<Servicedescription/>}></Route>
    <Route path="/about" element={<About1/>}></Route>
    <Route path="/aboutkundali" element={<Aboutkundali/>}></Route>
    <Route path="/abouthoroscope" element={<AboutHoroscope/>}></Route>
    <Route path="/aboutGorchar" element={<AboutGorchar/>}></Route>
    <Route path="/aboutVedic" element={<AboutVedic/>}></Route>
    <Route path="/product" element={<Product_page1/>}></Route>

    
    </Routes>
</BrowserRouter>,
document.getElementById("root")
);
