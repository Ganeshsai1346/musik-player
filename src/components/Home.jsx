/** @format */
import { Col, Row } from "react-bootstrap";
import "../App.css";
import SideBar from "./SideBar";

const Home = ({ logout, user }) => {
  return (
    <p>
      <Row>
        <Col md={3}>
          <SideBar />
        </Col>
        <Col md={9}>
          <div className="d-flex mt-5">
            <h1>Hello world</h1>
            <button onClick={logout}>Logout</button>
            <h2>{user?.email}</h2>
          </div>
        </Col>
      </Row>
    </p>
  );
};

export default Home;
