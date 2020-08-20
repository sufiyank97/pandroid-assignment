import React, { useContext } from 'react'
import UserInfo from '../UserInfo/UserInfo'
import { UserContext } from '../Providers/UserProvider/UserContext'
const UserAddress = () => {
    const { values } = useContext(UserContext)
    const { address } = values.currentUser;
    const { street, suite, city, zipcode, geo } = address;
    return (
        <div className="address">

            <span className="address-text">Address :</span>
            <div className="address-info">
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
            <div className="address-map">
                <img className="address-map-image" src="" alt="User Address Map" />
            </div>
            <div className="address-geo">
                <div>
                    <span className="address-geo-grey">Lat:</span>
                    <span className="address-geo-black">{geo.lat}</span>
                    <span className="address-geo-grey">Lng:</span>
                    <span className="address-geo-black">{geo.lng}</span>
                </div>
            </div>
        </div>
    )
}

export default UserAddress
