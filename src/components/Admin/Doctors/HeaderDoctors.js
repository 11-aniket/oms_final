import React from 'react'

function HeaderDoctors({ setIsAdding }) {
    return (
        <header>
            <h1 className='flex  h-14  flex-wrap md:justify-between justify-between  fixed  top-0 z-10  border-gray-200 px-2  text-xl font-semibold  whitespace-nowrap dark:text-white cursor-pointer bg-gray-900 text-white w-full'>Orphanage Home Center</h1>
            <div style={{ marginTop: '70px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Add Doctors</button>
            </div>
        </header>
    )
}

export default HeaderDoctors;