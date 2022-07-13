import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Modal, Form, Button, Col, Row } from 'react-bootstrap';
import { bootstrapDialog, useModal } from '@ebay/nice-modal-react';
// import { FormInput } from '../models/formValidation';
import '../assets/scss/_modal.scss'
import InputFields from './InputFields';
import { FormInput } from '../models/formValidation';

type CreateDestinationModalProps = {
  title: string;
}
const defaultValues = {
  destination: '',
  adress: '',
  link: '',
  population: '',
  hotel: '',
  income: '',
  area: '',
};

const CreateDestinationModal = ({ title }: CreateDestinationModalProps) => {

  const modal = useModal();

  const handleSubmit = () => {
    modal.resolve({ value: "Send the text user submitted" });
    modal.hide();
  };


  const methods = useForm({
    defaultValues,
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  // const handleValidation = (data: FormInput) => {
  //   data
  // };

  // const { handleSubmit } = methods;

  return (
    <Modal centered {...bootstrapDialog(modal)}>
      <FormProvider {...methods}>
        <form
          // onSubmit={handleSubmit(handleValidation)}
          id="form-create-destination"
        >
          <Modal.Header>
            <Modal.Title><h4>{title}</h4></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col className="spacing">
                  <InputFields.DestinationName />
                </Col>
              </Row>
              <Row>
                <Col className="spacing">
                  <InputFields.DestinationAdress />
                </Col>
              </Row>
              <Row>
                <Col className="spacing">
                  <InputFields.DestinationLink />
                </Col>
              </Row>
              <Row>
                <Col md={3}>
                  <InputFields.DestinationPopulation />
                </Col>
                <Col md={3}>
                  <InputFields.DestinationHotel />
                </Col>
                <Col md={3}>
                  <InputFields.DestinationAverageIncome />
                </Col>
                <Col md={3}>
                  <InputFields.DestinationArea />
                </Col>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={modal.hide}>
              Cancel
            </Button>
            <Button className="confirm" variant="success" onClick={handleSubmit}>
              Confirm
            </Button>
          </Modal.Footer>
        </form>
      </FormProvider>
    </Modal>
  );
}


export default CreateDestinationModal;