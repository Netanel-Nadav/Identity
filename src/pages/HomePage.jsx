import React, { useEffect, useState } from 'react'
import { FilterBy } from '../components/FilterBy'
import { UsersList } from '../components/UsersList'
import { userService } from '../services/user.service'

export function HomePage() {

  const [users, setUsers] = useState(null)
  const [filterBy, setFilterBy] = useState(null)

  useEffect(() => {
    loadUsers(filterBy)
  }, [filterBy])
  

  const loadUsers = async (filterBy) => {
    const users = await userService.query(filterBy)
    setUsers(users)
  }

  
  if (!users) return 'Loading...'
  return (
      <section className='home'>
          <h1>Welcome, Here is a List of the registed Users</h1>
          <FilterBy setFilterBy={setFilterBy}/>
          <UsersList users={users} />
      </section>
  );
}
