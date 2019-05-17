/* global fetch */

import { all, put, takeLatest } from 'redux-saga/effects'

import { actionTypes, cursosDataRes, profsDataRes } from './SanarFlixActions'

function * loadDataCursos () {
  try {
    const res = yield fetch(`https://5b7570f8deca780014ec9f86.mockapi.io/v1/cursos`)
    const data = yield res.json()
    yield put(cursosDataRes(data))
  } catch (err) {
    yield put(cursosDataRes(null))
  }
}

function * loadDataProfessores () {
  try {
    const res = yield fetch(`https://5b7570f8deca780014ec9f86.mockapi.io/v1/professores`)
    const data = yield res.json()
    yield put(profsDataRes(data))
  } catch (err) {
    yield put(profsDataRes(null))
  }
}

// function * loadDataCursos () {
//   try {
//     const res = yield fetch(`https://5b7570f8deca780014ec9f86.mockapi.io/v1/cursos`)
//     const data = yield res.json()
//     yield put(cursosDataRes(data))
//   } catch (err) {
//     yield put(cursosDataRes(null))
//   }
// }

// https://5b7570f8deca780014ec9f86.mockapi.io/v1/modulos

function * rootSaga () {
  yield all([
    takeLatest(actionTypes.LOAD_DATA, loadDataCursos),
    takeLatest(actionTypes.LOAD_DATA, loadDataProfessores),
  ])
}

export default rootSaga