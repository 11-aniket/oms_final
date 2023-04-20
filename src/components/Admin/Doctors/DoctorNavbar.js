import React from 'react'

const DoctorNavbar = ({filterItem,doctorlist}) => {
    return (
        <>
        <nav className='sm:mt-10 md:mt-0 absolute left-8 top-20 border-solid border-2 border-black rounded-2xl bg-slate-500 w-30 '>
            <div className=" ml-10 mr-10 space-x-96 p-1 text-xs justify-center items-center">
                {doctorlist.map((curElem)=>{
                    return (
                        <button 
                            className='p-0 m-0 hover:underline bg-slate-500 border-slate-500 hover:bg-slate-500 hover:border-slate-500' 
                            onClick={() => filterItem(curElem)}>
                            {curElem}
                        </button>
                    );
                    })}
                </div>
            </nav>
        </>
    );
}

export default DoctorNavbar