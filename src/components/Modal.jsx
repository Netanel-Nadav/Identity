import React from 'react'

export const Modal = ({onRemoveUser, isModalOpen}) => {
    return (
        <section className="modal">
            <div className={`${isModalOpen ? 'open' : '' } main-screen`}></div>
            <div className="container flex column justify-center">
                <h1>Are you Sure?</h1>
                <div className="btn-container flex justify-center">
                    <button className='btn-no' onClick={() => onRemoveUser('No')}>No</button>
                    <button className='btn-yes' onClick={() => onRemoveUser('Yes')}>Yes</button>
                </div>
            </div>
        </section>
    )
}
