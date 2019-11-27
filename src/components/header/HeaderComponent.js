import React from 'react';
import './HeaderComponent.less'
import UserContainer from "../../containers/UserContainer";

export class HeaderComponent extends React.Component {
    render() {
        const {name, error, handleLogin} = this.props;

        return (
            <div className='header'>
                <div className='header__logo'>logo</div>

                <UserContainer
                    classname='header__username'
                    name={name}
                    error={error}
                    handleLogin={handleLogin}
                />
            </div>
        )
    }
}

export default HeaderComponent;