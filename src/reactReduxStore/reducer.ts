const defaultState = {
  inputValue: '',
  list: []
}

const reducer =  (state = defaultState, action: any) => {
  if(action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }

  if(action.type === 'handle_click') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }

  if(action.type === 'handle_delete') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.id, 1)
    return newState
  }

  return state
}

export default reducer