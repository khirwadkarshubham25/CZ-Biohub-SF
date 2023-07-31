import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Fibonacci from './Components/Fibonacci';
import FibonacciResult from './Components/FibonacciResult';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Fibonacci}></Route>
          <Route exact path='/fibonacci' Component={Fibonacci}></Route>
          <Route exact path='/fibonacci-result' Component={FibonacciResult}></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
