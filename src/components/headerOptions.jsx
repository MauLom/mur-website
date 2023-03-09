import * as React from 'react'

///Bootstrap components
import Col from 'react-bootstrap/Col';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Dropdown from 'react-bootstrap/Dropdown';
import { emitstateofuser } from './sockets.js';
import Logo from '../assets/LOGO.png'

const HeaderOptions = ({changeregister}) => {
    const datauser = sessionStorage.getItem("username");
    let user = "Usuario"

    if (datauser !== null || datauser !== '' || datauser !== 'data') {
        user = datauser
    }
    const HadleLogOut = (e) => {
        if (user !== "" || user !== null || user !== 'data') {
            var data = { "user": user, "status": "idle" }
            setTimeout(function () {
                emitstateofuser(data)
                changeregister("0")
            }, 1000)
        }
    }

    const styles = {
        row1: {
            width: "100%",
            alignItems: "center",
            justifyContent: "center",

        },
        content1: {
            width: "80%",
            backgroundPosition: "center center",
            height: "60px",
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "41px",
            alignItems: "center",
            justifyContent: "center"
        },
        imglogo: {
            height: '30px',
            with: '30px',
            top:'1%',
            position:'fixed',
            left: '1%'
            
        }


    }

    return (
        <>
            <Row style={styles.row1}>
                <div class='container d-none d-md-block d-lg-block' style={styles.imglogo}><img height="80px" width="80px" src={Logo} alt="" /></div>
                <div className='d-flex justify-content-around' style={styles.content1}>
                    <Col>
                        <DropdownButton variant="text" id="dropdown-basic-button" title={user}>
                            <Dropdown.Item href="#/action-1">Account</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => { HadleLogOut(e) }}>Log out</Dropdown.Item>
                        </DropdownButton>
                    </Col >
                    <Col><center><Button variant="success">Depositar</Button>{' '}</center></Col>
                    <Col><center><Button variant="info" className="">Retirar</Button>{' '}</center></Col>

                </div>
                <div></div>
            </Row>
        </>
    )
}

export default HeaderOptions