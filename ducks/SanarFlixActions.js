export const actionTypes = {
  LOAD_DATA: 'LOAD_DATA',
  CURSOS_DATA: 'CURSOS_DATA',
}

export function loadData(data) {
  return { type: actionTypes.LOAD_DATA, data }
}

export function cursosDataRes(data) {
  return {
    type: actionTypes.CURSOS_DATA,
    data
  }
}