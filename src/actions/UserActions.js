import Constants from './../constants/Constants'

export function handleLogin() {
    return function (dispatch) {
        dispatch({
            type: Constants.LOGIN_REQUEST,
        });

        VK.Auth.login(r => {
            if (r.session) {
                let userName = r.session.user.first_name

                dispatch({
                    type: Constants.LOGIN_SUCCESS,
                    payload: userName,
                })
            } else {
                dispatch({
                    type: Constants.LOGIN_FAIL,
                    payload: new Error('Ошибка авторизации'),
                })
            }
        }, 4) // запрос прав на доступ к photo
    }
}