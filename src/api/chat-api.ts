let subscribers = [] as Array<(messages: ChatMessageType[]) => void>

let ws: WebSocket | null;

const closeHandler = () => {
    console.log('WS CLOSED')
    setTimeout(createChannel, 3000)
}

const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data)
    subscribers.forEach(s => s(newMessages))
};

function createChannel() {

    ws?.removeEventListener('close', closeHandler)
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
        subscribers = []
        ws?.removeEventListener('close', closeHandler)
        ws?.removeEventListener('message', messageHandler)
      ws?.close()
    },
    subscribe(callback: (messages: ChatMessageType[]) => void) {
        subscribers.push(callback)
        return () => {
            subscribers = subscribers.filter(s => s !== callback)
        }
    },
    unsubscribe(callback: (messages: ChatMessageType[]) => void) {
        subscribers = subscribers.filter(s => s !== callback)
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