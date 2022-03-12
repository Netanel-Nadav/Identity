import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Modal } from '../components/Modal'

import { userService } from '../services/user.service'

export const UserDetails = () => {
    const [user, setUser] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate();


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
            removeUser(id)
            navigate('/')
        }
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const removeUser = async (id) => {
        await userService.remove(id)
    }

    const onGoBack = () => {
        navigate('/')
    }



    if (!user) return 'Loading...'
    const { firstName, lastName, imgUrl } = user
    return (
        <section className="user-details flex align-center justify-center column">
            <div className="info">
                <h1>Welcome {firstName} {lastName}</h1>
                <p>Your ID nuber is {user.id}</p>
            </div>
            <div className="actions flex">
                <button onClick={onGoBack}>Back</button>
                <button>Edit</button>
                <button onClick={toggleModal}>Delete</button>
                {isModalOpen && <Modal onRemoveUser={onRemoveUser} isModalOpen={isModalOpen} />}
            </div>
        </section>
    )
}
