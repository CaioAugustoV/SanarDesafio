/* global fetch */

import { all, put, takeLatest } from 'redux-saga/effects'

import { actionTypes, cursosDataRes } from './SanarFlixActions'

function * loadDataCursos () {
  try {
    const res = yield fetch(`https://pokeapi.co/api/v2/pokemon/1/`)
    const data = yield res.json()
    yield put(cursosDataRes(data))
  } catch (err) {
    yield put(cursosDataRes(null))
  }
}

function * rootSaga () {
  yield all([
    takeLatest(actionTypes.LOAD_DATA, loadDataCursos)
  ])
}

export default rootSaga