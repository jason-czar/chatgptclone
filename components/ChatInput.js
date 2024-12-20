function ChatInput({ onSendMessage }) {
    const [message, setMessage] = React.useState('');

    const handleSubmit = (e) => {
        try {
            e.preventDefault();
            if (message.trim()) {
                onSendMessage(message);
                setMessage('');
            }
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <form 
            data-name="chat-input-form"
            onSubmit={handleSubmit} 
            className="message-input-container">
            <div className="max-w-3xl mx-auto flex gap-4">
                <input
                    data-name="message-input"
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here..."
                    className="input-box w-full p-4 text-white"
                />
                <button
                    data-name="send-button"
                    type="submit"
                    className="send-button px-6 py-4 text-white rounded-lg">
                    Send
                </button>
            </div>
        </form>
    );
}
