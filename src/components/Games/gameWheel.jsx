import * as React from 'react'

///Assets
import OnlyWheel from '../../assets/OnlyWheel.png'
import Logo from '../../assets/LOGO.png'

/// Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal'
import TransactionsFrame from '../transactionsWindow';

/// Components
import HeaderOptions from '../headerOptions';


const GameWheel = () => {
    
    const [window, setWindow] = React.useState(false);
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);

    const handleClick = (origin) => {
        if (origin) {
            setWindow(true)
        } else {
            setWindow(false)
        }
        setShow(true)
    }


    const [changeRotating, setChangeRotating] = React.useState(false)

    const [styleRotation, setStyleRotation] = React.useState(
        {
            maxWidth: "70%",
            maxHeight: "100%",
            transition: "all 8s cubic-bezier(0,.57,.61,0.99)",
            // transform: "rotate(900deg)",
        }
    )

        


    const generateRotation = () => {
        const ticks = Math.floor(Math.random() * (15 - 30) + 15);
        const rotation = (360 * ticks) + (Math.floor(Math.random() * (5 - 360) + 5))

        setStyleRotation({
            ...styleRotation,
            transform: "rotate(" + rotation + "deg)"
        })
    }

    

    const styles = {
        glassRectangle: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #000000",
            borderRadius: "50px",
        },

        glassButton: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #000000",
            borderRadius: "50px",
            maxWidth: "170px",
            
            
            
        },

        imgWheel: {
            maxWidth: "100%",
            maxHeight: "100%",
            // animation: "rotation 4s infinite linear",
            // animationFillMode: "forwards",
            transition: "all 8s cubic-bezier(0,.57,.61,0.99)",
            transform: "rotate(900deg)",
        },
        rotationCss: {
        },

    }

    return (
        <Container fluid>
            <Row className="mx-3"><img style={{ width: "125px", height: "100px" }} src={Logo} alt="Logo MUR" />
                <Row className="mx-3 mt-4" style={{ background: "rgba(231, 231, 231, 0.43)", borderRadius: "41px", width: "1600px", height: "60px", justifyContent: "center" }}>
                    <Col className=" mt-3">
                        usuario
                    </Col>
                    <Col className="mt-2 text-center">
                        <button onClick={() => { handleClick(true) }} style={{ background: "rgba(0, 209, 121, 0.92)", borderRadius: "41px", width: "130px", height: "41px", }} >Depositar</button>
                    </Col>
                    <Col className="text-center mt-2">
                        <button onClick={() => { handleClick(false) }} style={{ background: "rgba(0, 209, 121, 0.92)", borderRadius: "41px", width: "130px", height: "41px", }} >Retirar</button>
                    </Col>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Body>
                            <TransactionsFrame windowToOpen={window} />
                        </Modal.Body>
                    </Modal>
                </Row>
            </Row>
            <Row className="text-center" style={{ justifyContent: "center" }}>
                <Col lg={2} style={styles.glassRectangle}>
                    Ganancias
                    <button onClick={() => { generateRotation() }}>SPIIIIN</button>
                </Col>
                <Col className="text-center" lg={7}>
                    {/* <ImgStylized />  */}
                    <img style={styleRotation} src={OnlyWheel} />
                </Col>
                <Col lg={2} style={styles.glassRectangle}>
                    Otras Mesas
                </Col>
            </Row>
            <Row style={{ justifyContent: "center", height: "70px" }}>
                <Col className="text-center" style={styles.glassButton} >
                    Cantidad a apostar
                </Col>
            </Row>
        </Container>
    )
}
export default GameWheel;