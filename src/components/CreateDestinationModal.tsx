import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import { Modal, Form, Button, Col, Row } from 'react-bootstrap';
import { bootstrapDialog, useModal } from '@ebay/nice-modal-react'
import schema from '../utils/formRules'
import '../assets/scss/_modal.scss'

type CreateDestinationModalProps = {
  title: string;
  destination: string;
  adress: string,
  link: string,
  population: number,
  hotel: number,
  income: number,
  area: number,
  toggle: boolean,
}

type FormProps = Omit<CreateDestinationModalProps, 'title'>

const CreateDestinationModal = ({ title }: CreateDestinationModalProps) => {

  const modal = useModal();

  const submitForm: SubmitHandler<FormProps> = (data) => {
    console.log({ data });
    reset()
    modal.hide()
  };

  const { register, handleSubmit, formState: { errors }, reset } = useForm<CreateDestinationModalProps>({
    resolver: yupResolver(schema),
  });

  return (
    <Modal centered {...bootstrapDialog(modal)}>
      <form
        onSubmit={handleSubmit(submitForm)}
        id="form-create-destination"
      >
        <Modal.Header>
          <Modal.Title><h4>{title}</h4></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col className="spacing">
              <p> {errors?.destination?.message}</p>
              <Form.Control
                placeholder="Nom de la destination"
                {...register("destination")}
              />
            </Col>
          </Row>
          <Row>
            <Col className="spacing">
              <p> {errors?.adress?.message}</p>
              <Form.Control
                placeholder="Adresse"
                {...register("adress")}
              />
            </Col>
          </Row>
          <Row>
            <Col className="spacing">
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
                {...register("area")}
              />
            </Col>
          </Row>
          <Row>
            <Col className="mt-4">
              <Form.Check
                type="switch"
                id="custom-switch"
                {...register("toggle")}
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={modal.hide}>
            Cancel
          </Button>
          <Button className="confirm" variant="success" type="submit">
            Confirm
          </Button>
        </Modal.Footer>
      </form>
    </Modal >
  );
}


export default CreateDestinationModal;