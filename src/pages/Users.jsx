import React from 'react';
import "../s-Users.css"

const users = [
  {
    id: 1,
    img_profile: "./profile1.jpeg",
    user_name: "User Name",
    email: "test@gmail.com",
    join_date: "20/10/2020",
    block: false,
  },
  {
    id: 2,
    img_profile: "./profile1.jpeg",
    user_name: "User Name",
    email: "test@gmail.com",
    join_date: "20/10/2020",
    block: true,
  },
  {
    id: 3,
    img_profile: "./profile1.jpeg",
    user_name: "User Name",
    email: "test@gmail.com",
    join_date: "20/10/2020",
    block: false,
  },
  {
    id: 4,
    img_profile: "./profile1.jpeg",
    user_name: "the blocked user",
    email: "test@gmail.com",
    join_date: "20/10/2020",
    block: true,
  },
  {
    id: 5,
    img_profile: "./profile1.jpeg",
    user_name: "User Name",
    email: "test@gmail.com",
    join_date: "20/10/2020",
    block: false,
  },
  {
    id: 6,
    img_profile: "./profile1.jpeg",
    user_name: "the blocked user",
    email: "test@gmail.com",
    join_date: "20/10/2020",
    block: true,
  },
];

const Users = () => {
  return (
    <div className="body">
      <div className="users">
        <div className="container">
          <h1 className='users-h1'>Users</h1>
          <div className="user-cont">
            {users.map(user => (
              <div className="card" key={user.id}>
                <div className="img-b">
                  <div className="img">
                    <hr style={{border: user.block ? '2px solid red' : 'none'}} />
                    <img 
                    src={user.img_profile} 
                    width={"100px"} alt="Profile" 
                    style={{ border: user.block ? '5px solid red' : 'none' }}
                  />
                  </div>
                </div>
                  <h2>{user.user_name}</h2>
                  <h3>Joined {user.join_date}</h3>
                <div className='data'>
                  <div className="btn">
                    <button className='prof-btn'>Profile</button>
                    <button className='remove-btn'>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;