import * as React from "react"

///Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

///Assetes 
import QRExample from '../assets/QRExample.png'


const DepositInfo = () => {

    const styles = {
        logoBTC: {
            width: "170px",
            height: "70px"
        },
        qrExample: {
            width: "200px",
            height: "150px"
        },
    }

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Row>

                <Col md={1} sm={12} className="text-center mb-2" style={{ width: "100px", height: "100px" }} >
                    <Row className="mt-2 justify-content-center">
                        <img style={styles.logoBTC} alt="BTC-log" src="https://pngimg.com/uploads/bitcoin/bitcoin_PNG36.png" />
                    </Row>
                    <Row className="mt-2 justify-content-center" >
                        <img style={styles.qrExample} alt="QR-Code" src={QRExample} />
                    </Row>
                </Col>
                <Col md={2} sm={2} className="text-center mb-2">
                    <Row className="mt-4 mx-4"> <div >Wallet</div></Row>
                    <Row className="mt-2 mx-4">
                        <b className="font-weight-bold" >
                            bc1qz8q2yr6lhegxrsckr97kuvdlva8
                        </b>
                    </Row>
                    <Col>
                        Envíe cualquier cantidad de BTC a la siguiente dirección. En el caso de un depósito no instantáneo, se requiere 1 confirmación
                    </Col>
                </Col>  
            </Row>



        </>
    )
}

export default DepositInfo