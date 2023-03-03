import { INCREMENT, DECREMENT } from '../action/types';


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