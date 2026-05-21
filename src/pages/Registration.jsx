import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

const Registration = (props) => {
    const loginNavigate = useNavigate();
    const [formData, setFormData] = useState({
        fName: '',
        mName: '',
        lName: '',
        email: '',
        password: '',
        rePassword: '',
        dob: '',
        hobby: [],
        gender: '',
        address: '',
        role: '',
    });

    useEffect(() => {
        if (props.userData) {
            setFormData(props.userData)
        }
    }, [props.userData])
    const eventChange = (e) => {
        const { name, value, checked } = e.target;
        if (name === 'hobby') {
            let newHobby = checked ? [...formData.hobby, value] : formData.hobby.filter((h) => h !== value);
            setFormData({ ...formData, hobby: newHobby })

        }
        else {
            setFormData({ ...formData, [name]: value })
        }
    }

    // const eventSubmit = async (e) => {
    //     e.preventDefault();

    //     const users = JSON.parse(localStorage.getItem("users") || "[]");

    //     if (props.userData) {
    //         const index = users.indexOf(f => f.email === formData.email && f.password === formData.password)
    //         let updatedUserList = [...users]
    //         updatedUserList[index] = formData
    //         localStorage.setItem("users", JSON.stringify(updatedUserList))
    //         console.log(users);
    //         localStorage.removeItem("editUser");
    //         localStorage.removeItem("loginUser");

    //         loginNavigate('/login')
    //     }
    //     else
    //         if (users.find((f) => f.email === formData.email)) {
    //             alert("User Already Exist!.");
    //         }
    //         else {
    //             const regUser = await registerUser(formData)
    //             console.log(regUser)
    //             console.log(formData);
    //             localStorage.setItem('users', JSON.stringify([...users, formData]));
    //             loginNavigate(
    //                 { pathname: '/login' }
    //             );
    //         }
    // }

    const eventSubmit = async (e) => {

        e.preventDefault();

        try {

            // Edit User
            if (props.userData) {

                const response = await fetch(
                    'http://localhost:3000/edituser',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(formData)
                    }
                );

                const data = await response.json();

                alert(data.message);

                loginNavigate('/login');

            }

            // Register User
            else {

                const response = await fetch(
                    'http://localhost:3000/registration',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(formData)
                    }
                );

                const data = await response.json();

                alert(data.message);

                loginNavigate('/login');
            }

        } catch (error) {

            console.log(error);

            alert("Something went wrong");
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 p-5">
            <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8">
                <form onSubmit={eventSubmit}>
                    <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
                        {props?.userData ? 'Edit Profile' : 'Registration Form'}
                    </h2>

                    <table className="w-full border-separate border-spacing-y-4">
                        <tbody>

                            <tr>
                                <td className="font-semibold text-slate-700">
                                    <label htmlFor="fname">First Name:</label>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        id="fname"
                                        name="fName"
                                        value={formData.fName}
                                        onChange={eventChange}
                                        required
                                        className="w-full border border-slate-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="font-semibold text-slate-700">
                                    <label htmlFor="mname">Middle Name:</label>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        id="mname"
                                        name="mName"
                                        value={formData.mName}
                                        onChange={eventChange}
                                        required
                                        className="w-full border border-slate-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="font-semibold text-slate-700">
                                    <label htmlFor="lname">Last Name:</label>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        id="lname"
                                        name="lName"
                                        value={formData.lName}
                                        onChange={eventChange}
                                        required
                                        className="w-full border border-slate-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="font-semibold text-slate-700">
                                    <label htmlFor="email">Email:</label>
                                </td>
                                <td>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={eventChange}
                                        required
                                        className="w-full border border-slate-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="font-semibold text-slate-700">
                                    <label htmlFor="password">Password:</label>
                                </td>
                                <td>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={eventChange}
                                        required
                                        className="w-full border border-slate-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="font-semibold text-slate-700">
                                    <label htmlFor="repassword">Re Password:</label>
                                </td>
                                <td>
                                    <input
                                        type="password"
                                        id="repassword"
                                        name="rePassword"
                                        value={formData.rePassword}
                                        onChange={eventChange}
                                        required
                                        className="w-full border border-slate-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="font-semibold text-slate-700">
                                    <label htmlFor="dob">DOB:</label>
                                </td>
                                <td>
                                    <input
                                        type="date"
                                        id="dob"
                                        name="dob"
                                        value={formData.dob}
                                        onChange={eventChange}
                                        required
                                        className="w-full border border-slate-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="font-semibold text-slate-700">
                                    Gender:
                                </td>
                                <td className="flex gap-5">
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="male"
                                            checked={formData.gender === "male"}
                                            onChange={eventChange}
                                        />
                                        Male
                                    </label>

                                    <label className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="female"
                                            checked={formData.gender === "female"}
                                            onChange={eventChange}
                                        />
                                        Female
                                    </label>

                                    <label className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="other"
                                            checked={formData.gender === "other"}
                                            onChange={eventChange}
                                        />
                                        Other
                                    </label>
                                </td>
                            </tr>

                            <tr>
                                <td className="font-semibold text-slate-700">
                                    Hobby:
                                </td>
                                <td className="flex gap-5 flex-wrap">
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            name="hobby"
                                            value="Dancing"
                                            checked={formData.hobby.includes("Dancing")}
                                            onChange={eventChange}
                                        />
                                        Dancing
                                    </label>

                                    <label className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            name="hobby"
                                            value="Reading"
                                            checked={formData.hobby.includes("Reading")}
                                            onChange={eventChange}
                                        />
                                        Reading
                                    </label>

                                    <label className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            name="hobby"
                                            value="Watching"
                                            checked={formData.hobby.includes("Watching")}
                                            onChange={eventChange}
                                        />
                                        Watching
                                    </label>
                                </td>
                            </tr>

                            <tr>
                                <td className="font-semibold text-slate-700">
                                    <label htmlFor="address">Address:</label>
                                </td>
                                <td>
                                    <textarea
                                        name="address"
                                        id="address"
                                        value={formData.address}
                                        onChange={eventChange}
                                        required
                                        className="w-full border border-slate-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                                    ></textarea>
                                </td>
                            </tr>

                            <tr>
                                <td className="font-semibold text-slate-700">
                                    <label htmlFor="role">Role:</label>
                                </td>
                                <td>
                                    <select
                                        name="role"
                                        id="role"
                                        onChange={eventChange}
                                        value={formData.role}
                                        className="w-full border border-slate-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                                    >
                                        <option value="admin">Admin</option>
                                        <option value="user">User</option>
                                    </select>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <button
                                        type="submit"
                                        className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg"
                                    >
                                        {props?.userData ? 'Edit' : 'Add User'}
                                    </button>
                                </td>

                                <td>
                                    <button
                                        type="reset"
                                        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
                                    >
                                        Reset
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan="2" className="text-center pt-4">
                                    <Link
                                        to="/login"
                                        className="text-blue-600 hover:underline"
                                    >
                                        User already Exist?
                                    </Link>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    )
}
export default Registration;
