function App() {
    const [messages, setMessages] = React.useState([]);
    const [isConfigured, setIsConfigured] = React.useState(false);
    const [showConfigModal, setShowConfigModal] = React.useState(false);

    const checkConfiguration = async () => {
        try {
            const configured = await config.loadConfig();
            setIsConfigured(configured);
        } catch (error) {
            reportError(error);
            setIsConfigured(false);
        }
    };

    React.useEffect(() => {
        checkConfiguration();
    }, []);

    const handleSendMessage = async (message) => {
        try {
            if (!isConfigured) {
                throw new Error("API not properly configured");
            }
            const newMessages = [...messages, { role: 'user', content: message }];
            setMessages(newMessages);

            const response = await chatAgent(message, messages);
            setMessages([...newMessages, { role: 'assistant', content: response }]);
        } catch (error) {
            reportError(error);
        }
    };

    const handleConfigSave = () => {
        checkConfiguration();
    };

    return (
        <div 
            data-name="app-container"
            className="flex">
            <Sidebar />
            <div 
                data-name="chat-container"
                className="chat-container flex-1">
                {!isConfigured && (
                    <ConfigWarning 
                        onSetupClick={() => setShowConfigModal(true)} 
                    />
                )}
                <div 
                    data-name="messages-container"
                    className="messages-container">
                    {messages.map((msg, index) => (
                        <ChatMessage
                            key={index}
                            message={msg.content}
                            role={msg.role}
                        />
                    ))}
                </div>
                <ChatInput onSendMessage={handleSendMessage} />
            </div>
            <ConfigModal
                isOpen={showConfigModal}
                onClose={() => setShowConfigModal(false)}
                onSave={handleConfigSave}
            />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
