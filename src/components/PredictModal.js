import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const PredictModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.header}
        </Modal.Title>
      </Modal.Header>
    <Modal.Body>
      <h4>ไพ่: {props.card}</h4>
        <p>
          {props.body}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PredictModal;
