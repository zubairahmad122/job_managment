import React, { useState } from 'react'
import { BsBag } from 'react-icons/bs'
import { PiPlusCircle } from 'react-icons/pi'
import { Link } from 'react-router-dom'


const data = [
    {
        id:0,
        name:"Post a Job",
        Link:"/",
        icon:<PiPlusCircle size={18} className='text-[#656565]' />
    }   ,
    {
        id:1,
        name:"List Jobs",
        Link:"/listjobs",
        icon:<BsBag size={18} className='text-[#656565]' />
    },
    {
        id:2,
        name:"Applications",
        Link:"/applications",
        icon:<BsBag size={18} className='text-[#656565]' />
    },
    {
        id:3,
        name:"Accept Applications",
        Link:"/accept",
        icon:<BsBag size={18} className='text-[#656565]' />
    },
    {
        id:4,
        name:"Reject Applications",
        Link:"/reject",
        icon:<BsBag size={18} className='text-[#656565]' />
    },
]
const Sidebar = () => {
    const [active,setActive] = useState("Add item")
    
  return (
    <div className='w-[20vw] pt-[50px] pl-[40px] border border-[#dacdcd] min-h-screen'>
        <ul className='flex flex-col gap-5'>
            {
                data?.map((item) => (
                    <Link key={item.id} to={item.Link}  onClick={() => setActive(item.name)} className={`flex items-center gap-3 border-r-0 border-t border-b border-l px-2 py-2 rounded-md border-[#dacdcd] ${active === item.name && 'bg-[#ffde231e]'}`}>
               {item.icon}
                <p className='hidden mdd:block text-[15px] text-[#656565]'>{item.name}</p>
            </Link>
                ))
            }

        </ul>
    </div>
  )
}

export default Sidebar