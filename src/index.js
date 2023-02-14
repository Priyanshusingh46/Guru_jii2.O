import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import App from './App';
import Contact from './Screens/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    
    </Routes>
</BrowserRouter>,
document.getElementById("root")
);
