import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Toast } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GameBombs from '../assets/BOMBAS.png';
import GameWheel from '../assets/RULETA.png';
import GameTower from '../assets/TORRES.png';
import HeaderOptions from './HeaderOptions';
import LoginFrame from './LoginFrame';
import RegisterFrame from './RegisterFrame';
import HallOfFame from './ReusableModules/HallOfFame'; // Assuming this is the correct import
import { onStatusOfUser, onLoginRunning, stateOfUser } from './sockets';

const styles = {
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
    positionToast: {
        position: "absolute",
        top: "0",
        right: "0"
    }
};

const GameLink = ({ to, image, altText }) => (
    <Col lg={3} md={4} sm={4}>
        <div style={styles.glassSquares}>
            <Link to={to}><img style={styles.imgGames} src={image} alt={altText} /></Link><br />
        </div>
    </Col>
);

const DashboardFrame = () => {
    const [showRegister, setShowRegister] = useState('0');
    const [statusUser, setStatusUser] = useState('idle');
    const [userName, setUserName] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [errorMessage, setErrorMessage] = useState("The error message could not be loaded");

    useEffect(() => {
        stateOfUser(true);
        onStatusOfUser(data => setStatusAndUsername(data));
        onLoginRunning(data => setStatusAndUsername(data));
    }, []);

    const setStatusAndUsername = (data) => {
        setStatusUser(data.status);
        setUserName(data.username);
        setShowRegister(data.status === 'active' ? '2' : '0');
    };

    const handleToast = (message) => {
        setShowToast(true);
        setErrorMessage(message);
    };

    useEffect(() => {
        if (statusUser === 'active') {
            sessionStorage.setItem('username', userName);
        }
    }, [statusUser, userName]);

    const renderLoginOrRegister = () => {
        if (showRegister === '0') {
            return <LoginFrame changeRegister={setShowRegister} handleErrors={handleToast} />;
        } else if (showRegister === '1') {
            return <RegisterFrame changeRegister={setShowRegister} />;
        }
    };

    return (
        <Container fluid className='mt-4 mb-4'>
            <Row>
                <Col lg={statusUser === 'active' ? 0 : 2} md={statusUser === 'active' ? 0 : 2} sm={12}>
                    {renderLoginOrRegister()}
                </Col>
                <Col lg={statusUser === 'active' ? 12 : 10} md={statusUser === 'active' ? 12 : 10} sm={12}>
                    <Row className='justify-content-center mb-5'>
                        {statusUser === "active" && <HeaderOptions changeRegister={setShowRegister} />}
                    </Row>
                    <Row className='justify-content-around mb-2'>
                        <GameLink to="/gameMines" image={GameBombs} altText="game-bombs" />
                        <GameLink to="/gameWheel" image={GameWheel} altText="game-wheel" />
                        <GameLink to="/gameTowers" image={GameTower} altText="game-towers" />
                    </Row>
                    <Row className='justify-content-center'>
                        <HallOfFame />
                    </Row>
                </Col>
            </Row>
            <Toast style={styles.positionToast} onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide bg="danger">
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Error</strong>
                </Toast.Header>
                <Toast.Body>{errorMessage}</Toast.Body>
            </Toast>
        </Container>
    );
};

export default DashboardFrame;
