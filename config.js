const config = {
    // In production, these values should be set through environment variables
    // and accessed through a secure backend service
    apiKey: process.env.OPENAI_API_KEY || '', // Access environment variable
    apiEndpoint: 'https://api.openai.com/v1/chat/completions',
    model: 'gpt-3.5-turbo',
    
    // Function to securely load configuration
    loadConfig: async function() {
        try {
            if (process.env.OPENAI_API_KEY) {
                this.apiKey = process.env.OPENAI_API_KEY;
                return true;
            }
            return false;
        } catch (error) {
            reportError(error);
            return false;
        }
    },
    
    // Function to check if API key is configured
    isConfigured: function() {
        return Boolean(this.apiKey);
    }
};
