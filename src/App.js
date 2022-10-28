import React from "react";
import './App.css'
import AuthPage from "./components/Pages/AuthPage/AuthPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="AppPage">
            <AuthPage />
        </div>
    </div>
  );
}

export default App;
