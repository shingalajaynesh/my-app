import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Table from "./Table";
import ImageCart from "./ImageCart";

const Profile = () => {
    const navigate = useNavigate();
    const [profileData, setProfileData] = useState()



    const editData = (user) => {
        localStorage.setItem('editUser', JSON.stringify(user));
        navigate('/edit');
    }

    const columns = [
        { key: "fName", label: "First Name" },
        { key: "mName", label: "Middle Name" },
        { key: "lName", label: "Last Name" },
        { key: "dob", label: "DOB" },
        { key: "hobby", label: "Hobby" },
        { key: "gender", label: "Gender" },
        { key: "address", label: "Address" },
        {
            key: "role", label: "Role",
            render: ({ role }) => {
                return role == 'admin' ? <b>{role}</b> : role
            }
        },
        {
            key: 'Action', label: 'Action',
            render: (row) => {
                return (
                    <button
                        onClick={() => editData(row)}
                        className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:bg-blue-600 hover:scale-105"
                    >
                        Edit
                    </button>
                )
            }
        }

    ];

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("loginUser"));
        if (user) {
            setProfileData([user]);
        }
    }, [])
    return (

        !profileData ? <div>
            Loading....
        </div> :
            // <div className="min-h-screen bg-slate-100 p-6 w-full">

            //     <div className="mx-auto max-w-7xl rounded-2xl bg-white p-6 shadow-xl">

            //         {/* Header */}
            //         <div className="mb-6 flex items-center justify-between">

            //             <div>
            //                 <h1 className="text-3xl font-bold text-slate-800">
            //                     User Dashboard
            //                 </h1>

            //                 <p className="mt-1 text-sm text-slate-500">
            //                     Manage your users easily
            //                 </p>
            //             </div>

            //             <button
            //                 onClick={ResetData}
            //                 className="rounded-xl bg-red-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
            //             >
            //                 Logout
            //             </button>

            //         </div>

            //         {/* Table Container */}
            //         <div className="overflow-hidden rounded-2xl border border-slate-200">

            //             <div className="overflow-x-auto">

            //                 <table className="min-w-full">

            //                     {/* Head */}
            //                     <thead className="bg-slate-800 text-white">

            //                         <tr>

            //                             <th className="px-6 py-4 text-left text-sm font-semibold">
            //                                 First Name
            //                             </th>

            //                             <th className="px-6 py-4 text-left text-sm font-semibold">
            //                                 Middle Name
            //                             </th>

            //                             <th className="px-6 py-4 text-left text-sm font-semibold">
            //                                 Last Name
            //                             </th>

            //                             <th className="px-6 py-4 text-left text-sm font-semibold">
            //                                 DOB
            //                             </th>

            //                             <th className="px-6 py-4 text-left text-sm font-semibold">
            //                                 Hobby
            //                             </th>

            //                             <th className="px-6 py-4 text-left text-sm font-semibold">
            //                                 Gender
            //                             </th>

            //                             <th className="px-6 py-4 text-left text-sm font-semibold">
            //                                 Address
            //                             </th>

            //                             <th className="px-6 py-4 text-left text-sm font-semibold">
            //                                 Role
            //                             </th>

            //                             <th className="px-6 py-4 text-center text-sm font-semibold">
            //                                 Action
            //                             </th>

            //                         </tr>

            //                     </thead>

            //                     {/* Body */}
            //                     <tbody className="divide-y divide-slate-200 bg-white">

            //                         {profileData.map((v, index) => {

            //                             return (

            //                                 <tr
            //                                     key={index}
            //                                     className="transition hover:bg-slate-50"
            //                                 >

            //                                     <td className="px-6 py-4 text-sm text-slate-700">
            //                                         {v.fName}
            //                                     </td>

            //                                     <td className="px-6 py-4 text-sm text-slate-700">
            //                                         {v.mName}
            //                                     </td>

            //                                     <td className="px-6 py-4 text-sm text-slate-700">
            //                                         {v.lName}
            //                                     </td>

            //                                     <td className="px-6 py-4 text-sm text-slate-700">
            //                                         {v.dob}
            //                                     </td>

            //                                     <td className="px-6 py-4 text-sm text-slate-700">
            //                                         {v.hobby.join(', ')}
            //                                     </td>

            //                                     <td className="px-6 py-4 text-sm text-slate-700">
            //                                         {v.gender}
            //                                     </td>

            //                                     <td className="px-6 py-4 text-sm text-slate-700">
            //                                         {v.address}
            //                                     </td>

            //                                     <td className="px-6 py-4 text-sm text-slate-700">
            //                                         {v.role}
            //                                     </td>

            //                                     <td className="px-6 py-4 text-center">

            //                                         <button
            //                                             onClick={() => editData(v)}
            //                                             className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:bg-blue-600 hover:scale-105"
            //                                         >
            //                                             Edit
            //                                         </button>

            //                                     </td>

            //                                 </tr>

            //                             )

            //                         })}

            //                     </tbody>

            //                 </table>

            //             </div>

            //         </div>

            //     </div>

            // </div>

            <div className="w-full flex gap-25">
                <div className="w-1/12">
                    <Table headings={columns} data={profileData} />
                </div>
                <div className="flex-1">
                    <ImageCart />
                </div>

            </div>

    )
}

export default Profile;