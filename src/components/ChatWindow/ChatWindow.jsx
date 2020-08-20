import React, { useContext } from 'react'

import { UserContext, ChatContext } from '../Providers/index'
import { UserTitle } from '../index'
const ChatWindow = () => {

    const { chats, setChats } = useContext(ChatContext)
    const { values } = useContext(UserContext)
    const handleChatBox = () => {
        setChats({ active: !chats.active })
    }
    const onlineUsers = [...values.addUser]
    const offlineUsers = [...values.allUsers]

    return (
        <div className="chat-box">

            <div className="chat-box-header" onClick={() => handleChatBox()}>
                <div className="chat-box-header-title">
                    <i className="far fa-comment-alt chat-box-header-title-icon"></i>
                    <span className="chat-box-header-title-text">Chats</span>
                </div>
                <div className={`chat-box-header-icon chat-box-header-icon-${(chats.active) ? 'active' : 'hidden'}`}>
                    <i className="fas fa-chevron-up fa-3x chat-box-header-icon-value"></i>
                </div>
            </div>

            <div className={`chat-box-list chat-box-list-${(chats.active) ? 'active' : 'hidden'}`}>
                {
                    onlineUsers.filter(obj1 => obj1.id !== values.currentUser.id).map(obj2 => (
                        <div key={obj2.id} className="chat-box-list-item chat-box-list-item-hover">
                            <div className="chat-box-list-item-name">
                                <UserTitle size="extra-small" user={obj2} />
                            </div>
                            <span className="chat-box-list-item-online" />
                        </div>
                    ))
                }


                {
                    offlineUsers.filter(obj1 => !onlineUsers.some(obj2 => obj2.id === obj1.id)).map(user => (
                        <div key={user.id} className="chat-box-list-item chat-box-list-item-nohover">
                            <div className="chat-box-list-item-name">
                                <UserTitle size="extra-small" user={user} type="none" />
                            </div>
                            <span className="chat-box-list-item-offline" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ChatWindow
