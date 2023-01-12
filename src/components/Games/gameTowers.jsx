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
import io from 'socket.io-client'


const GameTowers = () => {
    const User = sessionStorage.getItem("username")
    const socket = io('http://localhost:8010')
    

     
    
    const [amount, setAmount] = React.useState(0);
    const styleoriginbutton = { background: "rgba(231, 231, 231, 0.43)", border: "1px solid #ffffff", borderRadius: "20px", height: "50px", width: "100px" }
    const stylebuttonanimated = { background: "rgba(231, 231, 231, 0.43)", border: "1px solid #ffffff", borderRadius: "20px", height: "50px", width: "100px", animation: "zoom-in-zoom-out 1s  linear", animationFillMode: "both" }
    const [scaladefloor, setScaledfloor] = React.useState('107');
    const [profitobtained, setProfitobtained]=React.useState(0);
    const [withdraw, setWithdraw]=React.useState(true);
    var lista = ['1','2','3'];
    let fila = 100;
    const [arrElements, setArrElements] = React.useState([
        [{ id: '1', monto: "$7.1", clickeado: false, fila: '100',position:'1' },
        { id: '2', monto: "$7.1", clickeado: false, fila: '100' ,position:'2' },
        { id: '3', monto: "$7.1", clickeado: false, fila: '100' ,position:'3' }],
        [{ id: '4', monto: "$6.1", clickeado: false, fila: '101',position:'1' },
        { id: '5', monto: "$6.1", clickeado: false, fila: '101' ,position:'2'},
        { id: '6', monto: "$6.1", clickeado: false, fila: '101' ,position:'3'}],
        [{ id: '7', monto: "$5.1", clickeado: false, fila: '102',position:'1' },
        { id: '8', monto: "$5.1", clickeado: false, fila: '102' ,position:'2'},
        { id: '9', monto: "$5.1", clickeado: false, fila: '102' ,position:'3'}],
        [{ id: '10', monto: "$4.1", clickeado: false, fila: '103',position:'1' },
        { id: '11', monto: "$4.1", clickeado: false, fila: '103' ,position:'2'},
        { id: '12', monto: "$4.1", clickeado: false, fila: '103' ,position:'3'}],
        [{ id: '13', monto: "$3.1", clickeado: false, fila: '104',position:'1' },
        { id: '14', monto: "$3.1", clickeado: false, fila: '104' ,position:'2'},
        { id: '15', monto: "$3.1", clickeado: false, fila: '104' ,position:'3'}],
        [{ id: '16', monto: "$2.1", clickeado: false, fila: '105',position:'1' },
        { id: '17', monto: "$2.1", clickeado: false, fila: '105' ,position:'2'},
        { id: '18', monto: "$2.1", clickeado: false, fila: '105' ,position:'3'}],
        [{ id: '19', monto: "$1.1", clickeado: false, fila: '106',position:'1' },
        { id: '20', monto: "$1.1", clickeado: false, fila: '106' ,position:'2'},
        { id: '21', monto: "$1.1", clickeado: false, fila: '106' ,position:'3'}],
        [{ id: '22', monto: "$0.1", clickeado: false, fila: '107',position:'1' },
        { id: '23', monto: "$0.1", clickeado: false, fila: '107' ,position:'2'},
        { id: '24', monto: "$0.1", clickeado: false, fila: '107' ,position:'3'}],
    ])
    lista = lista.sort(function() {return Math.random() - 0.5});
    var m1=lista[0]
    var m2=lista[2]
    if (amount === 0) {
    } else {
        console.log(amount)
        
    }

    const handleIsClickedElements = (idx, jdx) => {

        let newArr = JSON.parse(JSON.stringify(arrElements))
        let newObj = newArr[idx]

        newObj[jdx].clickeado = !newObj[jdx].clickeado
        newArr.splice(idx, newObj)

        let datarow1 = newObj[0];
        let datarow2 = newObj[1];
        let datarow3 = newObj[2];
        let revenue = newObj[jdx].monto;
        let numfila = newObj[jdx].fila;
        document.getElementById(datarow1.id).disabled = true;
        document.getElementById(datarow2.id).disabled = true;
        document.getElementById(datarow3.id).disabled = true;


        let fila=parseInt(numfila)-1
        
        let filamain=parseInt(numfila)
        

        //console.log('next fila',fila);
        let filas = document.getElementById(numfila);

        filas.style.backgroundColor = "red";
        setArrElements(newArr)
        //console.log("arrElements", arrElements[idx][jdx])
        let id = newObj[jdx].id;
        let estilo = document.getElementById(id);
        if(filamain>=104){
        if(m1===newObj[jdx].position){
            console.log('te moriste')
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
        estilo.style.backgroundColor = "red";
        setWithdraw(true)
        }else{
            console.log('te salvaste de mi maldito')
            estilo.style.backgroundColor = "green";
            setProfitobtained(revenue);
            setScaledfloor(fila.toString());
            setWithdraw(false)

        }
    }else if (filamain<104){
        if(m1===newObj[jdx].position || m2===newObj[jdx].position){
            console.log('te moriste')
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
        estilo.style.backgroundColor = "red";
        setWithdraw(true)
        }else{
            console.log('te salvaste de mi maldito')
            estilo.style.backgroundColor = "green";
            setProfitobtained(revenue)
            setScaledfloor(fila.toString());
            setWithdraw(false)
        }

    }
        


    }
    const withdrawals =(e)=>{
        if (User !== '' || User !== null || User !== 'data' || amount !==0) {
            let data=[User,'GameTowers',profitobtained, amount]
            socket.emit('client:withdrawals',data)
        }else{
            console.log('no ha iniciado sesion')
            
        }
        
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
        button2: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "20px",
            height: "70px",
            width: "30%",
        },


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

                        <Row><center><Form.Control id='amount' style={styles.form1} type="text" placeholder="$0.00" onChange={(e) => { setAmount(e.target.value) }} /></center></Row>
                        <br />
                        <br />
                    </div>
                </Col>
                <Col className='d-flex justify-content-center' lg={4} sm={12}>
                    <div style={styles.div2} >

                        {arrElements.map((eachRow, idx) => (

                            <Row id={fila++} className='d-flex justify-content-around' >

                                {eachRow.map((eachCol, jdx) => (
                                    <button id={eachCol.id} disabled={eachCol.fila===scaladefloor? false: true} style={eachCol.clickeado ? stylebuttonanimated : styleoriginbutton} onClick={() => { handleIsClickedElements(idx, jdx) }}>{eachCol.monto}</button>
                                ))}
                            </Row>
                        ))}
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
                    <button disabled={withdraw} style={styles.button2} onClick={(e)=>{withdrawals(e)}}><h2><font color="white">Retirar Ganancia</font></h2></button>
                </Col>
            </Row>
            

        </Container>

    )
}
export default GameTowers;