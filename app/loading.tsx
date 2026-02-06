export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-blue via-blue-900 to-blue-800">
            <div className="text-center">
                {/* Logo Animation */}
                <div className="mb-8 animate-pulse">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
                        <span className="text-white font-bold text-4xl">FF</span>
                    </div>
                </div>

                {/* Loading Text */}
                <h2 className="text-2xl font-bold text-white mb-4">Frame Falcon Studios</h2>

                {/* Loading Spinner */}
                <div className="flex justify-center space-x-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>

                <p className="text-blue-200 mt-4 text-sm">Loading your creative experience...</p>
            </div>
        </div>
    );
}
