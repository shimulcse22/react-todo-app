import TODO from './actionTypes';

export const addItemToRedux = (payload)=>({
    type:TODO.ADD_ITEM,
    payload
    }
)

export const deleteItemToRedux = (payload)=>({
        type:TODO.DELETE_ITEM,
        payload
    }
)

export const setUpdateInputValueToRedux = (payload)=>({
    type:TODO.UPDATE_ITEM,
    payload
}
)

export const toggleTodoToRedux = (payload)=>({
    type:TODO.LINE_ITEM,
    payload
}
)

export const setShowUpdateToRedux = (data)=>({
    type:data
}
)

export const visibilityToRedux = (payload)=>({
    type:TODO.VISIBILITY,
    payload
}
)


export const clearCompletedFromRedux = ()=>({
    type:TODO.CLEAR_COMPLETED
    }
)