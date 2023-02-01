import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Components
import Items from "./components/items";
import Navbar from "./components/Navbar";
import SoloItem from "./components/soloItem";
import CreateItem from "./components/itemCreate";
import Update from "./components/Update";

function App() {
  return (
        <BrowserRouter>
            <Navbar/>

                <div className="bg-gray-900 w-full min-h-screen">
            <Routes>
                <Route path="/" exact element={<Items/>}/>
                <Route path='/solo_item/:id/' element={<SoloItem/>}/>
                <Route path='/create/' element={<CreateItem/>}/>
                <Route path='update/:id/' element={<Update/>}/>
            </Routes>
                <ToastContainer/>      
                </div>
        </BrowserRouter>
  );
}

export default App;
