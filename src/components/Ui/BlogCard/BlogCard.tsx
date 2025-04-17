import React from 'react'

const BlogCard = ({blogCard}) => {
  return (
    <div className=' rounded-2xl'>
       <div className='max-w-[544px]'>
       <img src={"/blog.png"} alt="Blog Card" className='w-full h-full'/>

       </div>
       <div className='bg-white p-4'>

<div className='flex items-center gap-4'>
<img className='w-10 h-10 rounded-full' src={"/avatar.png"} alt="User" />
<div className='text-sm'>
<p>Ronald Richards</p>
<p className='text-[#667085]'>20 Jan 2022</p>

</div>


    </div>

<p className='text-2xl font-medium text-[#002B4F]'>
UX Lessons That We Can Learn from “Threads”
</p>
       </div>
    </div>
  )
}

export default BlogCard