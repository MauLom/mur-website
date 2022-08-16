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

    const styleMinaOriigin = {
        width: "80px",
        height: "80px",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${logo})`,
        backgroundSize: "cover",
        border: "1px solid #FFFFFF",
        borderRadius: "20px"
    }
    const styleMinaAnimated = {
        width: "80px",
        height: "80px",
        animation: "flipInY 4s  linear",
        animationFillMode: "both",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${logo})`,
        backgroundSize: "cover",
        border: "1px solid #FFFFFF",
        borderRadius: "20px"
    }
    const [arrElements, setArrElements] = React.useState([
        [{ id: '1', clickeado: false },
        { id: '2', clickeado: false },
        { id: '3', clickeado: false },
        { id: '4', clickeado: false }],
        [{ id: '5', clickeado: false },
        { id: '6', clickeado: false },
        { id: '7', clickeado: false },
        { id: '8', clickeado: false }],
        [{ id: '9', clickeado: false },
        { id: '10', clickeado: false },
        { id: '11', clickeado: false },
        { id: '12', clickeado: false }],
        [{ id: '13', clickeado: false },
        { id: '14', clickeado: false },
        { id: '15', clickeado: false },
        { id: '16', clickeado: false }],
        [{ id: '17', clickeado: false },
        { id: '18', clickeado: false },
        { id: '19', clickeado: false },
        { id: '20', clickeado: false }],
        [{ id: '21', clickeado: false },
        { id: '22', clickeado: false },
        { id: '23', clickeado: false },
        { id: '24', clickeado: false }],
        
    ])
    const handleIsClickedElements = (idx, jdx) => {
        let newArr = JSON.parse(JSON.stringify(arrElements))
        //let newArr = arrElements
        let newObj = newArr[idx]

        newObj[jdx].clickeado = !newObj[jdx].clickeado
        newArr.splice(idx, newObj)

        setArrElements(newArr)
        console.log("arrElements", arrElements[idx][jdx])

        const styleDoc = document.createElement("style")
    const keyInjection = `@keyframes flipInY {
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
                        {arrElements.map((eachRow, idx) => (
                            <Row className='d-flex justify-content-around'>
                                {eachRow.map((eachCol, jdx) => (
                                    <button id={eachCol.id} style={eachCol.clickeado? styleMinaAnimated: styleMinaOriigin} onClick={() => { handleIsClickedElements(idx, jdx ) }}>{eachCol.monto}</button>
                                ))}

                            </Row>
                        ))}

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
