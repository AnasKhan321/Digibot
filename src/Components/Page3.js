import React ,{useContext} from 'react'
import MyContext from '../ContextApi/Mycontext';

const Page3 = () => {
    const { setname34, setage4, name34, age4 } = useContext(MyContext)

    return (
        <div className="text-center font-bold text-2xl  my-8">Your name {name34} aged {age4} has been added to student system. You may now exit.</div>
    )
}

export default Page3