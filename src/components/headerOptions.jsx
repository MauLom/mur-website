import * as React from 'react'

///Bootstrap components
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal'
import TransactionsFrame from './transactionsWindow';

const HeaderOptions = () => {

    const [show, setShow] =React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Row className="mx-3 mt-4" style={{ background: "rgba(231, 231, 231, 0.43)", borderRadius: "41px", width: "1469px", height: "60px", }}>
            <Col className="mx-4 mt-3">
                Usuario
            </Col>
            <Col className="mt-2 text-center">
                <button onClick={()=>{handleShow()}} style={{ background: "rgba(0, 209, 121, 0.92)", borderRadius: "41px", width: "130px", height: "41px", }} >Depositar</button>
            </Col>
            <Col className="text-center mt-2">
                <button style={{ background: "rgba(0, 209, 121, 0.92)", borderRadius: "41px", width: "130px", height: "41px", }} >Retirar</button>
            </Col>
            <Modal show={show} onHide={handleClose}>
                <TransactionsFrame/>
            </Modal>
        </Row>
    )
}

export default HeaderOptions