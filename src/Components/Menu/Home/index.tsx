import * as React from 'react'
import { Link } from 'react-router-dom'

export default ({ options }: any) => {
    return (
        <div style={{background: 'blue'}}>
            {Object.keys(options).map((key: any, index: number) =>
                <ul key={index}>
                    <li>
                        <Link to={options[key]}>{key.toUpperCase()}</Link>
                    </li>
                </ul>
            )}
        </div>
    )
}