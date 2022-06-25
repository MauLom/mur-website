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
const [hideLoginFrame, setHideLoginFrame] = React.useState(false)

    return (

        <Container fluid style={{ backgroundImage: `url(${Fondo})`, backgroundSize: "cover", height: "100%", overflow: "hidden" }}>
            <Row>
                {hideLoginFrame?<></>:
                <Col lg={2} md={12}>
                    <LoginFrame loginChange={setHideLoginFrame} />
                </Col>}
                {hideLoginFrame?<Col lg={12} md={12}><DashboardFrame  /></Col>:<Col lg={10} md={10} ><DashboardFrame  /></Col>}
                

            </Row>


        </Container>

    )
}

export default Home