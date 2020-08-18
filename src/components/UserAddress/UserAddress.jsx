import React, { useContext } from 'react'
import UserInfo from '../UserInfo/UserInfo'
import { UserContext } from '../Providers/UserProvider/UserContext'
const UserAddress = () => {
    const { values } = useContext(UserContext)
    const { address } = values.currentUser;
    const { street, suite, city, zipcode, geo } = address;
    return (
        <div className="address w-50 d-flex px-2">
            <div className="address-info">
                <span className="address-text">Address</span>
                <UserInfo
                    title="Street"
                    value={street}
                />
                <UserInfo
                    title="Suite"
                    value={suite}
                />
                <UserInfo
                    title="City"
                    value={city}
                />
                <UserInfo
                    title="Zipcode"
                    value={zipcode}
                />
            </div>
        </div>
    )
}

export default UserAddress
