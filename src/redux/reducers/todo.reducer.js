import {createReducer} from "@reduxjs/toolkit";
import {TO_DO_ACTION} from "../constants";

const initialState = {
    taskList: [],
}

const todoReducer = createReducer(initialState, {
    [TO_DO_ACTION.CREATE_TASK]: (state, {payload}) => {
        console.log(payload)
        return {
            ...state,
            taskList: [
                ...state.taskList,
                payload
            ]
        };
    },
    [TO_DO_ACTION.EDIT_TASK]: (state, {payload}) => {
        const newTask = [...state.taskList];
        const indexEdit = newTask.findIndex(task => task.id === payload.id)
        newTask.splice(indexEdit, 1, payload);
        return {
            ...state,
            taskList: newTask
        };
    },
    [TO_DO_ACTION.DELETE_TASK]: (state, {payload}) => {
        const newTask = [...state.taskList];
        const indexDelete = newTask.findIndex(task => task.id === payload.id)
        newTask.splice(indexDelete, 1);
        return {
            ...state,
            taskList: newTask
        };
    }
});

export default todoReducer;
