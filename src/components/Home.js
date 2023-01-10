import React from 'react'
import Employee from './Employee'
import Table from 'react-bootstrap/Table';
import  Button  from 'react-bootstrap/Button';
import { Link,useNavigate } from 'react-router-dom'


function Home() {
const history = useNavigate()

  const handleDelete = (id)=>{
    
   let index = Employee.map(item=>item.id).indexOf(id)
   Employee.splice(index,1)
   history('/')

  }
  const handleEdit =(id,uname,age,desg,salary)=>{
  localStorage.setItem("id",id)
  localStorage.setItem("uname",uname)
  localStorage.setItem("age",age)
  localStorage.setItem("desg",desg)
  localStorage.setItem("salary",JSON.stringify(salary))
  }





  return (
    <>
    <h1 className='text-primary mt-2 text-center'>Employee Manegement System
    &nbsp;
    <Link to={'/add'}>
      <button className='btn btn-success'>Add Employee
    &nbsp;
    <i class="fa-solid fa-user-plus"></i></button>
    </Link>
    

    </h1>
    <p className='ms-3 me-3'>An employee is someone who gets paid to work for a person or company. Workers don't need to work full time to be considered employees—they simply need to be paid to work by an employer (the person or business that pays them).</p>
    <div style={{margin:"10rem"}}>
        <h3>list of employees</h3>
        <Table striped bordered hover size='sm' variant='dark'>
      <thead>
        <tr>
          <th>Username</th>
          <th>Age</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
       {
        Employee && Employee.length> 0 ?
        Employee.map((item)=>(
            <tr>
                <td> {item.uname}</td>
                <td> {item.age}</td>
                <td> {item.desg}</td>
                <td> {item.salary}</td>
                <td>
                  <Link to={'/edit'}>
                <Button onClick={()=>handleEdit(item.id,item.uname,item.age,item.desg,item.salary)} variant="primary"><i class="fa-solid fa-pen-to-square"></i></Button>

                </Link>
                &nbsp;
                <Button onClick={()=>handleDelete(item.id)} variant="danger"><i class="fa-solid fa-trash"></i></Button>
                </td>
                

            </tr>
        ))
        :'no table data available'
       }
      </tbody>
    </Table>
    </div>
    </>
  )

}

export default Home