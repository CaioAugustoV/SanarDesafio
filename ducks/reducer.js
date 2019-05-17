import { actionTypes } from './actions'

export const initialStateA = {
  placeholderData: null
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_DATA_RES:
      return {
        ...state,
        ...{ placeholderData: action.data }
      }

    default:
      return state
  }
}

export default reducer