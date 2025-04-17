import React from 'react'

const BlogCard = ({blogCard}) => {
  return (
    <div className=' rounded-2xl'>
       <div className='max-w-[544px] h-[300px]'>
       <img src={"/blog.png"} alt="Blog Card" className='w-full h-full'/>

       </div>
       <div className='bg-white h-10 p-4'>

       </div>
    </div>
  )
}

export default BlogCard