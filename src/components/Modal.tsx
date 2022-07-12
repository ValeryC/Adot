import React, { PropsWithChildren } from 'react';
import { Modal } from 'react-bootstrap';

type ModalProps = PropsWithChildren<{
  title: string;
  toggle: boolean;
  overlay?: React.ReactNode;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  footer?: React.ReactNode;
}>;

const DisplayModal: React.FC<ModalProps> = ({
  title,
  toggle,
  setToggle,
  children,
  overlay,
  footer,
}: ModalProps) => {
  return (
    <Modal
      backdrop="static"
      show={toggle}
      onHide={() => setToggle(false)}
      centered
    >
      {overlay}
      <Modal.Header closeButton>
        <h1>{title}</h1>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      {footer && <Modal.Footer>{footer}</Modal.Footer>}
    </Modal>
  );
};

export default DisplayModal;