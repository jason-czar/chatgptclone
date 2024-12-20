function Sidebar() {
    try {
        return (
            <div 
                data-name="sidebar"
                className="bg-gray-900 w-64 p-4 text-white h-screen">
                <h1 
                    data-name="sidebar-title"
                    className="text-xl font-bold mb-4">
                    ChatGPT Clone
                </h1>
                <button
                    data-name="new-chat-button"
                    className="w-full bg-gray-700 hover:bg-gray-600 text-white rounded-lg p-3 mb-4">
                    + New Chat
                </button>
                <div 
                    data-name="chat-history"
                    className="space-y-2">
                    {/* Chat history will be implemented later */}
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
