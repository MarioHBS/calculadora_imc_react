import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Col, Form, Row } from 'react-bootstrap'

export default () => {
    return (
        <Form className="ms-4 me-4">
            <Row className='justify-content-center'>
                <Form.Group as={Col} xs={3} className='text-center' controlId="formHight">
                    <Form.Label>Altura (cm):</Form.Label>
                    <Form.Control type="number" />
                </Form.Group>

                <Form.Group as={Col} xs={3} className="text-center" controlId='formWeight'>
                    <Form.Label>Peso:</Form.Label>
                    <Form.Control type="number" />
                </Form.Group>
            </Row>

            <Row xs='auto' className='justify-content-center mt-3'>
                <Button variant="secondary" type="submit">Calcular</Button>
            </Row>
        </Form>
    );
}