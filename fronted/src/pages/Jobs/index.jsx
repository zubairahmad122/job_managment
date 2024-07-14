import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaShield } from 'react-icons/fa6';
import axios from 'axios';
import { data } from 'autoprefixer';
import { Link } from 'react-router-dom';
import { FaArrowCircleDown } from 'react-icons/fa';

const Index = () => {
  const [showMore, setShowMore] = useState({});

  const [jobs,setJobs] = useState();

  const url = process.env.URI;



  const getJobs = async () =>{
    try {
      const getJobs = await axios.get(`${url}/api/v1/adminpost/getalljobposts`);
      setJobs(getJobs.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() =>{
    (async () => {
      await getJobs()
    })();
  },[])

  const CardsVariants = {
    closed: {
      y: "200px",
      opacity:0,
    },
    opened: {
      y: 0,
      opacity:1,
      transition: {
        staggerChildren: 0.4,
        duration:0.5

      },
    },
  };

  const toggleShowMore = (index) => {
    setShowMore(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <>

<motion.div initial={{scale:0.3}} animate={{scale:1}} transition={{duration:0.4}}  className='min-h-[80vh] relative bg-img'>
            <div className='w-full px-5 min-h-[95vh] relative z-10 flex flex-col gap-2 items-center text-center justify-center'>
           <p className='text-white font-normal tracking-wider text-[15px] mdd:text-lg'>Find the career of your dreams</p>
              <h1 className='text-lg ssm:text-2xl sm:text-3xl mdd:text-5xl tracking-wide max-w-[900px] mb-3 font-normal text-white'>We&#39;re more than just a workplace. We&#39;re a family.</h1>
            <p className='text-white max-w-[700px] text-[14px] xsm:text-[15px] mdd:text-[16px] leading-normal mdd:leading-[24px] tracking-wider'>We know that finding a meaningful and rewarding job can be a long journey. Our goal is to make that process as easy as possible for you, and to create a work environment that&#39;s satisfying - one where you&#39;ll look forward to coming to every day. Start your journey with us by browsing available jobs.</p>
           <a href='#jobs' className="flex border px-6 sm:px-8 py-2 sm:py-3 rounded-md hover:bg-blue-500 duration-300 cursor-pointer justify-center  items-center text-white mt-4 gap-2">
           <h4 className='text-lg font-semibold '>Open Positions</h4>
           <FaArrowDown size={20} />
           </a>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-[#00000083]"></div>
           
        </motion.div>
      <section id='jobs' className="px-[20px] bg-white mt-20 w-full max-w-screen-2xl min-h-screen sm:px-[30px] lg:px-[40px] xll:px-[80px]">
        <h2 className=' text-5xl mdd:text-6xl text-center font-bold text-gray-700'>Careers</h2>
        <p className='text-center text-gray-600 mt-2 mb-10'>Apply Now!</p>
        
        <motion.div variants={CardsVariants}
        
          className="main grid grid-cols-1 sm:grid-cols-2 mdd:grid-cols-3 place-items-center place-content-center gap-10">
          {jobs?.map((item, index) => (
            <Link key={item._id} to={`/jobs/singlejob/${item._id}`}>
            <motion.div
            
            
              
              viewport={{ once: true }}
              className="border-2 h-auto sm:h-[300px] shadow-md hover:shadow-xl w-full px-6 py-10 rounded-lg"
            >
              <h5 className='text-2xl font-semibold text-blue-700 underline cursor-pointer'>{item.position_title}</h5>
              <p className='ml-1 text-[#2e2e2e] my-2'>
                <span className='font-medium text-black'>Location:</span>{" "}
                Ikonic, Plot # 176&#x2C; Korang Road&#x2C; near Rahat Bakers&#x2C; I-10/3&#x2C; Islamabad
              </p>

              <h5 className='px-[25px] flex items-center justify-center text-white py-[13px] mt-6 rounded-sm hover:bg-blue-600 bg-blue-500'>See Details</h5>
          
            </motion.div>
            </Link>
            
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Index;
