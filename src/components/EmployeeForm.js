import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const EmployeeForm = () => {
  return (
    <Container>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="emFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" placeholder="Enter First Name.." />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="emLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" placeholder="Enter Last Name.." />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="emContactNum">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" placeholder="Enter Phone Number.." />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="emEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" placeholder="Enter E-mail.." />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="emDOB">
              <Form.Label>Date of birth</Form.Label>
              <Form.Control type="date" name="begin" placeholder="dd-mm-yyyy" min="1960-01-01" max="2022-09-31" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="emGender">
              <Form.Label>Gender</Form.Label>
              <Form.Check type='radio' label="Male" name="group1" controlId="emMale" />
              <Form.Check type='radio' label="Female" name="group1" controlId="emFemale" />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default EmployeeForm;