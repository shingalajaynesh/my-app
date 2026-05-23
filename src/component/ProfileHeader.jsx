import { useEffect, useState } from "react";
import userImg from '../assets/user.png';
import { useNavigate } from "react-router";

const ProfileHeader = (dash) => {

    const navigate = useNavigate();
    const [profileData, setProfileData] = useState()
    useEffect(() => {
        if (dash.logUser) {
            setProfileData(dash.logUser)
        }
    }, [dash.logUser])

    const eventChange = (e) => {
        const value = e.target.value;
        console.log(e.target.value);
        if (value == "logout") {
            localStorage.removeItem("accessToken");
            navigate('/login');
        }
        if (value == "edit") {
            navigate('/edit');

        }

    }

    return (
        !profileData ? (
            <div>
                Loading....
            </div>
        ) : (

            <div className="flex items-center justify-between bg-slate-900 px-8 py-4 shadow-lg">

                {/* Left Side */}
                <div>

                    <h1 className="text-2xl font-bold text-white">
                        Dashboard
                    </h1>

                    <p className="text-sm text-slate-300">
                        Welcome back, {profileData.fName}
                    </p>

                </div>

                {/* Right Side */}
                <div className="flex items-center gap-4">

                    {/* User Image */}
                    <img
                        src={userImg}
                        alt="user"
                        className="h-12 w-12 rounded-full border-2 border-white object-cover"
                    />

                    {/* Dropdown */}
                    <select
                        onChange={eventChange}
                        className="rounded-lg bg-white px-4 py-2 text-sm font-medium shadow outline-none"
                    >

                        <option>
                            Settings
                        </option>

                        <option value="edit">
                            Edit Profile
                        </option>

                        <option value="logout">
                            Logout
                        </option>

                    </select>

                </div>

            </div>

        )
    )
}

export default ProfileHeader;