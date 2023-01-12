import * as React from "react"

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate

} from "react-router-dom";
import Fondo from '../assets/FONDO.jpg'

import Home from "./home";
import TransactionsFrame  from "../components/transactionsWindow";
import Games from "./games";
import GameWheel from "../components/Games/gameWheel";
import GameMines from "../components/Games/gameMines";
import GameTowers from "../components/Games/gameTowers";
import RegisterFrame from "../components/registerFrame";
import UserFrame from "../components/userFrame";
const MutableContent = () => {

    return (
        <div > 
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
                    <Route path="/userFrame" element={<UserFrame />}></Route>
                </Routes >
            </Router>

        </ div>
    )
}

export default MutableContent