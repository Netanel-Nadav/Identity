import React from 'react'
import { Link } from 'react-router-dom'


// Components
import { UserPreview } from './UserPreview'


export const UsersList = ({users}) => {
  return (
    <section className="users-list grid-card">
        {users.map(user => <UserPreview user={user} key={user.id} />)}
        <div className="add-user flex justify-center align-center column">
          <h1>Add new user</h1>
          <Link to={'/add'}><button className='add-user-btn'><i className="fas fa-plus"></i></button></Link>
        </div>
    </section>
  )
}
