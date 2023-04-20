import React from 'react'

function HeaderOrphans({ setIsAdding }) {
    return (
        <header>
            <h1 className=' mt-5 rounded flex h-14 bg-gray-800 justify-center  text-white '>Orphanage Home Center</h1>
            <div style={{ marginTop: '30px', marginBottom: '10px' }}>
                <button onClick={() => setIsAdding(true)} className=' text-center round-button border-radius: 40px'>Add Orphans</button>
            </div>
        </header>
    )
}

export default HeaderOrphans;