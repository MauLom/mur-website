import * as React from 'react'
import './games.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Fondo from '../../assets/FONDO.jpg'
import bomba from '../../assets/BOMBAS.png'
import ruleta from '../../assets/RULETA.png'
import logo from '../../assets/LOGO.png'
import HeaderOptions from '../headerOptions';
import Button from 'react-bootstrap/Button';

const GameMines = () => {
    const bombas = (mina) => {
        const minas = {
            0: 'flipInY',
            1: 'flipInY1',
            2: 'flipInY2',
            3: 'flipInY3',
            4: 'flipInY4',
            5: 'flipInY5',
            6: 'flipInY6',
            7: 'flipInY7',
            8: 'flipInY8',
            9: 'flipInY9',
            10: 'flipInY10',
            11: 'flipInY11',
            12: 'flipInY12',
            13: 'flipInY13',
            14: 'flipInY14',
            15: 'flipInY15',
            16: 'flipInY16',
            17: 'flipInY17',
            18: 'flipInY18',
            19: 'flipInY19',
            20: 'flipInY20',
            21: 'flipInY21',
            22: 'flipInY22',
            23: 'flipInY23',
            24: 'flipInY24',

        }
        const minasclick = minas[mina];


        console.log(minasclick);

        const styleDoc = document.createElement("style")
        const keyInjection = `@keyframes ${minasclick} {
                0% {
                   transform: perspective(400px) rotateY(-90deg);
                   background-image: url(${bomba});
                   background-size: cover;
                }
                40% {
                   transform: perspective(400px) rotateY(-10deg);
                   background-image: url(${bomba});
                   background-size: cover;

                }
                70% {
                   transform: perspective(400px) rotateY(10deg);
                   background-image: url(${bomba});
                   background-size: cover;
                }
                100% {
                   transform: perspective(400px) rotateY(0deg);
                   opacity: 1;
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
        paddingTop: "15%"
    },
    div2: {
        background: "rgba(231, 231, 231, 0.43)",
        border: "1px solid #FFFFFF",
        borderRadius: "41px",
        height: "100%",
        width: "100%",
        backgroundPosition: "center center"
    },
    div3: {
        background: "rgba(231, 231, 231, 0.43)",
        border: "1px solid #FFFFFF",
        borderRadius: "41px",
        height: "100%",
        width: "90%",
    },
    div1: {
        background: "rgba(231, 231, 231, 0.43)",
        border: "1px solid #FFFFFF",
        borderRadius: "41px",
        height: "100%",
        width: "80%",
        backgroundPosition: "center center"
    },
    buttons: {
        background: "rgba(231, 231, 231, 0.43)",
        border: "1px solid #FFFFFF",
        borderRadius: "20px",
        height: "50px",
        width: "50px",

    },
    div: {
        width: "70%"
    },
    divaround: {
        width: "100%",
        background: "rgba(231, 231, 231, 0.43)",
        border: "1px solid #FFFFFF",
        borderRadius: "15px",
        height: "60px"
    },
    Buttonbet: {
        background: "rgba(9, 221, 5, 0.8)",
        width: "100%",
        border: "1px solid #FFFFFF",
        borderRadius: "15px",
        height: "60px"


    },
    buttons2: {
        width: "80px",
        height: "80px",
        animation: "flipInY 4s  linear",
        animationFillMode: "both",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${logo})`,
        backgroundSize: "cover",
        border: "1px solid #FFFFFF",
        borderRadius: "20px",

    },
    mina0: {
        width: "80px",
        height: "80px",
        animation: "flipInY 4s  linear",
        animationFillMode: "both",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${logo})`,
        backgroundSize: "cover",
        border: "1px solid #FFFFFF",
        borderRadius: "20px",
    },
    mina1: {
        width: "80px",
        height: "80px",
        animation: "flipInY1 4s  linear",
        animationFillMode: "both",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${logo})`,
        backgroundSize: "cover",
        border: "1px solid #FFFFFF",
        borderRadius: "20px",
    },
    mina2: {
        width: "80px",
        height: "80px",
        animation: "flipInY2 4s  linear",
        animationFillMode: "both",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${logo})`,
        backgroundSize: "cover",
        border: "1px solid #FFFFFF",
        borderRadius: "20px",
    },
    mina3: {
        width: "80px",
        height: "80px",
        animation: "flipInY3 4s  linear",
        animationFillMode: "both",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${logo})`,
        backgroundSize: "cover",
        border: "1px solid #FFFFFF",
        borderRadius: "20px",
    },
    mina4: {
        width: "80px",
        height: "80px",
        animation: "flipInY4 4s  linear",
        animationFillMode: "both",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${logo})`,
        backgroundSize: "cover",
        border: "1px solid #FFFFFF",
        borderRadius: "20px",
    },
    mina5: {
        width: "80px",
        height: "80px",
        animation: "flipInY5 4s  linear",
        animationFillMode: "both",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${logo})`,
        backgroundSize: "cover",
        border: "1px solid #FFFFFF",
        borderRadius: "20px",
    },
    mina6: {
        width: "80px",
        height: "80px",
        animation: "flipInY6 4s  linear",
        animationFillMode: "both",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${logo})`,
        backgroundSize: "cover",
        border: "1px solid #FFFFFF",
        borderRadius: "20px",
    },
    mina7: {
        width: "80px",
        height: "80px",
        animation: "flipInY7 4s  linear",
        animationFillMode: "both",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${logo})`,
        backgroundSize: "cover",
        border: "1px solid #FFFFFF",
        borderRadius: "20px",
    },
    mina8: {
        width: "80px",
        height: "80px",
        animation: "flipInY8 4s  linear",
        animationFillMode: "both",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${logo})`,
        backgroundSize: "cover",
        border: "1px solid #FFFFFF",
        borderRadius: "20px",
    },
    mina9: {
        width: "80px",
        height: "80px",
        animation: "flipInY9 4s  linear",
        animationFillMode: "both",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${logo})`,
        backgroundSize: "cover",
        border: "1px solid #FFFFFF",
        borderRadius: "20px",
    },
    mina10: {
        width: "80px",
        height: "80px",
        animation: "flipInY10 4s  linear",
        animationFillMode: "both",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${logo})`,
        backgroundSize: "cover",
        border: "1px solid #FFFFFF",
        borderRadius: "20px",
    },
    mina11: {
        width: "80px",
        height: "80px",
        animation: "flipInY11 4s  linear",
        animationFillMode: "both",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${logo})`,
        backgroundSize: "cover",
        border: "1px solid #FFFFFF",
        borderRadius: "20px",
    },
    mina12: {
        width: "80px",
        height: "80px",
        animation: "flipInY12 4s  linear",
        animationFillMode: "both",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${logo})`,
        backgroundSize: "cover",
        border: "1px solid #FFFFFF",
        borderRadius: "20px",
    },
    mina13: {
        width: "80px",
        height: "80px",
        animation: "flipInY13 4s  linear",
        animationFillMode: "both",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${logo})`,
        backgroundSize: "cover",
        border: "1px solid #FFFFFF",
        borderRadius: "20px",
    },
    mina14: {
        width: "80px",
        height: "80px",
        animation: "flipInY14 4s  linear",
        animationFillMode: "both",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${logo})`,
        backgroundSize: "cover",
        border: "1px solid #FFFFFF",
        borderRadius: "20px",
    },
    mina15: {
        width: "80px",
        height: "80px",
        animation: "flipInY15 4s  linear",
        animationFillMode: "both",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${logo})`,
        backgroundSize: "cover",
        border: "1px solid #FFFFFF",
        borderRadius: "20px",
    },
    mina16: {
        width: "80px",
        height: "80px",
        animation: "flipInY16 4s  linear",
        animationFillMode: "both",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${logo})`,
        backgroundSize: "cover",
        border: "1px solid #FFFFFF",
        borderRadius: "20px",
    },
    mina17: {
        width: "80px",
        height: "80px",
        animation: "flipInY17 4s  linear",
        animationFillMode: "both",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${logo})`,
        backgroundSize: "cover",
        border: "1px solid #FFFFFF",
        borderRadius: "20px",
    },
    mina18: {
        width: "80px",
        height: "80px",
        animation: "flipInY18 4s  linear",
        animationFillMode: "both",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${logo})`,
        backgroundSize: "cover",
        border: "1px solid #FFFFFF",
        borderRadius: "20px",
    },
    mina19: {
        width: "80px",
        height: "80px",
        animation: "flipInY19 4s  linear",
        animationFillMode: "both",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${logo})`,
        backgroundSize: "cover",
        border: "1px solid #FFFFFF",
        borderRadius: "20px",
    },
    mina20: {
        width: "80px",
        height: "80px",
        animation: "flipInY20 4s  linear",
        animationFillMode: "both",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${logo})`,
        backgroundSize: "cover",
        border: "1px solid #FFFFFF",
        borderRadius: "20px",
    },
    mina21: {
        width: "80px",
        height: "80px",
        animation: "flipInY21 4s  linear",
        animationFillMode: "both",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${logo})`,
        backgroundSize: "cover",
        border: "1px solid #FFFFFF",
        borderRadius: "20px",
    },
    mina22: {
        width: "80px",
        height: "80px",
        animation: "flipInY22 4s  linear",
        animationFillMode: "both",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${logo})`,
        backgroundSize: "cover",
        border: "1px solid #FFFFFF",
        borderRadius: "20px",
    },
    mina23: {
        width: "80px",
        height: "80px",
        animation: "flipInY23 4s  linear",
        animationFillMode: "both",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${logo})`,
        backgroundSize: "cover",
        border: "1px solid #FFFFFF",
        borderRadius: "20px",
    }

}
return (
    <Container fluid style={{ backgroundImage: `url(${Fondo})`, backgroundSize: "cover", height: "100%", overflow: "hidden" }}>
        <br />
        <HeaderOptions />
        <br />
        <br />
        <Row >
            <Col className='col-12 col-md-3 col-xs-12 list-unstyled' style={styles.col1}>
                <center><div style={styles.div1}>
                    <div style={styles.div}>
                        <br />

                        <div style={styles.divaround}>
                            <font color="white">Amount to bet</font>
                            <br />
                        </div>
                        <br />
                        <font color="white">Mines</font>
                        <br />
                        <div className='d-flex justify-content-between'>
                            <button style={styles.buttons}>1</button>
                            <button style={styles.buttons}>3</button>
                            <button style={styles.buttons}>5</button>
                            <button style={styles.buttons}>10</button>
                        </div>
                        <br />
                        <div>
                            <Button style={styles.Buttonbet}>BET</Button>{' '}
                        </div>
                        <br />

                    </div>
                </div></center>
            </Col>
            <br />
            <Col className='col-12 col-md-6 col-xs-12 list-unstyled'>
                <div style={styles.div2}>
                    <br />
                    <div className='d-flex justify-content-around'>
                        <button style={styles.mina0} onClick={() => { bombas(0) }}></button>
                        <button style={styles.mina1} onClick={() => { bombas(1) }}></button>
                        <button style={styles.mina2} onClick={() => { bombas(2) }}></button>
                        <button style={styles.mina3} onClick={() => { bombas(3) }}></button>
                    </div>
                    <br />
                    <div className='d-flex justify-content-around'>
                        <button style={styles.mina4} onClick={() => { bombas(4) }}></button>
                        <button style={styles.mina5} onClick={() => { bombas(5) }}></button>
                        <button style={styles.mina6} onClick={() => { bombas(6) }}></button>
                        <button style={styles.mina7} onClick={() => { bombas(7) }}></button>
                    </div>
                    <br />
                    <br />
                    <div className='d-flex justify-content-around'>
                        <button style={styles.mina8} onClick={() => { bombas(8) }}></button>
                        <button style={styles.mina9} onClick={() => { bombas(9) }}></button>
                        <button style={styles.mina10} onClick={() => { bombas(10) }}></button>
                        <button style={styles.mina11} onClick={() => { bombas(11) }}></button>
                    </div>
                    <br />
                    <br />
                    <div className='d-flex justify-content-around'>
                        <button style={styles.mina12} onClick={() => { bombas(12) }}></button>
                        <button style={styles.mina13} onClick={() => { bombas(13) }}></button>
                        <button style={styles.mina14} onClick={() => { bombas(14) }}></button>
                        <button style={styles.mina15} onClick={() => { bombas(15) }}></button>
                    </div>
                    <br />
                    <br />
                    <div className='d-flex justify-content-around'>
                        <button style={styles.mina16} onClick={() => { bombas(16) }}></button>
                        <button style={styles.mina17} onClick={() => { bombas(17) }}></button>
                        <button style={styles.mina18} onClick={() => { bombas(18) }}></button>
                        <button style={styles.mina19} onClick={() => { bombas(19) }}></button>
                    </div>
                    <br />
                    <br />
                    <div className='d-flex justify-content-around'>
                        <button style={styles.mina20} onClick={() => { bombas(20) }}></button>
                        <button style={styles.mina21} onClick={() => { bombas(21) }}></button>
                        <button style={styles.mina22} onClick={() => { bombas(22) }}></button>
                        <button style={styles.mina23} onClick={() => { bombas(23) }}></button>
                    </div>
                    <br />
                </div>

            </Col>
            <br />
            <Col className='col-12 col-md-3 col-xs-12 d-flex justify-content-end'>
                <div style={styles.div3} className='d-flex justify-content-around'>
                    <img src={ruleta} height="20%" width="40%" alt="" />
                    <h1> <font color="white">Winners</font> </h1>
                </div>

            </Col>
        </Row>
        <br />
        <br />

    </Container>
)
}
export default GameMines;
