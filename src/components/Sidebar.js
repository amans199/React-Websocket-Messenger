import React from 'react';
import propTypes from 'prop-types'

const Sidebar = ({ users }) => (
  <aside className="col-span-1">
    <ul>
      <li className="w-100 bg-blue-700 py-3 text-white text-center rounded-md mb-4">All Users</li>
      {users.map(user => {
        return <li className="text-white" key={user.id} >{user.name}</li>
      })}
    </ul>
  </aside>
)

Sidebar.propTypes = {
  users: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default Sidebar