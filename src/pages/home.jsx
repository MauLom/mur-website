import * as React from "react"

/// Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

///Other components
import { Link } from "react-router-dom";

///Assets
import bgEllipse from '../assets/Bg.png'
import Logo from '../assets/LOGO.png'
import Fondo from '../assets/FONDO.jpg'
const Home = () => {

    const styles = {
        frameLoginBg: {
            height: "80%",

            boxSizing: "border-box",
            background: "linear-gradient(120.37deg, rgba(239, 239, 239, 0.6) 0%, rgba(255, 255, 255, 0.1) 100%)",
            border: "1px solid #EFEFEF",
            backdropFilter: "blur(60px)",
            borderRadius: "25px",
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
        }

    }
    

    return (

        <Container fluid style={{ backgroundImage: `url(${Fondo})`, backgroundSize: "cover", height: "100%", overflow: "hidden" }}>
            <Col>
                <Row style={{ height: "100vh" }}>
                    <Col lg={2} md={12}>
                        <Container fluid style={{ height: "100vh" }} >
                            <Row><Col className="text-center"><img style={{ width: "100px", height: "100px" }} src={Logo} alt="Logo MUR" /></Col></Row>
                            <Row style={{ height: "100vh" }}>
                                <Container style={styles.frameLoginBg}>
                                    <Row className="mt-2"><Col><div style={styles.loginTitle}>Login to Account</div></Col></Row>
                                    <Row className="mt-3"><Col><div style={styles.divider}></div></Col></Row>
                                    <Row className="mt-3"><Col><div style={styles.labelInputs}> Username</div></Col></Row>
                                    <Row className="mt-2"><Col><input style={styles.inputs} placeholder="Enter username" /></Col></Row>
                                    <Row className="mt-3"><Col><div style={styles.labelInputs}>Password</div></Col></Row>
                                    <Row className="mt-2"><Col><input style={styles.inputs} placeholder="Enter password" /></Col></Row>
                                    <Row className="mt-3"><Col className="text-center"><button style={styles.buttonLogin}>Login</button></Col></Row>
                                    <Row className="mt-2"><Col className="text-center"><Link to="/">Forgot your password?</Link></Col></Row>
                                    <Row className="mt-5"><Col className="text-center"><Link to="/">Register here</Link></Col></Row>

                                </Container>

                            </Row>
                        </Container>

                    </Col>
                    <Col lg={10} md={0} className="d-none d-lg-block" >
                        <Row style={{ background: "rgba(231, 231, 231, 0.43)", borderRadius: "41px", width: "1474px", height: "60px" }}>
                            <Col>
                                Usuario
                                </Col>
                                <Col>
                                <button style={{ background: "rgba(27, 191, 0, 0.92)", borderRadius: "41px", width: "159px", height: "41px", }} >Depositar</button>
                                </Col>
                                <Col>
                                <button style={{ background: "rgba(27, 191, 0, 0.92)", borderRadius: "41px", width: "159px", height: "41px", }} >Retirar</button>
                                </Col>
                        </Row>
                        <Row>
                            <Col className="mt-4" style={{ background: "rgba(231, 231, 231, 0.43)", borderRadius: "41px", width: "453px", height: "352px" }}>Cosas juegos</Col>
                            <Col className="mt-4" style={{ background: "rgba(231, 231, 231, 0.43)", borderRadius: "41px", width: "453px", height: "352px" }}>Cosas juegos</Col>
                            <Col className="mt-4" style={{ background: "rgba(231, 231, 231, 0.43)", borderRadius: "41px", width: "453px", height: "352px" }}>Cosas juegos</Col>

                        </Row>
                        <Row>
                            <Col className="mt-4" style={{ background: "rgba(231, 231, 231, 0.43)", borderRadius: "41px", width: "1469px", height: "428px" }} >Hall of fame</Col>
                        </Row>
                    </Col>
                </Row>
            </Col>


        </Container>

    )
}

export default Home