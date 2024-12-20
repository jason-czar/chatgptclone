function ConfigWarning({ onSetupClick }) {
    try {
        return (
            <div 
                data-name="config-warning"
                className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
                <div className="flex justify-between items-start">
                    <div>
                        <p 
                            data-name="warning-text"
                            className="font-bold">
                            ⚠️ API Configuration Required
                        </p>
                        <p 
                            data-name="warning-description"
                            className="mt-1">
                            Please configure your API key securely. In production, use environment variables
                            and a secure backend service.
                        </p>
                    </div>
                    <button
                        data-name="setup-button"
                        onClick={onSetupClick}
                        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                        Setup
                    </button>
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
