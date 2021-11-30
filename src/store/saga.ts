import { takeEvery, delay, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionType'
import { initListAction } from './actionCreator'

function* getInitList() {
  yield delay(2000)
  const data = ['hello', 'lee', 'lw']
  const action = initListAction(data)
  yield put(action)
}

function* saga() {
  yield takeEvery(GET_INIT_LIST, getInitList)
}

export default saga