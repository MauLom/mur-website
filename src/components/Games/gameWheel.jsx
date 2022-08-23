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
    const [deshabilitar, setDeshabilitar] = React.useState(false)
    const [deshabilitar2, setDeshabilitar2] = React.useState(true)
    const [num1, setNum1] = React.useState(0)


    const styleDoc = document.createElement("style")

     
    const registermembers = () => {
        let nombre = document.getElementById('nombre').value;
        let tabla = document.getElementById('tabla').insertRow(1);
        let col1 = tabla.insertCell(0);
        let col2 = tabla.insertCell(1);
        
        if (num1 < 8) {
            setNum1(num1+1)
            col1.innerHTML = num1+1;
            
            col2.innerHTML = nombre;
            

            
        }else{
            setDeshabilitar(!deshabilitar)
            setDeshabilitar2(!deshabilitar2)

        }

    }


    const girarimagen = () => {

        let num = parseInt(Math.random() * 10000);
        console.log(num);

        let numerovuleta = String(num);


        console.log('numero de vuelta: ' + numerovuleta)
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

        }, table: {
            border: "1px solid black",
            borderRadius: "5px",
            backgroundColor: "white",
            alignItems: "center",
            with: "100%"

        },
        td: {
            width: "100%",
            textAlign: "left",
            verticalAlign: "top",
            border: "1px solid #000",
            borderCollapse: "collapse"
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
                    <div className='col'><center><h1>{num1}/8</h1></center></div>
                    <div className='col'><h1>Ganancia</h1></div>

                </div>

            </Row>
            <br />
            <br />
            <Row className='d-flex justify-content-center'>
                <Col lg={2} style={styles.glassRectangle}>
                    <Row className='d-flex justify-content-center'>
                    Ganancias 
                    </Row>
                    <Row className='d-flex justify-content-center'>
                    <input type="text" id='nombre' placeholder='Insert User Name' /> <br />
                    </Row>
                    <br />
                    <Row className='d-flex justify-content-center'>
                    <button id='registrar' disabled={deshabilitar} onClick={() => { registermembers() }}>Register</button>
                    </Row>
                    <br />
                    <Row className='d-flex justify-content-center'>
                    <button disabled={deshabilitar2} onClick={() => { girarimagen() }}>Apostar</button>
                    </Row>
                </Col>
                <Col lg={8}>
                    {/* <ImgStylized />  */}
                    <center><img style={styles.imgWheel} src={OnlyWheel} alt="" /></center>
                </Col>
                <Col lg={2} style={styles.glassRectangle}>
                    Otras Mesas

                    <table id='tabla' style={styles.table}>
                        <tr style={styles.td}><td>No. de jugador</td> <td style={styles.td}>Nombre</td></tr>


                    </table>
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