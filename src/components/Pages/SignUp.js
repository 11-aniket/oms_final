import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate();
  const navigateSignIn = () => {
      navigate('/signin');
  };
  return (
    <>
       <div className="w-full h-full justify-center  bg-gray-600 p-10 md:p-0">
            {/* <img className='absolute w-full h-full object-cover mix-blend-overlay' src="../images/login.jpg" alt="" /> */}
            <div className='flex justify-center items-center h-full rounded-2xl p-20'>
                <form action="" className='max-w-[800px] w-full mx-auto bg-slate-50 p-8 rounded-2xl'>
                    <h2 className='text-4xl font-bold text-center py-4 border-x-8 rounded-2xl opacity-80'>Orphan Foundation Center</h2>
                    <hr/>
                    <div className="grid gap-6 mb-6 md:grid-cols-2 mt-4">
                      <div>
                          <label for="first_name" className="block mb-2 text-md font-semibold dark:text-black">First name</label>
                          <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
                      </div>
                      <div>
                          <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Last name</label>
                          <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
                      </div>
                      <div>
                          <label for="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Company</label>
                          <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required/>
                      </div>  
                      <div>
                          <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Phone number</label>
                          <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" required/> {/* pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" to collect phone pattern in the required format*/}
                      </div>
                      <div>
                          <label for="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Select Role</label>
                          <select name="" id="options" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose Role</option>
                            <option value="Admin">Admin</option>
                            <option value="Doctor">Doctor</option>
                            <option value="Parents">Parents</option>
                            <option value="Visitors">Visitors</option>
                          </select>
                      </div>
                      {/* <div>
                          <label for="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Unique visitors (per month)</label>
                          <input type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                      </div> */}
                  </div>
                  <div className="mb-6">
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email address</label>
                      <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
                  </div> 
                  <div className="mb-6">
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
                      <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
                  </div> 
                  <div className="mb-6">
                      <label for="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Confirm password</label>
                      <input type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
                  </div> 
                  <div className="flex items-start mb-6">
                      <div className="flex items-center h-5">
                      <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
                      </div>
                      <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-black">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                  </div>
                  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={navigateSignIn}>Submit</button>
                              </form>
            </div>
        </div>
    </>
  )
}

export default SignUp