import { actionTypes } from './SanarFlixActions'

export const INITIAL_STATE = {
  cursosData: [],
  profsData: [],
  modulosData: [],
  searchCursos: '',
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.CURSOS_DATA:
      return {
        ...state,
        ...{ cursosData: action.data }
      }

    case actionTypes.PROFS_DATA:
      return {
        ...state,
        ...{ profsData: action.data }
      }
    
    case actionTypes.MODLS_DATA:
      return {
        ...state,
        ...{ modulosData: action.data }
      }

    case actionTypes.SEARCH_CURSOS:
      return {
        ...state,
        ...{ searchCursos: action.data }
      }
    default:
      return state
  }
}

export default reducer