import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
// import axios from "axios"
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, fetchAllUser } from '../action/actions';
const TableUser = (props) => {

    const dispatch = useDispatch()
    // const [listUsers,setListUsers]= useState([])
    const listUsers = useSelector(state => state?.user?.listUsers)
    const isLoading = useSelector(state => state?.user?.isLoading)
    const isError = useSelector(state => state?.user?.isError)
    console.log("isLoadding",isLoading,"isError",isError)
    console.log("test")
    // const fetchAllUser = async ()=>{
    //     const res = await axios.get("http://localhost:8080/users/all")
    //     const data = res && res.data ? res.data:[]
    //     setListUsers(data)
    //   }

    useEffect(() => {
        // fetchAllUser()
        dispatch(fetchAllUser())
    }, [])

    const handleDeleteUser = (a) => {
        dispatch(deleteUser(a))
    }

    return (
        <Container>
            <hr />
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
                    {isError === true ?
                                <tr><td>Something wrongs,please try again</td></tr>:
                        <>
                            {isLoading === true ?
                                <tr><td>LOADING...</td></tr> :
                                <>
                                    {listUsers && listUsers.length > 0 &&
                                        listUsers.map((a, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{a.email}</td>
                                                    <td>{a.username}</td>
                                                    <td>
                                                        <button className='btn btn-warning' onClick={() => handleDeleteUser(a.id)}>Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                </>
                            }
                        </>
                    }


                </tbody>
            </Table>
        </Container>
    );
}

export default TableUser