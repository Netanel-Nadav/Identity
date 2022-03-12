import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {userService} from '../services/user.service'

export const AddUser = () => {

  const [userId, setUserId] = useState('')
  const [userFname, setUserFname] = useState('')
  const [userLname, setUserLname] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const userToAdd = {
      id: +userId,
      firstName: userFname,
      lastName: userLname
    }
    const newUser = await userService.add(userToAdd)
    navigate('/')
  }

  return (
    <section className="add-user">
      <form onSubmit={handleSubmit}>
        
        <label className='flex column'>
          <span>Enter your Id:</span>
          <input type="number" placeholder='Enter your ID' value={userId} onChange={(ev) => setUserId(ev.target.value)}/>
        </label>

        <label className='flex column'>
          <span>Enter your First name:</span>
          <input type="text" placeholder='Enter your First name' value={userFname} onChange={(ev) => setUserFname(ev.target.value)}/>
        </label>

        <label className='flex column'>
          <span>Enter your Last name:</span>
          <input type="text" placeholder='Enter your Last name' value={userLname} onChange={(ev) => setUserLname(ev.target.value)}/>
        </label>

      <button>Submit</button>
      </form>
    </section>
  )
}
