import * as React from 'react'
import './games.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import ruleta from '../../assets/RULETA.png'
import logo from '../../assets/LOGO.png'
import bomba from '../../assets/BOMBAS.png'
import HeaderOptions from '../headerOptions';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import sonidominas from '../../assets/sonidoboton.ogg'

const GameMines = () => {
    const User = sessionStorage.getItem("username")
    const [deshabilitar, setDeshabilitar] = React.useState(true)
    const [userAmount, setUserAmount] = React.useState('')
    const [randomnumber, setRandomnumber] = React.useState([]);
    const [numposibility, setNumposibility] = React.useState(0);
    const [playerstate, setPlayerstate] = React.useState(true);
    const [readytoplay, setReadytoplay] = React.useState(0);
    const [statebuttonbet, setStatebuttonbet]=React.useState('Jugar Demo');
    const [activbet, setactivbet]=React.useState(true);
    const animationwin =[
        {
            transform: 'perspective(400px) rotateY(-90deg)',
            backgroundImage: `url(${logo})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
        },
        {
            transform: 'perspective(400px) rotateY(-10deg)',
            backgroundImage: `url(${logo})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
        },
        {
            transform: 'perspective(400px) rotateY(10deg)',
            backgroundImage: `url(${logo})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
        },
        {
            transform: 'perspective(400px) rotateY(0deg)',
            opacity: "1",
            backgroundImage: `url(${logo})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
        }
    ]
    const animationlose=[
        {
            transform: 'perspective(400px) rotateY(-90deg)',
            backgroundImage: `url(${bomba})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
        },
        {
            transform: 'perspective(400px) rotateY(-10deg)',
            backgroundImage: `url(${bomba})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"

        },
        {
            transform: 'perspective(400px) rotateY(10deg)',
            backgroundImage: `url(${bomba})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
        },
        {
            transform: 'perspective(400px) rotateY(0deg)',
            opacity: "1",
            backgroundImage: `url(${bomba})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
        }
    ]
    const duration={duration: 1000}
    const styleMinaOriigin = {
        width: "20%",
        height: "80px",
        alignItems: "center",
        justifyContent: "center",
        background: "#5F04A5",
        backgroundSize: "contain",
        backgroundPosition: "center",
        border: "1px solid #FFFFFF",
        borderRadius: "25px",
        animation: ''
    }

    const styleselectormines = {
        background: "rgba(231, 231, 231, 0.43)",
        border: "1px solid #FFFFFF",
        borderRadius: "20px",
        height: "50px",
        width: "50px"
    }
    const changestyleselectormines = {
        background: "#9C9493",
        border: "1px solid #FFFFFF",
        borderRadius: "20px",
        height: "50px",
        width: "50px"
    }
    const [arrmina, setArrmina] = React.useState([
        [{ id: '101', click: false, valor: 1, posicion: 1 },
        { id: '102', click: false, valor: 2, posicion: 2 },
        { id: '103', click: false, valor: 5, posicion: 3 },
        { id: '104', click: false, valor: 10, posicion: 4 }]
    ])

    const handleIsClickedMines = (idx, jdx) => {
        setactivbet(false)
        var sonido = new  Audio(sonidominas);
        sonido.play();
        let monto = document.getElementById('inputamount').value;
        var val = 0;
        if (monto === "") {
            
        } else {
            setStatebuttonbet('Iniciar Juego')
        }

            let newArr = JSON.parse(JSON.stringify(arrmina))
            let newObj = newArr[idx]
            let aprovacion = false
            newObj[jdx].click = !newObj[jdx].click
            newArr.splice(idx, newObj)

            let id = newObj[jdx].id
            setArrmina(newArr)
            if (id === '101') {
                let estilo = document.getElementById(id);
                estilo.style.backgroundColor = "#565657";
                let estilo2 = document.getElementById('102');
                estilo2.style.backgroundColor = "#rgba(231, 231, 231, 0.43)";
                let estilo3 = document.getElementById('103');
                estilo3.style.backgroundColor = "#rgba(231, 231, 231, 0.43)";
                let estilo4 = document.getElementById('104');
                estilo4.style.backgroundColor = "#rgba(231, 231, 231, 0.43)";
                //newObj[0].click=true
                newObj[1].click = false
                newObj[2].click = false
                newObj[3].click = false
                setDeshabilitar(aprovacion)
                setNumposibility(1)
            } else if (id === '102') {
                let estilo = document.getElementById(id);
                estilo.style.backgroundColor = "#565657";
                let estilo2 = document.getElementById('101');
                estilo2.style.backgroundColor = "#rgba(231, 231, 231, 0.43)";
                let estilo3 = document.getElementById('103');
                estilo3.style.backgroundColor = "#rgba(231, 231, 231, 0.43)";
                let estilo4 = document.getElementById('104');
                estilo4.style.backgroundColor = "#rgba(231, 231, 231, 0.43)";
                newObj[0].click = false
                //newObj[1].click=true
                newObj[2].click = false
                newObj[3].click = false
                setDeshabilitar(aprovacion)
                setNumposibility(2)
            } else if (id === '103') {
                let estilo = document.getElementById(id);
                estilo.style.backgroundColor = "#565657";
                let estilo2 = document.getElementById('101');
                estilo2.style.backgroundColor = "#rgba(231, 231, 231, 0.43)";
                let estilo3 = document.getElementById('102');
                estilo3.style.backgroundColor = "#rgba(231, 231, 231, 0.43)";
                let estilo4 = document.getElementById('104');
                estilo4.style.backgroundColor = "#rgba(231, 231, 231, 0.43)";
                newObj[0].click = false
                newObj[1].click = false
                //newObj[2].click=true
                newObj[3].click = false
                setDeshabilitar(aprovacion)
                setNumposibility(5)
            } else if (id === '104') {
                let estilo = document.getElementById(id);
                estilo.style.backgroundColor = "#565657";
                let estilo2 = document.getElementById('101');
                estilo2.style.backgroundColor = "#rgba(231, 231, 231, 0.43)";
                let estilo3 = document.getElementById('102');
                estilo3.style.backgroundColor = "#rgba(231, 231, 231, 0.43)";
                let estilo4 = document.getElementById('103');
                estilo4.style.backgroundColor = "#rgba(231, 231, 231, 0.43)";
                newObj[0].click = false
                newObj[1].click = false
                newObj[2].click = false
                //newObj[3].click=true
                setDeshabilitar(aprovacion)
                setNumposibility(10)

            }
        
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
        var sonido = new  Audio(sonidominas);
        sonido.play();

        if (readytoplay === 1) {
            if (playerstate === true) {
                let newArr = JSON.parse(JSON.stringify(arrElements))
                let newObj = newArr[idx]
                let id = newObj[jdx].id;
                document.getElementById(id).disabled = true;
                let stylesclickmines = document.getElementById(id);

                newArr.splice(idx, newObj)

                setArrElements(newArr)

                let pos = numposibility;
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
                var i = 0
                if (pos === 1) {
                    if (numran1 === id) {
                        i = 1
                    } else {
                        i = 0
                    }
                } else if (pos === 2) {
                    if (numran1 === id) {
                        i = 1
                    } else if (numran2 === id) {
                        i = 1
                    } else {
                        i = 0
                    }

                } else if (pos === 5) {
                    if (numran1 === id) {
                        i = 1
                    } else if (numran2 === id) {
                        i = 1
                    } else if (numran3 === id) {
                        i = 1
                    } else if (numran4 === id) {
                        i = 1
                    } else if (numran5 === id) {
                        i = 1
                    } else {
                        i = 0
                    }
                } else if (pos === 10) {
                    if (numran1 === id) {
                        i = 1
                    } else if (numran2 === id) {
                        i = 1
                    } else if (numran3 === id) {
                        i = 1
                    } else if (numran4 === id) {
                        i = 1
                    } else if (numran5 === id) {
                        i = 1
                    } else if (numran6 === id) {
                        i = 1
                    } else if (numran7 === id) {
                        i = 1
                    } else if (numran8 === id) {
                        i = 1
                    } else if (numran9 === id) {
                        i = 1
                    } else if (numran10 === id) {
                        i = 1
                    } else {
                        i = 0
                    }
                }
                if (i === 0) {
                    document.getElementById(id).animate(animationwin, duration);
                    setTimeout(function () {
                        stylesclickmines.style.backgroundImage = `url(${logo})`;
                        stylesclickmines.style.backgroundSize = "contain";
                        stylesclickmines.style.backgroundRepeat = "no-repeat";
                    }, 1000)
                } else if (i === 1) {
                    setPlayerstate(false)
                    document.getElementById(id).animate(animationlose, duration);
                    setTimeout(function () {
                        stylesclickmines.style.backgroundImage = `url(${bomba})`;
                        stylesclickmines.style.backgroundSize = "contain";
                        stylesclickmines.style.backgroundRepeat = "no-repeat";
                    }, 1000)
                }
            } else {
                let gameover= window.confirm("juego terminado");
                if (gameover===true){
                    window.location.reload();
                }
            }
        }else if(readytoplay===0){
            alert('coloque monto y numero de minas')
        }
    }

    var lista = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];

    const hadleClickBet = (event) => {
        
        
            setReadytoplay(readytoplay+1)
            setactivbet(true)
            //document.getElementById('bet').disabled = true;
            lista = lista.sort(function () { return Math.random() - 0.5 });
            setRandomnumber(lista)
        
    }
    const changebetword =(e)=>{
        setUserAmount(e)
        
        if(e===""|| e===0){
            setStatebuttonbet('Jugar Demo')
        }else{
            setStatebuttonbet('Iniciar Juego')
        }
    }
    const styles = {
        col1: {
            paddingTop: "10%"
        },
        div2: {
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #FFFFFF",
            borderRadius: "41px",
            width: "95%",
            backgroundPosition: "center center",
            justifyContent: "center",
            alignItems: "center",
            height: "95%"
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
            background: "#ffeb3b",
            width: "100%",
            border: "1px solid #FFFFFF",
            borderRadius: "15px",
            height: "60px",
            color:"black"


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

            backgroundColor: "transparent",
            apacity: "0",
            border: "none",
            color: "white",
            textAlign: "center"

        }, col2: {
            paddingTop: "2%"
        }


    }
    return (
        <Container fluid >
            <br />
            <HeaderOptions />
            <br />
            <br />
            <Row >
                <Col className='col-12 col-md-3 col-xs-12 list-unstyled mt-4' style={styles.col1}>
                    <center><div style={styles.div1}>
                        <div style={styles.div}>
                            <br />

                            <div style={styles.divaround}>
                                <font color="white">Amount to bet</font>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text style={styles.input} ><font color="white">$</font> </InputGroup.Text>
                                    <input type="text" id='inputamount' value={userAmount} onChange={(e) => changebetword(e.target.value)} />

                                </InputGroup>
                                <br />
                                
                            </div>
                            <br />
                            <font color="white">Mines</font>
                            <br />
                            {arrmina.map((eachRow, idx) => (
                                <Row className='d-flex justify-content-between'>
                                    {eachRow.map((eachCol, jdx) => (
                                        <button id={eachCol.id} name={eachCol.id} style={eachCol.click === false ? styleselectormines : changestyleselectormines} onClick={() => { handleIsClickedMines(idx, jdx) }} value={eachCol.valor}><font color="white">{eachCol.valor}</font></button>
                                    ))}

                                </Row>
                            ))}
                            <br />
                            <div>
                                <Button id='bet'  style={styles.Buttonbet} disabled={activbet} onClick={(e) => { hadleClickBet(e) }} >{statebuttonbet}</Button>
                            </div>
                            <br />

                        </div>
                    </div></center>
                </Col>
                <br />
                <Col className='col-12 col-md-6 col-xs-12 list-unstyled mt-4' style={styles.col2}>

                    <br />

                    <div className='justify-content-center ms-3' style={styles.div2}>
                        <br />

                        {arrElements.map((eachRow, idx) => (
                            <Row className='d-flex justify-content-evenly mb-4 me-4 ms-3'>
                                {eachRow.map((eachCol, jdx) => (
                                    <button id={eachCol.id} style={styleMinaOriigin} onClick={() => { handleIsClickedElements(idx, jdx) }}></button>
                                ))}

                            </Row>
                        ))}

                        <br />
                    </div>

                </Col>
                <br />
                <br />
                <Col className='col-12 col-md-3 col-xs-12 d-flex justify-content-center'>
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
