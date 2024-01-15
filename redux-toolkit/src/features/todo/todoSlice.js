import {createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, todo: "Anusikta", completed: false, userId: 5}]
}
let newId = 1;

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log(action.payload);
            const todOb = {
                id: newId++,
                todo: action.payload.todo,
                completed: action.payload.completed,
                userId: 10
            }
            state.todos.push(todOb)
            console.log(state.todos);
        },
        removeTodo: (state, action) => {
            console.log(action.payload);
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer