import * as React from 'react'

///Assets
import OnlyWheel from '../../assets/OnlyWheel.png'
import './games.css'

/// Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

/// Components
import HeaderOptions from '../headerOptions';



const GameWheel = () => {

    const [changeRotating, setChangeRotating] = React.useState(false)

    const styleDoc =document.createElement("style")
    const keyInjection =`@keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(300deg);
        }
    }`
    styleDoc.type = "text/css";
    styleDoc.appendChild(document.createTextNode(keyInjection))
    document.getElementsByTagName("head")[0].appendChild(styleDoc);

    const styles = {
        glassRectangle: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #000000",
            borderRadius: "41px",
        },
        imgWheel: {
            maxWidth: "100%",
            maxHeight: "100%",
            animation: "rotation 4s  linear",
            animationFillMode: "forwards"
        },
        rotationCss: {
        },

    }

    return (
        <Container fluid>
            <Row>
                <Col>
                    Cabecera juego
                </Col>
            </Row>
            <Row>
                <Col lg={2} style={styles.glassRectangle}>
                    Ganancias
                    <button onClick={() => { setChangeRotating(!changeRotating) }}>SPIIIIN</button>
                </Col>
                <Col lg={8}>
                    {/* <ImgStylized />  */}
                    <img style={styles.imgWheel} src={OnlyWheel} />
                </Col>
                <Col lg={2} style={styles.glassRectangle}>
                    Otras Mesas
                </Col>
            </Row>
            <Row>
                <Col style={styles.glassRectangle}>
                    Cantidad a apostar
                </Col>
            </Row>
        </Container>
    )
}
export default GameWheel;