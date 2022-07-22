import { Button } from "react-bootstrap";
import NiceModal from "@ebay/nice-modal-react";
import CreateDestinationModal from "./Modal/CreateDestinationModal";

const Header: React.FC<{}> = () => {
  return (
    <div className="container-header">
      <h2>Destinations</h2>
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
