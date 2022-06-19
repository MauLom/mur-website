import * as React from 'react'

import HeaderOptions from './headerOptions';

import { Link } from "react-router-dom"

///Bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

///Assets
import GameBombs from '../assets/BOMBAS.png'
import GameWheel from '../assets/RULETA.png'
import GameTower from '../assets/TORRES.png'


const DashboardFrame = () => {
    const styles = {
        glassSquares: {
            background: "rgba(231, 231, 231, 0.43)",
            borderRadius: "41px",

        },
        imgGames: {
            width: "100%",
            height: "100%"
        },
        titleHall: {
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "48px",
            lineHeight: "72px",
            letterSpacing: "0.03em",
            color: "#FFFFFF",
        }
    }

    return (
        <>
            <Row style={{ background: "rgba(231, 231, 231, 0.43)", borderRadius: "41px", width: "1474px", height: "60px" }}>
                <HeaderOptions />
            </Row>
            <Row className='justify-content-center'>
                <Col lg={3} className="mx-3 mt-4" style={styles.glassSquares}>
                    <Link to={{
                        pathname: "/games",
                    }}>
                        <img style={styles.imgGames} src={GameBombs} alt="game-bombs" />
                    </Link>
                </Col>
                <Col lg={3} className="mx-3 mt-4" style={styles.glassSquares}>
                    <Link to={{
                        pathname: "/games",
                    }}>
                        <img style={styles.imgGames} src={GameWheel} alt="game-wheel" />
                    </Link>

                </Col>
                <Col lg={3} className="mx-3 mt-4" style={styles.glassSquares}>
                    <Link to={{
                        pathname: "/games",
                    }}>
                        <img style={styles.imgGames} src={GameTower} alt="game-tower" />
                    </Link>

                </Col>

            </Row>
            <Row>
                <Col lg={12}>
                    <Row className=" text-center mt-4">
                        <Col><div style={styles.titleHall}>Hall of fame</div></Col>
                    </Row>
                    <Row>
                        <Col className="mt-4" style={{ background: "rgba(231, 231, 231, 0.43)", borderRadius: "41px", width: "1469px", height: "428px" }} >Contenido tabla</Col>
                    </Row>
                </Col>

            </Row>
        </>
    )
}
export default DashboardFrame