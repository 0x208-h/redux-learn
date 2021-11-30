import React, { ChangeEvent, useState, useEffect } from 'react';
// import { CHANGE_VALUE, CLICK_BTN, DELETE_ITEM } from './store/actionType'
// import { }
import { 
  getInputChangeAction, 
  getAddItemAction, 
  getDeleteItemAction, 
  // initListAction, 
  getInitList } 
from './store/actionCreator'
// import { Button, Input, List, Typography } from 'antd'
import UI from './UI'
import 'antd/dist/antd.css'
import store from './store';

interface inputValueProps {
  inputValue: string
  list: string[]
}

function App() {

  // console.log(store.getState(), 'store')
  // const data = [
  //   'Racing car sprays burning fuel into crowd.',
  //   'Japanese princess to wed commoner.',
  //   'Australian walks 100km after outback crash.',
  //   'Man charged over missing wedding girl.',
  //   'Los Angeles battles huge wildfires.',
  // ];

  const [value, setValue] = useState<inputValueProps>({inputValue: '', list: []})

  useEffect(() => {
    setValue(store.getState())
  }, [])

  store.subscribe( () => {
    setValue(store.getState())
    console.log(store.getState(), 'store')
  })
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // const action = {
    //   type: CHANGE_VALUE,
    //   value: e.target.value
    // }
    const action = getInputChangeAction(e.target.value)

    store.dispatch(action)
  }
  
  const handleClick = () => {
    // const action = {
    //   type: CLICK_BTN
    // }
    const action = getAddItemAction()

    store.dispatch(action)
  }

  const handleItemClick = (id: number) => {
    // const action = {
    //   type: DELETE_ITEM,
    //   id
    // }
    const action = getDeleteItemAction()

    store.dispatch(action)
  }

  useEffect(() => {
    // const fetchData = async () => {
    //   const res = await  axios.get('list.json')
    //   console.log(res, 'res')
    // }
    // fetchData()
      // setTimeout(() => {
      //   const data = ["hello", "lee", "lw"]
      //   const action = initListAction(data)
      //   store.dispatch(action)
      // },2000)
    // const action = getTodoList()
    // store.dispatch(action)

    const action = getInitList()
    store.dispatch(action)
  }, [])

  return (
    <UI 
      value={value} 
      handleChange={handleChange}
      handleClick={handleClick}
      handleItemClick={handleItemClick}
    />
  );
}

export default App;
