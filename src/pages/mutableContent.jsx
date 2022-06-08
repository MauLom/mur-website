import * as React from "react"

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate

} from "react-router-dom";

import Home from "./home";

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


                </Routes >
            </Router>

        </ div>
    )
}

export default MutableContent