import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/scss/_home_page.scss";
import Header from "../components/Header";
import CardDestination from "../components/CardDestination";

const HomePage: React.FC<{}> = () => {
  return (
    <div className="home_page">
      <Header />
      <Container>
        <CardDestination />
      </Container>
    </div>
  );
};

export default HomePage;
