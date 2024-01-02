import * as React from "react"

/// Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/esm/Button";
import { Form } from "react-bootstrap";


///Other components
import { Link } from "react-router-dom";
import Logo from '../assets/LOGO.png'



const RegisterFrame = ({ changeregister }) => {

    //const axios = require('axios');
    const [userName, setUserName] = React.useState('')
    const [userEmail, setUserEmail] = React.useState('')
    const [userPassword, setUserPassword] = React.useState('')



    const handlRegisterUser = (event) => {
        setUserName(event.target.value)
        setUserEmail(event.target.value)
        setUserPassword(event.target.value)

        const UrlLogin = "http://localhost:8010/getUsers/register"
        fetch(UrlLogin, {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': 'true',
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                "username": userName,
                "password": userPassword,
                "email": userEmail
            })
        })
            .then(res => {
                return res.json();

            })
            .then((data) => {
            })

    }



    const styles = {
        frameLoginBg: {
            height: "80%",
            boxSizing: "border-box",
            background: "linear-gradient(120.37deg, rgba(239, 239, 239, 0.6) 0%, rgba(255, 255, 255, 0.1) 100%)",
            border: "1px solid #EFEFEF",
            backdropFilter: "blur(60px)",
            borderRadius: "25px",
            alignItems: "center"
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
            width: "100%",
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
        <Col>
            <Container>
                <Row><Col className="text-center"><img style={{ width: "100px", height: "100px" }} src={Logo} alt="Logo MUR" /></Col></Row>
                <br />
                <Row >
                    <Container style={styles.frameLoginBg}>

                        <Row className="mt-2"><Col className="text-center"><div style={styles.registerTitle}>Create an account</div></Col></Row>
                        <Row className="mt-3"><Col className="text-center"><div style={styles.divider}></div></Col></Row>
                        <Row className="mt-3"><Col className="text-center"><div style={styles.labelInputs}> Username</div></Col></Row>
                        <Row className="mt-2"><Col className="text-center"><input id="inputID"  value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Enter username" /></Col></Row>
                        <Row className="mt-3"><Col className="text-center"><div style={styles.labelInputs}>Password</div></Col></Row>
                        <Row className="mt-2"><Col className="text-center"><input id="inputID" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} placeholder="Enter password" /></Col></Row>
                        <Row className="mt-3"><Col className="text-center"><div style={styles.labelInputs}>Email</div></Col></Row>
                        <Row className="mt-2"><Col className="text-center"><input id="inputID"  value={userEmail} onChange={(e) => setUserEmail(e.target.value)} placeholder="Enter email" /></Col></Row>
                        <p alignItems="center"><Form.Check type="switch" fontColor="white" label="I have read and accept the terms and services" /> </p>
                        <p><Form.Check type="switch" label="Im older than 18 years old" /></p>
                        <Row className="mt-3"><Col className="text-center"><button style={styles.buttonRegister} onClick={(e) => { handlRegisterUser(e) }}>Register</button></Col></Row>
                        <Row className="mt-3"><Col className="text-center"><Link to="/"><Button variant="text" onClick={() => { changeregister("0") }}><h5>Want to Login?</h5></Button></Link></Col></Row>
                    </Container>
                </Row>
            </Container>
        </Col>
    )
}

export default RegisterFrame