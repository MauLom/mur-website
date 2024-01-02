import * as React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
const CancelPayment =()=>{
    const styles={
        container:{
            height:"100vh",
            width:"100%"
        }
    }
    return(
        <Container style={styles.container} className='d-flex justify-content-center align-items-center'>
            <Row  className='d-flex justify-content-center align-items-center'>
                <Col id="generalcontents">
                    <Row className='mt-4 mb-4'><center><h1><font color="white">Pago Cancelado</font></h1></center></Row>
                    <Row className='mt-4 mb-4'><center><h1><font color="white">:( </font></h1></center></Row>
                    <Row className='mt-4 mb-4'><center><h3><Link to='/' id='linkto'>Volver al inicio</Link></h3></center></Row>
                </Col>
            </Row>
        </Container>
    )
}
export default CancelPayment;