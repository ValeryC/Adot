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
  const { darkMode } = useContext(DarkModeContext);

  const deleteItem = () => {
    let items = JSON.parse(localStorage.getItem("items") as string);
    let itemIndex = index; // index of item to be removed
    items.splice(itemIndex, 1);
    localStorage.setItem("items", JSON.stringify(items));
    window.location.href = "http://localhost:3000/";
    modal.hide();
  };
  return (
    <Modal className="delete_modal" centered {...bootstrapDialog(modal)}>
      <div className={darkMode === "dark" ? "modal-content-dark" : ""}>
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
