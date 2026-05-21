import { useNavigate } from "react-router";
import Profile from "../component/Profile"
import ProfileHeader from "../component/ProfileHeader"
import { useEffect, useState } from "react";
import { getAllUsers } from "../services";

function Dashboard() {
    const navigate = useNavigate();
    const [logUserFormData, setLogUserFormData] = useState();
    const [logUser, setLogUser] = useState();
    const fetchAllUsers = async () => {
        const { userList } = await getAllUsers()
        console.log(userList)

    }
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("loginUser"));
        if (user) {
            if (user.role === 'admin') {
                let allUsers = JSON.parse(localStorage.getItem("users"));
                setLogUserFormData(allUsers);
                setLogUser(user);
            }
            else {
                setLogUserFormData([user]);
                setLogUser(user);
            }

        }
        else {
            navigate('/login');
        }
        (async () => {
            await fetchAllUsers()
        })()

    }, [])

    return (
        <div className="w-full flex gap-2 flex-wrap">
            <div className="w-full">
                <ProfileHeader logUser={logUser} />
            </div>

            <div className="w-full">
                <Profile logUserFormData={logUserFormData} />
            </div>
        </div>
    )
}

export default Dashboard
