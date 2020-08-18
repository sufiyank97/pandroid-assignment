import React, { useState, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'


import './app.scss'
import { DropDown, UserContext } from './components/Providers/index'

const Login = lazy(() => import('./pages/login/Login'))
const Home = lazy(() => import('./pages/home/Home'))
const App = () => {
    const [values, setValue] = useState({ currentUser: {}, addUser: [], tabName: '' })
    const [dropDownValues, setDropDownValue] = useState({ show: false })

    return (
        <Router>
            <>
                <Suspense fallback={<div>Loading...</div>}>
                    <UserContext.Provider value={{ values, setValue }}>
                        <DropDown.Provider value={{ dropDownValues, setDropDownValue }}>
                            {
                                (Object.keys(values.currentUser).length !== 0) ? (
                                    <>
                                        <Home />
                                        <Redirect to="/profile" />
                                    </>
                                ) : <Login />
                            }

                        </DropDown.Provider>
                    </UserContext.Provider>
                </Suspense>
            </>
        </Router>
    )
}

export default App