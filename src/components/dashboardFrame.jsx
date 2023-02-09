import * as React from 'react'
import HeaderOptions from './headerOptions';
//import './stylesDashboard.css'
///Bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container, Form } from 'react-bootstrap';
///Assets
import GameBombs from '../assets/BOMBAS.png'
import GameWheel from '../assets/RULETA.png'
import GameTower from '../assets/TORRES.png'
import Halloffame from './halloffame';

import { Link } from 'react-router-dom';
import LoginFrame from './loginFrame';
import RegisterFrame from './registerFrame';
import { onstatusofuser } from './sockets.js';
const DashboardFrame = () => {

    const styles = {
        glassSquares: {
            background: "rgba(231, 231, 231, 0.43)",
            borderRadius: "41px",
            height: "90%",
            width: "100%"

        },
        imgGames: {
            width: "100%",
            height: "100%"
        },
        hr: {
            backgroundColor: "white",
            height: "10px"
        }
    }
    const [showregister, setShowregister] = React.useState('0');
    const [statusUser, setStatusUser]= React.useState('idle');
    const [userName, setUserName]=React.useState('');
    const statusglobal= sessionStorage.setItem('username','data')
     const statusofuser=(data)=>{
        var usuario=data.username
        var status=data.status
        setStatusUser(status)
        setUserName(usuario)
        console.log('el estatus del juagdor es: ',status)
     }
     onstatusofuser(statusofuser)
    var columns1=[2,2,12]
    var columns2=[10,10,12]
     if(statusUser===null || statusUser==='' || statusUser==='data' ){
           
        console.log("igresa sesión para comenzar")
    }else if(statusUser==='active') {
        sessionStorage.setItem('username',userName)
        console.log("datos del usuario "+ userName)
        columns1=[0,0,0]
        columns2 =[12,12,12]
    }
    
    return (
        <Container fluid>
            <Row>
            <Col Col lg={columns1[0]} md={columns1[1]} sm={columns1[2]}>
                <br />
            {showregister  === '0' ? <LoginFrame changeregister={setShowregister} /> : showregister === "1"? <RegisterFrame changeregister={setShowregister}/> : showregister  === '2' || statusUser==='active' ? console.log('sesion iniciada'):false }
            </Col>
            <Col lg={columns2[1]} md={columns2[1]} sm={columns2[2]}>
            <Row className='justify-content-center' lg={12} md={12} sm={12}>
                {statusUser === "active"? <HeaderOptions changeregister={setShowregister}/>:false}
            </Row>
            <br />
            <br />
            <br />
            <Row className='justify-content-center'>
                <Col lg={3} md={3} sm={4}  >

                    <div style={styles.glassSquares}><Link to="/gameMines"><img style={styles.imgGames} src={GameBombs} alt="game-bombs" /></Link><br /></div>
                </Col>
                <br />
                <Col lg={3} md={3} sm={4}  >
                    <div style={styles.glassSquares}> <Link to="/gameWheel"><img style={styles.imgGames} src={GameWheel} alt="game-wheel" /></Link><br /></div>
                </Col><br />
                <Col lg={3} md={3} sm={4} >
                    <div style={styles.glassSquares}><Link to="/gameTowers"><img style={styles.imgGames} src={GameTower} alt="game-towers" /></Link><br /></div>
                </Col>

            </Row>
            
            
            </Col>
            </Row>
            <Row className='justify-content-center' lg={12} md={12} sm={12} >
                <Halloffame />
            </Row>
        </Container>
    )
}
export default DashboardFrame