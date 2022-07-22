import { useContext } from "react";
import { Form } from "react-bootstrap";
import { Card, Dropdown } from "react-bootstrap";
import NiceModal from "@ebay/nice-modal-react";
import DeleteDestinationModal from "./Modal/DeleteDestinationModal";
import EditDestinationModal from "./Modal/EditDestinationModal";
import { dataContext } from "../context/context";
import "../assets/scss/_card.scss";
import "../assets/scss/_menu.scss";

import { FormProps } from "../models/formValidation";
import ActionsMenu from "./Menu/ActionsMenu";

const CardDestination = () => {
  const { destinations } = useContext(dataContext);
  let list = JSON.parse(localStorage.getItem("items") as string);
  if (list === null) {
    list = destinations;
  }

  const changeToggle = (param: boolean, index: number) => {
    let items = JSON.parse(localStorage.getItem("items") as string);
    items.at(index).toggle = !items.at(index).toggle;
    localStorage.setItem("items", JSON.stringify(items));
  };

  return (
    <>
      {list.map((item: FormProps, index: number) => (
        <Card key={index}>
          <ActionsMenu title="actions">
            <Dropdown.Item
              className="ps-4"
              onClick={() => {
                NiceModal.show(NiceModal.create(EditDestinationModal), {
                  title: "Editer votre destination",
                  index,
                });
              }}
              to="#/"
              alt="Edit"
            >
              Edit destination
            </Dropdown.Item>
            <Dropdown.Item
              className="ps-4"
              onClick={() => {
                NiceModal.show(NiceModal.create(DeleteDestinationModal), {
                  title: "Confirmez-vous la suppression de cette destination ?",
                  index,
                });
              }}
              alt="Delete destination"
            >
              Delete destination
            </Dropdown.Item>
          </ActionsMenu>
          <Card.Img variant="top" height="200px" src={item.link} />
          <Card.Body>
            <Card.Title>{item.destination}</Card.Title>
            <div className="d-flex justify-content-between">
              {item.adress}
              <Form.Check
                type="switch"
                id="custom-switch"
                defaultChecked={item.toggle}
                onClick={() => changeToggle(item.toggle, index)}
              />
            </div>
            {item.toggle}
            <hr />
            <div className="card-text">
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
            </div>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default CardDestination;
