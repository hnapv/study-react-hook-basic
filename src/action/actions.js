import { INCREMENT, DECREMENT, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from '../action/types';
import axios from "axios"

export const increaseCounter = () => {
    return {
        type: INCREMENT,
        payload: "ABCDHĐ" //name
    };
};

export const decreaseCounter = () => {

    return {
       type: DECREMENT,
    };
};


//start, doing, finish
export const fetchAllUser = ()=>{
    return async(dispatch,getState)=>{
        dispatch(fetchUserRequest())
        try{
            const res = await axios.get("http://localhost:8080/users/all")
            const data = res && res.data ? res.data:[]
            dispatch(fetchUserSuccess(data))
        }
        catch(e){
            console.log(e+"")
            dispatch(fetchUserError())
        }
    }
}

export const fetchUserRequest=()=>{
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess=(data)=>{
    return {
        type: FETCH_USER_SUCCESS,
        dataUsers: data
    }
}

export const fetchUserError=()=>{
    return {
        type: FETCH_USER_ERROR
    }
}