import todoSate from './Redux/todoState';
import TODO from '../Todo/Redux/actionTypes';
const rootreducer = (state = todoSate,action) =>{
    switch(action.type){
        case TODO.ADD_ITEM:
            if( action.payload.text.length !== 0){
                const items = [...state.items, action.payload ];
                state.items = items;
              }
              else{
                alert('Pelase enter something')
              }
            return {
               ...state
        };
        case TODO.DELETE_ITEM:
            state.items = action.payload.filterItem;
            state.completedItems = action.payload.filterItemCompleted
            return {
               ...state
        };

        case TODO.UPDATE_ITEM:
            const items = state.items.map(item=>
                item.key === action.payload.key ?{...item,text : action.payload.data, visibility :!item.visibility} : item
            );
            
            state.items = items;
           
            console.log('the items is',state)
            return {
               ...state
            };

        case TODO.LINE_ITEM:
            const todo = state.items.map(item =>
                item.key === action.payload ? { ...item, completed: !item.completed } : item
              );
              state.items = todo;
              const todoCom = state.items.filter(item => item.completed);
              state.completedItems = todoCom;
            return {...state};

        case TODO.VISIBILITY:
            const todos = state.items.map(item =>
                item.key === action.payload ? { ...item, visibility: !item.visibility } : item
            );
            state.items = todos;
            return {...state}

        case TODO.SHOW_ALL:
            state.activeBool = false;
            state.completedBool = false;
            return {...state};

        case TODO.SHOW_ACTIVE:
            const activeItems = state.items.filter(item => !item.completed);
            state.activeItems = activeItems;
            state.activeBool = true;
            state.completedBool = false;
            return {...state}

        case TODO.SHOW_COMPLETED:
            state.completedBool = true;
            state.activeBool = false;
            return {...state};
        case TODO.CLEAR_COMPLETED:
            const removeItem = state.items.filter(item => !item.completed);
            state.completedItems =[];
            state.items = removeItem;
            state.completedBool = false;
            state.activeBool = false;
            return {...state};
        default:
            return state;
    }
}

export default rootreducer;