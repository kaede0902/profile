import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, } from 'react-bootstrap';
import Meta from './components/Meta'
import Header from './components/Header'
import Lorem from './components/Lorem'

function App() {
  return (
    <>
      <Header></Header>
      <Container>
        <Meta></Meta>
        <Row className='my-5'>
          <Col>
            <Lorem></Lorem>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
