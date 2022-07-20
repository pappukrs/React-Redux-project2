

import { DEC_COUNT, INC_COUNT,RESET_COUNT ,DOUBLE_COUNT,HALF_COUNT,SQUARE_COUNT,CUBE_COUNT, ADD_TODO_SUCCESS, ADD_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, GET_TODO_ERROR, TOGGLE_TODO,DELETE_TODO} from './actionType'
import {ADD_TODO_LOADING} from './actionType';
export const incCount = (payload) => {
     
    return{
        type:INC_COUNT,
        payload: payload,
    };
    
};
export const decCount = (payload) => {
     
    return{
        type:DEC_COUNT,
        payload: payload,
    };
    
};
export const resetCount = () => {
     
    return{
        type:RESET_COUNT,
        
    };
    
};

export const doubleCount = () => {
     
    return{
        type:DOUBLE_COUNT,
       
    };
    
};
export const halfCount = () => {
     
    return{
        type:HALF_COUNT,
      
    };
    
};
export const squareCount = () => {
     
    return{
        type:SQUARE_COUNT,
        
    };
    
};
export const cubeCount = () => {
     
    return{
        type:CUBE_COUNT,
        
    };
    
};



export const addTodoLoading = () => {
    return{
        type:ADD_TODO_LOADING
    }
}
export const addTodoSuccess = (payload) => {
    return{
        type:ADD_TODO_SUCCESS,
        payload,
    }
}
export const addTodoError = () => {
    return{
        type:ADD_TODO_ERROR,
    }
}

export const getTodoLoading = () => {
    return{
        type:GET_TODO_LOADING
    }
}
export const getTodoSuccess = (payload) => {
    return{
        type:GET_TODO_SUCCESS,
        payload,
    }
}
export const getTodoError = () => {
    return{
        type:GET_TODO_ERROR,
    }
}

export const toggleTodo = (payload) => {
    return{
        type:TOGGLE_TODO,
        payload,
    }
}

export const deleteTodo = () => {
    return{
        type:DELETE_TODO,
        
    }
}





