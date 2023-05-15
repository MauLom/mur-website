import * as React from "react"
/// Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import Logo from '../assets/LOGO.png';
import { emitstateofuser } from "./sockets";

const LoginFrame = ({ changeregister, handleErrors }) => {


    const [username, setUsername] = React.useState('')
    const [pass, setPass] = React.useState('')

    const hadleLogin = (e) => {
        // setUsername(e.target.value)
        // setPass(e.target.value)
        if (username === '' || pass === '' || username === 'data' || pass === 'data') {
            username === '' && handleErrors("El usuario no puede ir vacio")
            pass === '' && handleErrors("La contraseña no puede ir vacia")
            console.log("pass? ", pass)
        }
        else {
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
                    return res.json();
                })
                .then((data) => {
                    if (data.data === false || data.data === 'data' || data.data === null) {
                        handleErrors("El usuario no existe")
                    } else {
                        changeregister("2")
                        var datas = { "user": data.data, "status": "active" }
                        setTimeout(function () {
                            emitstateofuser(datas)
                        }, 1000)

                    }
                })
        }
    }
    const styles = {
        frameLoginBg: {
            height: "95vh",
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
            width: "100%",

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

        <Col>

            <Container>
                <Row >
                    <Container style={styles.frameLoginBg}>
                        <Row><Col className="text-center mb-4"><img style={{ width: "100px", height: "100px" }} src={Logo} alt="Logo MUR" /></Col></Row>
                        <Row className="mt-2 mb-4"><Col><div style={styles.loginTitle}>Login to Account</div></Col></Row>
                        <Row className="mt-3 mb-4"><Col><div style={styles.divider}></div></Col></Row>
                        <Row className="mt-3 mb-4"><Col className="text-center"><div style={styles.labelInputs}> Username</div></Col></Row>
                        <Row className="mt-2 mb-4">
                            <Col className="text-center">
                                <input id="inputID" type="text" style={styles.inputs} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" required /></Col></Row>

                        <Row className="mt-3 mb-4"><Col className="text-center"><div style={styles.labelInputs}>Password</div></Col></Row>
                        <Row className="mt-2 "><Col className="text-center">
                            <input id="inputID" type="password" style={styles.inputs} onChange={(e) => setPass(e.target.value)} placeholder="Enter password"  required /></Col></Row>
                        <br />
                        <br />
                        <Row className="mt-3"><Col className="text-center"><button style={styles.buttonLogin} onClick={(e) => hadleLogin(e)}>Login</button></Col></Row>
                        <br />

                        <Row className="mt-2 "><Col className="text-center"><Link to="/"><Button variant="text"><h5>Forgot your password?</h5> </Button></Link></Col></Row>
                        <Row className="mt-3"><Col className="text-center"><Link to="/"><Button variant="text" onClick={() => { changeregister("1", "") }}><h5>Register Now</h5></Button></Link></Col></Row>
                    </Container>
                </Row>
            </Container>

        </Col>
    )
}

export default LoginFrame