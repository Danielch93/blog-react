import * as React from 'react'
import Prueba from '../../../Components/Prueba'

export default class About extends React.Component<{}, {}> {

    render() {
        return (
            <div>
                <h1>hola mundo, soy el About</h1>
                <Prueba />
            </div>
        )
    }
}