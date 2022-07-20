import { useContext } from "react";
import { Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { dataContext } from '../context/context'
import "../assets/scss/_card.scss";

const CardDestination = () => {
  const { destinations, } = useContext(dataContext);
  let list = JSON.parse(localStorage.getItem("items") as string);
  if (list === null) { list = destinations }

  return (
    <>
      {list.map((item: any) => (
        <Card>
          <Card.Img variant="top" height="200px" src={item.link} />
          <Card.Body>
            <Card.Title>{item.destination}</Card.Title>
            <div className="d-flex justify-content-between">
              {item.adress}
              <Form.Check
                type="switch"
                id="custom-switch"
                checked={item.toggle}
              />
            </div>
            {item.toggle}
            <hr />
            <Card.Text>
              <div className="d-flex flex-column">
                {item.population} M<span>Habitants</span>
              </div>
              <div className="d-flex flex-column">
                {item.hotel}
                <span>Hotels</span>
              </div>
              <div className="d-flex flex-column">
                {item.income} €<span>Revenu Moy</span>
              </div>
              <div className="d-flex flex-column">
                {item.area}
                <span>km2</span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default CardDestination;
