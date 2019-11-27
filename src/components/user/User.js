import React from 'react';
import PropTypes from 'prop-types';
import './../header/HeaderComponent.less'

export class User extends React.Component {
    renderTemplate = () => {
        const {name, error, isFetching} = this.props;

        if (error) {
            return <div>Во время запроса произошла ошибка, обновите страницу</div>
        }
        if (isFetching) {
            return <div>Загружаю</div>
        }
        if (name) {
            return <div className='username'>Привет, {name}!</div>
        } else {
            return (
                <div className='btn_login' onClick={this.props.handleLogin}>
                    Войти
                </div>
            )
        }
    };

    render() {
        console.log('<User/> render')
        return <div>{this.renderTemplate()}</div>
    }
}

User.protoType = {
    name: PropTypes.string.isRequired,
    error: PropTypes.string,
    isFetching: PropTypes.bool.isRequired,
    handleLogin: PropTypes.func.isRequired,
};

export default User;