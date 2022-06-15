import * as React from 'react'

///Bootstrap components
import Col from 'react-bootstrap/Col';

const HeaderOptions = () => {

    return (
        <>
            <Col>
                Usuario
            </Col>
            <Col>
                <button style={{ background: "rgba(27, 191, 0, 0.92)", borderRadius: "41px", width: "159px", height: "41px", }} >Depositar</button>
            </Col>
            <Col>
                <button style={{ background: "rgba(27, 191, 0, 0.92)", borderRadius: "41px", width: "159px", height: "41px", }} >Retirar</button>
            </Col>
        </>
    )
}

export default HeaderOptions