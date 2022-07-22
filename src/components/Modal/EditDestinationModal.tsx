import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Modal,
  Form,
  Button,
  Col,
  Row,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";
import { bootstrapDialog, useModal } from "@ebay/nice-modal-react";
import schema from "../../utils/formRules";
import {
  EditDestinationModalProps,
  FormProps,
} from "../../models/formValidation";
import "../../assets/scss/_modal.scss";

const EditDestinationModal = ({ title, index }: EditDestinationModalProps) => {
  let list = JSON.parse(localStorage.getItem("items") as string);
  const [toggle, setToggle] = useState(list.at(index).toggle);
  const modal = useModal();

  const submitForm: SubmitHandler<FormProps> = (data) => {
    let list2 = [];
    list2 = JSON.parse(localStorage.getItem("items") as string);
    list2.splice(index, index, data);
    localStorage.setItem("items", JSON.stringify(list2));
    window.location.href = "http://localhost:3000/";
    modal.hide();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditDestinationModalProps>({
    resolver: yupResolver(schema),
  });
  return (
    <>
      <Modal key={index} centered {...bootstrapDialog(modal)}>
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
                <OverlayTrigger
                  trigger={["hover", "focus"]}
                  placement="right"
                  overlay={
                    <Popover>
                      <Popover.Header>Nom de la destination</Popover.Header>
                      <Popover.Body>
                        Veuillez entrer un nom de destination type "Madrid"
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Form.Control
                    placeholder="Nom de la destination"
                    {...register("destination")}
                    defaultValue={list.at(index).destination}
                  />
                </OverlayTrigger>
              </Col>
            </Row>
            <Row>
              <Col>
                <p> {errors?.adress?.message}</p>
                <OverlayTrigger
                  trigger={["hover", "focus"]}
                  placement="right"
                  overlay={
                    <Popover>
                      <Popover.Header>Adresse</Popover.Header>
                      <Popover.Body>
                        Veuillez entrer une adresse type "Avenue des champs"
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Form.Control
                    placeholder="Adresse"
                    autoFocus
                    {...register("adress")}
                    defaultValue={list.at(index).adress}
                  />
                </OverlayTrigger>
              </Col>
            </Row>
            <Row>
              <Col>
                <p> {errors?.link?.message}</p>
                <OverlayTrigger
                  trigger={["hover", "focus"]}
                  placement="right"
                  overlay={
                    <Popover>
                      <Popover.Header>Lien de votre image</Popover.Header>
                      <Popover.Body>
                        Veuillez entrer une adresse image de votre choix type
                        "https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?cs=srgb&dl=pexels-pixabay-290595.jpg&fm=jpg"
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Form.Control
                    placeholder="Lien de l'image"
                    {...register("link")}
                    defaultValue={list.at(index).link}
                  />
                </OverlayTrigger>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <p> {errors?.population?.message}</p>
                <OverlayTrigger
                  trigger={["hover", "focus"]}
                  placement="bottom"
                  overlay={
                    <Popover>
                      <Popover.Header>Nombre d'habitants</Popover.Header>
                      <Popover.Body>
                        Le nombre d'habitant est en million. Si vous mettez le
                        chiffre 1.2 cela validera 1.2 Million.
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Form.Control
                    placeholder="Nb Habitants"
                    {...register("population")}
                    defaultValue={list.at(index).population}
                  />
                </OverlayTrigger>
              </Col>
              <Col md={3}>
                <p> {errors?.hotel?.message}</p>
                <OverlayTrigger
                  trigger={["hover", "focus"]}
                  placement="bottom"
                  overlay={
                    <Popover>
                      <Popover.Header>Nombre d'hôtels</Popover.Header>
                      <Popover.Body>
                        Veuiller saisir un nombre entier qui sera exprimé en
                        nombre d'hôtel.
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Form.Control
                    placeholder="Nb Hôtels"
                    {...register("hotel")}
                    defaultValue={list.at(index).hotel}
                  />
                </OverlayTrigger>
              </Col>
              <Col md={3}>
                <p> {errors?.income?.message}</p>
                <OverlayTrigger
                  trigger={["hover", "focus"]}
                  placement="bottom"
                  overlay={
                    <Popover>
                      <Popover.Header>Revenu Moyen</Popover.Header>
                      <Popover.Body>
                        Veuiller saisir un nombre entier qui sera exprimé en
                        euros.
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Form.Control
                    placeholder="Revenu Moy"
                    {...register("income")}
                    defaultValue={list.at(index).income}
                  />
                </OverlayTrigger>
              </Col>
              <Col md={3}>
                <p> {errors?.area?.message}</p>
                <OverlayTrigger
                  trigger={["hover", "focus"]}
                  placement="bottom"
                  overlay={
                    <Popover>
                      <Popover.Header>Superficie</Popover.Header>
                      <Popover.Body>
                        La superficie sera en km2. Si vous saissisez 2.4 cela
                        validera 2.4 km2.
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Form.Control
                    placeholder="Superficie"
                    data-testid="area"
                    {...register("area")}
                    defaultValue={list.at(index).area}
                  />
                </OverlayTrigger>
              </Col>
            </Row>
            <Row>
              <Col className="mt-4 d-inline-flex">
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  {...register("toggle")}
                  defaultChecked={list.at(index).toggle}
                  onChange={() => setToggle(!toggle)}
                />
                <span className="ms-2">
                  {toggle ? "Activer" : "Desactiver"}
                </span>
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
    </>
  );
};

export default EditDestinationModal;
