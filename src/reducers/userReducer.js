const initialState = {
    name: '',
    error: '', // текст ошибки
    isFetching: false, // флаг процесса загрузки
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isFetching: false,
                name: action.payload
            };
        case 'LOGIN_FAIL':
            return {
                ...state,
                isFetching: false,
                error: action.payload.message
            };
        default:
            return state;
    }
};