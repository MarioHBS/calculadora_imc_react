import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

export default ({ imc }) => {
    const classification = {
        18.5: {
            imc: 'menor que 18,5',
            description: 'magreza'
        },
        24.9: {
            imc: 'entre 18,5 e 24,9',
            description: 'normal'
        },
        29.9: {
            imc: 'entre 25,0 e 29,9',
            description: 'sobrepeso'
        },
        39.9: {
            imc: 'entre 30,0 e 39,9',
            description: 'obesidade'
        },
        100: {
            imc: 'maior que 40,0',
            description: 'obeasidade grave'
        }
    }
    
    return (
        <Row className='justify-content-center'>
            <Col xs={5}>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th colSpan={2} className='text-center'>Seu IMC é de { imc }. Veja sua classificação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>IMC</td>
                            <td>Classificação</td>
                        </tr>
                        { Object.entries(classification).map(([key, item]) => (
                            <tr key={key}>
                                <td>{ item.imc }</td>
                                <td>{ item.description }</td>
                            </tr>
                        )) }
                    </tbody>
                </Table>
            </Col>
        </Row>
    );
}