/** @format */

import { Col, Container, Row } from "react-bootstrap";
import Artist from "../components/Artist";
import SideBar from "../components/SideBar";

const ArtistPage = () => {
  return (
    <Container className="album-page">
      <Row>
        <Col md={2}>
          <SideBar />
        </Col>
        <Col md={10}>
          <Artist />
        </Col>
      </Row>
    </Container>
  );
};

export default ArtistPage;
