import React, { ChangeEvent, useState, useEffect } from 'react';
// import { }
import { Button, Input, List, Typography } from 'antd'
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
    const action = {
      type: 'change_value',
      value: e.target.value
    }

    store.dispatch(action)
  }
  
  const handleClick = () => {
    const action = {
      type: 'click_btn'
    }

    store.dispatch(action)
  }

  const handleItemClick = (id: number) => {
    const action = {
      type: 'delete_item',
      id
    }

    store.dispatch(action)
  }

  return (
    <div style={{margin:' 40px 80px'}}>
      <Input 
        style={{ width: 200, marginRight: 20 }} 
        value={value.inputValue}
        onChange={handleChange}
      />
      <Button type="primary" onClick={handleClick}>提交</Button>
      <List
      style={{ marginTop: 10 }}
      bordered
      dataSource={value.list}
      renderItem={(item, index) => (
        <List.Item onClick={() => handleItemClick(index)}>
          <Typography.Text mark>[ITEM]</Typography.Text> {item}
        </List.Item>
      )}
    />
    </div>
  );
}

export default App;
