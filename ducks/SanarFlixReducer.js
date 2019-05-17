import { actionTypes } from './SanarFlixActions'

export const INITIAL_STATE = {
  cursosData: {}
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.CURSOS_DATA:
      return {
        ...state,
        ...{ cursosData: action.data }
      }

    default:
      return state
  }
}

export default reducer