import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal, Form, Button, Col, Row } from "react-bootstrap";
import { bootstrapDialog, useModal } from "@ebay/nice-modal-react";
import schema from "../utils/formRules";
import {
  CreateDestinationModalProps,
  FormProps,
} from "../models/formValidation";
import "../assets/scss/_modal.scss";

const CreateDestinationModal = ({ title }: CreateDestinationModalProps) => {
  const [toggle, setToggle] = useState(false);
  const modal = useModal();

  const submitForm: SubmitHandler<FormProps> = (data) => {
    let list = [];
    list = JSON.parse(localStorage.getItem("items") as string);
    list.push(data);
    localStorage.setItem("items", JSON.stringify(list));
    window.location.href = "http://localhost:3000/";
    modal.hide();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateDestinationModalProps>({
    resolver: yupResolver(schema),
  });

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
              <span> {errors?.destination?.message}</span>
              <Form.Control
                placeholder="Nom de la destination"
                {...register("destination")}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <span> {errors?.adress?.message}</span>
              <Form.Control
                placeholder="Adresse"
                autoFocus
                {...register("adress")}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <span> {errors?.link?.message}</span>
              <Form.Control
                placeholder="Lien de l'image"
                {...register("link")}
              />
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <span> {errors?.population?.message}</span>
              <Form.Control
                placeholder="Nb Habitants"
                {...register("population")}
              />
            </Col>
            <Col md={3}>
              <span> {errors?.hotel?.message}</span>
              <Form.Control placeholder="Nb Hôtels" {...register("hotel")} />
            </Col>
            <Col md={3}>
              <span> {errors?.income?.message}</span>
              <Form.Control placeholder="Revenu Moy" {...register("income")} />
            </Col>
            <Col md={3}>
              <span> {errors?.area?.message}</span>
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
                onChange={() => setToggle(!toggle)}
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
