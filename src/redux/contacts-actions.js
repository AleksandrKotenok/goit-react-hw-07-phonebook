import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
//Action creators
export const addCont = createAction('ADD', payload => ({
  payload: { id: nanoid(), ...payload },
}));
export const delCont = createAction('DEL');
export const filCont = createAction('FILTER');
