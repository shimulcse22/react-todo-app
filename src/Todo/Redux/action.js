import TODO from './actionTypes';

export const addItemToRedux = (payload)=>{
    return{
    type:TODO.ADD_ITEM,
    payload
    }
}

export const deleteItemToRedux = (payload)=>{
    return{
    type:TODO.DELETE_ITEM,
    payload
    }
}

export const setUpdateInputValueToRedux = (payload)=>{
    return{
    type:TODO.UPDATE_ITEM,
    payload
    }
}

export const toggleTodoToRedux = (payload)=>{
    return{
    type:TODO.LINE_ITEM,
    payload
    }
}

export const setShowUpdateToRedux = (data)=>{
    return{
    type:data
    }
}

export const visibilityToRedux = (payload)=>{
    return{
    type:TODO.VISIBILITY,
    payload
    }
}

export const clearCompletedFromRedux = ()=>{
    return{
    type:TODO.CLEAR_COMPLETED}
}