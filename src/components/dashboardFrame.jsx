import * as React from 'react'

///Bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DashboardFrame = () => {
    return (
        <>
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
        </>
    )
}
export default DashboardFrame