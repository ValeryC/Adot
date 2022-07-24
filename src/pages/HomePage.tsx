import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/scss/_home_page.scss";
import Header from "../components/Header";
import CardDestination from "../components/CardDestination";

const HomePage = () => {
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
