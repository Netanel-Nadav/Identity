import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Modal } from '../components/Modal'

import { userService } from '../services/user.service'
import { removeUser } from '../store/actions/user.action'

export const UserDetails = () => {
    const [user, setUser] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    
    const { id } = useParams()
    const navigate = useNavigate();
    const dispatch = useDispatch()


    useEffect(() => {
        loadUser()
    }, [])


    const loadUser = async () => {
        const user = await userService.getById(id)
        setUser(user)
    }

    const onRemoveUser = (ans) => {
        if (ans === 'No') {
            setIsModalOpen(!isModalOpen)
        } else {
            setIsModalOpen(!isModalOpen)
            dispatch(removeUser(id))
            onGoBack()
        }
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const onGoBack = () => {
        navigate('/')
    }



    if (!user) return 'Loading...'
    const { firstName, lastName, imgUrl, _id } = user
    return (
        <section className="user-details flex align-center justify-center column">
            <div className="img-container">
                <img src={imgUrl} alt={firstName} />
            </div>
            <div className="info">
                <h1>Welcome {firstName} {lastName}</h1>
                <p>Your ID nuber is {user.id}</p>
            </div>
            <div className="actions flex">
                <button onClick={onGoBack}><i className="fas fa-angle-left"></i></button>
                <Link to={`/add/${_id}`}><button><i className="fas fa-edit"></i></button></Link>
                <button onClick={toggleModal}><i className="fas fa-trash"></i></button>
                {isModalOpen && <Modal onRemoveUser={onRemoveUser} isModalOpen={isModalOpen} />}
            </div>
        </section>
    )
}
