
import { INC_COUNT,DEC_COUNT,RESET_COUNT,DOUBLE_COUNT,HALF_COUNT,SQUARE_COUNT,CUBE_COUNT} from './actionType';


let initialState ={
    count:5
}
const reducer = (state=initialState, action) => {
     switch (action.type) {
        case INC_COUNT:
            return {...state,
            count:state.count+ action.payload,
            };

            case DEC_COUNT:
            return {...state,
            count:state.count-action.payload
            }

            case RESET_COUNT:
                return {...state,
                count:0,
                };

                case DOUBLE_COUNT:
                    return {...state,
                    count:state.count*2,
                    };
                    
                  case HALF_COUNT:
                        return {...state,
                        count:state.count*0.5
                        };

                case SQUARE_COUNT:
            return {...state,
            count:state.count**2
            }  

            case CUBE_COUNT:
                return {...state,
                count:state.count**3
                }  


         
        default:
           return {...state}
     }
}

export default reducer