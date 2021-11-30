import { CHANGE_VALUE, CLICK_BTN, DELETE_ITEM, INIT_LIST, GET_INIT_LIST } from './actionType'

export const getInputChangeAction = (value: string) => ({
  type: CHANGE_VALUE,
  value
})

export const getAddItemAction = () => ({
  type: CLICK_BTN
})

export const getDeleteItemAction = () => ({
  type: DELETE_ITEM
})

export const initListAction = (data: string[]) => ({
  type: INIT_LIST,
  data
})

export const getInitList = () => ({
  type: GET_INIT_LIST
})

// export const getTodoList = () => {
//   return (dispatch: (action: { type: string, data: string[] }) => void) => {
//     setTimeout(()=>{
//       const data = ['hello', 'lee', 'lw']
//       const action = initListAction(data)
//       dispatch(action)
//     },2000)
//   }
// }