import * as React from "react";
import { Formik } from 'formik';

///Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

///AsseTs 


const WithdrawInfo = () => {

    const styles = {
        inputStylized: {
            background: "rgba(255, 255, 255, 0.2)",
            borderBottom: "3px solid rgb(239, 239, 239)",
            outline: "none",

            color:"#FFFFFF"
        }
    }

    return (
        <Row>
            <Col>
                <Row>
                    Confirma sus datos
                </Row>
                <Formik>
                    <form>

                        <Row>
                            <Col>
                                <Row> <lable>Nombres</lable></Row>
                                <Row>
                                    <Col><input style={styles.inputStylized} /></Col>
                                </Row>
                            </Col>

                            <Col>
                                <Row><label>Apellidos</label></Row>
                                <Row><Col><input style={styles.inputStylized} /></Col></Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Row><label>Fecha de nacimiento</label></Row>
                                <Row><Col><input style={styles.inputStylized} /></Col></Row>
                            </Col>
                            <Col>
                                <Row><label>Pais</label></Row>
                                <Row><Col><input style={styles.inputStylized} /></Col></Row>
                            </Col>
                        </Row>
                        <Row>
                            <Row><label>Direccion</label></Row>
                            <Row><Col sm={12} md={12} lg={12}><input className="w-75" style={styles.inputStylized} /></Col></Row>
                        </Row>
                        <Row>
                            <Col>
                                <Row><label> Ciudad</label></Row>
                                <Row><Col><input style={styles.inputStylized} /></Col></Row>
                            </Col>
                            <Col>
                                <Row><label>Estado/provincia</label></Row>
                                <Row><Col><input style={styles.inputStylized} placeholder="Estado/Provincia" /></Col></Row>
                            </Col>
                        </Row>
                        <Row>
                            <button>Continuar</button>
                        </Row>
                    </form>
                </Formik>

            </Col>
        </Row>
    )
}

export default WithdrawInfo