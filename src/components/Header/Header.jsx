import React, { useContext } from 'react'

import { UserTitle, DropDownComponent } from '../index'

import { UserContext } from '../Providers/UserProvider/UserContext'

const Header = () => {
    const { values } = useContext(UserContext)
    return (
        <>
            <header>
                <span style={{ fontSize: '1.5rem' }}>{(values.tabName) ? values.tabName : "Profile"}</span>
                <UserTitle user={values.currentUser} size="small" type="dropdown" />
            </header>
            <hr />
            <DropDownComponent />
        </>
    )
}

export default Header
