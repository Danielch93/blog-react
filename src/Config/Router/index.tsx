import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './../../Page/Home'
import About from './../../Page/About'
import Login from './../../Page/Login'

const RouterApp = () => (
    <Router>
        <div>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/login' component={Login} />
        </div>
    </Router>
)
export default RouterApp