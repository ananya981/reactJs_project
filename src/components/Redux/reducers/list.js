import { DATALIST, SEARCHDATA } from '../actions';
import dataList from '../../dataList.json';

const initialState = {
    searchParams: {},
    dataList
};

const counterReducer = (state=initialState, action) => {
    switch(action.type){

        case DATALIST:
            return {...state};

        case SEARCHDATA:
            state.searchParams=action.payload;
            return {...state};


        default:
            return state;
    }

}
export default counterReducer;