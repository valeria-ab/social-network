import React, {useEffect, useState} from 'react';
import {ChatMessageType, StatusType} from '../../api/chat-api';
import {useDispatch, useSelector} from 'react-redux';
import {sendMessage, startMessagesListening, stopMessagesListening} from '../../redux/chat-reducer';
import {AppStateType} from '../../redux/redux-store';


const ChatPage = () => {

    // useEffect( () => {
    //     createChannel()
    // }, [])

    return <div>
        <Chat/>
    </div>
}

const Chat = () => {
    const dispatch = useDispatch()
    const status = useSelector<AppStateType, StatusType>(store => store.chat.status)

    useEffect(() => {
        dispatch(startMessagesListening())

        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])


    return <div>
        {status === 'error' && <div>Some error occurred. Please refresh the page</div>}
        <>
            <Messages/>
            <AddMessageForm/>
        </>

    </div>
}
const Messages: React.FC = () => {

    const messages = useSelector<AppStateType, ChatMessageType[]>((state) => state.chat.messages)


    return <div style={{height: '400px', overflowY: 'auto'}}>
        {messages.map((message, index) => <Message key={index} message={message}/>)}

    </div>
}

const Message: React.FC<{ message: ChatMessageType }> = ({message}) => {

    return <div>
        <img src={message.photo} style={{width: '30px'}}/>
        <b>{message.userName}</b>
        <br/>
        {message.message}
        <hr/>
    </div>
}

const AddMessageForm: React.FC = () => {
    const [message, setMessage] = useState('')
    const status = useSelector<AppStateType, StatusType>(store => store.chat.status)
    const dispatch = useDispatch()


    const sendMessageHandler = () => {
        message && dispatch(sendMessage(message))
        setMessage('')
    }
    return <div>
        <div>
            <textarea
                onChange={(e) => setMessage(e.currentTarget.value)}
                value={message}
                placeholder={'Type your message...'}
            /></div>
        <div>
            <button onClick={sendMessageHandler}
                    disabled={status !== 'ready'}
            >send
            </button>
        </div>
    </div>
}

export default ChatPage;