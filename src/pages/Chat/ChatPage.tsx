import React, {useEffect, useState} from 'react';

const wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string

}

const ChatPage = () => {
    return <div>
        <Chat/>
    </div>
}

const Chat = () => {

    return <div>
        <Messages/>
        <AddMessageForm/>
    </div>
}
const Messages = () => {

    const [messages, setMessages] = useState<ChatMessageType[]>([])

    useEffect(() => {
        wsChannel.addEventListener('message', (e: MessageEvent) => {
            setMessages(prevMessages => [...prevMessages, ...JSON.parse(e.data)])
        })
    }, [])

    return <div style={{height: '400px', overflowY: 'auto'}}>
        {messages.map((message, index) => <Message key={index} message={message}/>)}

    </div>
}

const Message: React.FC<{ message: ChatMessageType }> = ({message}) => {
    // const message:ChatMessageType = {
    //     url: 'https://via.placeholder.com/50',
    //     author: 'Zina',
    //     text: 'hello friends'
    // }
    return <div>
        <img src={message.photo} style={{width: '30px'}}/>
        <b>{message.userName}</b>
        <br/>
        {message.message}
        <hr/>
    </div>
}

const AddMessageForm = () => {
    const [message, setMessage] = useState('')

    const sendMessage = () => {
        message && wsChannel.send(message)
        setMessage('')
    }
    return <div>
        <div>
            <textarea
                onChange={(e) => setMessage(e.currentTarget.value)}
                value={message}
                placeholder={"Type your message..."}
            /></div>
        <div>
            <button onClick={sendMessage}>send</button>
        </div>
    </div>
}

export default ChatPage;