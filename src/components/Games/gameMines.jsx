import * as React from 'react'
import './games.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Fondo from '../../assets/FONDO.jpg'
//import bomba from '../../assets/BOMBAS.png'
import ruleta from '../../assets/RULETA.png'
import logo from '../../assets/LOGO.png'
import HeaderOptions from '../headerOptions';
import Button from 'react-bootstrap/Button';
import { io } from 'socket.io-client';

const GameMines = () => {
    //  const socket = io('http://localhost:8010')
    //  const namegame="Game Mines"
    //  var dataroom={}
    //  const roomAssignment = () => {
    //      var length = 16;
    //      var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    //      var charLength = chars.length;
    //      var result = '';
    //      for (var i = 0; i < length; i++) {
    //          result += chars.charAt(Math.floor(Math.random() * charLength));
    //      }
    //      dataroom={"room":namegame, "token":result}
    //      console.log(result)

    //      socket.emit('room', dataroom)

    //  }
    //  roomAssignment();
    const [deshabilitar, setDeshabilitar] = React.useState(true)

    const [userAmount, setUserAmount] = React.useState('')

    const [randomnumber, setRandomnumber] = React.useState([]);

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
    
    
    const [animacion, setAnimacion] = React.useState(styleMinaOriigin)

    const styleselectormines = {
        background: "rgba(231, 231, 231, 0.43)",
        border: "1px solid #FFFFFF",
        borderRadius: "20px",
        height: "50px",
        width: "50px"
    }
    const changestyleselectormines = {
        background: "#FF0000",
        border: "1px solid #FFFFFF",
        borderRadius: "20px",
        height: "50px",
        width: "50px"
    }

    const [arrmina, setArrmina] = React.useState([
        [{ id: 'selector1', click: false, valor: '1' },
        { id: 'selector2', click: false, valor: '2' },
        { id: 'selector3', click: false, valor: '5' },
        { id: 'selector4', click: false, valor: '10' }]
    ])
    
    const handleIsClickedMines = (idx, jdx) => {

        let monto = document.getElementById('inputamount').value;


        var val = 0;
        if (monto === "") {
            val++;
        }
        if (val === 0) {
            setDeshabilitar(!deshabilitar)

        }
        let newArr = JSON.parse(JSON.stringify(arrmina))
        let newObj = newArr[idx]

        newObj[jdx].click = !newObj[jdx].click
        newArr.splice(idx, newObj)
        let valor = newObj[jdx].valor
        setArrmina(newArr)
        console.log("arrElements", arrmina[idx][jdx])

        document.getElementById('nominas').value = valor;
    }

    const [arrElements, setArrElements] = React.useState([
        [{ id: '1', clickeado: false, boton: '1' },
        { id: '2', clickeado: false, boton: '2' },
        { id: '3', clickeado: false, boton: '3' },
        { id: '4', clickeado: false, boton: '4' }],
        [{ id: '5', clickeado: false, boton: '5' },
        { id: '6', clickeado: false, boton: '6' },
        { id: '7', clickeado: false, boton: '7' },
        { id: '8', clickeado: false, boton: '8' }],
        [{ id: '9', clickeado: false, boton: '9' },
        { id: '10', clickeado: false, boton: '10' },
        { id: '11', clickeado: false, boton: '11' },
        { id: '12', clickeado: false, boton: '12' }],
        [{ id: '13', clickeado: false, boton: '13' },
        { id: '14', clickeado: false, boton: '14' },
        { id: '15', clickeado: false, boton: '15' },
        { id: '16', clickeado: false, boton: '16' }],
        [{ id: '17', clickeado: false, boton: '17' },
        { id: '18', clickeado: false, boton: '18' },
        { id: '19', clickeado: false, boton: '19' },
        { id: '20', clickeado: false, boton: '20' }],
        [{ id: '21', clickeado: false, boton: '21' },
        { id: '22', clickeado: false, boton: '22' },
        { id: '23', clickeado: false, boton: '23' },
        { id: '24', clickeado: false, boton: '24' }],

    ])

    const handleIsClickedElements = (idx, jdx) => {
        let newArr = JSON.parse(JSON.stringify(arrElements))
        let newObj = newArr[idx]
        let id = newObj[jdx].id;
        document.getElementById(id).disabled = true;
        let estilo = document.getElementById(id);

        newArr.splice(idx, newObj)

        setArrElements(newArr)
        let numposibility = document.getElementById('nominas').value;
        let pos=parseInt(numposibility);
        let numran1 = randomnumber[0];
        let numran2 = randomnumber[1];
        let numran3 = randomnumber[2];
        let numran4 = randomnumber[3];
        let numran5 = randomnumber[4];
        let numran6 = randomnumber[5];
        let numran7 = randomnumber[6];
        let numran8 = randomnumber[7];
        let numran9 = randomnumber[8];
        let numran10 = randomnumber[9];


        console.log("arrElements", arrElements[idx][jdx], "posibilidades", numposibility)
        var i=0
        if(pos===1){
            if(numran1===id){
                console.log("mina", randomnumber[0], id)
                i=1
            }else{
                console.log("no mina")
                i=0
            }
        }else if(pos===2){
            if(numran1===id){
                console.log("mina", randomnumber[0], id)
                i=1
            }else if(numran2===id){
                console.log("mina", randomnumber[1], id) 
                i=1
            }else{
                console.log("no mina")
            }

        }else if(pos===5){
            if(numran1===id){
                console.log("mina", randomnumber[0], id)
                i=1
            }else if(numran2===id){
                console.log("mina", randomnumber[1], id)
                i=1
            }else if(numran3===id){
                console.log("mina", randomnumber[2], id)
                i=1
            }else if(numran4===id){
                console.log("mina", randomnumber[3], id)
                i=1
            }else if(numran5===id){
                console.log("mina", randomnumber[4], id)
                i=1
            }else{
                console.log("no mina")
                i=0
            }
        }else if(pos===10){
            if(numran1===id){
                console.log("mina", randomnumber[0], id)
                i=1
            }else if(numran2===id){
                console.log("mina", randomnumber[1], id)
                i=1
            }else if(numran3===id){
                console.log("mina", randomnumber[2], id)
                i=1
            }else if(numran4===id){
                console.log("mina", randomnumber[3], id)
                i=1
            }else if(numran5===id){
                console.log("mina", randomnumber[4], id)
                i=1
            }else if(numran6===id){
                console.log("mina", randomnumber[5], id)
                i=1
            }else if(numran7===id){
                console.log("mina", randomnumber[6], id)
                i=1
            }else if(numran8===id){
                console.log("mina", randomnumber[7], id)
                i=1
            }else if(numran9===id){
                console.log("mina", randomnumber[8], id)
                i=1
            }else if(numran10===id){
                console.log("mina", randomnumber[9], id)
                i=1
            }else{
                console.log("no mina")
            }
        }
        if(i===0){
            console.log('no mina x2');
            const styleDoc = document.createElement("style")
                     const keyInjection = `@keyframes flipInY2 {
                     0% {
                        transform: perspective(400px) rotateY(-90deg);
                        background-image: url(${Fondo});
                        background-size: cover;
                     }
                     40% {
                        transform: perspective(400px) rotateY(-10deg);
                        background-image: url(${Fondo});
                        background-size: cover;
    
                     }
                     70% {
                        transform: perspective(400px) rotateY(10deg);
                        background-image: url(${Fondo});
                        background-size: cover;
                     }
                     100% {
                        transform: perspective(400px) rotateY(0deg);
                        opacity: 1;
                        background-image: url(${Fondo});
                        background-size: cover;
                     }
                  }`
                     styleDoc.type = "text/css";
                     styleDoc.appendChild(document.createTextNode(keyInjection))
                     document.getElementsByTagName("head")[0].appendChild(styleDoc);
                     estilo.style.backgroundColor = "green";
        }else if (i===1) {
            console.log('mina x2')
            const styleDoc = document.createElement("style")
            const keyInjection = `@keyframes flipInY2 {
            0% {
               transform: perspective(400px) rotateY(-90deg);
               background-image: url(${Fondo});
               background-size: cover;
            }
            40% {
               transform: perspective(400px) rotateY(-10deg);
               background-image: url(${Fondo});
               background-size: cover;

            }
            70% {
               transform: perspective(400px) rotateY(10deg);
               background-image: url(${Fondo});
               background-size: cover;
            }
            100% {
               transform: perspective(400px) rotateY(0deg);
               opacity: 1;
               background-image: url(${Fondo});
               background-size: cover;
            }
         }`
            styleDoc.type = "text/css";
            styleDoc.appendChild(document.createTextNode(keyInjection))
            document.getElementsByTagName("head")[0].appendChild(styleDoc);
            estilo.style.backgroundColor = "red";
        }

    }

    var lista = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'];

    const hadleClickBet = (event) => {
        setUserAmount(event.target.value);
        console.log('click en bet')
        document.getElementById('monto').value = userAmount;
        
        
            lista = lista.sort(function() {return Math.random() - 0.5});
            console.log('lista de minas',lista)
            setRandomnumber(lista)



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
        input: {
            width: "100%",
            background: "rgba(231, 231, 231, 0.43)",
            borderRadius: "15px",
            height: "50%",
            apacity: "1"
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
                                <input id='inputamount' type="text" style={styles.input} value={userAmount} onChange={(e) => setUserAmount(e.target.value)} />
                                <br />
                            </div>
                            <br />
                            <font color="white">Mines</font>
                            <br />
                            {arrmina.map((eachRow, idx) => (
                                <Row className='d-flex justify-content-between'>
                                    {eachRow.map((eachCol, jdx) => (
                                        <button id={eachCol.id} name={eachCol.id} style={eachCol.click === false ? styleselectormines : changestyleselectormines} onClick={() => { handleIsClickedMines(idx, jdx) }} value={eachCol.valor}>{eachCol.valor}</button>
                                    ))}

                                </Row>
                            ))}
                            <br />
                            <div>
                                <Button id="bet" style={styles.Buttonbet} disabled={deshabilitar} onClick={(e) => { hadleClickBet(e) }} >BET</Button>{' '}
                            </div>
                            <br />

                        </div>
                    </div></center>
                </Col>
                <br />
                <Col className='col-12 col-md-6 col-xs-12 list-unstyled'>
                    <Row className='d-flex justify-content-around'>
                        <center><Col> <font color="white">Amount</font> <br />
                            <input id='monto' type="text" /></Col>
                            <Col><font color="white"># Mines</font> <br />
                                <input id='nominas' type="text" /></Col></center>
                    </Row>
                    <br />

                    <div style={styles.div2}>
                        <br />
                        {arrElements.map((eachRow, idx) => (
                            <Row className='d-flex justify-content-around'>
                                {eachRow.map((eachCol, jdx) => (
                                    <button id={eachCol.id} style={animacion} onClick={() => { handleIsClickedElements(idx, jdx) }}></button>
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
