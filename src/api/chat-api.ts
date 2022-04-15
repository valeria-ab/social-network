type MessagesReceivedSubscriberType = (messages: ChatMessageType[]) => void;
export type StatusType = 'pending' | 'ready';
type StatusChangedSubscriberType = (status: StatusType) => void

const subscribers = {
    'messages-received': [] as MessagesReceivedSubscriberType[],
    'status-changed': [] as StatusChangedSubscriberType[],
}

let ws: WebSocket | null;

type EventNamesType = 'messages-received' | 'status-changed'

const closeHandler = () => {
    console.log('WS CLOSED')
    setTimeout(createChannel, 3000)
}

const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data)
    subscribers['messages-received'].forEach(s => s(newMessages))
};

const cleanUp = () => {
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('message', messageHandler)
}

function createChannel() {

    cleanUp()
    ws?.close()

    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    ws.addEventListener('close', closeHandler)
    ws.addEventListener('message', messageHandler)
}

export const chatAPI = {
    start() {
        createChannel()
    },
    stop() {
        subscribers['messages-received'] = []
        subscribers['status-changed'] = []
        cleanUp()
      ws?.close()
    },
    subscribe(eventName: EventNamesType, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {
        // @ts-ignore
        subscribers[eventName].push(callback)
        return () => {
            // @ts-ignore
            subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
        }
    },
    unsubscribe(eventName: EventNamesType, callback: MessagesReceivedSubscriberType) {
        // @ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
    },
    sendMessage(message: string) {
        ws?.send(message)
    }
}

export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string

}