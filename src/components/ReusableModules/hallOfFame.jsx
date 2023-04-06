import * as React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
const HallOfFame = () => {
    const styles = {
        hr: {
            backgroundColor: "white",
            height: "5px"
        },
        halloffamesquare: {
            background: "linear-gradient(120.37deg, rgba(239, 239, 239, 0.6) 0%, rgba(255, 255, 255, 0.1) 100%)",
            borderRadius: "21px",
            height: "100%",
            width: "100%",
            alignContent: "center",
            justifyContent: "center"
        },
        tableItems: {
            background: "transparent",
            border: "1px solid white",
            color: "white",
            borderRadius: "5px",
            margin: "0 0 5px 0",
        },
        cardStyle: {
            color: "white",
            borderRadius: "10px",
            margin: "0 0 5px 0",
            border: "1px solid",
            background: "rgba(231, 231, 231, 0.43)"
        },
        cardTitle: {
            fontSize:"24px"
        }
    }
    return (
        <Card style={styles.cardStyle}>
            <Card.Body>
                <Card.Title style={styles.cardTitle}>
                    Hall of Fame
                </Card.Title>
                <Card.Text>
                    <ListGroup variant="flush">
                        <ListGroup.Item style={styles.tableItems}>....00Xe364A ------ 50$</ListGroup.Item>
                        <ListGroup.Item style={styles.tableItems}>....00Xe364A ------ 50$</ListGroup.Item>
                        <ListGroup.Item style={styles.tableItems}>....00Xe364A ------ 50$</ListGroup.Item>
                        <ListGroup.Item style={styles.tableItems}>....00Xe364A ------ 50$</ListGroup.Item>

                    </ListGroup>
                </Card.Text>


            </Card.Body>

        </Card>
    )
}

export default HallOfFame