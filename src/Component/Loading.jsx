
const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex space-x-2">
                <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                <div className="w-4 h-4 bg-primary rounded-full animate-pulse delay-200"></div>
                <div className="w-4 h-4 bg-primary rounded-full animate-pulse delay-400"></div>
            </div>
        </div>
    );
};

export default Loading;
