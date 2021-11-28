const defaultState = {
  inputValue: '123',
  list: ['1', '2']
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

  if(action.type === 'change_value') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
      return newState
  }

  if(action.type === 'click_btn') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }

  if(action.type === 'delete_item') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.id, 1)
    return newState
  }

  return state
}