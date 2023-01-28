import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import Items from "./components/items";
import Navbar from "./components/Navbar";
import SoloItem from "./components/soloItem";
import CreateItem from "./components/itemCreate";


function App() {
  return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" exact element={<Items/>}/>
                <Route path='/solo_item/:id/' element={<SoloItem/>}/>
                <Route path='/form/' element={<CreateItem/>}/>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
