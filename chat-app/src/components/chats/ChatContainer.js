import React, {Component} from 'react'
import SideBar from './SideBar'

export default class ChatContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            chats: [],
            activeChat: null
        }
    }

    setActiveChat = (activeChat) => {
        this.setState({activeChat})
    }

    render() {
        const {logout, chats, user, activeChat, setActiveChat} = this.props
        return (
            <div className="container">
                <SideBar
                    logout={logout}
                    chats={chats}
                    user={user}
                    activeChat={activeChat}
                    setActiveChat={setActiveChat}
                    />
                Chat Container
            </div>
        )
    }
}