import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import axios from "axios"
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUser } from '../action/actions';
const TableUser = (props) => {

    const dispatch= useDispatch()
    // const [listUsers,setListUsers]= useState([])
    const listUsers = useSelector(state=>state?.user?.listUsers)
    console.log("test")
    // const fetchAllUser = async ()=>{
    //     const res = await axios.get("http://localhost:8080/users/all")
    //     const data = res && res.data ? res.data:[]
    //     setListUsers(data)
    //   }
    
      useEffect(()=>{
        // fetchAllUser()
        dispatch(fetchAllUser())
      },[])

      const handleDeleteUser = ()=>{
        console.log("test delete")
      }

    return (
        <Container>
           <hr/>
           <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Email</th>
          <th>Username</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {listUsers && listUsers.length >0 &&
        listUsers.map((a,index)=>{
            return(
                <tr key={index}>
                <td>{index+1}</td>
                <td>{a.email}</td>
                <td>{a.username}</td>
                <td>
                    <button variant="primary">View</button>
                    <button variant="warning">Update</button>
                    <button variant="danger" onClick={()=>handleDeleteUser()}>Delete</button>
                </td>
              </tr>
            )
        })}

      </tbody>
    </Table>
        </Container>
    );
}

export default TableUser