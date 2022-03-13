import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearUserMsg, setMsg } from '../store/actions/user.action'

export const UserMsg = () => {
    const { userMsg } = useSelector(state => state.userModule)
    
    let intervalId = useRef()
    const dispatch = useDispatch()


    useEffect(() => {
        if (intervalId) clearTimeout(intervalId)
        intervalId = setTimeout(() => {
            dispatch(clearUserMsg())
        }, 3000)

        return () => {
            clearTimeout(intervalId)
        }
    }, [userMsg])

  

    if (!userMsg) return <React.Fragment></React.Fragment>
    return (
        <section className="user-msg" style={{backgroundColor: userMsg.type === 'error' ? '#cf000f' : '#2e77d0'}}>
            <span>{userMsg.txt}</span>
        </section>
    )
}
