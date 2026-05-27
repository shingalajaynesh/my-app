import { useState } from "react"
import { useNavigate } from "react-router";

function CreatePost() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        post_Photo_id: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async () => {

        const postData = {
            title: formData.title,
            description: formData.description,
            post_Photo_id: formData.post_Photo_id
        }
        const token = localStorage.getItem("accessToken");
        const response = await fetch(
            'http://localhost:3000/uploadpost',
            {
                method: 'POST',
                headers: {
                    Authorization: token ? `Bearer ${token}` : '',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            }
        )

        const data = await response.json()

        if (response.ok) {

            alert(data.message);


            navigate('/dashboard');

        } else {

            alert(data.message);
        }
        console.log(data)
    }

    return (

        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">

            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">

                <h1 className="text-2xl font-bold mb-6 text-center">
                    Create Post
                </h1>

                <div className="space-y-4">

                    <input
                        type="text"
                        name="title"
                        placeholder="Enter Title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <textarea
                        name="description"
                        placeholder="Write Caption"
                        value={formData.description}
                        onChange={handleChange}
                        rows="4"
                        className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        type="text"
                        name="post_Photo_id"
                        placeholder="Paste Image URL"
                        value={formData.post_Photo_id}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    {
                        formData.post_Photo_id && (
                            <img
                                src={formData.post_Photo_id}
                                alt=""
                                className="w-full h-60 object-cover rounded-xl"
                            />
                        )
                    }

                    <button
                        onClick={handleSubmit}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition"
                    >
                        Upload Post
                    </button>

                </div>

            </div>

        </div>
    )
}

export default CreatePost