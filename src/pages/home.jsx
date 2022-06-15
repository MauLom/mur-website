import * as React from "react"
import LoginFrame from "../components/loginFrame"
import DashboardFrame from "../components/dashboardFrame"

/// Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

///Other components

///Assets
import Fondo from '../assets/FONDO.jpg'
const Home = () => {

    return (

        <Container fluid style={{ backgroundImage: `url(${Fondo})`, backgroundSize: "cover", height: "100%", overflow: "hidden" }}>
            <Row>
                <Col lg={2} md={12}>
                    <LoginFrame />
                </Col>
                <Col lg={10} md={0} className="d-none d-lg-block" >
                    <DashboardFrame />
                </Col>

            </Row>


        </Container>

    )
}

export default Home