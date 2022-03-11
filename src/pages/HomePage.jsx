import React, { useEffect, useState } from 'react'
import { UsersList } from '../components/UsersList'
import { userService } from '../services/user.service'

export function HomePage() {

  const [users, setUsers] = useState(null)


  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {
    const users = await userService.query()
    setUsers(users)
  }

  if (!users) return 'Loading...'
  return (
      <section className='home'>
          <h1>Welcome, Here is a List of the registed Users</h1>
          <UsersList users={users} />
      </section>
  );
}
