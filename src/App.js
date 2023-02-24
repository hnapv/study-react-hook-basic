import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/slices/counterSlice'
import { useEffect, useState } from 'react';
import axios from "axios"
import { fetchAllUsers } from './redux/slices/userSlice';

function App() {
  // const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const listUsers = useSelector(state=>state.user.listUsers)
  useEffect(()=>{
    dispatch(fetchAllUsers())
  },[])

  // const fetchAllUsers = async () => {
  //   let res = await axios.get("http://localhost:8080/users/all")
  //   setListUsers(res.data?res.data:[])
  // }
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {fetchAllUsers()}
        {/* <h1>Hello world with React and Hoi Dan IT!</h1>
       <div className='btn-actions'>
        <button
        onClick={()=>dispatch(increment())}
        >Increase</button>
        <button
        onClick={()=>dispatch(decrement())}
        >Decrease</button>
       </div>

        <div>Count = {count}</div> */}
        <div>
          <table>
            <thead>
              <th>ID</th>
              <th>Email</th>
              <th>Username</th>
            </thead>
            <tbody>
              {listUsers && listUsers.length>0 &&
              listUsers.map((a,b)=>{
                return(
              <tr key={b}>
                <td>{a.id}</td>
                <td>{a.email}</td>
                <td>{a.username}</td>
              </tr>
                )
              })
              }
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
