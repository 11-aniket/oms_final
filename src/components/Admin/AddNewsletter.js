import Swal from 'sweetalert2'
import React,{useState, useRef, useEffect} from 'react'
import News_letter from './Newsletter';

function AddNewsletter ({News, setNews, setIsAdding})  {

  const[month, setmonth]= useState('');
  const[event, setevent]= useState('');

  const textInput=useRef(null);
  useEffect(()=>{
    textInput.current.focus();
  }, [])

  const handleAdd=e=>{
    e.preventDefault();
    if(  !month ||  !event){
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'All fields are required',
        showConfirmButton: true
      });
    }
    const id = News.length + 1;
    const newNew = {
     
      month,
      event
    }
    News.push(newNew);
    setNews(News);
    setIsAdding(false);

    Swal.fire({
      icon: 'Success',
      title: 'Added',
      text: `${month}'s data has been Added`,
      showConfirmButton: false,
      timer: 1500
    });
  }
  return (
    <div classname=''>
      <form className='small-container' onSubmit={handleAdd}>
        <h1 className='flex  h-14  flex-wrap md:justify-between justify-between  fixed  top-0 z-10  border-gray-200 px-2  text-xl font-semibold  whitespace-nowrap dark:text-white cursor-pointer bg-gray-900 text-white w-full'>Add Newsletter</h1>
        <table className='mt-20' htmlFor="month">Month</table>
        <input
        id="month"
        type="text"
        ref={textInput}
        name="month"
        value={month}
        onChange={e=>setmonth(e.target.value)}/>

        <table htmlFor="event">Event</table>
        <input
        id="event"
        type="text"
        name="event"
        value={event}
        onChange={e=>setevent(e.target.value)}/>

        <div style={{marginTop: '30px'}}>
          <input type="submit" value="Add"/>
          <input
          style={{marginLeft:'12px'}}
          classname="button"
          type="button" 
          value="Cancel"
          onClick={()=>setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  )
}
export default AddNewsletter;