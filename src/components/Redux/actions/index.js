// Action type
export const DATALIST = 'DATALIST';
export const SEARCHDATA = 'SEARCHDATA';



// Action creators
export const showData = () => {
    return {
        type: DATALIST
    }
}

export const showdataList = (data) => {
    return {
        type: SEARCHDATA,
        payload: data
    }
}