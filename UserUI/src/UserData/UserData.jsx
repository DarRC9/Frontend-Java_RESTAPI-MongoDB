/* eslint-disable react/prop-types */
import { useState } from "react";
import  axiosInstance  from './../api/axiosConfig'

const UserDataComponent = ({ userData, updateUserData } ) => {

  const [isEditing, setIsEditing] = useState(false);
  const [_id, set_id] = useState(userData._id); // eslint-disable-line no-unused-vars
  const [username, setUsername] = useState(userData.username === null ? '' : userData.username);
  const [name, setName] = useState(userData.name === null ? '' : userData.name);
  const [surname, setSurname] = useState(userData.surname === null ? '' : userData.surname);
  const [country, setCountry] = useState(userData.country === null ? '' : userData.country);
  const [id, setId] = useState(userData.id === null ? '' : userData.id);

  const updatedUserData = {
    username: username,
    name: name,
    surname: surname,
    country: country,
    id: id
  }

  const saveChanges = async () => {
      try {
        const response = await axiosInstance.patch(`/users/${userData._id}`, updatedUserData);
        console.log('User updated:', response.data);
        updateUserData();
      } catch (error) {
        console.error('UpdateUser Error:', error);
      }
      setIsEditing(false);
    };

  const deleteUser = async () => {
    try {
      const response = await axiosInstance.delete(`/users/delete/${userData._id}`);
      console.log(response.data)
      updateUserData();
    } catch (error) {
      console.error('DeleteUser Error:', error);
    }
  }

  const discardChanges = () => {
    setIsEditing(false);
    setUsername(userData.username);
    setName(userData.name);
    setSurname(userData.surname);
    setCountry(userData.country);
    setId(userData.id);
  }

    return (
      <tr>
        <td>{isEditing 
          ? <input type="text" className="input" value={username} onChange={(e) => setUsername(e.target.value)} />
          : userData.username}</td>
        <td>{isEditing 
          ? <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)}/>
          : userData.name}</td>
        <td>{isEditing 
          ? <input type="text" className="input" value={surname} onChange={(e) => setSurname(e.target.value)}/>
          : userData.surname}</td>
        <td>{isEditing 
          ? <input type="text" className="input" value={country} onChange={(e) => setCountry(e.target.value)}/>
          : userData.country}</td>
        <td>{isEditing 
          ? <input type="text" className="input" value={id} onChange={(e) => setId(e.target.value)}/>
          : userData.id}</td>
        <td>{isEditing 
          ? <>
              <button className='saveButton' onClick={saveChanges}>Save</button>
              <button className='cancelButton' onClick={discardChanges}>Cancel</button>
            </>          
          : <>
            <button className="editButton" onClick={() => setIsEditing(true)}>Edit</button>
            <button className='deleteButton' onClick={deleteUser}>Delete</button>
          </>
          }
        </td>
      </tr>
    ); 
  };
  
  export default UserDataComponent;
  