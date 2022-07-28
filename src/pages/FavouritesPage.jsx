/** @format */

import { Col, Container, Row } from "react-bootstrap";
import Favourites from "../components/Favourites";
import SideBar from "../components/SideBar";

const FavouritesPage = () => {
  return (
    <Container className="album-page">
      <Row>
        <Col md={2}>
          <SideBar />
        </Col>
        <Col md={10}>
          <Favourites />
        </Col>
      </Row>
    </Container>
  );
};

export default FavouritesPage;
