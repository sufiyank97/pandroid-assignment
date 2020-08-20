import React, { useContext } from 'react'

import { DropDown, UserContext, ChatContext } from '../Providers/index'

const UserTitle = (props) => {


    const propsData = { ...props }
    const { user, type, size, font } = propsData
    const { name, profilepicture } = user

    const { values, setValue } = useContext(UserContext)
    const { dropDownValues, setDropDownValue } = useContext(DropDown)
    const { chats, setChats } = useContext(ChatContext)

    const handleClick = () => {
        if (type === "login") {
            setValue({
                ...values,
                currentUser: user,
                addUser: [...values.addUser, user]
            })
        } else if (type === "dropdown") {
            setDropDownValue({
                ...dropDownValues,
                show: !dropDownValues.show
            })
            if (chats.active) {
                setChats({ active: !chats.active })
            }
        } else {
            setValue({
                ...values,
                currentUser: user
            })
        }
    }

    return (
        <>
            <div className={`user user-${size}`} onClick={() => handleClick()}>
                <div className={`user-${size}-image`}>
                    <img src={profilepicture} className={`user-${size}-image-value`} alt={name} />
                </div>
                <span className={`user-${size}-title`} style={(font) ? { fontSize: '.75rem' } : null}>{name}</span>
            </div>

        </>
    )
}

export default UserTitle
