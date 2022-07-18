import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FormProps } from "../models/formValidation";
// import CardGroup from 'react-bootstrap/CardGroup'
// import FewDestinations from '../utils/list'
import "../assets/scss/_card.scss";

const CardDestination = () => {
  const [items, setItems] = useState<FormProps[]>([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items") as string);
    console.log(items);
    if (items) {
      setItems(items);
    }
  }, []);

  return (
    <>
      {items.map((item) => (
        <Card>
          <Card.Img variant="top" height="200px" src={item.link} />
          <Card.Body>
            <Card.Title>{item.destination}</Card.Title>
            <div className="d-flex justify-content-between">
              {item.adress}
              <Form.Check
                type="switch"
                id="custom-switch"
                checked={item.toggle ? true : false}
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
