import * as React from 'react'
import HeaderOptions from './headerOptions';
//import './stylesDashboard.css'
///Bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
///Assets
import GameBombs from '../assets/BOMBAS.png'
import GameWheel from '../assets/RULETA.png'
import GameTower from '../assets/TORRES.png'
import Halloffame from './halloffame';

import { Link } from 'react-router-dom';
import LoginFrame from './loginFrame';
import RegisterFrame from './registerFrame';
import { onstatusofuser, onloginrunning, stateofuser } from './sockets.js';
import Toast from 'react-bootstrap/Toast';
import HallOfFame from './ReusableModules/hallOfFame';

const DashboardFrame = () => {

    const styles = {
        loginframestyle: {
            height: "100%"
        },
        glassSquares: {
            background: "linear-gradient(120.37deg, rgba(239, 239, 239, 0.6) 0%, rgba(255, 255, 255, 0.1) 100%)",
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
            height: "5px"
        },
        halloffamesquare: {
            background: "linear-gradient(120.37deg, rgba(239, 239, 239, 0.6) 0%, rgba(255, 255, 255, 0.1) 100%)",
            borderRadius: "21px",
            height: "100%",
            width: "100%",
            alignContent: "center",
            justifyContent: "center"

        },
        gamesandhall: {
            height: "100%"
        },
        positionToast: {
            position: "absolute",
            top: "0",
            right: "0"
        }
    }

    const [showregister, setShowregister] = React.useState('0');
    const [statusUser, setStatusUser] = React.useState('idle');
    const [userName, setUserName] = React.useState('');
    const [showToast, setShowToast] = React.useState(false)
    const [errorMessage, setErrorMessage] = React.useState("The error message could not be loaded")
    var auto = true

    stateofuser(auto)
    const statusofuser = (data) => {
        var usuario = data.username
        var status = data.status
        if (data.status === 'active') {
            setShowregister('2')
        } else if (data.status === 'idle') {
            setShowregister('0')
        }
        setStatusUser(status)
        setUserName(usuario)
    }
    const dataofuserinroom = (data) => {
        if (data.status === 'active') {
            setShowregister('2')
        } else if (data.status === 'idle') {
            setShowregister('0')
        }
        setStatusUser(data.status)
        setUserName(data.username)
    }

    const handleToast = (errorMessage) => {
        setShowToast(true)
        setErrorMessage(errorMessage)
    }

    onstatusofuser(statusofuser)
    onloginrunning(dataofuserinroom)
    var columns1 = [2, 2, 12]
    var columns2 = [10, 10, 12]
    if (statusUser === null || statusUser === '' || statusUser === 'data') {

    } else if (statusUser === 'active') {
        sessionStorage.setItem('username', userName)
        columns1 = [0, 0, 0]
        columns2 = [12, 12, 12]
    } else if (statusUser === 'idle') {
        columns1 = [2, 2, 12]
        columns2 = [10, 10, 12]
    }

    return (
        <Container fluid className='mt-4 mb-4'>
            <Row>
                {showregister === '0' ?
                    <Col lg={columns1[0]} md={columns1[1]} sm={columns1[2]}>
                        <br />
                        <LoginFrame changeregister={setShowregister} handleErrors={handleToast} />
                    </Col>
                    : showregister === "1" && (
                        <Col Col lg={columns1[0]} md={columns1[1]} sm={columns1[2]}>
                            <br />
                            <RegisterFrame changeregister={setShowregister} />
                        </Col>)
                }
                <Col style={styles.gamesandhall} lg={columns2[1]} md={columns2[1]} sm={columns2[2]}>
                    <Row className='justify-content-center' lg={12} md={12} sm={12}>
                        {statusUser === "active" ? <HeaderOptions changeregister={setShowregister} /> : false}
                    </Row>
                    <br />
                    <br />
                    <br />
                    <Row className='justify-content-around mb-2'>
                        <Col lg={3} md={4} sm={4}  >
                            <div style={styles.glassSquares}><Link to="/gameMines"><img style={styles.imgGames} src={GameBombs} alt="game-bombs" /></Link><br /></div>
                        </Col>
                        <br />
                        <Col lg={3} md={4} sm={4}  >
                            <div style={styles.glassSquares}> <Link to="/gameWheel"><img style={styles.imgGames} src={GameWheel} alt="game-wheel" /></Link><br /></div>
                        </Col><br />
                        <Col lg={3} md={4} sm={4} >
                            <div style={styles.glassSquares}><Link to="/gameTowers"><img style={styles.imgGames} src={GameTower} alt="game-towers" /></Link><br /></div>
                        </Col>
                    </Row>


                    <Row className='justify-content-center '>
                        <center><Col lg={12} md={12} sm={0}  >
                            <HallOfFame />
                        </Col></center>
                    </Row>
                </Col>

            </Row>
            <Row className='justify-content-center' >
                <Halloffame />
            </Row>
            <Toast style={styles.positionToast} onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide bg="danger" >
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Error</strong>
                </Toast.Header>
                <Toast.Body>{errorMessage}</Toast.Body>
            </Toast>
        </Container>
    )
}
export default DashboardFrame   