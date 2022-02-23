export const GET_ALL_MENUS = 'GET_ALL_MENUS';
export const GET_ALL_MENUS_SUCCESS = 'GET_ALL_MENUS_SUCCESS';
export const GET_ALL_MENUS_ERROR = 'GET_ALL_MENUS_ERROR';

export const createGetAllMenusAction = () => ({ type: GET_ALL_MENUS });

export const createGellAllMenusSuccessAction = (data) => ({ type: GET_ALL_MENUS_SUCCESS, data});

export const createGellAllMenusErrorAction = () => ({ type: GET_ALL_MENUS_ERROR });
