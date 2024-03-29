import * as React from "react"

/// Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { io } from "socket.io-client";

///Other components
import Logo from '../assets/LOGO.png';
const Userlog = ({ changeregister }) => {
    const socket = io('http://localhost:8010')

    const User = sessionStorage.getItem("username")
    socket.on('joined', (data)=>{
    })
    const styles = {
        frameLoginBg: {
            height: "80%",

            boxSizing: "border-box",
            background: "linear-gradient(120.37deg, rgba(239, 239, 239, 0.6) 0%, rgba(255, 255, 255, 0.1) 100%)",
            border: "1px solid #EFEFEF",
            backdropFilter: "blur(60px)",
            borderRadius: "25px",
        },
        registerTitle: {
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "24px",
            lineHeight: "36px",
            textAlign: "center",
            letterSpacing: "0.03em",
            color: "#FFFFFF",
            textShadow: "15px 12px 50px rgba(0, 0, 0, 0.3)",
        },
        divider: {
            border: "3px solid #FFFFFF",
        },
        labelInputs: {
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "20px",
            lineHeight: "30px",
            letterSpacing: "0.03em",
            color: "#FFFFFF",
            textShadow: "15px 12px 50px"
        },
        inputs: {
            minHeight: "60px",

            background: "linear-gradient(120.37deg, rgba(239, 239, 239, 0.048) 0%, rgba(255, 255, 255, 0.008) 100%)",
            border: "2px solid #EFEFEF",
            boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.25)",
            borderRadius: "25px",
        },
        buttonRegister: {
            minWidth: "120px",
            minHeight: "60px",

            background: "linear-gradient(120.37deg, rgba(221, 122, 5, 0.8) 0%, rgba(236, 25, 164, 0.8) 100%)",
            border: "2px solid #EFEFEF",
            boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.25)",
            borderRadius: "20px",

            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "25px",
            lineHeight: "38px",
            textAlign: "center",
            letterSpacing: "0.03em",
            color: "#FFFFFF",
        },
    }
    return (
        <Row style={{ height: "100vh" }}>
            <Container fluid style={{ height: "100vh" }} >
                <Row><Col className="text-center"><img style={{ width: "100px", height: "100px" }} src={Logo} alt="Logo MUR" /></Col></Row>
                <Row style={{ height: "100vh" }}>
                    <Container style={styles.frameLoginBg}>

                        <Row className="mt-2"><Col><div style={styles.registerTitle}>Welcome to "The Casino"</div></Col></Row>
                        <Row className="mt-3"><Col><div style={styles.divider}></div></Col></Row>
                        <Row className="mt-3"><Col><div style={styles.divider}><h1> {User}</h1> </div></Col></Row>
                        <Row className="mt-3"><Col className="text-center"><button style={styles.buttonLogin} onClick={() => changeregister("0")}>Logout</button></Col></Row>
                    </Container>
                </Row>
            </Container>
        </Row>
    )
}
export default Userlog;