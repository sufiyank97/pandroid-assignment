import React from 'react'
import UserAbout from '../../components/UserAbout/UserAbout'
import UserAddress from '../../components/UserAddress/UserAddress'
const Profile = () => {
    return (
        <div className="profile">
            <UserAbout />
            <UserAddress />
        </div>
    )
}

export default Profile
