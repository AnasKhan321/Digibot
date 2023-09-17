import React from 'react'
import Typed from 'react-typed';
import {useNavigate} from 'react-router-dom';

const Page1 = () => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate('/page2')
  }
  return (
    <>
    <div className=' flex flex-col  font-bold text-2xl  justify-center items-center h-screen'>
    <div className="flex justify-center items-center  text-2xl ">

   
    <Typed
        strings={[
            'Welcome to DigiBot  ',
            'Book Your Seat Now    ',
            ]}
        typeSpeed={40}
        backSpeed={50}
        loop
        className="flex"
    >
        <div className="d-block"></div>
    </Typed>
    </div>
    <button className="bg-blue-600 px-2 py-1 text-base cursor-pointer my-2 text-white border rounded" onClick={handleClick}>Enroll Now !</button>
    
    </div>
    </>
  )
}

export default Page1; 