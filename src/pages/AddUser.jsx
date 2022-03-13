import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { userService } from '../services/user.service'
import { addUser, updateUser } from '../store/actions/user.action'

export const AddUser = () => {

  const [user, setUser] = useState(null)
  const [userId, setUserId] = useState('')
  const [userFname, setUserFname] = useState('')
  const [userLname, setUserLname] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()



  useEffect(() => {
    getUser()
  }, [])


  const getUser = async () => {
    if (id) {
      const userToEdit = await userService.getById(id)
      setUser(userToEdit)
      setUserFname(userToEdit.firstName)
      setUserLname(userToEdit.lastName)
      setUserId(userToEdit.id)
    }
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    
    const userToAdd = {
      id: +userId,
      firstName: userFname,
      lastName: userLname
    }

    if (user) {
      const userToUpdate = user;
      userToUpdate.firstName = userFname;
      userToUpdate.lastName =  userLname;
      dispatch(updateUser(userToUpdate))

    } else dispatch(addUser(userToAdd))
    navigate('/')
  }

  return (
    <section className="add-user">
      <form onSubmit={handleSubmit} className="flex align-center justify-center column">

         {id && <label className='flex column'>
          <span>Enter your Id:</span>
          <input type="number" disabled placeholder='Enter your ID' value={userId} onChange={(ev) => setUserId(ev.target.value)} />
        </label>}
        
         {!id && <label className='flex column'>
          <span>Enter your Id:</span>
          <input type="number" placeholder='Enter your ID' value={userId} onChange={(ev) => setUserId(ev.target.value)} />
        </label>}

        <label className='flex column'>
          <span>Enter your First name:</span>
          <input type="text" placeholder='Enter your First name' value={userFname} onChange={(ev) => setUserFname(ev.target.value)} />
        </label>

        <label className='flex column'>
          <span>Enter your Last name:</span>
          <input type="text" placeholder='Enter your Last name' value={userLname} onChange={(ev) => setUserLname(ev.target.value)} />
        </label>

        <button>Submit</button>
      </form>
    </section>
  )
}
