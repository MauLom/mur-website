import * as React from 'react'
import './games.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fondo from '../../assets/FONDO.jpg';
import HeaderOptions from '../headerOptions';
import Form from 'react-bootstrap/Form';
import ruleta from '../../assets/RULETA.png'
import bomba from '../../assets/BOMBAS.png'



const GameTowers = () => {
    const p1 = (piso) => {
        const estrellas = {
            1: 'zoom-in-zoom-out',
            2: 'zoom-in-zoom-out2',
            3: 'zoom-in-zoom-out3',
            4: 'zoom-in-zoom-out4',
            5: 'zoom-in-zoom-out5',
            6: 'zoom-in-zoom-out6',
            7: 'zoom-in-zoom-out7',
            8: 'zoom-in-zoom-out8',
            9: 'zoom-in-zoom-out9',
            10: 'zoom-in-zoom-out10',
            11: 'zoom-in-zoom-out11',
            12: 'zoom-in-zoom-out12',
            13: 'zoom-in-zoom-out13',
            14: 'zoom-in-zoom-out14',
            15: 'zoom-in-zoom-out15',
            16: 'zoom-in-zoom-out16',
            17: 'zoom-in-zoom-out17',
            18: 'zoom-in-zoom-out18',
            19: 'zoom-in-zoom-out19',
            20: 'zoom-in-zoom-out20',
            21: 'zoom-in-zoom-out21',
            22: 'zoom-in-zoom-out22',
            23: 'zoom-in-zoom-out23',
            24: 'zoom-in-zoom-out24',

        }
        const estrellasClick = estrellas[piso];
        // var i;
        // var id=0;
        // for(i=0; i<3;i++){
        //    id++;
        // console.log(id);
        // document.getElementById(id).disabled = true;
        //}
        //document.getElementById(piso).disabled = false; 
        const styleDoc = document.createElement("style")
        const keyInjection = `@keyframes ${estrellasClick} {
            0% {
              transform: scale(1, 1);
              
            }
            50% {
              transform: scale(1.5, 1.5);
              background-image: url(${bomba});
                   background-size: cover;
            }
            100% {
              transform: scale(1, 1);
              background-image: url(${bomba});
                   background-size: cover;
            }
          }`
        styleDoc.type = "text/css";
        styleDoc.appendChild(document.createTextNode(keyInjection))
        document.getElementsByTagName("head")[0].appendChild(styleDoc);
    }

    const styles = {
        col1: {
            paddingTop: "12%"
        },
        div1: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "20px",
            height: "200px",
            width: "80%",
            backgroundPosition: "center center",
        },
        div2: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "41px",
            height: "600px",
            width: "100%",
            backgroundPosition: "center center"
        },
        div3: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "41px",
            height: "100%",
            width: "75%",
        },
        form1: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "15px",
            height: "200%",
            width: "70%",
        },
        b1: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "20px",
            height: "50px",
            width: "100px",
            animation: "zoom-in-zoom-out 1s  linear",
            animationFillMode: "both",
        },
        button2: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "20px",
            height: "70px",
            width: "30%",
        },
        b2: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "20px",
            height: "50px",
            width: "100px",
            animation: "zoom-in-zoom-out2 1s  linear",
            animationFillMode: "both",
        },
        b3: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "20px",
            height: "50px",
            width: "100px",
            animation: "zoom-in-zoom-out3 1s  linear",
            animationFillMode: "both",
        },
        b4: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "20px",
            height: "50px",
            width: "100px",
            animation: "zoom-in-zoom-out4 1s  linear",
            animationFillMode: "both",
        },
        b5: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "20px",
            height: "50px",
            width: "100px",
            animation: "zoom-in-zoom-out5 1s  linear",
            animationFillMode: "both",
        },
        b6: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "20px",
            height: "50px",
            width: "100px",
            animation: "zoom-in-zoom-out6 1s  linear",
            animationFillMode: "both",
        },
        b7: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "20px",
            height: "50px",
            width: "100px",
            animation: "zoom-in-zoom-out7 1s  linear",
            animationFillMode: "both",
        },
        b8: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "20px",
            height: "50px",
            width: "100px",
            animation: "zoom-in-zoom-out8 1s  linear",
            animationFillMode: "both",
        },
        b9: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "20px",
            height: "50px",
            width: "100px",
            animation: "zoom-in-zoom-out9 1s  linear",
            animationFillMode: "both",
        },
        b10: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "20px",
            height: "50px",
            width: "100px",
            animation: "zoom-in-zoom-out10 1s  linear",
            animationFillMode: "both",
        },
        b11: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "20px",
            height: "50px",
            width: "100px",
            animation: "zoom-in-zoom-out11 1s  linear",
            animationFillMode: "both",
        },
        b12: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "20px",
            height: "50px",
            width: "100px",
            animation: "zoom-in-zoom-out12 1s  linear",
            animationFillMode: "both",
        },
        b13: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "20px",
            height: "50px",
            width: "100px",
            animation: "zoom-in-zoom-out13 1s  linear",
            animationFillMode: "both",
        },
        b14: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "20px",
            height: "50px",
            width: "100px",
            animation: "zoom-in-zoom-out14 1s  linear",
            animationFillMode: "both",
        },
        b15: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "20px",
            height: "50px",
            width: "100px",
            animation: "zoom-in-zoom-out15 1s  linear",
            animationFillMode: "both",
        },
        b16: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "20px",
            height: "50px",
            width: "100px",
            animation: "zoom-in-zoom-out16 1s  linear",
            animationFillMode: "both",
        },
        b17: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "20px",
            height: "50px",
            width: "100px",
            animation: "zoom-in-zoom-out17 1s  linear",
            animationFillMode: "both",
        },
        b18: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "20px",
            height: "50px",
            width: "100px",
            animation: "zoom-in-zoom-out18 1s  linear",
            animationFillMode: "both",
        },
        b19: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "20px",
            height: "50px",
            width: "100px",
            animation: "zoom-in-zoom-out19 1s  linear",
            animationFillMode: "both",
        },
        b20: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "20px",
            height: "50px",
            width: "100px",
            animation: "zoom-in-zoom-out20 1s  linear",
            animationFillMode: "both",
        },
        b21: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "20px",
            height: "50px",
            width: "100px",
            animation: "zoom-in-zoom-out21 1s  linear",
            animationFillMode: "both",
        },
        b22: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "20px",
            height: "50px",
            width: "100px",
            animation: "zoom-in-zoom-out22 1s  linear",
            animationFillMode: "both",
        },
        b23: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "20px",
            height: "50px",
            width: "100px",
            animation: "zoom-in-zoom-out23 1s  linear",
            animationFillMode: "both",
        },
        b24: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "20px",
            height: "50px",
            width: "100px",
            animation: "zoom-in-zoom-out24 1s  linear",
            animationFillMode: "both",
        },
    }
    return (
        <Container fluid style={{ backgroundImage: `url(${Fondo})`, backgroundSize: "cover", height: "100%", overflow: "hidden" }}>
            <br />
            <HeaderOptions />
            <br />
            <br />
            <Row>
                <Col className='d-flex justify-content-center' style={styles.col1} lg={4} sm={12}>
                    <div className='' style={styles.div1}>
                        <br />
                        <Row><center><h2><font color="white">Monto de apuesta</font></h2></center></Row>
                        <br />

                        <Row><center><Form.Control style={styles.form1} type="text" placeholder="$0.00" /></center></Row>
                        <br />
                        <br />
                    </div>
                </Col>
                <Col className='d-flex justify-content-center' lg={4} sm={12}>
                    <div style={styles.div2} >
                        <br />
                        <Row className='d-flex justify-content-around'>
                            <button id='1' style={styles.b22} onClick={() => { p1(22) }}>$0.01</button>
                            <button id='2' style={styles.b23} onClick={() => { p1(23) }}>$0.01</button>
                            <button id='3' style={styles.b24} onClick={() => { p1(24) }}>$0.01</button>
                        </Row>
                        <br />
                        <Row className='d-flex justify-content-around'>
                            <button id='1' style={styles.b19} onClick={() => { p1(19) }}>$0.01</button>
                            <button id='2' style={styles.b20} onClick={() => { p1(20) }}>$0.01</button>
                            <button id='3' style={styles.b21} onClick={() => { p1(21) }}>$0.01</button>
                        </Row>
                        <br />
                        <Row className='d-flex justify-content-around'>
                            <button id='1' style={styles.b16} onClick={() => { p1(16) }}>$0.01</button>
                            <button id='2' style={styles.b17} onClick={() => { p1(17) }}>$0.01</button>
                            <button id='3' style={styles.b18} onClick={() => { p1(18) }}>$0.01</button>
                        </Row>
                        <br />
                        <Row className='d-flex justify-content-around'>
                            <button id='1' style={styles.b13} onClick={() => { p1(13) }}>$0.01</button>
                            <button id='2' style={styles.b14} onClick={() => { p1(14) }}>$0.01</button>
                            <button id='3' style={styles.b15} onClick={() => { p1(15) }}>$0.01</button>
                        </Row>
                        <br />
                        <Row className='d-flex justify-content-around'>
                            <button id='1' style={styles.b10} onClick={() => { p1(10) }}>$0.01</button>
                            <button id='2' style={styles.b11} onClick={() => { p1(11) }}>$0.01</button>
                            <button id='3' style={styles.b12} onClick={() => { p1(12) }}>$0.01</button>
                        </Row>
                        <br />
                        <Row className='d-flex justify-content-around'>
                            <button id='1' style={styles.b7} onClick={() => { p1(7) }}>$0.01</button>
                            <button id='2' style={styles.b8} onClick={() => { p1(8) }}>$0.01</button>
                            <button id='3' style={styles.b9} onClick={() => { p1(9) }}>$0.01</button>
                        </Row>
                        <br />
                        <Row className='d-flex justify-content-around'>
                            <button id='1' style={styles.b4} onClick={() => { p1(4) }}>$0.01</button>
                            <button id='2' style={styles.b5} onClick={() => { p1(5) }}>$0.01</button>
                            <button id='3' style={styles.b6} onClick={() => { p1(6) }}>$0.01</button>
                        </Row>
                        <br />
                        <Row className='d-flex justify-content-around'>
                            <button id='1' style={styles.b1} onClick={() => { p1(1) }}>$0.01</button>
                            <button id='2' style={styles.b2} onClick={() => { p1(2) }}>$0.01</button>
                            <button id='3' style={styles.b3} onClick={() => { p1(3) }}>$0.01</button>
                        </Row>
                        <br />
                    </div>
                    <br />
                </Col>
                <br />
                <Col className='d-flex justify-content-center' lg={4} sm={12}>
                    <div style={styles.div3} className='d-flex justify-content-around'>
                        <img src={ruleta} height="150px" width="150px" alt="" />
                        <h1> <font color="white">Winners</font> </h1>
                    </div>                </Col>
            </Row>
            <br />
            <Row>
                <Col className='d-flex justify-content-center' lg={12} sm={12}>
                    <button style={styles.button2}><h2><font color="white">Retirar Ganancia</font></h2></button>
                </Col>
            </Row>

        </Container>

    )
}
export default GameTowers;

