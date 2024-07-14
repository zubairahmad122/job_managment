import { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Home, JobFrom, Jobs, SingleJob,} from './pages';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
const App = () => {

  
 
 
  return (
   <>
 <Router>
  <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/singlejob/:id" element={<SingleJob />} />
        <Route path="/jobs/apply/:id" element={<JobFrom />} />
      </Routes>


      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Router>
   </>
  


  )
}

export default App