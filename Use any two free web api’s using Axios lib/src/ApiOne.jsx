import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ApiTwo() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {

      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);

      console.error('Error fetching data:', err);

    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul style={{ listStyle: 'none' }}>
        {users.map(user => (
          <li key={user.id} style={{ border: '2px solid black', width: '300px', padding: '5px', margin: '5px', backgroundColor: 'chartreuse',display: 'flex', flexWrap: 'wrap' }}>
            <p><b>User:-</b> {user.name}</p>
            <p><b>E-mail:-</b> {user.email} </p>
            <p><b>Username:-</b> {user.username}</p>
            <p><b>Address:-</b>{user.address.street},{user.address.suite},{user.address.city},{user.address.zipcode}</p>
            <p><b>Phone No.:-</b> {user.phone}</p>
            <p><b>Website:-</b> {user.website}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiTwo