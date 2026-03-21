export default function PulsingLoader() {
    return (
        <div className="flex items-center gap-2" role="status" aria-label="Loading">
            <div className="flex gap-1.5">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
            </div>
        </div>
    );
}