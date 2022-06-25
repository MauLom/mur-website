import * as React from "react";
import { Formik } from 'formik';

///Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

///AsseTs 


const WithdrawAdress = () => {


    const styles = {
        buttonStylized: {
            minWidth: "120px",
            minHeight: "30px",

            background: "linear-gradient(120.37deg, rgba(221, 122, 5, 0.8) 0%, rgba(236, 25, 164, 0.8) 100%)",
            border: "2px solid #EFEFEF",
            boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.25)",
            borderRadius: "20px",

            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "25px",
            lineHeight: "38px",
            textAlign: "center",
            letterSpacing: "0.03em",
            color: "#FFFFFF",
        },


        inputStylized: {
            
            background: "rgba(255, 255, 255, 0.2)",
            borderBottom: "3px solid rgb(239, 239, 239)",
            outline: "none",
            fontStyle: "normal",
            border: "2px solid #EFEFEF",
            boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.25)",
            borderRadius: "20px",
            
        },

        logoBTC: {
            width: "115px",
            height: "45px"
        },
    }

    return (
        <Row>
           
                <Col>
                    <Row className="mt-3 mx-1">
                        Confirma sus datos
                    </Row>
                    <Formik>
                        <form>
                            <img style={styles.logoBTC} alt="BTC-log" src="https://pngimg.com/uploads/bitcoin/bitcoin_PNG36.png" />
                            <Row>
                                <Col>
                                    <Row className="mt-2"> <lable>Wallet Adress</lable></Row>
                                    <Row>
                                        <Col><input style={styles.inputStylized} /></Col>
                                    </Row>
                                    <Row className="mt-2"><label>Amount</label></Row>
                                    <Row><Col><input style={styles.inputStylized} /></Col></Row>
                                </Col>

                                <Col>
                                  
                                </Col>
                            </Row>
                            <Row>
                                <button style={styles.buttonStylized} className="mt-3">Withdraw</button>
                            </Row>
                        </form>
                    </Formik>
                </Col>
        

        </Row>
    )
}

export default WithdrawAdress