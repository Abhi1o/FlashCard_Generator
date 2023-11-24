
import React from "react"
import './App.css';
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import CreateFlashcard from "./Pages/CreateFlashcard";
import MyFlashcard from "./Pages/MyFlashcard";
import FlashcardDetails from "./Pages/FlashcardDetails";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {

   return (

    <BrowserRouter>
    <div>
    <Header/>
      <Navbar/>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<CreateFlashcard  />}></Route>
        <Route path="/myflashcard" element={<MyFlashcard />}></Route>
        <Route path="/flashcarddetails/:id" element={<FlashcardDetails/>}></Route>
      </Routes>

      </div>
    </BrowserRouter>
   );
   
}

export default App;
