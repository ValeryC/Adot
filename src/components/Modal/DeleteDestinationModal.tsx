import { useContext } from "react";
import { bootstrapDialog, useModal } from "@ebay/nice-modal-react";
import { Modal, Button } from "react-bootstrap";
import { DarkModeContext } from "../../context/DarkModeContext";

type DeleteDestinationModalProps = {
  title: string;
  index: number;
};

const DeleteDestinationModal = ({
  title,
  index,
}: DeleteDestinationModalProps) => {
  const modal = useModal();
  const { darkStorage } = useContext(DarkModeContext);

  const deleteItem = () => {
    let items = JSON.parse(localStorage.getItem("items") as string);
    let itemIndex = index; // index of item to be removed
    items.splice(itemIndex, 1);
    localStorage.setItem("items", JSON.stringify(items));
    window.history.go(0);
    modal.hide();
  };
  return (
    <Modal className="delete_modal" centered {...bootstrapDialog(modal)}>
      <div className={darkStorage === "dark" ? "modal-content-dark" : ""}>
        <Modal.Header>
          <Modal.Title>
            <h4>{title}</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button
            aria-label="btn-cancel"
            variant="secondary"
            onClick={modal.hide}
          >
            Cancel
          </Button>
          <Button
            aria-label="btn-submit-form"
            className="confirm"
            variant="success"
            onClick={() => deleteItem()}
          >
            Confirm
          </Button>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default DeleteDestinationModal;
