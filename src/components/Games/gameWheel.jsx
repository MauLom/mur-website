import * as React from 'react'
///Assets
import OnlyWheel from '../../assets/OnlyWheel.png'
import logo from '../../assets/LOGO.png'
import token from '../../assets/token.png'
import vectorusers from '../../assets/vectorusers.png'
import './games.css'
/// Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
/// Components
import HeaderOptions from '../headerOptions';
import WindowWinnerWheel from './windowwinnerwheel';
import { initgamewheel, onnewroom, onnumberofusers, readytoplayGW } from '../sockets.js'
import { ondataroom, onnumerofturns, onregisterstatus, regwinner, clearplayers } from '../sockets.js';
const GameWheel = () => {

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

        
        const newroom = (room) => {
            setNumberofroom(room + 1)
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
        const numberofturns = (data) => {
            if (data === 0) {
            } else {
                girarimagen(data)

            }
        }
        onnumerofturns(numberofturns)
        const status = (data) => {
        }
        onregisterstatus(status)

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
        if (User !== '' || User !== null || User !== 'data') {
        initgamewheel(dataofroom)
        }else{
            alert('incia sesión para continuar')
        }
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
        div1: {

            width: "90%",
            height: "100%",



        },
        imgWheel: {
            maxWidth: "80%",
            maxHeight: "80%",
            animation: "rotation 4s  linear",
            animationFillMode: "forwards",
            alignItems: "center",
            justifyContent: "center"
        },
        rotationCss: {
        },
        content1: {
            width: "70%",
            backgroundPosition: "center center",
            height: "60px",
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "41px",
            alignItems: "center",
            justifyContent: "center",

        },
        row1: {
            width: "100%",

        },
        rowmain: {
            width: "100%",
            alignItems: "center",
            justifyContent: "center",

        },
        content2: {
            width: "50%",
            backgroundPosition: "center center",
            height: "60px",
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "41px",
            alignItems: "center",
            justifyContent: "center"
        },
        mesas: {
            width: "10%",
            backgroundPosition: "center center",
            height: "60px",
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "41px",
            alignItems: "center",
            justifyContent: "center",

        }, table: {
            alignItems: "center",
            width: "90%",
            justifyContent: "center",
            height:"100%"
        },
        td: {
            width: "100%",
            textAlign: "center",


        },
        btready: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "20px",
            height: "100%",
            width: "100%"
        }, token: {
            width: "100%",
            backgroundImage: `url(${token})`,
            backgroundPosition: "right 0% bottom 45%",
            backgroundSize:"contain",
            backgroundRepeat:"no-repeat",
            height:"100%"
        }, imglogo: {
            height: '30px',
            with: '30px',
            left: '15%'

        },
        glassRectangle: {
            width: "90%",
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "41px",
        },
        vector: {
            position: "relative",
            paddingTop: "2%",
            height: "30%",
            width: "20%",
            alignItems: "center",
            justifyContent: "center",
        },
        rommbt: {
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
        },
        colroom1: {
            height: "100%",
            width: "30%",
        },
        colroom2: {
            height: "100%",
            width: "40%",
        },
        colroom3: {
            height: "100%",
            width: "30%",
        }

    }

    return (
        <Container fluid >
            <br />
            <HeaderOptions />
            <br />
            <br />
            <Row style={styles.rowmain}>
                <div className='d-flex justify-content-around' style={styles.content1}>
                    <Col><img height="45px" width="45px" src={logo} alt="" /> </Col>
                    <Col ><center><h4><font color="white">{players}/8</font></h4></center></Col>
                    <Col style={styles.token} className='d-flex justify-content-center'>
                        <Row className='d-flex justify-content-end align-items-center ms-6 '>
                                <h5><font color="white">Ganancia:50$</font></h5>
                        </Row>
                    </Col>
                </div>
            </Row>
            <br />
            <br />
            <Row className='d-flex justify-content-center'>
                <Col className='d-flex justify-content-center' lg={3} sm={12}>
                    <div style={styles.glassRectangle}>
                        <center>
                            <br />
                            <div style={styles.div1}>
                                
                                <Row >
                                        <Col className='d-flex justify-content-end'><font color="white"size="6">Ganancia</font></Col>
                                </Row>
                                <Row className='d-flex justify-content-center mb-3'>
                                    <Col className='d-flex justify-content-start d-flex align-items-center'><img src={vectorusers} alt="" width="40%" height="40%" /></Col>
                                    <Col className='d-flex justify-content-center align-items-center'><font color={colorsmain[0]} size="6">{listusers[0]}</font></Col>
                                    <Col className='d-flex justify-content-center align-items-center'><font color="white" size="5">$50</font></Col>
                                </Row>
                                <Row className='d-flex justify-content-center mb-3'>
                                    <Col className='d-flex justify-content-start d-flex align-items-center'><img src={vectorusers} alt="" width="40%" height="40%" /></Col>
                                    <Col className='d-flex justify-content-center align-items-center'><font color={colorsmain[1]} size="6">{listusers[1]}</font></Col>
                                    <Col className='d-flex justify-content-center align-items-center'><font color="white" size="5">$50</font></Col>
                                </Row>
                                <Row className='d-flex justify-content-center mb-3'>
                                    <Col className='d-flex justify-content-start d-flex align-items-center'><img src={vectorusers} alt="" width="40%" height="40%" /></Col>
                                    <Col className='d-flex justify-content-center align-items-center'><font color={colorsmain[2]} size="6">{listusers[2]}</font></Col>
                                    <Col className='d-flex justify-content-center align-items-center'><font color="white" size="5">$50</font></Col>
                                </Row>
                                <Row className='d-flex justify-content-center mb-3'>
                                    <Col className='d-flex justify-content-start d-flex align-items-center'><img src={vectorusers} alt="" width="40%" height="40%" /></Col>
                                    <Col className='d-flex justify-content-center align-items-center'><font color={colorsmain[3]} size="6">{listusers[3]}</font></Col>
                                    <Col className='d-flex justify-content-center align-items-center'><font color="white" size="5">$50</font></Col>
                                </Row>
                                <Row className='d-flex justify-content-center mb-3'>
                                    <Col className='d-flex justify-content-start d-flex align-items-center'><img src={vectorusers} alt="" width="40%" height="40%" /></Col>
                                    <Col className='d-flex justify-content-center align-items-center'><font color={colorsmain[4]} size="6">{listusers[4]}</font></Col>
                                    <Col className='d-flex justify-content-center align-items-center'><font color="white" size="5">$50</font></Col>
                                </Row>
                                <Row className='d-flex justify-content-center mb-3'>
                                    <Col className='d-flex justify-content-start d-flex align-items-center'><img src={vectorusers} alt="" width="40%" height="40%" /></Col>
                                    <Col className='d-flex justify-content-center align-items-center'><font color={colorsmain[5]} size="6">{listusers[5]}</font></Col>
                                    <Col className='d-flex justify-content-center align-items-center'><font color="white" size="5">$50</font></Col>
                                </Row>
                                <Row className='d-flex justify-content-center mb-3'>
                                    <Col className='d-flex justify-content-start d-flex align-items-center'><img src={vectorusers} alt="" width="40%" height="40%" /></Col>
                                    <Col className='d-flex justify-content-center align-items-center'><font color={colorsmain[6]} size="6">{listusers[6]}</font></Col>
                                    <Col className='d-flex justify-content-center align-items-center'><font color="white" size="5">$50</font></Col>
                                </Row>
                                <Row className='d-flex justify-content-center mb-3'>
                                    <Col className='d-flex justify-content-start d-flex align-items-center'><img src={vectorusers} alt="" width="40%" height="40%" /></Col>
                                    <Col className='d-flex justify-content-center align-items-center'><font color={colorsmain[7]} size="6">{listusers[7]}</font></Col>
                                    <Col className='d-flex justify-content-center align-items-center'><font color="white" size="5">$50</font></Col>
                                </Row>
                            </div>
                        </center>
                    </div>


                </Col>
                <Col lg={6}>
                    <center><img style={styles.imgWheel} src={OnlyWheel} alt="" /></center>
                </Col>
                <Col lg={3} className='d-flex justify-content-center' >
                    <div style={styles.glassRectangle}>
                        <br />
                        <div style={styles.row1}>
                            <Row style={styles.row1}>
                                <Col className='d-flex justify-content-center align-content-start'><img src={OnlyWheel} alt="" height="100%" width="100%" /></Col>
                                <Col className='d-flex  align-items-center'><button id='btroomwheel' className='d-flex justify-content-start'><font color="white" size="4" textAlign='left'>5</font></button>
                                    <img style={styles.vector} src={vectorusers} alt="" />
                                </Col>
                                <Col className='d-flex justify-content-end align-items-center'><font color="white" size="6">{players}/8</font></Col>
                            </Row>

                            <Row style={styles.row1}>
                                <Col className='d-flex justify-content-center align-content-start'><img src={OnlyWheel} alt="" height="100%" width="100%" /></Col>
                                <Col className='d-flex align-items-center'><button id='btroomwheel' className='d-flex justify-content-start'><font color="white" size="100%">10</font></button>
                                    <img style={styles.vector} src={vectorusers} alt="" />
                                </Col>
                                <Col className='d-flex justify-content-end align-items-center'><font color="white" size="6">{players}/8</font></Col>
                            </Row>
                            <Row style={styles.row1}>
                                <Col className='d-flex justify-content-center align-content-start'><img src={OnlyWheel} alt="" height="100%" width="100%" /></Col>
                                <Col className='d-flex align-items-center'><button id='btroomwheel' className='d-flex justify-content-start'><font color="white" size="100%">20</font></button>
                                    <img style={styles.vector} src={vectorusers} alt="" />
                                </Col>
                                <Col className='d-flex justify-content-end align-items-center'><font color="white" size="6">{players}/8</font></Col>
                            </Row>
                            <Row style={styles.row1}>
                                <Col className='d-flex justify-content-center align-content-start'><img src={OnlyWheel} alt="" height="100%" width="100%" /></Col>
                                <Col className='d-flex align-items-center'><button id='btroomwheel' className='d-flex justify-content-start'><font color="white" size="100%">30</font></button>
                                    <img style={styles.vector} src={vectorusers} alt="" />
                                </Col>
                                <Col className='d-flex justify-content-end align-items-center'><font color="white" size="6">{players}/8</font></Col>
                            </Row>
                            <Row style={styles.row1}>
                                <Col className='d-flex justify-content-center align-content-start'><img src={OnlyWheel} alt="" height="100%" width="100%" /></Col>
                                <Col className='d-flex align-items-center'><button id='btroomwheel' className='d-flex justify-content-start'><font color="white" size="100%">40</font></button>
                                    <img style={styles.vector} src={vectorusers} alt="" />
                                </Col>
                                <Col className='d-flex justify-content-end align-items-center'><font color="white" size="6">{players}/8</font></Col>
                            </Row>
                            <Row style={styles.row1}>
                                <Col className='d-flex justify-content-center align-content-start'><img src={OnlyWheel} alt="" height="100%" width="100%" /></Col>
                                <Col className='d-flex align-items-center'><button id='btroomwheel' className='d-flex justify-content-start'><font color="white" size="100%">50</font></button>
                                    <img style={styles.vector} src={vectorusers} alt="" />
                                </Col>
                                <Col className='d-flex justify-content-end align-items-center'><font color="white" size="6">{players}/8</font></Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
            <br />
            <Row style={styles.row1}>
                
                    <center><button  style={styles.mesas} onClick={() => { reggamewheel() }}><h1>5</h1></button></center>
                
            </Row>

            <WindowWinnerWheel props={datawinner}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

        </Container>
    )
}
export default GameWheel;