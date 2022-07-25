import { useContext } from "react";
import { Button } from "react-bootstrap";
import NiceModal from "@ebay/nice-modal-react";
import CreateDestinationModal from "./Modal/CreateDestinationModal";
import { Form } from "react-bootstrap";
import { DarkModeContext } from "../context/DarkModeContext";

const Header: React.FC<{}> = () => {
  const { toggleDarkMode } = useContext(DarkModeContext);
  let darkStorage = JSON.parse(localStorage.getItem("dark") as string);

  return (
    <div className="container-header">
      <h2>Destinations</h2>
      <div className="dark-mode-element">
        <span>☀️</span>
        <Form.Check
          type="switch"
          id="custom-switch"
          checked={darkStorage === "dark" && true}
          onChange={toggleDarkMode}
        />
        <span>🌑</span>
      </div>
      <Button
        className="button"
        aria-label="btn-add-destination"
        onClick={() => {
          NiceModal.show(NiceModal.create(CreateDestinationModal), {
            title: "Ajouter une nouvelle destination",
          });
        }}
      >
        + &ensp;Ajouter
      </Button>
    </div>
  );
};

export default Header;
