import * as React from "react"
/// Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import Logo from '../assets/LOGO.png';
import { io } from 'socket.io-client';

const LoginFrame = ({ changeregister }) => {
    //const socket = io('http://localhost:8010')
    sessionStorage.setItem("username", "data")

    const [username, setUsername] = React.useState('')
    const [pass, setPass] = React.useState('')



    const hadleLogin = (e) => {
        setUsername(e.target.value)
        setPass(e.target.value)
        if (username === '' || pass === '') {

        } else {

            const UrlLogin = "http://localhost:8010/getUsers/login"
            fetch(UrlLogin, {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': 'true',
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                    "username": username,
                    "password": pass
                })
            })
                .then(res => {
                    console.log('response', res)
                    return res.json();

                })
                .then((data) => {
                    console.log('mensaje del servidor: ', data)
                    if (data.data === false) {

                    } else {
                        changeregister("2")
                        sessionStorage.setItem("username", data.data)
                        //socket.emit('joined', data.data)
                    }


                })



        }
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
        loginTitle: {
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
            width: "100%"
        },
        buttonLogin: {
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
        <Container>
            <Col>
                
                    <Container>
                        <Row><Col className="text-center"><img style={{ width: "100px", height: "100px" }} src={Logo} alt="Logo MUR" /></Col></Row>
                        <Row >
                            <Container style={styles.frameLoginBg}>
                                <Row className="mt-2"><Col><div style={styles.loginTitle}>Login to Account</div></Col></Row>
                                <Row className="mt-3"><Col><div style={styles.divider}></div></Col></Row>
                                <Row className="mt-3"><Col className="text-center"><div style={styles.labelInputs}> Username</div></Col></Row>
                                <Row className="mt-2"><Col className="text-center"><input type="text" style={styles.inputs} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" required /></Col></Row>

                                <Row className="mt-3"><Col className="text-center"><div style={styles.labelInputs}>Password</div></Col></Row>
                                <Row className="mt-2"><Col className="text-center"><input type="text" style={styles.inputs} onChange={(e) => setPass(e.target.value)} placeholder="Enter password" required /></Col></Row>

                                <Row className="mt-3"><Col className="text-center"><button style={styles.buttonLogin} onClick={(e) => hadleLogin(e)}>Login</button></Col></Row>


                                <Row className="mt-2"><Col className="text-center"><Link to="/">Forgot your password?</Link></Col></Row>
                                <Row className="mt-5"><Col className="text-center"><Link to="/"><Button variant="text" onClick={() => { changeregister("1", "") }}>Register Now</Button></Link></Col></Row>
                            </Container>
                        </Row>
                    </Container>
                
            </Col>
        </Container>
    )
}

export default LoginFrame