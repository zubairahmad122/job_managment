import { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Home, Applications, ListAJobs, SingleJob, Accept, Reject, ApplicationByPost } from './pages';
import { Footer, Navbar } from './components/index';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './components/Sidebar';
const App = () => {


  const url = "https://jobs-managment-backend.onrender.com/api/v1"



  

  return (
   <div className='w-full'>
      <Router>
      <Navbar />

     <div className="flex">
     <Sidebar />
      <Routes>
        <Route path="/" element={<Home url={url} />} />
        <Route path="/listjobs" element={<ListAJobs  url={url}/>} />
        <Route path="/applications" element={<Applications  url={url}/>} />
        <Route path="/jobs/singlejob/:id" element={<SingleJob url={url} />} />
        <Route path="/accept" element={<Accept url={url} />} />
        <Route path="/reject" element={<Reject url={url} />} />
        <Route path="/bypost/:id" element={<ApplicationByPost url={url} />} />
      </Routes>
     </div>
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
      <Footer />
    </Router>
   </div>
  


  )
}

export default App