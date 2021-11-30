import { CHANGE_VALUE, CLICK_BTN, DELETE_ITEM, INIT_LIST } from './actionType'

const defaultState = {
  inputValue: '',
  list: []
}

export const reducer =  (state = defaultState, action: any) => {
  // switch(action.type){
  //   case 'change_value': 
  //     const newState = JSON.parse(JSON.stringify(state))
  //     state.inputValue = action.value
  //     return state
  //   case 'click_btn':

  //     state.list.push(state.inputValue)
  //     state.inputValue = ''
  //     return state
  // }

  if(action.type === CHANGE_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
      return newState
  }

  if(action.type === CLICK_BTN) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }

  if(action.type === DELETE_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.id, 1)
    return newState
  }

  if(action.type === INIT_LIST) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data
    return newState
  }

  return state
}