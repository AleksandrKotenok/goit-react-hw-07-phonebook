
import { nanoid } from "nanoid";
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
import {contacts} from './APIs/api'

const initilStore = {
   name: '',
   number:'',
   items: [
      {id: 1,name: 'kolya',number: 45454353},
      { id: 2, name: 'moly', number: 953332253 },
      { id: 3, name: 'boba', number: 2378426453 },
      { id: 4, name: 'dodo', number: 12345988 },
      { id: 5, name: 'botik', number: 4535657868 },
      { id: 6, name: 'rik', number: 56767878789 },
      { id: 7, name: 'foper', number: 987332253 },
      {id:8, name:'xedos', number:76752253}
   ],
   filter: ''
}

//Action creators
export const inputName = createAction('INPUT_NAME')
export const inputNum = createAction('INPUT_NUMBER')
export const filCont = createAction('FILTER')
export const addCont = createAction('ADD')
export const clearForm = createAction('CLEAR_FORM')
export const delCont = createAction('DEL')

// Reducer
const contactReducer = createReducer(initilStore, {
   [inputName.type]: (state, {text}) => Object.assign({}, state, { name:text }),
   [inputNum.type]: (state, {text}) => Object.assign({}, state, { number: text }),
   [filCont.type]: (state, {text}) => Object.assign({}, state, { filter: text }),
   [addCont.type]: (state) =>{
      const isFound = state.items.find(item => item.name.toLowerCase() === state.name.toLowerCase())
      if (isFound) return window.alert(`${state.name} is already in contacts.`);
      return{...state,items:[...state.items,{
         id: nanoid(),
         name: state.name,
         number: state.number
         }]
      }
   },
   [clearForm.type]: (state) => {return {...state, name: '',number:''}},
   [delCont.type]: (state,action) => {
      const deleteContact = (action)=>state.items.filter(({ id }) => id !== action.payload)
      const itemsAfterDel = deleteContact (action)
      return {...state,items:[...itemsAfterDel]}
   }
})
const store = configureStore({
   reducer: {
      contactReducer,
      [contacts.reducerPath]:contacts.reducer
   },
});
export default store