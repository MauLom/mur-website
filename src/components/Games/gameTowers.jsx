import * as React from 'react'
import './games.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fondo from '../../assets/FONDO.jpg';
import HeaderOptions from '../HeaderOptions';
import Form from 'react-bootstrap/Form';
import ruleta from '../../assets/RULETA.png'
import bomba from '../../assets/BOMBAS.png'
import { emitwithdrawals } from '../sockets.js';
import ficha from '../../assets/ficha.png'
import logo from '../../assets/LOGO.png'
import { Button } from 'react-bootstrap';


const GameTowers = () => {
    const User = sessionStorage.getItem("username")
    const [amount, setAmount] = React.useState(0);
    const styleoriginbutton = { background: "rgba(231, 231, 231, 0.43)", border: "1px solid #ffffff", borderRadius: "20px", height: "50px", width: "30%" }
    const stylebuttonanimated = { background: "rgba(231, 231, 231, 0.43)", border: "1px solid #ffffff", borderRadius: "20px", height: "50px", width: "30%", animation: "zoom-in-zoom-out 1s  linear", animationFillMode: "both" }
    const [scaladefloor, setScaledfloor] = React.useState('107');
    const [profitobtained, setProfitobtained] = React.useState(0);
    const [readytoplay, setReadytoplay] = React.useState(0);
    const [withdraw, setWithdraw] = React.useState(true);
    const [playerstate, setPlayerstate] = React.useState(true);
    
    const animationwin = [
        {
            transform: 'scale(1, 1)',
        },
        {
            transform: 'scale(1.5, 1.5)',
            backgroundImage: `url(${logo})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        },
        {
            transform: 'scale(1, 1)',
            backgroundImage: `url(${logo})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }

    ]
    const animationlose = [
        {
            transform: 'scale(1, 1)',
        },
        {
            transform: 'scale(1.5, 1.5)',
            backgroundImage: `url(${bomba})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        },
        {
            transform: 'scale(1, 1)',
            backgroundImage: `url(${bomba})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }

    ]
    const duration = {
        duration: 1000,
    }
    var lista = ['1', '2', '3'];
    let fila = 100;
    const [arrElements, setArrElements] = React.useState([
        [{ id: '1', monto: "$7.1", clickeado: false, fila: '100', position: '1', iddiv: 'div1' },
        { id: '2', monto: "$7.1", clickeado: false, fila: '100', position: '2', iddiv: 'div2' },
        { id: '3', monto: "$7.1", clickeado: false, fila: '100', position: '3', iddiv: 'div3' }],
        [{ id: '4', monto: "$6.1", clickeado: false, fila: '101', position: '1', iddiv: 'div4' },
        { id: '5', monto: "$6.1", clickeado: false, fila: '101', position: '2', iddiv: 'div5' },
        { id: '6', monto: "$6.1", clickeado: false, fila: '101', position: '3', iddiv: 'div6' }],
        [{ id: '7', monto: "$5.1", clickeado: false, fila: '102', position: '1', iddiv: 'div7' },
        { id: '8', monto: "$5.1", clickeado: false, fila: '102', position: '2', iddiv: 'div8' },
        { id: '9', monto: "$5.1", clickeado: false, fila: '102', position: '3', iddiv: 'div9' }],
        [{ id: '10', monto: "$4.1", clickeado: false, fila: '103', position: '1', iddiv: 'div10' },
        { id: '11', monto: "$4.1", clickeado: false, fila: '103', position: '2', iddiv: 'div11' },
        { id: '12', monto: "$4.1", clickeado: false, fila: '103', position: '3', iddiv: 'div12' }],
        [{ id: '13', monto: "$3.1", clickeado: false, fila: '104', position: '1', iddiv: 'div13' },
        { id: '14', monto: "$3.1", clickeado: false, fila: '104', position: '2', iddiv: 'div14' },
        { id: '15', monto: "$3.1", clickeado: false, fila: '104', position: '3', iddiv: 'div15' }],
        [{ id: '16', monto: "$2.1", clickeado: false, fila: '105', position: '1', iddiv: 'div16' },
        { id: '17', monto: "$2.1", clickeado: false, fila: '105', position: '2', iddiv: 'div17' },
        { id: '18', monto: "$2.1", clickeado: false, fila: '105', position: '3', iddiv: 'div18' }],
        [{ id: '19', monto: "$1.1", clickeado: false, fila: '106', position: '1', iddiv: 'div19' },
        { id: '20', monto: "$1.1", clickeado: false, fila: '106', position: '2', iddiv: 'div20' },
        { id: '21', monto: "$1.1", clickeado: false, fila: '106', position: '3', iddiv: 'div21' }],
        [{ id: '22', monto: "$0.1", clickeado: false, fila: '107', position: '1', iddiv: 'div22' },
        { id: '23', monto: "$0.1", clickeado: false, fila: '107', position: '2', iddiv: 'div23' },
        { id: '24', monto: "$0.1", clickeado: false, fila: '107', position: '3', iddiv: 'div24' }],
    ])
    lista = lista.sort(function () { return Math.random() - 0.5 });
    var m1 = lista[0]
    var m2 = lista[2]

    const handleIsClickedElements = (idx, jdx) => {
        if (readytoplay === 1) {
            if (playerstate === true) {
                let newArr = JSON.parse(JSON.stringify(arrElements))
                let newObj = newArr[idx]

                newObj[jdx].clickeado = !newObj[jdx].clickeado
                newArr.splice(idx, newObj)
                let datarow1 = newObj[0];
                let datarow2 = newObj[1];
                let datarow3 = newObj[2];
                let revenue = newObj[jdx].monto;
                let numfila = newObj[jdx].fila;
                let numdiv = newObj[jdx].iddiv;
                document.getElementById(datarow1.id).disabled = true;
                document.getElementById(datarow2.id).disabled = true;
                document.getElementById(datarow3.id).disabled = true;
                let fila = parseInt(numfila) - 1
                let filamain = parseInt(numfila)
                setArrElements(newArr)
                let id = newObj[jdx].id;
                let estilo = document.getElementById(id);
                let estilodiv = document.getElementById(numdiv);
                if (filamain >= 104) {
                    if (m1 === newObj[jdx].position) {
                        setPlayerstate(false)
                        estilodiv.style.opacity = '0';
                        document.getElementById(id).animate(animationlose, duration)
                        setTimeout(function () {
                            estilo.style.backgroundImage = `url(${bomba})`;
                            estilo.style.backgroundSize = "contain";
                            estilo.style.backgroundRepeat = "no-repeat";
                            estilo.style.backgroundPosition = "center";
                            document.getElementById(datarow1.id).style.opacity = '0.5';
                            document.getElementById(datarow2.id).style.opacity = '0.5';
                            document.getElementById(datarow3.id).style.opacity = '0.5';

                        }, 1000)
                        setWithdraw(true)
                    } else {
                        estilodiv.style.opacity = '0';
                        document.getElementById(id).animate(animationwin, duration)
                        setTimeout(function () {
                            estilo.style.backgroundImage = `url(${logo})`;
                            estilo.style.backgroundSize = "contain";
                            estilo.style.backgroundRepeat = "no-repeat";
                            estilo.style.backgroundPosition = "center";
                            document.getElementById(datarow1.id).style.opacity = '0.5';
                            document.getElementById(datarow2.id).style.opacity = '0.5';
                            document.getElementById(datarow3.id).style.opacity = '0.5';
                        }, 1000)
                        setProfitobtained(revenue);
                        setScaledfloor(fila.toString());
                        setWithdraw(false)

                    }
                } else if (filamain < 104) {
                    if (m1 === newObj[jdx].position || m2 === newObj[jdx].position) {
                        setPlayerstate(false)
                        estilodiv.style.opacity = '0';
                        document.getElementById(id).animate(animationlose, duration)
                        setTimeout(function () {
                            estilo.style.backgroundImage = `url(${bomba})`;
                            estilo.style.backgroundSize = "contain";
                            estilo.style.backgroundRepeat = "no-repeat";
                            estilo.style.backgroundPosition = "center";
                            document.getElementById(datarow1.id).style.opacity = '0.5';
                            document.getElementById(datarow2.id).style.opacity = '0.5';
                            document.getElementById(datarow3.id).style.opacity = '0.5';
                        }, 1000)
                        setWithdraw(true)
                    } else {
                        estilodiv.style.opacity = '0';
                        document.getElementById(id).animate(animationwin, duration)
                        setTimeout(function () {
                            estilo.style.backgroundImage = `url(${logo})`;
                            estilo.style.backgroundSize = "contain";
                            estilo.style.backgroundRepeat = "no-repeat";
                            estilo.style.backgroundPosition = "center";
                            document.getElementById(datarow1.id).style.opacity = '0.5';
                            document.getElementById(datarow2.id).style.opacity = '0.5';
                            document.getElementById(datarow3.id).style.opacity = '0.5';
                        }, 1000)
                        setProfitobtained(revenue)
                        setScaledfloor(fila.toString());
                        setWithdraw(false)
                    }

                }
            } else {
                alert('juego terminado')
            }
        } else if (readytoplay === 0) {
            alert('click en iniciar Apostar')
        }
    }
    const withdrawals = (e) => {
        if (User !== '' || User !== null || User !== 'data' || amount !== 0) {
            let data = [User, 'GameTowers', profitobtained, amount]
            emitwithdrawals(data)
        }
    }
    const hadleClickBet = (event) => {
        if (User !== "" || User !== "data" || User !== null) {
            if (amount > 0) {
                setReadytoplay(readytoplay + 1)
                document.getElementById('bet').disabled = true;
            } else {
                alert('coloque un monto de apuesta')
            }
        } else {
            alert('no ha iniciado sesion')
        }
    }

    const styles = {

        col1: {
            paddingTop: "12%"
        },
        div1: {
            background: "linear-gradient(120.37deg, rgba(239, 239, 239, 0.6) 0%, rgba(255, 255, 255, 0.1) 100%)",
            border: "1px solid #ffffff",
            borderRadius: "20px",
            height: "60%",
            width: "70%",
            backgroundPosition: "center center",
        },
        div2: {
            background: "linear-gradient(120.37deg, rgba(239, 239, 239, 0.6) 0%, rgba(255, 255, 255, 0.1) 100%)",
            border: "1px solid #ffffff",
            borderRadius: "41px",
            height: "100%",
            width: "100%",
            backgroundPosition: "center center"
        },
        div3: {
            background: "linear-gradient(120.37deg, rgba(239, 239, 239, 0.6) 0%, rgba(255, 255, 255, 0.1) 100%)",
            border: "1px solid #ffffff",
            borderRadius: "41px",
            height: "100%",
            width: "60%",
        },
        form1: {
            background: "linear-gradient(120.37deg, rgba(97, 55, 55, 0.6) 0%, rgba(255, 255, 255, 0.1) 100%)",
            border: "1px solid #EFEFEF",
            borderRadius: "25px",
            height: "200%",
            width: "70%",
        },
        button2: {
            background: "linear-gradient(120.37deg, rgba(239, 239, 239, 0.6) 0%, rgba(255, 255, 255, 0.1) 100%)",
            border: "1px solid #ffffff",
            borderRadius: "20px",
            height: "70px",
            width: "25%",
        },
        Buttonbet: {
            background: "rgba(9, 221, 5, 0.8)",
            width: "40%",
            border: "1px solid #FFFFFF",
            borderRadius: "15px",
            height: "60px"
        },
        divficha: {
            width: "100%",
            height: "100%"
        }


    }
    
    return (
        <Container fluid >
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

                        <Row><center><Form.Control id='inputTowers' style={styles.form1} type="number" placeholder="$0.00" onChange={(e) => { setAmount(e.target.value) }} /></center></Row>
                        <br />
                        <br />
                        <div>
                            <center> <Button id="bet" style={styles.Buttonbet} onClick={(e) => { hadleClickBet(e) }} >BET</Button></center>
                        </div>
                        <br />
                    </div>
                </Col>
                <Col className='d-flex justify-content-center' lg={4} sm={12}>
                    <div style={styles.div2} >

                        {arrElements.map((eachRow, idx) => (

                            <Row id={fila++} className='d-flex justify-content-evenly align-items-center mb-4 me-4 ms-3 pt-2' >
                                {eachRow.map((eachCol, jdx) => (
                                    <button id={eachCol.id} disabled={eachCol.fila === scaladefloor ? false : true} style={eachCol.clickeado ? stylebuttonanimated : styleoriginbutton} onClick={() => { handleIsClickedElements(idx, jdx) }}><div style={styles.divficha} id={eachCol.iddiv}><img src={ficha} height="100%" width="30%" /> <font color="white" size="4">{eachCol.monto}</font></div></button>
                                ))}
                            </Row>
                        ))}

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
                    <button disabled={withdraw} style={styles.button2} onClick={(e) => { withdrawals(e) }}><h2><font color="white">Retirar Ganancia</font></h2></button>
                </Col>
            </Row>
                                    
            

        </Container>

    )
}
export default GameTowers;