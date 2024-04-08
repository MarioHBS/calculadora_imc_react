import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from './components/Form'

// import './App.css'

function App() {
  const [height, setHeight] = useState(1);
  const [weight, setWeight] = useState(0);

  return (
    <Container>
      <header className='mb-5'>
        <Col>
          <Row className='justify-content-md-center'>
            <Col md="auto"><h1 className='col-md'>Calculadora IMC</h1></Col>
          </Row>
          {/* <Row>
            <Col>hdbcaihbcah</Col>
            <Col>ancoancoan</Col>
            <Col>coluna 3</Col>
          </Row> */}
        </Col>
      </header>
      <main>
        <Form  />
      </main>
    </Container>
  )
}

export default App
