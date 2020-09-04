import * as actionType from './actionTypes';

export const getTodos = () => {
    return {
        type: actionType.SHOW_ALL,
    }
}

export const setMode = (mode) => {
    return {
        type: actionType.SET_MODE,
        payload: mode
    }
}

export const deleteTodo = (id) => {
    return {
        type: actionType.DELETE_TODO,
        payload: id
    }
}

export const finishTodo = (id) => {
    return {
        type: actionType.FINISH_TODO,
        payload: id
    }
}

export const addTodo = (name) => {
    return {
        type: actionType.ADD_TODO,
        payload: name
    }
}

export const showCompleted = () => {
    return {
        type: actionType.SHOW_COMPLETED,
    }
}

export const showUncompleted = () => {
    return {
        type: actionType.SHOW_UNCOMPLETED,
    }
}