function ImageCart(loginUser) {

    return (
        <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="flex items-center gap-3 p-4">
                <img
                    src="https://picsum.photos/seed/picsum/200/300"
                    alt=""
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                    <h1 className="font-semibold text-lg">
                        {loginUser?.fName}
                    </h1>

                    <p className="text-sm text-gray-500">
                        2 hours ago
                    </p>
                </div>
            </div>
            <img
                src="https://picsum.photos/id/237/600/400"
                alt=""
                className="w-full h-72 object-cover"
            />
            <div className="p-4">

                <p className="text-gray-700 mb-4">
                    Enjoying Nature 🌿
                </p>
                <div className="flex justify-between text-lg">

                    <button className="hover:text-red-500 transition">
                        ❤️ Like
                    </button>

                    <button className="hover:text-blue-500 transition">
                        💬 Comment
                    </button>

                    <button className="hover:text-green-500 transition">
                        📤 Share
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ImageCart;