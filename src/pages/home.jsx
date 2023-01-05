import * as React from "react"
import LoginFrame from "../components/loginFrame"
import DashboardFrame from "../components/dashboardFrame"
import RegisterFrame from "../components/registerFrame";

/// Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';//ddd

///Other components

///Assets
import Fondo from '../assets/FONDO.jpg'
import Userlog from "../components/userlog";
const Home = () => {
    const [showregister, setShowregister] = React.useState('0');
    const datauser= sessionStorage.getItem("username");
    if (datauser===null || datauser==='' || datauser==='data'){
        console.log("igresa sesión para comenzar")
    }else{
        console.log("datos del usuario "+ datauser)
    }
    

    return (

        <Container fluid style={{ backgroundImage: `url(${Fondo})`, backgroundSize: "cover", height: "100%", overflow: "hidden" }}>
            <Row>
                <Col lg={2} md={12}>
                    {showregister  === '0' ? <LoginFrame changeregister={setShowregister} /> : showregister === "1"? <RegisterFrame changeregister={setShowregister}/> : showregister  === '2' ? <Userlog changeregister={setShowregister} />: datauser === '' || datauser==='data'? <LoginFrame changeregister={setShowregister}></LoginFrame>:<Userlog changeregister={setShowregister}></Userlog> }


                </Col>

                <Col lg={10} md={0} className="d-none d-lg-block" >
                    <DashboardFrame />
                </Col>

            </Row>


        </Container>

    )
}

export default Home