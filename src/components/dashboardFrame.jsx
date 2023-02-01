import * as React from 'react'
import HeaderOptions from './headerOptions';
//import './stylesDashboard.css'
///Bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container, Form } from 'react-bootstrap';
///Assets
import GameBombs from '../assets/BOMBAS.png'
import GameWheel from '../assets/RULETA.png'
import GameTower from '../assets/TORRES.png'
import Halloffame from './halloffame';

import { Link } from 'react-router-dom';
const DashboardFrame = () => {

    const styles = {
        glassSquares: {
            background: "rgba(231, 231, 231, 0.43)",
            borderRadius: "41px",
            height: "90%",
            width: "100%"

        },
        imgGames: {
            width: "100%",
            height: "100%"
        },
        hr: {
            backgroundColor: "white",
            height: "10px"
        }
    }

    return (
        <Container fluid>
            <br />
            <Row className='justify-content-center' lg={12} md={12} sm={12}>
                <HeaderOptions />
            </Row>
            <br />
            <Row className='justify-content-around'>
                <Col lg={3} md={3} sm={4}  >

                    <div style={styles.glassSquares}><Link to="/gameMines"><img style={styles.imgGames} src={GameBombs} alt="game-bombs" /></Link><br /></div>
                </Col>
                <br />
                <Col lg={3} md={3} sm={4}  >
                    <div style={styles.glassSquares}> <Link to="/gameWheel"><img style={styles.imgGames} src={GameWheel} alt="game-wheel" /></Link><br /></div>
                </Col><br />
                <Col lg={3} md={3} sm={4} >
                    <div style={styles.glassSquares}><Link to="/gameTowers"><img style={styles.imgGames} src={GameTower} alt="game-towers" /></Link><br /></div>
                </Col>

            </Row>
            
            <Row className='justify-content-center' lg={12} md={12} sm={12} >
                <Halloffame />
            </Row>
        </Container>
    )
}
export default DashboardFrame