import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from "react-toastify";


import App from './App.jsx'
import Wrapper from './Components/Wrapper.jsx';
import "./index.css";
import { Toastify } from 'toastify';

createRoot(document.getElementById('root')).render(<Wrapper App={<App />}/>)

  //<ToastContainer position="top-center"/> */}

