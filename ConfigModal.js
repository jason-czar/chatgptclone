function ConfigModal({ isOpen, onClose, onSave }) {
    const [apiKey, setApiKey] = React.useState('');
    const [error, setError] = React.useState('');

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            if (!apiKey.trim()) {
                setError('API key is required');
                return;
            }
            
            const success = await config.saveConfig(apiKey);
            if (success) {
                onSave();
                onClose();
            } else {
                setError('Failed to save configuration');
            }
        } catch (error) {
            reportError(error);
            setError('An error occurred while saving configuration');
        }
    };

    if (!isOpen) return null;

    return (
        <div 
            data-name="config-modal"
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div 
                data-name="modal-content"
                className="bg-white rounded-lg p-6 max-w-md w-full">
                <h2 
                    data-name="modal-title"
                    className="text-xl font-bold mb-4">
                    Configuration Settings
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label 
                            data-name="api-key-label"
                            className="block text-sm font-medium text-gray-700 mb-2">
                            OpenAI API Key
                        </label>
                        <input
                            data-name="api-key-input"
                            type="password"
                            value={apiKey}
                            onChange={(e) => setApiKey(e.target.value)}
                            className="w-full p-2 border rounded"
                            placeholder="Enter your API key"
                        />
                        {error && (
                            <p 
                                data-name="error-message"
                                className="text-red-500 text-sm mt-1">
                                {error}
                            </p>
                        )}
                    </div>
                    <div 
                        data-name="modal-actions"
                        className="flex justify-end gap-4">
                        <button
                            data-name="cancel-button"
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-600 hover:text-gray-800">
                            Cancel
                        </button>
                        <button
                            data-name="save-button"
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
