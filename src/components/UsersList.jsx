import React from 'react'


// Components
import { UserPreview } from './UserPreview'


export const UsersList = ({users}) => {
  return (
    <section className="users-list grid-card">
        {users.map(user => <UserPreview user={user} key={user.id}/>)}
    </section>
  )
}
