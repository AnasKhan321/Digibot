import logo from './logo.svg';
import './App.css';
import Page1 from './Components/Page1.js';
import Page2 from './Components/Page2.js';
import Page3 from './Components/Page3.js';
import MyProvider from './ContextApi/Provider.js';

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <MyProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Page1 />}>

            </Route>

            <Route path="/page2" element={<Page2 key="page2" />}></Route>
            <Route path="/page3" element={<Page3 key="page3" />}></Route>

          </Routes>
        </BrowserRouter>
      </MyProvider>
    </>
  );
}

export default App;
