import React, {useEffect, useState} from 'react';



export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string

}

const ChatPage = () => {

    // useEffect( () => {
    //     createChannel()
    // }, [])

    return <div>
        <Chat/>
    </div>
}

const Chat = () => {
    const [wsChannel, setWsChannel] = useState<WebSocket | null>(null)

    useEffect( () => {
        let ws: WebSocket;
        const closeHandler = () => {
            console.log('WS CLOSED')
            setTimeout(createChannel, 3000)
        }
        function createChannel() {

                ws?.removeEventListener('close', closeHandler)
                ws?.close()

            ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
            ws.addEventListener('close', closeHandler)
            setWsChannel(ws)
        }
        createChannel()

        return () => {
            ws.removeEventListener('close', closeHandler)
            ws.close()
        }
    }, [])


    return <div>
        <Messages wsChannel={wsChannel}/>
        <AddMessageForm wsChannel={wsChannel}/>
    </div>
}
const Messages: React.FC<{wsChannel: WebSocket | null}> = ({wsChannel}) => {

    const [messages, setMessages] = useState<ChatMessageType[]>([])

    useEffect(() => {
        let messageHandler = (e: MessageEvent) => {
            setMessages(prevMessages => [...prevMessages, ...JSON.parse(e.data)])
        };
        wsChannel?.addEventListener('message', messageHandler)

        return () => {
            wsChannel?.removeEventListener('message', messageHandler)
        }
    }, [wsChannel])

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

const AddMessageForm: React.FC<{wsChannel: WebSocket | null}> = ({wsChannel}) => {
    const [message, setMessage] = useState('')
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')

    useEffect(() => {

        const openHandler = () => {
            setReadyStatus('ready')
        };
        wsChannel?.addEventListener('open', openHandler)

        return () => {
            wsChannel?.removeEventListener('open', openHandler)
        }
    }, [wsChannel])

    const sendMessage = () => {
        message && wsChannel?.send(message)
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
            <button onClick={sendMessage}
                    disabled={wsChannel === null || readyStatus !== 'ready'}
            >send
            </button>
        </div>
    </div>
}

export default ChatPage;