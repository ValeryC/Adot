import { Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import CustomForm from '../components/Forms/Form'
import FormRules from '../utils/formRules';

const DestinationName = () => {
  const { register } = useFormContext();
  return (
    <Form.Group controlId="formDestinationName">
      <Form.Control
        name="destination"
        // ref={register({ ...FormRules.destination })}
        placeholder="Nom de la destination"
      />
      <CustomForm.Error field="destination" />
    </Form.Group>
  );
}

const DestinationAdress = () => {
  const { register } = useFormContext();
  return (
    <Form.Group controlId="formDestinationAdress">
      <Form.Control
        name="adress"
        placeholder="Adresse"
      />
    </Form.Group>
  );
};

const DestinationLink = () => {
  const { register } = useFormContext();
  return (
    <Form.Group controlId="formDestinationLink">
      <Form.Control
        name="link"
        placeholder="Lien de l'image"
      />
    </Form.Group>
  );
};

const DestinationPopulation = () => {
  const { register } = useFormContext();
  return (
    <Form.Group controlId="formDestinationPopulation">
      <Form.Control
        name="population"
        placeholder="Nb Habitants"
      />
    </Form.Group>
  );
}

const DestinationHotel = () => {
  const { register } = useFormContext();
  return (
    <Form.Group controlId="formDestinationHotel">
      <Form.Control
        name="hotel"
        placeholder="Nb Hôtels"
      />
    </Form.Group>
  );
}

const DestinationAverageIncome = () => {
  const { register } = useFormContext();
  return (
    <Form.Group controlId="formDestinationAverageIncome">
      <Form.Control
        name="income"
        placeholder="Revenu Moy"
      />
    </Form.Group>
  );
}

const DestinationArea = () => {
  const { register } = useFormContext();
  return (
    <Form.Group controlId="formDestinationArea">
      <Form.Control
        name="Area"
        placeholder="Superficie"
      />
    </Form.Group>
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  DestinationName,
  DestinationAdress,
  DestinationLink,
  DestinationPopulation,
  DestinationHotel,
  DestinationAverageIncome,
  DestinationArea,
};