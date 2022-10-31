import React from "react";
import './App.css'
import AuthPage from "./components/Pages/AuthPage/AuthPage";
import Header from "./components/Header/Header";
import ExportPage from "./components/Pages/ExportPage/ExportPage";
import ListApartmentsPage from "./components/Pages/ListApartmentsPage/ListApartmentsPage";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="AppPage">
                {/*<AuthPage />*/}
                {/*<ExportPage />*/}
                <ListApartmentsPage/>
            </div>
        </div>
    );
}

export default App;
