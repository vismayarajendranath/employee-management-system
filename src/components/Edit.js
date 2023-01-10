import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Employee from './Employee';
import { useNavigate } from 'react-router-dom';


function Edit() {
  const [id, setId] = useState('')
  const [uname, setUname] = useState('')
  const [desg, setDesg] = useState('')
  const [age, setAge] = useState('')
  const [salary, setSalary] = useState('')

  useEffect(() => {
    setId(localStorage.getItem("id"))
    setUname(localStorage.getItem("uname"))
    setDesg(localStorage.getItem("desg"))
    setAge(localStorage.getItem("age"))
    setSalary(JSON.parse(localStorage.getItem("salary")))
  }, [])

  var index = Employee.map(item=>item.id).indexOf(id)
  let history = useNavigate()


  const handleUpdate =(e)=>{
    e.preventDefault()
    console.log(e);
    let emp = Employee[index]
    console.log(emp);
    emp.uname = uname
    emp.age = age
    emp.desg =  desg
    emp.salary = salary
    history('/')

  }




  return (
    <>
      <h1 className='text-primary mt-5 ms-3'>Update Employee Manegement System</h1>
      <p className='ms-3 me-3'>An employee is someone who gets paid to work for a person or company. Workers don't need to work full time to be considered employees—they simply need to be paid to work by an employer (the person or business that pays them).</p>
      <Row>
        <Col md={4}>
          <img style={{ width: "200px" }} src='https://media.istockphoto.com/id/1209654046/vector/user-avatar-profile-icon-black-vector-illustration.jpg?s=612x612&w=0&k=20&c=EOYXACjtZmZQ5IsZ0UUp1iNmZ9q2xl1BD1VvN6tZ2UI='></img>
        </Col>


        <Col md={8}>
          <Form className='border p-2'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control style={{color:"red"}} value={uname} type="text"
              onChange={(e)=>setUname(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Age</Form.Label>
              <Form.Control  style={{color:"red"}} value={age} type="text"
                            onChange={(e)=>setAge(e.target.value)} />
                            
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Designation</Form.Label>
              <Form.Control style={{color:"red"}} value={desg} type="text" 
              onChange={(e)=>setDesg(e.target.value)}/>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>salary</Form.Label>
              <Form.Control style={{color:"red"}} value={salary} type="text"
              onChange={(e)=>setSalary(e.target.value)} />
            </Form.Group>

            <Button onClick={(e)=>handleUpdate(e)} variant="primary" type="submit">
              Update
            </Button>
          </Form>

          </Col>
      </Row>
    </>
  )
}

export default Edit