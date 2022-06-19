import * as React from "react"

///Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

///Assets 

///Components
import DepositInfo from "./depositInfoFrame";
import WithdrawInfo from "./withdraInfoFrame";
const TransactionsFrame = (props) => {
    const [isDeposit, setIsDeposit] = React.useState(props.windowToOpen)

    const styles = {
        bgFrame: {
            background: "",
            border: "1px solid #EFEFEF",
            backdropFilter: "blur(60px)",
          
            height:"70%",
            
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
                <Col className="mt-2 mx-1" md={1} sm={1} xs={4} > <div onClick={() => { setIsDeposit(true) }} style={isDeposit ? styles.txtUnderLine : styles.emptyStyle}>Deposito</div> </Col>
                <Col className="mt-2 mx-4" md={1} sm={1} xs={4}> <div onClick={() => { setIsDeposit(false) }} style={!isDeposit ? styles.txtUnderLine : styles.emptyStyle}>Retiro</div></Col>
            </Row>
            {isDeposit ?
                <DepositInfo />:
                <WithdrawInfo />

            }

        </Container>
    )
}

export default TransactionsFrame