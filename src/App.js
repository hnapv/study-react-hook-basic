import logo from './logo.svg';
// import './App.css';
// import { connect } from "react-redux"
import axios from "axios"

import {
  increaseCounter,
  decreaseCounter,
} from "./action/actions"
// import store from './redux/store';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Home from './components/Home';


function App(props) {
const dispatch = useDispatch()
const newCount = useSelector(state => state.counter.count)
const name = useSelector(state => state.counter.name)

  //event handler
  const handleIncrease= ()=>{
    dispatch(increaseCounter())
  }

  const fetchAllUser = async ()=>{
    const res = await axios.get("http://localhost:8080/users/all")
    const data = res && res.data ? res.data:[]
    console.log("Check data =>>",data)
  }

  useEffect(()=>{
    fetchAllUser()
  },[])

  const handleDecrease= ()=>{
    dispatch(decreaseCounter())
  }
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and {name}!</h1>
        <div>Count: {newCount}</div>

        <button onClick={() => handleIncrease()}>Increase Count</button>

        <button onClick={() => handleDecrease()}>Decrease Count</button> */}
        <Home/>
      {/* </header> */}
    </div>
  );
}

// //map state (redux store ) + props react
// const mapStateToProps = state => {
//   return {
//     countGI: state.counter.count,
//     abc: state.counter.name
//   }
// }

// //map dispatch(redux) to props
// const mapDispatchToProps = dispatch => {
//   return {
//     increaseCounter11: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   }
// }

//higher order component
// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default App