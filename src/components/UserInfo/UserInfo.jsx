import React from 'react';

const UserInfo = (props) => {
    const { title, value } = { ...props };
    return (
        <>
            <div className="user-info">
                <span className="user-info-grey">
                    {title} :
                </span>
                <span className="user-info-black">
                    {value}
                </span>
            </div>
        </>
    )
}

export default UserInfo;