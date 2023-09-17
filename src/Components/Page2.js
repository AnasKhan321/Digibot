import React, { useState, useRef, useContext } from 'react'
import bot from './1.jpeg';
import user from './2.jpg';
import MyContext from '../ContextApi/Mycontext';
import { useNavigate } from 'react-router-dom';

const Page2 = () => {
    const { setname34, setage4, name34, age4 } = useContext(MyContext)
    console.log(name34, age4)
    const first = useRef()
    const [got, setgot] = useState(false)
    const [date, setdate] = useState('')
    const [name, setname] = useState('')
    const [age, setage] = useState('')
    const [slot, setslot] = useState(false);
    const [name23, setname23] = useState(false);
    const [isset, setisset] = useState(false);
    const [isset2, setisset2] = useState(false);
    const [botchat, setbotchat] = useState('');
    const handleClick = () => {
        setgot(true)
    }
    const navigate = useNavigate();
    const handleClick2 = (e) => {
        setdate(e.target.innerHTML)
        setslot(true)


    }
    const handleChange = (e) => {
        if (e.target.id == 'name') {
            setname(e.target.value)
        }
        else {
            setage(e.target.value)
        }
    }

    const handleClick3 = () => {
        setisset(true)
        setname34(name)

    }
    const handleClick4 = () => {
        setisset2(true)
        setage4(age)
        setbotchat('Thank you. In 5 seconds, bot will exit');
        let countdown = 5;
        setInterval(() => {
            setbotchat(countdown);

            countdown -= 1
        }, 1000)
        setTimeout(() => {
            navigate('/page3')

        }, 6000)
    }


    return (
        <div className="container w-9/12  m-auto my-8">
            <div className="flex flex-col  ">
                <div className="bot flex  items-center my-2">
                    <img src={bot} alt="bot " className="w-16 mx-2" />
                    <p className="mx-2 ">Hello, Welcome to student info system! </p>
                </div>
                <button className="self-start mx-8 border  p-1 my-2 text-blue-700" onClick={handleClick}>Got it! </button>
            </div>

            {got &&
                <div className="flex  flex-row-reverse  ">
                    <img src={user} alt="bot " className="w-16 mx-2 self-end " />

                    <button className="self-start mx-8 border self-end bg-blue-700 text-white px-6 py-1    p-1 my-2 ">Got it! </button>

                </div>}


            {got && <div className="flex flex-col  ">
                <div className="bot flex  items-center my-2">
                    <img src={bot} alt="bot " className="w-16 mx-2" />
                    <p className="mx-2 ">Pick a Slot !  </p>
                </div>
                <div className="flex ">
                    <p className="px-4 py-4 text-blue-700 border rounded  cursor-pointer mx-1  " id="1" onClick={handleClick2}>21 Sept 2023</p>
                    <p className="px-4 py-4 text-blue-700 border rounded  cursor-pointer mx-1 " id="2" onClick={handleClick2} >22 Sept  2023</p>
                    <p className="px-4 py-4 text-blue-700 border rounded  cursor-pointer mx-1 " id="2" onClick={handleClick2} >23 Sept 2023</p>



                </div>
            </div>}

            {slot &&

                <div className="flex  flex-row-reverse  ">
                    <img src={user} alt="bot " className="w-16 mx-2 self-end " />

                    <button className="self-start mx-8 border self-end bg-blue-700 text-white px-6 py-1    p-1 my-2 ">{date} </button>

                </div>}


            {slot &&
                <div className="flex flex-col  ">
                    <div className="bot flex  items-center my-2">
                        <img src={bot} alt="bot " className="w-16 mx-2" />
                        <p className="mx-2 ">Enter Your Name : </p>
                    </div>
                    <div className="flex ">


                        <input type="text" className="border w-1/6 mx-6 border-blue-700 px-2 " id="name" value={name} onChange={handleChange} />
                        <button className="bg-blue-700 text-white px-2 text-sm " onClick={handleClick3}>Submit  </button>
                    </div>


                </div>}

            {isset &&
                <div className="flex  flex-row-reverse  ">
                    <img src={user} alt="bot " className="w-16 mx-2 self-end " />

                    <button className="self-start mx-8 border self-end bg-blue-700 text-white px-6 py-1    p-1 my-2 ">{name}  </button>

                </div>}

            {isset &&
                <div className="flex flex-col  ">
                    <div className="bot flex  items-center my-2">
                        <img src={bot} alt="bot " className="w-16 mx-2" />
                        <p className="mx-2 ">Enter Your age  : </p>
                    </div>
                    <div>

                        <div className="flex ">
                            <input type="text" className="border w-1/6 mx-6 border-blue-700 px-2 " id="age" value={age} onChange={handleChange} />
                        <button className="bg-blue-700 text-white px-2 text-sm " onClick={handleClick4}>Submit   </button>

                        </div>
                        <small className="ml-6">Age should be between 18-40</small>


                    </div>
                </div>}

            {isset2 &&

                <div className="flex  flex-row-reverse  ">
                    <img src={user} alt="bot " className="w-16 mx-2 self-end " />

                    <button className="self-start mx-8 border self-end bg-blue-700 text-white px-6 py-1    p-1 my-2 ">{age}  </button>

                </div>}

            {isset2 &&
                <div className="text-center font-bold text-2xl my-4"> {botchat}</div>
            }

        </div>
    )
}

export default Page2