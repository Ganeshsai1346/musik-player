/** @format */

import { Col, Container, Row } from "react-bootstrap";
import Album from "../components/Album";
import Player from "../components/Player";
import SideBar from "../components/SideBar";

const AlbumPage = () => {
  return (
    <Container className="album-page">
      <Row>
        <Col md={2}>
          <SideBar />
        </Col>
        <Col md={10}>
          <Album />
        </Col>
      </Row>
    </Container>
  );
};

export default AlbumPage;
