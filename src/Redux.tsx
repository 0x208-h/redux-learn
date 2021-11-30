import React, { useEffect, useState, FC, ChangeEvent } from "react";
import { connect, ConnectedComponent } from "react-redux";
import { Dispatch } from 'redux'
import store from "./reactReduxStore";

interface StoreProps {
  inputValue: string
  list: string[]
  changeInputValue: () => void
  handleClick: () => void
  handleDelete: (id: number) => void
}

const ReduxLearn: FC<any> = ({inputValue, list, changeInputValue, handleClick, handleDelete}) => {
//   const [value, setValue] = useState<storeProps>({ inputValue: '', list: []})
//   useEffect(() => {
//     setValue(store.getState())
//   }, [])
  // const { inputValue, list } = props
  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

  // }

  // const handleClick = () => {

  // }
  return (
    <div>
      <div>
        <input type="text" value={inputValue} onChange={changeInputValue} />
        <button onClick={handleClick}>提交</button>
      </div>
      <ul>
        {
          list.map( (item: any, index: number) => (<li key={index} onClick={() => handleDelete(index)}>{item}</li>))
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
// store.dispatch   --> props
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeInputValue(e: ChangeEvent<HTMLInputElement>) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    },
    handleClick(){
      const action = {
        type: 'handle_click'
      }
      dispatch(action)
    },
    handleDelete(id: number){
      const action = {
        type: 'handle_delete',
        id
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxLearn)