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

    const styleButtonsRed = { backgroundColor: "red", maxWidth: "25px" }
    const styleButtonsBlack = { backgroundColor: "black", maxWidth: "25px" }

    const [arrElements, setArrElements] = React.useState([
        [{ id: '1', monto: "$7.1", clickeado: false },
        { id: '2', monto: "$7.1", clickeado: false },
        { id: '3', monto: "$7.1", clickeado: false }],
        [{ id: '4', monto: "$6.1", clickeado: false },
        { id: '5', monto: "$6.1", clickeado: false },
        { id: '6', monto: "$6.1", clickeado: false }],
        [{ id: '7', monto: "$5.1", clickeado: false },
        { id: '8', monto: "$5.1", clickeado: false },
        { id: '9', monto: "$5.1", clickeado: false }],
        [{ id: '10', monto: "$4.1", clickeado: false },
        { id: '11', monto: "$4.1", clickeado: false },
        { id: '12', monto: "$4.1", clickeado: false }],
        [{ id: '13', monto: "$3.1", clickeado: false },
        { id: '14', monto: "$3.1", clickeado: false },
        { id: '15', monto: "$3.1", clickeado: false }],
        [{ id: '16', monto: "$2.1", clickeado: false },
        { id: '17', monto: "$2.1", clickeado: false },
        { id: '18', monto: "$2.1", clickeado: false }],
        [{ id: '19', monto: "$1.1", clickeado: false },
        { id: '20', monto: "$1.1", clickeado: false },
        { id: '21', monto: "$1.1", clickeado: false }],
        [{ id: '22', monto: "$0.1", clickeado: false },
        { id: '23', monto: "$0.1", clickeado: false },
        { id: '24', monto: "$0.1", clickeado: false }],
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
        const keyInjection = `@keyframes zoom-in-zoom-out {
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
        bgRed: {
            background: "rgba(255, 99, 71, 1)",
        },
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
        buttonorigin: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "20px",
            height: "50px",
            width: "100px",
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
            animation: "zoom-in-zoom-out 1s  linear",
            animationFillMode: "both",
        },

    }

    const botones = [{

        monto: ["$7.1", "$7.1", "$7.1", "$6.1", "$6.1", "$6.1", "$5.1", "$5.1", "$5.1", "$4.1", "$4.1", "$4.1", "$3.1", "$3.1", "$3.1", "$2.1", "$2.1", "$2.1", "$1.1", "$1.1", "$1.1", "$0.1", "$0.1", "$0.1"],
        clickeados: false
    }]
    let botons = botones.clickeados;
    const lista = botones.map((boton) =>
        <button style={botons === true ? styles.buttonorigin : styles.b1} onClick={() => { buttonClick(false) }}>{boton.monto[3]}</button>
    );
    const buttonClick = (boleano) => {
        let newbut = botones.clickeados;
        newbut = !boleano;
        let mont = botones.monto;
        console.log("botones clickeados en: ", newbut, mont);
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

                        {arrElements.map((eachRow, idx) => (
                            <Row className='d-flex justify-content-around'>
                                {eachRow.map((eachCol, jdx) => (
                                    <button id={eachCol.id} style={eachCol.clickeado? styleButtonsRed: styleButtonsBlack} onClick={() => { handleIsClickedElements(idx, jdx ) }}>{eachCol.monto}</button>
                                ))}

                            </Row>
                        ))}
                        <br />
                        <Row>
                            {lista}

                        </Row>



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

