export const actionTypes = {
    LOAD_DATA: 'LOAD_DATA',
    LOAD_DATA_RES: 'LOAD_DATA_RES',
}

export function loadData (data) {
    return { type: actionTypes.LOAD_DATA, data }
}

export function loadDataRes (data) {
return {
    type: actionTypes.LOAD_DATA_RES,
    data
}
}