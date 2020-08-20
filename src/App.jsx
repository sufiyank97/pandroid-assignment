import React, { useState, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'


import './app.scss'
import { DropDown, UserContext, ChatContext } from './components/Providers/index'

const Login = lazy(() => import('./pages/login/Login'))
const Home = lazy(() => import('./pages/home/Home'))
const App = () => {
    const [values, setValue] = useState({ currentUser: {}, addUser: [], allUsers: [], tabName: '' })
    const [dropDownValues, setDropDownValue] = useState({ show: false })
    const [chats, setChats] = useState({ active: false })

    return (
        <Router>
            <>
                <Suspense fallback={<div>Loading...</div>}>
                    <UserContext.Provider value={{ values, setValue }}>
                        <DropDown.Provider value={{ dropDownValues, setDropDownValue }}>
                            <ChatContext.Provider value={{ chats, setChats }}>
                                {
                                    (Object.keys(values.currentUser).length !== 0) ? (
                                        <>
                                            <Home />
                                            <Redirect to="/profile" />
                                        </>
                                    ) : <Login />
                                }
                            </ChatContext.Provider>
                        </DropDown.Provider>
                    </UserContext.Provider>
                </Suspense>
            </>
        </Router>
    )
}

export default App