import * as React from 'react'
import Menu from '../../Components/Menu/Home'
import customMenuhome from './../../Assets/testData/menuHome.json'

export default class About extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <Menu options={customMenuhome} />
                <h1>About</h1>
            </div>
        )
    }
}