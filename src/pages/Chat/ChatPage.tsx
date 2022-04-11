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
    const messages = [1, 2, 3, 4]
    return <div style={{height: '400px', overflowY: 'auto'}}>
        {messages.map(message => <Message/>)}
        {messages.map(message => <Message/>)}
        {messages.map(message => <Message/>)}
    </div>
}

const Message = () => {
    const message = {
        url: 'https://via.placeholder.com/50',
        author: 'Zina',
        text: 'hello friends'
    }
    return <div>
        <img src={message.url}/>
        <b>{message.author}</b>
        <br/>
        {message.text}
        <hr/>
    </div>
}

const AddMessageForm = () => {
    return <div>
        <div><textarea></textarea></div>
        <div>
            <button>send</button>
        </div>
    </div>
}

export default ChatPage;