import { useNavigate } from "react-router";
import Profile from "../component/Profile";
import ProfileHeader from "../component/ProfileHeader";
import { useEffect, useState } from "react";
import {
    getAllUsers,
    getProfile
} from "../services";

function Dashboard() {

    const navigate = useNavigate();

    const [logUserFormData, setLogUserFormData] = useState([]);

    const [logUser, setLogUser] = useState(null);

    // Fetch All Users
    const fetchAllUsers = async () => {

        try {

            const data = await getAllUsers();

            setLogUserFormData(data.users);

        } catch (error) {

            console.log(error);

            localStorage.removeItem(
                "accessToken"
            );

            navigate('/login');
        }
    };

    // Fetch Logged In User
    const fetchProfile = async () => {

        try {

            const data = await getProfile();

            const user = data.user;

            // Store logged in user
            setLogUser(user);

            // Admin
            if (user.role === 'admin') {

                fetchAllUsers();
            }

            // Normal User
            else {

                setLogUserFormData([user]);
            }

        } catch (error) {

            console.log(error);

            localStorage.removeItem(
                "accessToken"
            );

            navigate('/login');
        }
    };

    useEffect(() => {

        const token = localStorage.getItem(
            "accessToken"
        );

        // No token
        if (!token) {

            navigate('/login');

            return;
        }

        fetchProfile();

    }, []);

    return (

        <div className="w-full flex gap-2 flex-wrap">

            <div className="w-full">

                <ProfileHeader
                    logUser={logUser}
                />

            </div>

            <div className="w-full">

                <Profile
                    logUserFormData={logUserFormData}
                />

            </div>

        </div>
    );
}

export default Dashboard;