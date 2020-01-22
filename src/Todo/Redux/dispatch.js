import {addItemToRedux,deleteItemToRedux
,setUpdateInputValueToRedux,visibilityToRedux,
toggleTodoToRedux,setShowUpdateToRedux,clearCompletedFromRedux} from './action';

export const addItemDispatch=(payload) =>{
    return dispatch =>{
        dispatch(addItemToRedux(payload));
    }
}

export const deleteItemDispatch=(payload) =>{
    return dispatch =>{
        dispatch(deleteItemToRedux(payload));
    }
}

export const setUpdateInputValueDispatch=(payload) =>{
    return dispatch =>{
        dispatch(setUpdateInputValueToRedux(payload));
    }
}

export const toggleTodoDispatch=(payload) =>{
    return dispatch =>{
        dispatch(toggleTodoToRedux(payload));
    }
}

export const setShowItems=(data) =>{
    return dispatch =>{
        dispatch(setShowUpdateToRedux(data));
    }
}

export const visibilityDispatch=(payload) =>{
    return dispatch =>{
        dispatch(visibilityToRedux(payload));
    }
}

export const clearCompletedDispatch = ()=>{
    return dispatch => {
        dispatch(clearCompletedFromRedux())
    }
}