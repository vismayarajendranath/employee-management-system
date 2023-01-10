import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import uuid from 'react-uuid';
import Employee from './Employee';
import { useNavigate } from 'react-router-dom';







function Add() {
    const [uname, setUname] = useState('')
const [desg, setDesg] = useState('')
const [age, setAge] = useState('')
const [salary, setSalary] = useState('')

let history = useNavigate()


const handleAdd = (e)=>{
    e.preventDefault()
    let ids = uuid()
    let uniquieid = ids.slice(0,8)

    Employee.push({
        id:uniquieid,
    uname:uname,
    age:age,
    desg:desg,
    salary:salary
    })

    console.log(Employee);


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
              <Form.Control  onChange={(e)=>setUname(e.target.value)} style={{color:"red"}} type="text"/>
            </Form.Group>
            </Form>

           
            <Form className='border p-2'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Age</Form.Label>
              <Form.Control  onChange={(e)=>setAge(e.target.value)} style={{color:"red"}} type="text"/>
            </Form.Group>
            </Form>

            <Form className='border p-2'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Designation</Form.Label>
              <Form.Control  onChange={(e)=>setDesg(e.target.value)} style={{color:"red"}} type="text"/>
            </Form.Group>
            </Form>

            <Form className='border p-2'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Salary</Form.Label>
              <Form.Control onChange={(e)=>setSalary(e.target.value)} style={{color:"red"}} type="text"/>
            </Form.Group>
            <Button onClick={(e)=>handleAdd(e)} variant="primary" type="submit">
              ADD
            </Button>
            </Form>


            </Col>


        </Row>

</>
  )
}

export default Add