import React from "react";
import './App.css'
import AuthPage from "./components/Pages/AuthPage/AuthPage";
import Header from "./components/Header/Header";
import ExportPage from "./components/Pages/ExportPage/ExportPage";

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="AppPage">
            {/*<AuthPage />*/}
            <ExportPage />
        </div>
    </div>
  );
}

export default App;
