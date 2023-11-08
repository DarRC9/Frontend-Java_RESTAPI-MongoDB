import UserDataComponent from './UserData';
import { useEffect, useState } from 'react';
import  axiosInstance  from './../api/axiosConfig'
import './UserData.css';

const UsersData = () => {
    const [usersData, setUsersData] = useState([])

    const getUsersData = async () => {
        try {
            const response = await axiosInstance.get('/users')  
            setUsersData(response.data)
        } catch (error) {
            console.error("GetUserData Error: ", error)
        }
    }


    useEffect(() => {
        getUsersData()
    }, [])

    return (
        <div>
            <table className='userdata_table'>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Country</th>
                        <th>Id</th>
                    </tr>
                </thead>
                <tbody>
                    {usersData.map((userData) =><UserDataComponent key={userData._id} userData={userData} updateUserData={getUsersData}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default UsersData;