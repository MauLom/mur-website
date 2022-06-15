import * as React from 'react'
import GameWheel from '../components/Games/gameWheel';


/// Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

///Other components

///Assets
import Fondo from '../assets/FONDO.jpg'
const Games = () => {

    return (
        <Container fluid style={{ backgroundImage: `url(${Fondo})`, backgroundSize: "cover", height: "100%", overflow: "hidden" }}>
        <Row>
            <Col lg={12} md={12}>
                <GameWheel />
            </Col>
        </Row>
    </Container>
    )
}

export default Games;