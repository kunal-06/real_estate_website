import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes, Route} from 'react-router-dom';

import AdminPanel from './Admin/AdminPanel.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import ClientPanel from './Client/ClientPanel.jsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
     <Routes>
       <Route path='/*' element={<ClientPanel/>}/>
       <Route path='/Admin/*' element={<AdminPanel/>}/>
       <Route path='/Register' element={<Register/>}/>
       <Route path='/Login' element={<Login/>}/>
      </Routes>
  </BrowserRouter>
  <ToastContainer/>
  </StrictMode>
)
