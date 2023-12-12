import React, { ContextType, createContext, useEffect, useState } from "react";
import "./scss/app.scss"
import Header from "./components/Header.tsx";
import Home from "./pages/Home.tsx";
import NoteFound from "./pages/NoteFound.tsx";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart.tsx";
import FullPizza from "./components/FullPizza.tsx";


export const SearchContext = createContext({})

function App() {
  const [searchValue, setSearchValue] = useState('')

  
  return (
    <div className="App">
      <div className="wrapper">

      <SearchContext.Provider value={{searchValue, setSearchValue}}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home searchValue={searchValue}/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="*" element={<NoteFound/>}/>
              <Route path="/pizza/:id" element={<FullPizza/>}/>
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
      
    </div>
    </div>
  );
}

export default App;
