import React, { useContext, useEffect, useState } from 'react'
import MyContext from './Mycontext';


const MyProvider = ({ children }) => {


  const [name34, setname34] = useState(''); 
  const [age4, setage4] = useState(0); 
  return (
    <MyContext.Provider value={{setname34, setage4,name34,age4}}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;