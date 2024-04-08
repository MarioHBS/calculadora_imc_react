import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap'



export default () => {
    const [height, setHeight] = useState(100);
    const [weight, setWeight] = useState(55);

    const updateHgt = (event) => setHeight(event.target.value);
    const updateWgt = (event) => setWeight(event.target.value);

    return (
        <Form className="ms-4 me-4">
            <Row className='justify-content-center'>
                <Form.Group as={Col} xs={3} className='text-center' controlId="formHight">
                    <Form.Label>Altura (cm):</Form.Label>
                    <Form.Control type="number" value={height} onChange={updateHgt} min={100} max={230} />
                </Form.Group>

                <Form.Group as={Col} xs={3} className="text-center" controlId='formWeight'>
                    <Form.Label>Peso:</Form.Label>
                    <Form.Control type="number" value={weight} onChange={updateWgt} />
                </Form.Group>
            </Row>

            <Row xs='auto' className='justify-content-center mt-3'>
                <Button variant="secondary" type="submit">Calcular</Button>
            </Row>
        </Form>
    );
}