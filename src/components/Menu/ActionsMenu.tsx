import { PropsWithChildren } from "react";
import { Dropdown } from "react-bootstrap";
import ActionToggle from "./ActionToogle";

type ActionsMenuProps = PropsWithChildren<{
  title: string;
}>;

const ActionsMenu = ({ children, title }: ActionsMenuProps) => {
  return (
    <Dropdown>
      <Dropdown.Toggle as={ActionToggle} title={title} />
      <Dropdown.Menu>{children}</Dropdown.Menu>
    </Dropdown>
  );
};

export default ActionsMenu;
