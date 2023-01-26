import * as React from "react"
import LoginFrame from "../components/loginFrame"
import RegisterFrame from "../components/registerFrame";

/// Bootstrap components
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';//ddd

///Other components

///Assets
const Home = () => {
    const [showregister, setShowregister] = React.useState('0');
    const datauser= sessionStorage.getItem("username");
    
    if (datauser===null || datauser==='' || datauser==='data'){
        console.log("igresa sesión para comenzar")
    }else{
        console.log("datos del usuario "+ datauser)
        
    }
   
    

    return (

        <Container fluid >
            <br />
            
            
                <Col>
                    {showregister  === '0' ? <LoginFrame changeregister={setShowregister} /> : showregister === "1"? <RegisterFrame changeregister={setShowregister}/> : showregister  === '2' ? console.log('sesion iniciada'):<LoginFrame changeregister={setShowregister}/> }
                </Col>
                
            


        </Container>

    )
}

export default Home