import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FilterBy } from '../components/FilterBy'
import { UsersList } from '../components/UsersList'
import { loadUsers } from '../store/actions/user.action'

export const HomePage = (props) => {

  const { users } = useSelector(state => state.userModule)
  const [filterBy, setFilterBy] = useState({
    firstName: '',
    lastName: '',
    id: 0
  })
  const dispatch = useDispatch()


  useEffect(() => {
    if (!users) dispatch(loadUsers())
  }, [])


  useEffect(() => {
    dispatch(loadUsers(filterBy))
  }, [filterBy])


  if (!users) return 'Loading...'
  return (
    <section className='home'>
      <h1>Welcome, Here is a List of the registed Users</h1>
      <FilterBy setFilterBy={setFilterBy} />
      <UsersList users={users} />
    </section>
  );
}
