import React from 'react';
import { Col, Row, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/scss/_home_page.scss';
import Header from '../components/Header';

const HomePage: React.FC<{}> = () => {

  return (
    <div className="home_page">
      <Header />
      <Container>
        <Row>
          <Col>card 1</Col>
          <Col>card 2</Col>
          <Col>card 3</Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;