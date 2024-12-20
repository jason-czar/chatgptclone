async function chatAgent(message, chatHistory) {
    try {
        // Use internal invokeAIAgent instead of direct API calls for better security
        const systemPrompt = `You are a helpful AI assistant. You provide clear, accurate, and helpful responses.

Chat history:
${JSON.stringify(chatHistory)}`;
        
        const response = await invokeAIAgent(systemPrompt, message);
        return response;
    } catch (error) {
        reportError(error);
        throw error;
    }
}
