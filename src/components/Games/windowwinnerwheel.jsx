import React from 'react';
import Modal from 'react-bootstrap/Modal';


function WindowWinnerWheel(props) {
  const [winner, setWinner]=React.useState();
 
  var color=props.props[0];
  var user=props.props[1]

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Casino
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>WON THE COLOR {color} </h4>
        <p>
          Congratulations {user}, YOU ARE THE WINNER
        </p>
      </Modal.Body>
      <Modal.Footer>
       
      </Modal.Footer>
    </Modal>
  )
}
export default WindowWinnerWheel;