import React, { useState } from 'react'
import { FiUpload } from "react-icons/fi";
import axios from 'axios'
import { toast } from 'react-toastify';
const index = ({url}) => {

  const [image,setImage] = useState(false);



  const [data, setFormData] = useState({
    category: "",
    position_title: "",
    timings: "",
    department: "",
    about: "",
    Position_Purpose: "",
    experience: "",
    requirements: "",
    responsibilities: "",
    industry: "",
    workexperience: ""
  });
  
  

  const handleChange = (e) => {
    setFormData({
      ...data,
      [e.target.name]: e.target.value // Update the field that corresponds to the input required onChange={handleChange}'s name attribute
    });

  };
  
  // Your form submission function
   const handleSubmit = async (e) => {
    e.preventDefault();
    const experienceString = data.experience; // e.g., "2 years,3 years,5 years"
    const experienceArray = experienceString.split(',').map(item => item.trim());
    const requiremenceString = data.requirements; // e.g., "2 years,3 years,5 years"
    const requiremenceArray = experienceString.split(',').map(item => item.trim());
    const responString = data.responsibilities; // e.g., "2 years,3 years,5 years"
    const responArray = experienceString.split(',').map(item => item.trim());

    try {
      const response = await axios.post(`${url}/adminpost/createjobpost`,{
        category:data.category,
        position_title:data.position_title,
        timings:data.timings,
        department:data.department,
        about:data.about,
        Position_Purpose:data.Position_Purpose,
        experience:experienceArray,
        requirements:requiremenceArray,
        responsibilities:responArray,
        industry:data.industry,
        workexperience:data.workexperience,
      } );
       // Handle successful response
      toast.success(response.data.message)
      setFormData({
        category: "",
        position_title: "",
        timings: "",
        department: "",
        about: "",
        Position_Purpose: "",
        experience: "",
        requirements: "",
        responsibilities: "",
        industry: "",
        workexperience: ""
      });
      toast.success("Job Posted successfuly")
    } catch (error) {
      console.error('Error:', error); // Handle error
      toast.error(response.data.message)
    }
  };


  return (
    <section className='w-full p-5 h-[90vh] overflow-y-scroll no-scrollbar'>
      <form onSubmit={handleSubmit} className="flex  w-full sm:w-3/4 flex-col items-start px-5 sm:px-20 gap-3">


      <div className="flex flex-col w-full  gap-2">
          <label className="text-[16px] text-gray-500">category</label>
          <select
          required
            name="category"
            value={data.category}
            onChange={handleChange}
            className="w-full cursor-pointer p-2 border border-gray-300 outline-none text-gray-600 text-[16px] rounded-md"
          >
            <option value="">Select Category</option>
            <option value="Design">Design</option>
            <option value="IT Services">IT Services</option>
          </select>
        </div>

  


        {/* position_title  */}

        <div className="flex flex-col w-full mt-5 gap-2">
          <label className="text-[16px] text-gray-500">Position Title</label>
          <input required value={data.position_title} name='position_title' onChange={handleChange} type="text" className="w-full p-3 border border-gray-300 outline-none text-gray-600 text-[16px] rounded-md" placeholder="Larvel developer" />
        </div>


        {/* Timings  */}
        <div className="flex flex-col w-full mt-5 gap-2">
          <label className="text-[16px] text-gray-500">Timings</label>
          <input required value={data.timings} name='timings' onChange={handleChange} type="text" className="w-full p-3 border border-gray-300 outline-none text-gray-600 text-[16px] rounded-md" placeholder="4:00pm to 1:00am"/>
        </div>


        {/* department  */}
        <div className="flex flex-col w-full  gap-2">
          <label className="text-[16px] text-gray-500">department</label>
         
          <input required value={data.department} name='department' onChange={handleChange} type="text" className="w-full p-3 border border-gray-300 outline-none text-gray-600 text-[16px] rounded-md" placeholder="Software Engineering"/>
        </div>
      


        {/* about  */}
        <div className="flex flex-col w-full  gap-2">
          <label className="text-[16px] text-gray-500">About</label>
         
          <textarea required  value={data.about} name='about' onChange={handleChange} type="text" className="w-full min-h-[170px] p-3 border border-gray-300 outline-none text-gray-600 text-[16px] rounded-md"  placeholder="about. . ." />
        </div>


        {/* Position_Purpose  */}
        <div className="flex flex-col w-full  gap-2">
          <label className="text-[16px] text-gray-500">Position Purpose</label>
         
          <textarea required  value={data.Position_Purpose} name='Position_Purpose' onChange={handleChange} type="text" className="w-full min-h-[170px] p-3 border border-gray-300 outline-none text-gray-600 text-[16px] rounded-md"  placeholder="We are looking for a skilled WordPress. . ." />
        </div>


        {/* experience  */}
        <div className="flex flex-col w-full  gap-2">
          <label className="text-[16px] text-gray-500">experience</label>
         
          <textarea required  value={data.experience} name='experience' onChange={handleChange} type="text" className="w-full min-h-[170px] p-3 border border-gray-300 outline-none text-gray-600 text-[16px] rounded-md"  placeholder="abAt least 2 years of experience in a lead role. . ." />
        </div>


        {/* requirements  */}
        <div className="flex flex-col w-full  gap-2">
          <label className="text-[16px] text-gray-500">requirements</label>
         
          <textarea required  value={data.requirements} name='requirements' onChange={handleChange} type="text" className="w-full min-h-[170px] p-3 border border-gray-300 outline-none text-gray-600 text-[16px] rounded-md"  placeholder="Excellent understanding of web manager tools. . ." />
        </div>



        {/* responsibilities  */}
        <div className="flex flex-col w-full  gap-2">
          <label className="text-[16px] text-gray-500">responsibilities</label>
         
          <textarea required  value={data.responsibilities} name='responsibilities' onChange={handleChange} type="text" className="w-full min-h-[170px] p-3 border border-gray-300 outline-none text-gray-600 text-[16px] rounded-md"  placeholder="Architect and implement WordPress plugins. . ." />
        </div>

      
        <div className="flex flex-col w-full  gap-2">
          <label className="text-[16px] text-gray-500">industry</label>
          <input required value={data.industry} name='industry' onChange={handleChange} type="text" className="w-full p-3 border border-gray-300 outline-none text-gray-600 text-[16px] rounded-md" placeholder="IT Services" />
        </div>


        <div className="flex flex-col w-full  gap-2">
          <label className="text-[16px] text-gray-500">workexperience</label>
          <input required value={data.workexperience} name='workexperience' onChange={handleChange} type="text" className="w-full p-3 border border-gray-300 outline-none text-gray-600 text-[16px] rounded-md" placeholder="1-4" />
        </div>
        <button className="bg-black text-white px-4 py-3 rounded-md mt-5 hover:bg-blue-700 duration-300">Add a JobPost</button>
      </form>
    </section>
  )
}

export default index