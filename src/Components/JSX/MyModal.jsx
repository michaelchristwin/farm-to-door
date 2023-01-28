import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../CSS/styles.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="d-flex justify-content-between px-3 mt-2">
        <p className="top-mod">Cart Total</p>
        <p className="top-mod">TSH 11.52</p>
      </div>
      <p className="d-block ms-3 young">9000 Young Street store</p>
      <Modal.Body>
        <div className="pd border d-flex mx-auto">
          <button className="btn-pd btn">Pickup</button>
          <button className="btn-pd btn">Delivery</button>
        </div>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;
