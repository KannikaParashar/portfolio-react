import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 '>
     <form method='POST' action="https://getform.io/f/11be579a-521b-4f08-963f-2e1dc209e18f" className='flex flex-col max-w-[600px] w-full '>
        <div className=' p-8 '>
    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 '>
    Contact
    </p>
    <p className='text-gray-300 py-4'>
    Submit the form below or shoot me an email -kannikaparashar4@gmail.com
    </p>
        </div>
        <input className='p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 ' type="email" placeholder='Email' name='email' />
        <textarea className='p-2' name="Message" rows="10" placeholder='Message' ></textarea>
        <button className='text-white border-2 px-6 py-3 my-8 mx-auto flex item-center hover:bg-pink-600 hover:border-pink-600 '>
    Let's Collaborate
        </button>
        </form> 
    </div>
  )
}

export default Contact
