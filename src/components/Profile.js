import React, { useState } from 'react';
import NowLoading from './NowLoading';
import { getUsers, deleteUser, infoUser } from '../fetchs/userFetch';

const Profile = () => {
  const [users, setUsers] = useState([]);

  const getUserHandler = () => {
    getUsers((result) => setUsers(result))
  }

  // props: sebuah parameter yang diberikan dari parent component
  return (
    <div className='col-6'>
      <table className='table table-hover table-bordered'>
        <thead className='bg-primary text-white'>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Hobby</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* 
          Jika array user atau === 0,
          Tampilkan NowLoading
          Jika array user lebih dari 0
          Tampilkan users.map
          
          let flag = true;
          if (flag){
          console.log(1)
          }else{
          console.log(0)
          }

          //ternary
          flag ? console.log(1) : console.log(0)

          */}
          {
            users.length !== 0 ?
              users.map((user) => {
                const { id, name, hobby } = user;
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{hobby}</td>
                    <td>
                      <button
                        onClick={() => deleteUser(id)}
                        className='btn btn-sm btn-danger'>Delete</button>
                      <button
                        onClick={() => infoUser(id)}
                        className='btn btn-sm btn-info'>
                        Info
                      </button>
                    </td>
                  </tr>
                )
              }) :
              < NowLoading />
          }

        </tbody>
      </table>
      <div>
        <button
          onClick={() => getUserHandler()}
          className="btn btn-sm btn-info"
        >Get Users</button>
      </div>
    </div >
  )
}

export default Profile;