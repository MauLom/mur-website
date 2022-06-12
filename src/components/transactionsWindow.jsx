import * as React from "react"

///Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

///Assets 

///Components
import DepositInfo from "./depositInfoFrame";
import WithdrawInfo from "./withdraInfoFrame";
const TransactionsFrame = () => {
    const [isDeposit, setIsDeposit] = React.useState(true)

    const styles = {
        bgFrame: {
            background: "linear-gradient(120.37deg, rgba(33, 6, 6, 0.6) 0%, rgba(255, 255, 255, 0.1) 100%)",
            border: "1px solid #EFEFEF",
            backdropFilter: "blur(60px)",
            borderRadius: "25px",
            height:"70%"
        },
        txtUnderLine: {
            textDecoration: "underline"
        },
        emptyStyle: {

        }

    }

    return (
        <Container fluid style={styles.bgFrame}>
            <Row className="text-start">
                <Col md={1} sm={1} xs={4} > <div onClick={() => { setIsDeposit(true) }} style={isDeposit ? styles.txtUnderLine : styles.emptyStyle}>Deposito</div> </Col>
                <Col md={1} sm={1} xs={4}> <div onClick={() => { setIsDeposit(false) }} style={!isDeposit ? styles.txtUnderLine : styles.emptyStyle}>Retiro</div></Col>
            </Row>
            {isDeposit ?
                <DepositInfo />:
                <WithdrawInfo />

            }

        </Container>
    )
}

export default TransactionsFrame