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
import GameWheel from "../components/Games/gameWheel";
import GameMines from "../components/Games/gameMines";
import GameTowers from "../components/Games/gameTowers";
import RegisterFrame from "../components/registerFrame";
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
                    <Route path="/gameWheel" element={<GameWheel />} />
                    <Route path="/gameMines" element={<GameMines />}/>
                    <Route path="/gameTowers" element={<GameTowers />}></Route>
                    <Route path="/registerFrame" element={<RegisterFrame />}></Route>
                </Routes >
            </Router>

        </ div>
    )
}

export default MutableContent