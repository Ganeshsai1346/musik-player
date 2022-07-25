/** @format */
import { Col, Row } from "react-bootstrap";
import "../App.css";
import MainPage from "./MainPage";
import SideBar from "./SideBar";

const Home = ({ logout, user }) => {
  return (
    <p>
      <Row>
        <Col md={3}>
          <SideBar />
        </Col>
        <Col md={9}>
          <MainPage logout={logout} user={user} />
        </Col>
      </Row>
    </p>
  );
};

export default Home;
