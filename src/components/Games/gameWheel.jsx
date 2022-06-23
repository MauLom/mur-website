import * as React from 'react'

///Assets
import OnlyWheel from '../../assets/OnlyWheel.png'

/// Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

/// Components
import HeaderOptions from '../headerOptions';



const GameWheel = () => {

    const [changeRotating, setChangeRotating] = React.useState(false)

    const [styleRotation, setStyleRotation] = React.useState(
        {
            maxWidth: "100%",
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
            borderRadius: "41px",
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
            <Row>
                <Col>
                    Cabecera juego
                </Col>
            </Row>
            <Row>
                <Col lg={2} style={styles.glassRectangle}>
                    Ganancias
                    <button onClick={() => { generateRotation() }}>SPIIIIN</button>
                </Col>
                <Col lg={8}>
                    {/* <ImgStylized />  */}
                    <img style={styleRotation} src={OnlyWheel} />
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