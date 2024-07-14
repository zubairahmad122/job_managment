import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { Link, useParams } from 'react-router-dom'



const Benefits = [
    { name: "Competitive Salary" },
    { name: "Bonuses" },
    { name: "EOBI" },
    { name: "Provident Fund" },
    { name: "Annual Leaves" },
    { name: "Casual leaves" },
    { name: "Sick Leaves" },
    { name: "Bereavement Leaves" },
    { name: "Marriage Leaves" },
    { name: "Paternity Leaves" },
    { name: "Maternity Leaves" },
    { name: "Medical Health Insurance" },
    { name: "Bi-Annual Reviews" },
  ];

const index = () => {

    const {id} = useParams();

    const [singleApplication,setSingleApp] = useState([]);
    const [data,setDate] = useState('')

    const url = process.env.URI;
  
  
  
    const getApplication = async () =>{
      try {
        const getSingleApp = await axios.post(`${url}/api/v1/application/getsingleapplication/${id}`);
        setSingleApp([getSingleApp.data.data])
    } catch (error) {
        console.log(error)
    }
}

    useEffect(() =>{
      (async () => {
        await getApplication()
      })();
    },[])
  return (
    <section className="">
      
        <div  className='min-h-[80vh] px-5 relative bg-img'>
            <div className='w-full min-h-[80vh] relative z-10 flex flex-col gap-2 items-center text-center justify-center'>
            {
                singleApplication.map((item,index) => (
                  <>
                    <h1 className=' text-4xl md:text-5xl font-medium text-white'>{item.position_title}</h1>

                    <p className='text-white max-w-[700px] text-sm sm:text-[16px] md:text-lg'>
                        Ikonic&#x2C; Plot # 176&#x2C; Korang Road&#x2C; near Rahat Bakers&#x2C; I-10/3&#x2C; Islamabad, Pakistan | Posted on {'  '}
                        {new Date(item?.postAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'numeric',
                            day: 'numeric',
                        })}
                    </p>
                  </>
                  
                ))
            }
            
            
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-[#00000056]"></div>
        </div>
   <div className="flex px-[20px] bg-white my-10 w-full max-w-screen-2xl min-h-screen sm:px-[30px] lg:px-[40px] xll:px-[80px] items-start justify-center flex-col sm:flex-row gap-5 md:gap-10 mb-10">
   <div className='border min-h-screen rounded-sm px-5 xlg:px-10 flex-1 xlg:w-[50%]'>
         {singleApplication?.map((item,index) =>{
          return (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='ml-3 mt-10'
          >
               {/* headings  */}
        <h5 className='text-lg font-semibold'>Job Description</h5>
        <div className="headings ml-2 flex flex-col gap-1 mt-4">
          {/* ---- Position Title: UIUX Designer   */}
        <p className='text-[15px] text-gray-800' ><span className='font-medium'>Position Title:</span>{" "}{item.position_title}</p>
        <p className='text-[15px] text-gray-800' ><span className='font-medium'>Timings:</span>{" "}{item.timings}</p>
        <p className='text-[15px] text-gray-800' ><span className='font-medium'>Department:</span>{" "}{item.department}</p>
        <p className='text-[15px] text-gray-800' ><span className='font-medium'>Position Title:</span>{" "}{item.position_title}</p>
        </div>

        {/* abouts us  */}
        <div className='mt-6'>
          <h5 className='text-black ml-1 mb-2 font-medium'>About Us:</h5>
          <p className=' ml-2  capitalize text-sm font-normal text-gray-600'>{item.about}</p>
        </div>


        {/* Position Purpose  */}
        <div className='mt-6'>
          <h5 className='text-black ml-1 mb-2 font-medium'>Position Purpose:</h5>
          <p className=' ml-2  capitalize text-sm font-normal text-gray-700'>{item.Position_Purpose}</p>
        </div>


        {/* Education & Professional Qualification: */}
        <div className='mt-6'>
          <h5 className='text-black ml-1 mb-2 font-medium'>Education & Professional Qualification:</h5>
          <li style={{listStyle:"disc"}} className=' ml-6  capitalize text-sm font-normal  text-gray-700'>Degree(s)/Major(s): Minimum of a Bachelor&#39;s Degree in Business&#x2C; Marketing&#x2C; or similar field</li>
          <li style={{listStyle:"disc"}} className=' ml-6  capitalize my-2 text-sm font-normal  text-gray-700'>Certification(s): Not mandatory&#x2C; but certification in a relevant field is a plus.</li>
        </div>



        {/* Experience: */}
        <div className='mt-6'>
          <h5 className='text-black ml-1 mb-2 font-medium'>Experience:</h5>
          {
            item.experience.map((item,index) =>(
              <li key={index} style={{listStyle:"disc"}} className=' ml-6  capitalize text-[15px] my-1 font-normal  text-gray-700'>{item}</li>

            ))
          }
         
        </div>



        {/* Requirements: */}
        <div className='mt-6'>
          <h5 className='text-black ml-1 mb-2 font-medium'>Requirements:</h5>
          {
            item.requirements.map((item,index) =>(
              <li key={index} style={{listStyle:"disc"}} className=' ml-6  capitalize text-[15px] my-1 font-normal  text-gray-700'>{item}</li>
            ))
          }
          
        
         
        </div>



        {/* Benefits: */}
        <div className='mt-6'>
          <h5 className='text-black ml-1 mb-2 font-medium'>Benefits:</h5>
          <li style={{listStyle:"disc"}} className=' ml-6  capitalize text-[15px] my-1 font-normal  text-gray-700'>ECompetitive Salary  </li>
          
          {
            Benefits?.map((item,index) => (
              <li key={index} style={{listStyle:"disc"}} className=' ml-6  capitalize text-[15px] my-1 font-normal  text-gray-600'>{item.name}</li>
          
         
            ))
          }
        </div>




          {/* Why Ikonic us  */}
          <div className='mt-6'>
          <h5 className='text-black ml-1 mb-2 font-medium'>Why Should You Join IKONIC?</h5>
          <p className=' ml-2 mb-4 capitalize text-sm font-normal text-gray-600'>t IKONIC&#x2C; we believe in providing development opportunities to all its employees&#x2C; which is why our job comes with a variety of challenging assessments meant to catapult your career to the next level. This is made evident with our offerings such as:</p>
        


        <li style={{listStyle:"disc"}} className=' ml-6   capitalize text-[15px] my-1 font-normal  text-gray-600'>A growth mindset through the help of experienced and helpful Mentors. Ikonic is made up of passionate individuals who aim to support each other in their training as well as day-to-day tasks.</li>

        <li style={{listStyle:"disc"}} className=' ml-6  capitalize text-[15px] my-1 font-normal  text-gray-600'>A Dynamic Environment where we focus on encouraging initiatives&#x2C; promoting agility and creating a work/life balance. We know the value you bring in&#x2C; and we aim to nurture it.</li>
        <li style={{listStyle:"disc"}} className=' ml-6  capitalize text-[15px] my-1 font-normal  text-gray-600'>As an Equal employment opportunity provider. All employment-associated decisions are based on an individual&#39;s merit.</li>


        <p className='my-5 text-sm'><i>Note: Above goals and job descriptions are indicative and subject to change.</i>
        </p>




        </div>
    
        <Link to={`/jobs/apply/${id}`} className='px-8 py-[13px] bg-blue-500 hover:bg-blue-700 duration-200 text-white rounded-md sticky bottom-3 flex my-5 text-center w-full items-center justify-center' >I'm intrested</Link>
          </motion.div>
          )
         })}
    </div>

    <div className=' w-full sm:w-[35%]  min-h-screen border px-6 py-3'>
    <h5 className='text-lg font-semibold'>Job Information</h5>
    <div className='mt-3'>
    <p className='text-sm text-gray-500'>Industry</p>
    <p className='font- text-[15px] text-black'>IT Services</p>
    </div>
    <div className='mt-3'>
    <p className='text-sm text-gray-500'>Work Experience</p>
   {
    singleApplication?.map((item) => (
        <p className='font- text-[15px] text-black'>{item.workexperience} years</p>
    ))
   }
    </div>
    <div className='mt-3'>
    <p className='text-sm text-gray-500'>City</p>
    <p className='font- text-[15px] text-black'>Ikonic&#x2C; Plot # 176&#x2C; Korang Road&#x2C; near Rahat Bakers&#x2C; I-10/3 Islamabad&#x2C; 44000</p>
    </div>
    <div className='mt-3'>
    <p className='text-sm text-gray-500'>State/Province</p>
    <p className='font- text-[15px] text-black'>Islamabad</p>
    </div>
    <div className='mt-3'>
    <p className='text-sm text-gray-500'>Country</p>
    <p className='font- text-[15px] text-black'>Pakistan</p>
    </div>
    <div className='mt-3'>
    <p className='text-sm text-gray-500'>Zip/Postal Code</p>
    <p className='font- text-[15px] text-black'>44000</p>
    </div>
    
    </div>
   </div>
    </section>
  )
}

export default index