import {createAction} from '@reduxjs/toolkit';
import {TO_DO_ACTION} from '../constants';

export const createTaskAction = createAction(TO_DO_ACTION.CREATE_TASK);
export const editTaskAction = createAction(TO_DO_ACTION.EDIT_TASK);
export const deleteTaskAction = createAction(TO_DO_ACTION.DELETE_TASK);
