import * as React from "react";
import { Formik } from 'formik';

///Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

///AsseTs 


const WithdrawInfo = () => {

    const styles = {
        buttonStylized: {
            minWidth: "120px",
            minHeight: "30px",

            background: "linear-gradient(120.37deg, rgba(221, 122, 5, 0.8) 0%, rgba(236, 25, 164, 0.8) 100%)",
            border: "2px solid #EFEFEF",
            boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.25)",
            borderRadius: "20px",

            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "25px",
            lineHeight: "38px",
            textAlign: "center",
            letterSpacing: "0.03em",
            color: "#FFFFFF",
        },


        inputStylized: {
            background: "rgba(255, 255, 255, 0.2)",
            borderBottom: "3px solid rgb(239, 239, 239)",
            outline: "none",
            fontStyle: "normal",
            border: "2px solid #EFEFEF",
            boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.25)",
            borderRadius: "20px",
            textAlign: "center",
            color: "#FFFFFF",
        }
    }

    return (
        <Row>
            <Col>
                <Row className="mt-3 mx-1">
                    Confirma sus datos
                </Row>
                <Formik>
                    <form>

                        <Row>
                            <Col>
                                <Row className="mt-2"> <lable>Nombres</lable></Row>
                                <Row>
                                    <Col><input style={styles.inputStylized} /></Col>
                                </Row>
                            </Col>

                            <Col>
                                <Row className="mt-2"><label>Apellidos</label></Row>
                                <Row><Col><input style={styles.inputStylized} /></Col></Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Row className="mt-2"><label>Fecha de nacimiento</label></Row>
                                <Row><Col><input style={styles.inputStylized} /></Col></Row>
                            </Col>
                            <Col>
                                <Row className="mt-2"><label>Pais</label></Row>
                                <Row><Col><input style={styles.inputStylized} /></Col></Row>
                            </Col>
                        </Row>
                        <Row>
                            <Row className="mt-2"><label>Direccion</label></Row>
                            <Row><Col sm={12} md={12} lg={12}><input className="w-75" style={styles.inputStylized} /></Col></Row>
                        </Row>
                        <Row>
                            <Col>
                                <Row className="mt-2"><label> Ciudad</label></Row>
                                <Row><Col><input style={styles.inputStylized} /></Col></Row>
                            </Col>
                            <Col>
                                <Row className="mt-2"><label>Estado/provincia</label></Row>
                                <Row><Col><input style={styles.inputStylized} placeholder="Estado/Provincia" /></Col></Row>
                            </Col>
                        </Row>
                        <Row>
                            <button style={styles.buttonStylized} className= "mt-3" >Continuar</button>
                        </Row>
                    </form>
                </Formik>

            </Col>
        </Row>
    )
}

export default WithdrawInfo