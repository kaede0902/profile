import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Lorem from './components/Lorem'

function App() {
  return (
    <>
      <Header></Header>
      <Container>
        <Row>
          <Col>
            <Lorem></Lorem>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
