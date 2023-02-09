import * as React from "react"
import LoginFrame from "../components/loginFrame"
import RegisterFrame from "../components/registerFrame";

/// Bootstrap components
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';//ddd
import DashboardFrame from "../components/dashboardFrame";
///Other components

///Assets
const Home = () => {
    
    return (

        <Container fluid >
            
                <DashboardFrame/>
                
            


        </Container>

    )
}

export default Home