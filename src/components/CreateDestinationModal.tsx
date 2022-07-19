import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal, Form, Button, Col, Row } from "react-bootstrap";
import { bootstrapDialog, useModal } from "@ebay/nice-modal-react";
import schema from "../utils/formRules";
import FewDestinations from "../utils/list";
import {
  CreateDestinationModalProps,
  FormProps,
} from "../models/formValidation";
import "../assets/scss/_modal.scss";

const CreateDestinationModal = ({ title }: CreateDestinationModalProps) => {
  // set object of items to localStorage
  const [items, setItems] = useState([]);
  const [toggle, setToggle] = useState(false);
  const modal = useModal();

  const submitForm: SubmitHandler<FormProps> = (data) => {
    setItems((prevItems): any => {
      const newItems = [...prevItems, { ...data }];
      localStorage.setItem("items", JSON.stringify([...newItems, ...items]));
      // localStorage.setItem("items2", JSON.stringify([...FewDestinations,...newItems]));
      return newItems;
    });
    modal.hide();
    window.location.reload();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateDestinationModalProps>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    localStorage.setItem(
      "items",
      JSON.stringify([...FewDestinations, ...items])
    );
  }, [items]);

  return (
    <Modal centered {...bootstrapDialog(modal)}>
      <form onSubmit={handleSubmit(submitForm)} id="form-create-destination">
        <Modal.Header>
          <Modal.Title>
            <h4>{title}</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <p> {errors?.destination?.message}</p>
              <Form.Control
                placeholder="Nom de la destination"
                {...register("destination")}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p> {errors?.adress?.message}</p>
              <Form.Control
                placeholder="Adresse"
                autoFocus
                {...register("adress")}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p> {errors?.link?.message}</p>
              <Form.Control
                placeholder="Lien de l'image"
                {...register("link")}
              />
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <p> {errors?.population?.message}</p>
              <Form.Control
                placeholder="Nb Habitants"
                {...register("population")}
              />
            </Col>
            <Col md={3}>
              <p> {errors?.hotel?.message}</p>
              <Form.Control
                placeholder="Nb Hôtels"
                {...register("hotel")}
              />
            </Col>
            <Col md={3}>
              <p> {errors?.income?.message}</p>
              <Form.Control
                placeholder="Revenu Moy"
                {...register("income")}
                />
            </Col>
            <Col md={3}>
              <p> {errors?.area?.message}</p>
              <Form.Control
                placeholder="Superficie"
                data-testid="area"
                {...register("area")}
              />
            </Col>
          </Row>
          <Row>
            <Col className="mt-4 d-inline-flex">
              <Form.Check
                type="switch"
                id="custom-switch"
                {...register("toggle")}
                onChange={(e) => setToggle(!toggle)}
              />
              <span className="ms-2">{toggle ? "Activer" : "Desactiver"}</span>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
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
            type="submit"
          >
            Confirm
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default CreateDestinationModal;
