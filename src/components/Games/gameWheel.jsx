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
import WindowWinnerWheel from './windowwinnerwheel';
import { initgamewheel, onnewroom, onnumberofusers, readytoplayGW } from '../sockets.js'
import { ondataroom, onnumerofturns, onregisterstatus, regwinner, clearplayers} from '../sockets.js';
const GameWheel = () => {

    const [deshabilitar, setDeshabilitar] = React.useState(false)
    const [num1, setNum1] = React.useState(0)
    const [players, setPlayers] = React.useState(0)
    const [room, setRoom] = React.useState('Game Wheel')
    const [numberofroom, setNumberofroom] = React.useState(1);
    const [modalShow, setModalShow] = React.useState(false);
    const [datawinner, setDataWinner] = React.useState([]);
    const [listusers, setListUsers] = React.useState([]);
    const [position, setPosition] = React.useState(0);
    const User = sessionStorage.getItem("username")
    const colorsmain = ["orange", "purple", "yellow", "red", "white", "green", "pink", "blue"]
    let arr = []
    

    if (User !== '' || User !== null || User !== 'data') {
        var dataofroom = []
        dataofroom = [User, numberofroom]
        arr = [true, numberofroom]

        initgamewheel(dataofroom)
        const newroom = (room) => {
            setNumberofroom(room + 1)
            console.log("entra en clase newroom")
        }
        onnewroom(newroom)
        const numberofusers = (data) => {
            setPlayers(data[0]);
            setListUsers(data[1]);
        }
        onnumberofusers(numberofusers)
        readytoplayGW(arr);
        const dataroom = (data) => {
            setRoom(data)
        }
        ondataroom(dataroom)
        const numberofturns=(data)=>{
            if (data === 0) {
            } else {
                girarimagen(data)
    
            } 
        }
        onnumerofturns(numberofturns)
        const status=(data)=>{
            if (data === false) {
                console.log('ya esta inscrito')
    
            } else if (data === true) {
                console.log('inscribiendo')
    
            }
        }
        onregisterstatus(status)

    } else {
        //     console.log("no ha ingresado sesion")
    }

    const styleDoc = document.createElement("style")

    const girarimagen = (turns) => {
        var num = turns
        if (num <= 360) {
        } else if (num <= 720 & num > 360) {
            num = num - 360
        } else if (num <= 1080 & num > 720) {
            num = num - 720
        } else if (num <= 1440 & num > 1080) {
            num = num - 1080
        } else if (num <= 1800 & num > 1440) {
            num = num - 1440
        } else if (num <= 2160 & num > 1800) {
            num = num - 1800
        } else if (num <= 2520 & num > 2160) {
            num = num - 2160
        } else if (num <= 2880 & num > 2520) {
            num = num - 2520
        } else if (num <= 3240 & num > 2880) {
            num = num - 2880
        } else if (num <= 3600 & num > 3240) {
            num = num - 3240
        } else if (num <= 3960 & num > 3600) {
            num = num - 3600
        } else if (num <= 4320 & num > 3960) {
            num = num - 3960
        } else if (num <= 4680 & num > 4320) {
            num = num - 4320
        } else if (num <= 5040 & num > 4680) {
            num = num - 4680
        } else if (num <= 5400 & num > 5040) {
            num = num - 5040
        } else if (num <= 5760 & num > 5400) {
            num = num - 5400
        }


        let color = ""
        if (num > 0 & num <= 45) {
            color = "BLUE"
            getWinner(color);
            setPosition(1)
        } else if (num > 45 & num <= 90) {
            color = "PINK"
            getWinner(color);
            setPosition(2)
        } else if (num > 90 & num <= 135) {
            color = "GREEN"
            getWinner(color);
            setPosition(3)
        } else if (num > 135 & num <= 180) {
            color = "WHITE"
            getWinner(color);
            setPosition(4)
        } else if (num > 180 & num <= 225) {
            color = "RED"
            getWinner(color);
            setPosition(5)
        } else if (num > 225 & num <= 270) {
            color = "YELLOW"
            getWinner(color);
            setPosition(6)
        } else if (num > 270 & num <= 315) {
            color = "PURPLE"
            getWinner(color);
            setPosition(7)
        } else if (num > 315 & num <= 360) {
            color = "ORANGE"
            getWinner(color);
            setPosition(8)
        }

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

    if (listusers.length !== 0) {

    }

    const reggamewheel = () => {

        let tabla = document.getElementById('tabla').insertRow(1);
        let col1 = tabla.insertCell(0);
        let col2 = tabla.insertCell(1);
        const colors = ["", "orange", "purple", "yellow", "red", "white", "green", "pink", "blue"]
        const users = ["", listusers[0], listusers[1], listusers[2], listusers[3], listusers[4], listusers[5], listusers[6], listusers[7]]


        col1.innerHTML = colors[num1];
        col2.innerHTML = users[num1];
        setNum1(num1 + 1)
    }
    const getWinner = (color) => {
        if (color === "") {

        } else {
            let game = 'Game Wheel'
            let room = numberofroom
            let arrwinner = [room, game, color, listusers[position]]
            regwinner(arrwinner);
            setTimeout(function () {
                setModalShow(true)
            }, 4000)
            const arr = [color, listusers[position]]
            setDataWinner(arr)
            clearplayers(numberofroom)
        }
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
            animation: "rotation 4s  linear",
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
            justifyContent: "center",

        }, table: {
            backgroundColor: "white",
            alignItems: "center",
            with: "100%",
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #000000",

        },
        td: {
            width: "100%",
            textAlign: "center",
            verticalAlign: "top",
            border: "1px solid #000000",
            borderCollapse: "collapse",
            borderRadius: "41px",

        },
        btready: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #FFFFFF",
            borderRadius: "20px",
            height: "100%",
            width: "100%"
        }

    }

    return (
        <Container fluid >
            <HeaderOptions />
            <br />
            <br />
            <Row style={styles.row1}>
                <div className='row' style={styles.content2}>
                    <div className='col'> Icono</div>
                    <div className='col'><center><h1>{players}/8</h1></center></div>
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

                </Col>
                <Col lg={8}>
                    {/* <ImgStylized />  */}
                    <center><img style={styles.imgWheel} src={OnlyWheel} alt="" /></center>
                </Col>
                <Col lg={2} style={styles.glassRectangle}>
                    Conectado en la rala:<h3>{room}</h3>

                    <table id='tabla' style={styles.table}>
                        <tr style={styles.td}><td><h3>Color</h3></td> <td style={styles.td}><h3>Player</h3></td></tr>
                    </table>
                    <table id='tablw' style={styles.table}>
                        <tr style={styles.td}><td><h3>{colorsmain[0]}</h3></td> <td style={styles.td}><h3>{listusers[0]}</h3></td></tr>
                        <tr style={styles.td}><td><h3>{colorsmain[1]}</h3></td> <td style={styles.td}><h3>{listusers[1]}</h3></td></tr>
                        <tr style={styles.td}><td><h3>{colorsmain[2]}</h3></td> <td style={styles.td}><h3>{listusers[2]}</h3></td></tr>
                        <tr style={styles.td}><td><h3>{colorsmain[3]}</h3></td> <td style={styles.td}><h3>{listusers[3]}</h3></td></tr>
                        <tr style={styles.td}><td><h3>{colorsmain[4]}</h3></td> <td style={styles.td}><h3>{listusers[4]}</h3></td></tr>
                        <tr style={styles.td}><td><h3>{colorsmain[5]}</h3></td> <td style={styles.td}><h3>{listusers[5]}</h3></td></tr>
                        <tr style={styles.td}><td><h3>{colorsmain[6]}</h3></td> <td style={styles.td}><h3>{listusers[6]}</h3></td></tr>
                        <tr style={styles.td}><td><h3>{colorsmain[7]}</h3></td> <td style={styles.td}><h3>{listusers[7]}</h3></td></tr>
                    </table>
                    <ul id="rooms">

                    </ul>
                </Col>
            </Row>
            <br />
            <Row style={styles.row1}>
                <div className='row' >
                    <center><button disabled={deshabilitar} style={styles.mesas} onClick={() => { reggamewheel() }}><h1>5</h1></button></center>
                </div>
            </Row>
            <WindowWinnerWheel props={datawinner}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

        </Container>
    )
}
export default GameWheel;