import React from 'react'

export const FilterBy = ({ setFilterBy }) => {

    const handleChange = (ev) => {
        const value = ev.target.value
        const field = ev.target.name
        setFilterBy(prevState => ({ ...prevState, [field]: value }))
    }

    return (
        <form>
            <input type="text" placeholder='Search By First name' name='firstName' onChange={handleChange} />
            <input type="text" placeholder='Search By Last name' name='lastName' onChange={handleChange} />
            <input type="number" placeholder='Search By ID' name='id' onChange={handleChange} />
        </form>
    )
}
