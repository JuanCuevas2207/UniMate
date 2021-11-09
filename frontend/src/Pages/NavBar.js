import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <Link className="navbar-brand"  to='/'>
                        Welcome
                    </Link>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <div className="p-3">
                                <Link type="button" className="btn btn-dark "to='/signin'>Sign in</Link>
                            </div>

                        </li>
                        <li className="nav-item">
                            <div className="p-3">
                                <Link className="btn btn-dark " to='/signup'>Sign up</Link>
                            </div>
                        </li>
                    </ul>
                </div>

            </nav>

        )
    }
}
