import React from 'react'
import { Link } from 'react-router-dom'

export const UserPreview = ({ user }) => {
    const { id, firstName, lastName, imgUrl, _id } = user
    return (
        <section className='user-preview flex column align-center'>

            <div className="img-container">
                <img src={imgUrl} alt={firstName} />
            </div>
            <div className="info flex column justify-center align-center">
                <p>ID - {id}</p>
                <p>First Name - {firstName}</p>
                <p>Last Name - {lastName}</p>
            </div>
            <div className="actions">
               <Link to={`/${_id}`}><button>View Profile</button></Link>
            </div>
        </section>
    )
}