function ChatMessage({ message, role }) {
    try {
        return (
            <div 
                data-name="chat-message"
                className={`message ${role === 'user' ? 'user-message' : 'ai-message'}`}>
                <div className="flex items-start">
                    <div 
                        data-name="avatar"
                        className="w-8 h-8 rounded-full flex items-center justify-center mr-4">
                        {role === 'user' ? '👤' : '🤖'}
                    </div>
                    <div 
                        data-name="message-content"
                        className="text-white flex-1">
                        {message}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
