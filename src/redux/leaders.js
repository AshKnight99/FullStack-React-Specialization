import * as ActionTypes from './ActionTypes';

export const Leaders = (state = {
    isLoading:true,
    errMess: false,
    leaders:[]
},action) => {
    switch(action.type){
        case ActionTypes.ADD_LEADERS:
            return {...state,isLoading : false,errMess: null,leaders: action.payload};

            case ActionTypes.PROMOS_LOADING:
                return { ...state, isLoading: true, errmess: null, leaders: [] }
    
            case ActionTypes.PROMOS_FAILED:
                return { ...state, isLoading: false, errmess: action.payload, leaders: [] }

        default :
         return state;
    }
}