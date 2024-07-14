import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaShield } from 'react-icons/fa6';
import axios from 'axios';
import { data } from 'autoprefixer';
import { Link } from 'react-router-dom';
import { FaArrowCircleDown } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Index = ({url}) => {
  const [showMore, setShowMore] = useState({});

  const [jobs,setJobs] = useState();




  const getJobs = async () =>{
    try {
      const getJobs = await axios.get(`${url}/adminpost/getalljobposts`);
      setJobs(getJobs.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  const deleteJobPost = async (id) =>{
    try {
      const deleteJob = await axios.post(`${url}/adminpost/removejobpost/${id}`);
      toast.success("Job Post Deleted Succesffuly")
      await getJobs();
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() =>{
    (async () => {
      await getJobs()
    })();
  },[])



  

  return (
    <>

      <section id='jobs' className="px-[20px] bg-white mt-20 w-full max-w-screen-2xl min-h-screen sm:px-[30px] lg:px-[40px] xll:px-[80px]">
        <h2 className=' text-5xl mdd:text-6xl text-center font-bold text-gray-700'>Open Positions</h2>
        <p className='text-center text-gray-600 mt-2 mb-10'>Apply Now!</p>
        <div
          className="main grid grid-cols-1 sm:grid-cols-2 mdd:grid-cols-3 place-items-center place-content-center gap-10">
          {jobs?.map((item, index) => (
            <div key={item._id} >
            <div
            
            
              
            
              className="border-2 h-auto sm:h-[330px] shadow-md hover:shadow-xl w-full px-6 py-10 rounded-lg"
            >
              <h5 className='text-2xl font-semibold text-blue-700 underline cursor-pointer'>{item.position_title}</h5>
              <p className='ml-1 text-[#2e2e2e] my-2'>
                <span className='font-medium text-black'>Location:</span>{" "}
                Ikonic, Plot # 176&#x2C; Korang Road&#x2C; near Rahat Bakers&#x2C; I-10/3&#x2C; Islamabad
              </p>

              <Link to={`/jobs/singlejob/${item._id}`} className='px-[25px] flex items-center cursor-pointer justify-center text-white py-[13px] mt-6 rounded-sm hover:bg-blue-600 bg-blue-500'>See Details</Link>

              <button onClick={() => deleteJobPost(item._id)} className='px-[25px] flex cursor-pointer items-center justify-center text-white py-[13px] mt-2 rounded-sm w-full hover:bg-red-600 bg-red-500'>Delete</button>
          
            </div>
              <Link to={`/bypost/${item._id}`} className='px-[25px] flex cursor-pointer items-center justify-center text-white py-[13px] mt-2 rounded-sm w-full hover:bg-yellow-600 bg-yellow-500'>View APPlications</Link>
            </div>
            
          ))}
        </div>
      </section>
    </>
  );
};

export default Index;
