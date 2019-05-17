/* global fetch */

import { all, put, takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import { actionTypes, loadDataRes } from './actions'

es6promise.polyfill()

function * loadDataSaga () {
  try {
    const res = yield fetch(`https://pokeapi.co/api/v2/pokemon/1/`)
    const data = yield res.json()
    yield put(loadDataRes(data))
  } catch (err) {
    yield put(loadDataRes(null))
  }
}

function * rootSaga () {
  yield all([
    takeLatest(actionTypes.LOAD_DATA, loadDataSaga)
  ])
}

export default rootSaga