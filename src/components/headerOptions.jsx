import * as React from 'react'

///Bootstrap components
import Col from 'react-bootstrap/Col';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Dropdown from 'react-bootstrap/Dropdown';

const HeaderOptions = () => {
    const styles={
        row1: {
            width: "100%",
            alignItems: "center",
            justifyContent: "center",

        },
        content1:{
            width: "80%",
            backgroundPosition: "center center",
            height: "60px",
            background: "rgba(231, 231, 231, 0.43)",
            border: "1px solid #ffffff",
            borderRadius: "41px",
            alignItems: "center",
            justifyContent: "center"
        },
        
    }

    return (
        <>
            <Row style={styles.row1}>
                <div className='d-flex justify-content-around' style={styles.content1}>
                    <Col lg={4} sm={4}>
                        <DropdownButton variant="text" id="dropdown-basic-button" title="Usuarios">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                    </Col >
                    <Col lg={4} sm={4}><center><Button variant="success">Depositar</Button>{' '}</center></Col>
                    <Col lg={4} sm={4}><center><Button variant="info" className="">Retirar</Button>{' '}</center></Col>

                </div>

            </Row>
        </>
    )
}

export default HeaderOptions