import * as actionType from './actionTypes';

const initialState = {
    todos: [],
    filteredList: [],
    mode: "all"
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.SET_MODE :
            return {
                ...state,
                mode: action.payload
            }
        case actionType.SHOW_ALL : 
            return {
                ...state,
                filteredList: state.todos
            };
        case actionType.ADD_TODO:
            return {
                ...state, 
                todos: [...state.todos ,{name: action.payload, completed: false, id: Math.random()*1000}],
                filteredList: [...state.todos ,{name: action.payload, completed: false, id: Math.random()*1000}]
            }
        case actionType.DELETE_TODO : 
            return {
                ...state, 
                todos: state.todos.filter(el => el.id !== action.payload),
                filteredList: state.todos.filter(el => el.id !== action.payload)
            }
        case actionType.FINISH_TODO:
            return {
                ...state,
                todos: state.todos.map(el => {
                    if(el.id === action.payload){
                        return {...el, completed: !el.completed};
                    }else{
                        return el;
                    }
                }),
                filteredList: state.todos.map(el => {
                    if(el.id === action.payload){
                        return {...el, completed: !el.completed};
                    }else{
                        return el;
                    }
                })
            } 
        case actionType.SHOW_COMPLETED:
            const listA = state.todos.filter(el => el.completed === true);
            return {
                ...state, 
                filteredList: listA
            }
        case actionType.SHOW_UNCOMPLETED: 
            const listB = state.todos.filter(el => el.completed === false);
            return {
                ...state, 
                filteredList: listB
            }
        default: 
            return state;
    }
}

export default reducer;