import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("loginUser"));
        if (user) {
            navigate('/dashboard');
        }
    }, [])

    const loginEventChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    // const loginEventSubmit = (e) => {
    //     e.preventDefault();
    //     const users = JSON.parse(localStorage.getItem("users") || "[]");
    //     const loginUser = users.find((f) => (f.email === formData.email && f.password === formData.password))
    //     if (loginUser) {
    //         alert("User Successfully Login!.");
    //         localStorage.setItem("loginUser", JSON.stringify(loginUser));
    //         navigate('/dashboard');
    //     }
    //     else {
    //         alert("User not Found !.");
    //     }

    // }

    // const loginEventSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await fetch(
    //             'http://localhost:3000/login',
    //             {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 },
    //                 body: JSON.stringify(formData)
    //             }
    //         );
    //         const data = await response.json();
    //         if (response.status === 200) {
    //             alert(data.message);
    //             localStorage.setItem(
    //                 "loginUser",
    //                 JSON.stringify(data.user)
    //             );
    //             navigate('/dashboard');
    //         } else {
    //             alert(data.message);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         alert("Login Failed");
    //     }


    // };

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

            if (response.status === 200) {

                alert(data.message);

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
        <div className="login">
            <form onSubmit={loginEventSubmit}>
                <h2 align='center'>Login Page</h2>
                <table align="Center">
                    <tr><td>
                        <label htmlFor="email">Email Id:  </label></td>
                        <td><input type="text" id="email" name="email" value={formData.email} onChange={loginEventChange} required /></td></tr>
                    <tr><td>
                        <label htmlFor="password">Password:    </label></td>
                        <td><input type="password" id="password" name="password" value={formData.password} onChange={loginEventChange} required /></td></tr>
                    <tr>
                        <td><button type="submit">Submit</button></td>
                        <td><button type="reset">Reset</button></td>
                    </tr>
                    <tr><td><Link to='/registration'>Have not Registers</Link></td></tr>
                </table>
            </form>
        </div>
    )
}
export default Login;
