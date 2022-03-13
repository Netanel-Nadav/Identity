import React from 'react'

export const FilterBy = ({ setFilterBy }) => {

    const handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
        setFilterBy(prevState => ({ ...prevState, [field]: value }))
    }

    return (
        <section className="filter-by flex justify-center">
            <form className='flex'>
                <input type="text" placeholder='Search By First name' name='firstName' onChange={handleChange} />
                <input type="text" placeholder='Search By Last name' name='lastName' onChange={handleChange} />
                <input type="number" placeholder='Search By ID' name='id' onChange={handleChange} />
            </form>
        </section>
    )
}
