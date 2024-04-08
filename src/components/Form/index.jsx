import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'


export default () => {
    const [height, setHeight] = useState(100);
    const [weight, setWeight] = useState(55);

    const updateHgt = (event) => setHeight(event.target.value);
    const updateWgt = (event) => setWeight(event.target.value);

    return (
        <Form className="ms-4 me-4">
            <Row className='justify-content-center'>
                <Col xs={4} lg={3} className='text-center'>
                    <Form.Label className='fs-4' htmlFor='formHeight'>Altura:</Form.Label>
                    <InputGroup>
                        <Form.Control className='text-center fs-5 font-monospace' type="number" value={height} onChange={updateHgt} min={100} max={230} id='formHeight' />
                        <InputGroup.Text>cm</InputGroup.Text>
                    </InputGroup>
                </Col>

                <Col xs={4} lg={3} className="text-center">
                    <Form.Label className='fs-4' htmlFor='formWeight'>Peso:</Form.Label>
                    <InputGroup>
                        <Form.Control className='text-center fs-5 font-monospace' type="number" value={weight} onChange={updateWgt} id='formWeight' />
                        <InputGroup.Text>Kg</InputGroup.Text>
                    </InputGroup>
                </Col>
            </Row>

            <Row xs='auto' className='justify-content-center mt-3'>
                <Button variant="primary" className='px-3' type="submit">Calcular</Button>
            </Row>
        </Form>
    );
}