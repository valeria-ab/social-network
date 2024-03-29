import React, {useEffect, useRef, useState} from 'react';
import {StatusType} from '../../api/chat-api';
import {useDispatch, useSelector} from 'react-redux';
import {ChatMessageType, sendMessage, startMessagesListening, stopMessagesListening} from '../../redux/chat-reducer';
import {AppStateType} from '../../redux/redux-store';


const ChatPage = () => {

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
    }, [dispatch])


    return <div>
        {status === 'error' && <div>Some error occurred. Please refresh the page</div>}
        <>
            <Messages/>
            <AddMessageForm/>
        </>

    </div>
}
const Messages: React.FC = () => {
    const messagesAnchorRef = useRef<HTMLDivElement>(null);
    const messages = useSelector<AppStateType, ChatMessageType[]>((state) => state.chat.messages)
    const [isAutoScroll, setIsAutoScroll] = useState(true)

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
            !isAutoScroll && setIsAutoScroll(true)
        } else {
            isAutoScroll && setIsAutoScroll(false)
        }
    }

    useEffect(() => {
        if (isAutoScroll) {
            messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
        }
    }, [messages])

    return <div style={{height: '400px', overflowY: 'auto'}} onScroll={scrollHandler}>
        {messages.map((message, index) => <Message key={message.id} message={message}/>)}
        <div ref={messagesAnchorRef}/>
    </div>
}

const Message: React.FC<{ message: ChatMessageType }> = React.memo(({message}) => {

    return <div>
        <img src={message.photo} style={{width: '30px'}}/>
        <b>{message.userName}</b>
        <br/>
        {message.message}
        <hr/>
    </div>
})

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