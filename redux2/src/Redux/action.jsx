

import { DEC_COUNT, INC_COUNT,RESET_COUNT ,DOUBLE_COUNT,HALF_COUNT,SQUARE_COUNT,CUBE_COUNT} from './actionType'

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

