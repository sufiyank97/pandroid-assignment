import React, { useState, Fragment, useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../Providers/index'
const navDatas = [
    { id: 1, name: 'Profile', active: true },
    { id: 2, name: 'Posts', active: false },
    { id: 3, name: 'Gallery', active: false },
    { id: 4, name: 'ToDo', active: false }
]
const NavBar = () => {
    const [state, setState] = useState({ navDatas, id: 1 })
    const { values, setValue } = useContext(UserContext)
    return (
        <nav className="nav flex-column">
            {
                state.navDatas.map((data, i) =>
                    <Fragment key={data.id}>
                        <div className="nav-link">
                            <Link to={`/${data.name.toLowerCase()}`} className={`nav-link-text   ${(data.active) ? 'nav-link-text-active' : ''}`} onClick={
                                (e) => {
                                    setValue({
                                        ...values,
                                        tabName: data.name
                                    })
                                    setState({
                                        ...state,
                                        navDatas: state.navDatas.map(n1 =>
                                            n1.id == data.id ? { ...n1, active: true } : { ...n1, active: false }
                                        ),
                                        id: data.id
                                    })
                                }
                            } href="#">{data.name}</Link>

                            {
                                data.active ? (
                                    <span className="nav-link-indicator">
                                        <i className="nav-link-indicator-icon fas fa-chevron-right" />
                                    </span>
                                ) :
                                    <Fragment />
                            }
                        </div>
                        {
                            (state.navDatas.length === ++i) ? <Fragment /> : <span className="divider" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}></span>
                        }

                    </Fragment>
                )
            }
        </nav >
    )
}

export default NavBar
