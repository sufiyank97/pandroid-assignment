import React, { useContext } from 'react'
import { UserTitle, UserInfo } from '../index'
import { UserContext } from '../Providers/UserProvider/UserContext'
const UserAbout = () => {
    const { values } = useContext(UserContext)
    const { username, phone, website, email, company } = values.currentUser
    const { name, catchPhrase, bs } = company;
    return (
        <div className="about w-50 d-flex px-2">
            <div className="about-info">
                <UserTitle user={values.currentUser} size="huge" />
                <UserInfo
                    title="Username"
                    value={username}
                />
                <UserInfo
                    title="e-mail"
                    value={email}
                />
                <UserInfo
                    title="Phone"
                    value={phone}
                />
                <UserInfo
                    title="Website"
                    value={website}
                />
            </div>

            <span className="about-company-name">Company</span>
            <div className="about-company">
                <UserInfo
                    title="Name"
                    value={name}
                />
                <UserInfo
                    title="catchphrase"
                    value={catchPhrase}
                />
                <UserInfo
                    title="bs"
                    value={bs}
                />
            </div>
        </div>
    )
}

export default UserAbout
