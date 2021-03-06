import * as React from "react"

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate

} from "react-router-dom";

import Home from "./home";
import TransactionsFrame  from "../components/transactionsWindow";
import Games from "./games";
const MutableContent = () => {

    return (
        <div style={{height:"100vh"}}> 
            <Router>
                <Routes >
                    <Route
                        path="*"
                        element={<Navigate to="/" replace />}
                    />
                    <Route path='/' element={<Home />} />
                    <Route path="/transactions" element={<TransactionsFrame />} />
                    <Route path="/games" element={<Games />} />
                </Routes >
            </Router>

        </ div>
    )
}

export default MutableContent