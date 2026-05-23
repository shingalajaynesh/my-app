import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    useEffect(() => {
        let user = localStorage.getItem("accessToken");

        if (user) {
            navigate('/dashboard');
        }
    }, []);

    const loginEventChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const loginEventSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await fetch(
                'http://localhost:3000/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();

            if (response.ok) {

                alert(data.message);

                localStorage.setItem(
                    "accessToken",
                    data.accessToken
                );

                navigate('/dashboard');

            } else {

                alert(data.message);
            }

        } catch (error) {

            console.log(error);

            alert("Login Failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <form
                onSubmit={loginEventSubmit}
                className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md"
            >

                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Login Page
                </h2>

                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Email Id
                    </label>

                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={loginEventChange}
                        required
                        placeholder="Enter your email"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Password
                    </label>

                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={loginEventChange}
                        required
                        placeholder="Enter your password"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex gap-4 mb-4">

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
                    >
                        Submit
                    </button>

                    <button
                        type="reset"
                        className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 rounded-lg transition"
                    >
                        Reset
                    </button>

                </div>

                <p className="text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link
                        to='/registration'
                        className="text-blue-600 hover:underline font-medium"
                    >
                        Register
                    </Link>
                </p>

            </form>

        </div>
    );
};

export default Login;