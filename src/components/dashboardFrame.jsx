import * as React from 'react'
import HeaderOptions from './headerOptions';

///Bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
///Assets
import GameBombs from '../assets/BOMBAS.png'
import GameWheel from '../assets/RULETA.png'
import GameTower from '../assets/TORRES.png'

import { Link } from 'react-router-dom';

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
        <Col>
            <br />
            <Row className='justify-content-around'>
                <Col lg={3} md={3} sm={4}  style={styles.glassSquares}>
                
                <Link to="/gameMines"><img style={styles.imgGames} src={GameBombs} alt="game-bombs" /></Link><br />
                </Col>
                <br />
                <Col lg={3} md={3} sm={4}  style={styles.glassSquares}>
                    <Link to="/gameWheel"><img style={styles.imgGames} src={GameWheel} alt="game-wheel" /></Link>
                </Col>
                <Col lg={3} md={3} sm={4}  style={styles.glassSquares}>
                    <Link  to="/gameTowers"><img style={styles.imgGames} src={GameTower} alt="game-towers" /></Link>
                </Col>

            </Row>
            <Row className='justify-content-center'>
                <Col lg={11} md={11} sm={11}>
                    <Row className=" text-center mt-4">
                        <Col><div style={styles.titleHall}>Hall of fame</div></Col>
                    </Row>
                    <Row>
                        <Col className="mt-4" style={{ background: "rgba(231, 231, 231, 0.43)", borderRadius: "41px", width: "100%", height: "300px" }} >Contenido tabla</Col>
                    </Row>
                </Col>

            </Row>
        </Col>
    )
}
export default DashboardFrame