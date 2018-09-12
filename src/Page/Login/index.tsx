import * as React from 'react'
import Menu from '../../Components/Menu/Home'
import customMenuhome from './../../Assets/testData/menuHome.json'

export default class Login extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <Menu options={customMenuhome} />
                <h1>Login</h1>
            </div>
        )
    }
}