import Image from 'next/image';

export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-blue via-blue-900 to-blue-800">
            <div className="text-center">
                {/* Logo Animation */}
                <div className="mb-8 animate-pulse">
                    <div className="w-32 h-32 mx-auto flex items-center justify-center">
                        <Image
                            src="/falcon-logo.png"
                            alt="Frame Falcon Studios Logo"
                            width={128}
                            height={128}
                            className="object-contain"
                        />
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
