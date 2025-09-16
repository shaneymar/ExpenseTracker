import React from "react";
import { SnackbarProvider } from "notistack";
import Home from "./Pages/Home/Home";
import './App.css';

function App() {
  
  return (
    <SnackbarProvider>
      <Home />
    </SnackbarProvider>
  );
}

export default App;
