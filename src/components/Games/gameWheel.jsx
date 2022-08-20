import * as React from 'react'

///Assets
import OnlyWheel from '../../assets/OnlyWheel.png'
import './games.css'

/// Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Fondo from '../../assets/FONDO.jpg'



/// Components

import HeaderOptions from '../headerOptions';


const GameWheel = () => {

    //const [changeRotating, setChangeRotating] = React.useState(false)

    const styleDoc = document.createElement("style")
    
    
    const girarimagen = (numero) => {
        
            let num= parseInt(Math.random()*10000);
            console.log(num);
        
        let  numerovuleta=String(num);
        

        console.log('numero de vuelta: '+numerovuleta)
        const keyInjection = `@keyframes rotation {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(${numerovuleta}deg);
            }
        }`
        styleDoc.type = "text/css";
        styleDoc.appendChild(document.createTextNode(keyInjection))
        document.getElementsByTagName("head")[0].appendChild(styleDoc);
    }
    

    const styles = {
        glassRectangle: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #000000",
            borderRadius: "41px",
        },
        imgWheel: {
            maxWidth: "50%",
            maxHeight: "50%",
            animation: "rotation 8s  linear",
            animationFillMode: "forwards",
            alignItems: "center",
            justifyContent: "center"
        },
        rotationCss: {
        },
        content1: {
            width: "85%",
            backgroundPosition: "center center",
            height: "60px",
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #000000",
            borderRadius: "41px",
            alignItems: "center",
            justifyContent: "center"

        },
        row1: {
            width: "100%",
            alignItems: "center",
            justifyContent: "center",

        },
        content2: {
            width: "50%",
            backgroundPosition: "center center",
            height: "60px",
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #000000",
            borderRadius: "41px",
            alignItems: "center",
            justifyContent: "center"
        },
        mesas: {
            width: "10%",
            backgroundPosition: "center center",
            height: "60px",
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #000000",
            borderRadius: "41px",
            alignItems: "center",
            justifyContent: "center"

        }

    }

    return (
        <Container fluid style={{ backgroundImage: `url(${Fondo})`, backgroundSize: "cover", height: "100%", overflow: "hidden" }}>
            <HeaderOptions />
            <br />
            <br />
            <Row style={styles.row1}>
                <div className='row' style={styles.content2}>
                    <div className='col'> Icono</div>
                    <div className='col'><center><h1>1/8</h1></center></div>
                    <div className='col'><h1>Ganancia</h1></div>

                </div>

            </Row>
            <br />
            <br />
            <Row>
                <Col lg={2} style={styles.glassRectangle}>
                    Ganancias
                    <button onClick={() => { girarimagen('500deg') }}>SPIIIIN</button>
                </Col>
                <Col lg={8}>
                    {/* <ImgStylized />  */}
                    <center><img style={styles.imgWheel} src={OnlyWheel} alt=""  /></center>
                </Col>
                <Col lg={2} style={styles.glassRectangle}>
                    Otras Mesas
                </Col>
            </Row>
            <br />
            <Row style={styles.row1}>
                <div className='row' style={styles.mesas}>
                    <center><h1>5</h1></center>
                </div>
            </Row>

        </Container>
    )
}
export default GameWheel;