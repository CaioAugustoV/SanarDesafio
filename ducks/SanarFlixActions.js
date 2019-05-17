export const actionTypes = {
  LOAD_DATA: 'LOAD_DATA',
  CURSOS_DATA: 'CURSOS_DATA',
  PROFS_DATA: 'PROFS_DATA',
  MODLS_DATA: 'MODLS_DATA',
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

export function profsDataRes(data) {
  return {
    type: actionTypes.PROFS_DATA,
    data
  }
}

export function ModulosDataRes(data) {
  return {
    type: actionTypes.MODLS_DATA,
    data
  }
}