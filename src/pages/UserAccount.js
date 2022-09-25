import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Formik, Form, Field } from 'formik';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './UserAccount.css';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { AiOutlineDelete, AiOutlineEye, AiOutlinePlusCircle } from 'react-icons/ai';
import { FiEdit} from 'react-icons/fi';
import { FaFemale, FaMale } from 'react-icons/fa';
import { BsInfoCircle } from 'react-icons/bs';
import Moment from 'react-moment';
import * as Yup from 'yup';




function validateEmail(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}


function validateNumber(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[6-9]\d{9}$/i.test(value)) {
    error = 'Invalid phone number';
  }
  return error;
}

function validateDob(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (((Math.floor((new Date() - new Date(value).getTime()) / 3.15576e+10)) < 18) && ((Math.floor((new Date() - new Date(value).getTime()) / 3.15576e+10)) > 40)) {
    error = 'Invalid age';
  }
  return error;
}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  gender: Yup.string()
    .required('Required'),
});



// main component function
const UserAccount = () => {
  const [employee, setEmployee] = useState([]);
  const [show, setShow] = useState(false);
  const [deleteOption, setDeleteOption] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [addEdit, setAddEdit] = useState(true);
  let SrNO = 1;

  useEffect(() => {
    if (employee.length === 0) {
      const data = localStorage.getItem('employee-array');
      if (data) {
        let defaultData = JSON.parse(data);
        setEmployee(defaultData);
      }
    }
  },
    []);


  const handleClose = () => {
    setShow(false)
  };
  const handleShow = () => {
    setShow(true);
  };
  const handleCloseCard = () => setShowCard(false);
  // const handleShowCard = () => setShowCard(true);


  // push the employee object to array
  const addEmployee = (values) => {

    const employeeObject = {
      employeeId: values.firstName[0] + values.lastName[0] + '00' + Math.round(employee.length + 1),
      employeeFirstName: values.firstName,
      employeeLastName: values.lastName,
      employeeName: values.firstName + " " + values.lastName,
      employeeNumber: values.number,
      employeeDob: values.dob,
      employeeEmail: values.email,
      employeeGender: values.gender,
      employeeAge: Math.floor((new Date() - new Date(values.dob).getTime()) / 3.15576e+10)
    }
    
    employee.push(employeeObject);
    localStorage.setItem('employee-array', JSON.stringify(employee));
   
  }

// console.log(employees)
  // add the data to the table
  const handleSubmit = (values) => {
    // e.preventDefault();
    addEmployee(values);
    handleClose();

  };



  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    number: '',
    dob: ''
  }


  const [formValues, setFormValues] = useState(initialValues);

  
 
  

  // edit the employee data and show in the form
  const handleEdit = (index) => {
    setAddEdit(false);
    localStorage.setItem('editIndex', index);
    // (employee[index].employeeGender === "Male") ? setGender("Male") : setGender("Female");
    handleShow();
    const loadValues = {
      firstName: JSON.parse(localStorage.getItem('employee-array'))[index].employeeFirstName,
      lastName: JSON.parse(localStorage.getItem('employee-array'))[index].employeeLastName,
      email: JSON.parse(localStorage.getItem('employee-array'))[index].employeeEmail,
      gender:  JSON.parse(localStorage.getItem('employee-array'))[index].employeeGender ,
      number: JSON.parse(localStorage.getItem('employee-array'))[index].employeeNumber,
      dob: JSON.parse(localStorage.getItem('employee-array'))[index].employeeDob
    }
    setFormValues(loadValues);

  }

  console.log(JSON.parse(localStorage.getItem('employee-array')));


  // update the employee data after edit
  const handleUpdate = (values) => {
      employee[localStorage.getItem('editIndex')].employeeFirstName = values.firstName;
      employee[localStorage.getItem('editIndex')].employeeLastName = values.lastName;
      employee[localStorage.getItem('editIndex')].employeeName = values.firstName + " " + values.lastName;
      employee[localStorage.getItem('editIndex')].employeeEmail = values.email;
      employee[localStorage.getItem('editIndex')].employeeDob = values.dob;
      employee[localStorage.getItem('editIndex')].employeeGender = values.gender;
      employee[localStorage.getItem('editIndex')].employeeNumber = values.number;
      employee[localStorage.getItem('editIndex')].employeeAge =  Math.floor((new Date() - new Date(values.dob).getTime()) / 3.15576e+10);
      localStorage.setItem('employee-array', JSON.stringify(employee));
    handleClose();
  }


  // delete data from the table not from local storage
  const handleDelete = (index) => {
    setShowCard(true);
    localStorage.setItem('deleteIndex', index);
    setDeleteOption(true);
  }

  const handleConfirmDlt = () => {
    employee.splice(localStorage.getItem('deleteIndex'), 1);
    localStorage.setItem('employee-array', JSON.stringify(employee));
    handleCloseCard();
    setDeleteOption(false);
  }

  // view data for selected employee
  const handleView = (index) => {
    localStorage.setItem('editIndex', index);
    setDeleteOption(false);
    setShowCard(true);
  }

  const handleAddNew = () => {
    handleShow();
    setAddEdit(true);
    setFormValues(initialValues);
  }
  const [state, setState] = useState(false);

  const conToggle = () => {
    setState(!state);
  }




  return (

    <div className='user-login'>
      <Navbar pass={conToggle} />

      <Container className=''>
        <div className={state ? 'page-normal  spacing' : 'page-left spacing'}>
          <Hero heroHeading="CRUD Operation" />
          <Button variant="primary" className='btn-add-new' onClick={handleAddNew}>
            <AiOutlinePlusCircle style={{
              fontSize: '1.4rem',
              paddingBottom: '2px'
            }} /><span>Add New</span>
          </Button>

          {/* employee data table */}
          <div className='table-wrapper'>
            <Table className='main-table' striped bordered hover>
              <thead>
                <tr>
                  <th className='th'>Sr. No.</th>
                  <th className='th'>EMP ID</th>
                  <th className='th'>Full Name</th>
                  <th className='th'>Email ID</th>
                  <th className='th'>Mobile Number</th>
                  <th className='th'>Date of Birth</th>
                  <th className='th'>Age</th>
                  <th className='th'>Gender</th>
                  <th className='th'>Action</th>
                </tr>
              </thead>
              <tbody className='table-employee'>
                {employee.map((employees, index) => (
                  <tr key={index}>
                    <td className='td'>{SrNO++}</td>
                    <td className='td emp-id'>{employees.employeeId}</td>
                    <td className='td'>{employees.employeeName}</td>
                    <td className='td'>{employees.employeeEmail}</td>
                    <td className='td'>{employees.employeeNumber}</td>
                    <td className='td'><Moment format='Do MMM YYYY' style={{ fontWeight: '500' }}>{employees.employeeDob}</Moment></td>
                    <td className='td'>{employees.employeeAge}</td>
                    <td className='td'>{employees.employeeGender}</td>
                    <td className='td'>
                      <FiEdit style={{
                        fontSize: '1.2rem',
                        marginRight: '10px',
                        cursor: 'pointer',
                        color: '#a4a446de'
                      }} className='action-icon'
                        onClick={() => handleEdit(index)} />
                      <AiOutlineDelete style={{
                        fontSize: '1.4rem',
                        marginRight: '10px',
                        cursor: 'pointer',
                        color: '#f41a1a'
                      }} className='action-icon' onClick={() => handleDelete(index)} />
                      <AiOutlineEye style={{
                        fontSize: '1.6rem',
                        marginRight: '10px',
                        cursor: 'pointer',
                        color: '#048e04'
                      }} className='action-icon' onClick={() => handleView(index)} />
                    </td>

                  </tr>
                )
                )}
              </tbody>
            </Table>
          </div>
          {/* modal box add employee form is wrapped in this */}

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-add">
                Add Employee Form
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-form">
              <Container>
                {/* <form onSubmit={(e) => handleSubmit(e)}>
                  <Row className='form-style'>
                    <div className="mb-3 form-group">
                      <input value={firstName} onChange={e => setFirstName(e.target.value)} type="text" className="form-control1" placeholder="Enter First Name.." id="FirstName" required />
                    </div>
                    <div className="mb-3  form-group">
                      <input value={lastName} onChange={e => setLastName(e.target.value)} type="text" className="form-control1" placeholder="Enter Last Name.." id="LastName" required />
                    </div>
                    <div className="mb-3 form-group">
                      <input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} minLength={10} className="form-control1" type="number" placeholder="Enter Phone Number.." required={true} id="ContactNum" />
                    </div>
                    <div className="mb-3 form-group">
                      <input value={email} onChange={e => setEmail(e.target.value)} className="form-control1" type="email" placeholder="Enter E-mail.." id="Email" required />
                    </div>
                    <div className="mb-3 form-group">
                      <input value={dob} onChange={e => setDob(e.target.value)} className="form-control1" type="date" name="dob" placeholder="dd-mm-yyyy" min="1960-01-01" max="2000-08-12" id="dob" required />
                    </div>
                    <label className='label-gender'>Gender :</label>
                    <div className="mb-3 gender-select">
                      <div className='form-check-radio radio-btn'>
                        <input value='Male' checked={gender === "Male"} onChange={e => setGender(e.target.value)} className='form-check-input' type='radio' name="gender" id="Male" required />
                        <label className='form-check-label' htmlFor='Male'>Male</label>
                      </div>
                      <div className='form-check-radio'>
                        <input value='Female' checked={gender === "Female"} onChange={e => setGender(e.target.value)} className='form-check-input' type='radio' name="gender" id="Female" required />
                        <label className='form-check-label' htmlFor='Female'>Female</label>
                      </div>
                    </div>
                  </Row>
                  {(!addEdit) &&
                    <Button type="submit" onClick={handleUpdate} className="form-btn" variant="primary">
                      Update
                    </Button>}
                  {(addEdit) &&
                    <Button type='submit' className="form-btn" variant="primary">
                      Submit
                    </Button>
                  }

                </form> */}

                <Formik
                  initialValues={formValues}   
                  validationSchema={SignupSchema}
                  onSubmit={(addEdit) ? handleSubmit : handleUpdate}>
                   
                  {({ errors, touched }) => (
                    <Form>
                      <Row className='form-style'>
                        <div className="mb-3 form-group">
                          <Field id="firstName" name="firstName" className="form-control1" placeholder="Enter First Name..." />
                          {errors.firstName && touched.firstName ? (
                            <div className='error-msg'>{errors.firstName}</div>
                          ) : null}
                        </div>
                        <div className="mb-3 form-group">
                          <Field id="lastName" name="lastName" className="form-control1" placeholder="Enter Last Name..." />
                          {errors.lastName && touched.lastName ? (
                            <div className='error-msg'>{errors.lastName}</div>
                          ) : null}
                        </div>
                        <div className="mb-3 form-group">
                          <Field type="number" name="number" className="form-control1" id="number" placeholder="Enter Phone Number..." validate={validateNumber} />
                          {errors.number && touched.number ? <div className='error-msg'>{errors.number}</div> : null}
                        </div>
                        <div className="mb-3 form-group">
                          <Field
                            id="email"
                            name="email"
                            placeholder="Enter Email..."
                            className="form-control1"
                            type="email" validate={validateEmail}
                          />
                          {errors.email && touched.email ? <div className='error-msg'>{errors.email}</div> : null}
                        </div>
                        <div className="mb-3 form-group">
                          <Field type="date" name="dob" placeholder="dd-mm-yyyy" className="form-control1" min="1960-01-01" max="2000-08-12" id="dob" validate={validateDob} />
                          {errors.dob && touched.dob ? <div className='error-msg'>{errors.dob}</div> : null}
                        </div>
                        <label className='label-gender'>Gender :</label>
                        <div className="mb-3 gender-select">
                          <div className='form-check-radio radio-btn'>
                            <Field type="radio" name="gender" value="Male" className='form-check-input' id="Male" />
                            <label className='form-check-label' htmlFor='Male'>Male</label>
                          </div>
                          <div className='form-check-radio'>
                            <Field type="radio" name="gender" value="Female" className='form-check-input' id="Female" />
                            <label className='form-check-label' htmlFor='Female'>Female</label>
                          </div>
                        </div>
                        {errors.gender && touched.gender ? (
                          <div className='error-msg'>{errors.gender}</div>) : null}
                      </Row>
                      {(!addEdit) &&
                        <Button type='submit' className="form-btn" variant="primary">
                          Update
                        </Button>}
                      {(addEdit) &&
                        <Button type='submit' className="form-btn" variant="primary">
                          Submit
                        </Button>
                      }
                    </Form>
                  )}
                </Formik>
              </Container>
            </Modal.Body>
          </Modal>


          {/* modal : view employee details */}
          {(showCard) ? <Modal className='modal-card' show={showCard} onHide={handleCloseCard}>
            <Modal.Header closeButton>
              <Modal.Title>Employee Info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Card style={{ width: '100%' }}>
                <Card.Header><BsInfoCircle style={{ fontSize: '22px', paddingBottom: '2px' }} /><span className='card-info'>Personal Info</span></Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>Employee ID : <span className='card-value'>{employee[localStorage.getItem('editIndex')].employeeId}</span></ListGroup.Item>
                  <ListGroup.Item>Name : <span className='card-value'>{employee[localStorage.getItem('editIndex')].employeeName}</span></ListGroup.Item>
                  <ListGroup.Item>Date of birth : <span className='card-value'><Moment format='Do MMM YYYY' style={{ fontWeight: '500' }}>{employee[localStorage.getItem('editIndex')].employeeDob}</Moment></span></ListGroup.Item>
                  <ListGroup.Item>Age : <span className='card-value'>{employee[localStorage.getItem('editIndex')].employeeAge}</span></ListGroup.Item>
                  <ListGroup.Item>Gender : <span className='card-value'>{((employee[localStorage.getItem('editIndex')].employeeGender) === "Male") ? <FaMale style={{ color: 'rgb(95, 191, 60)', fontSize: '2rem' }} /> : <FaFemale style={{ color: '#ec22b9', fontSize: '2rem' }} />}</span></ListGroup.Item>
                </ListGroup>
                <Card.Header><BsInfoCircle style={{ fontSize: '22px', paddingBottom: '2px' }} /><span className='card-info'>Contact Info</span></Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>Email : <span className='card-value'>{employee[localStorage.getItem('editIndex')].employeeEmail}</span></ListGroup.Item>
                  <ListGroup.Item>Contact Number : <span className='card-value'>{employee[localStorage.getItem('editIndex')].employeeNumber}</span></ListGroup.Item>
                </ListGroup>
              </Card>
            </Modal.Body>
         { deleteOption &&   
            <Modal.Footer>
          <Button className='btn-close-dlt' variant="secondary" onClick={handleCloseCard}>
            Close
          </Button>
          <Button className='btn-confirm-dlt' variant="primary" onClick={handleConfirmDlt}>
            Confirm delete
          </Button>
        </Modal.Footer>}
          </Modal>
            : null}
        </div>
      </Container>
    </div>
  );
}

export default UserAccount;