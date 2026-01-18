import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'
import bannerImg from '@/public/banner.jpeg'
const Banner = () => {
  return (
    <div className='bg-slate-100 dark:bg-gray-900 dark:texr-white rounded'>
    <div className='px-4 py-8 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8'>
       <div>
        <Image src={bannerImg} alt='banner' width={600}
      height={580} className='rounded'/>
       </div>
     <div className='flex flex-col space-y-4'>
      <h4 className='text-sm font-medium text-gray-500'>Technology</h4>
     <h2 className='text-2xl font-bold'>OpenAi is going Fast and Burning Through Piles of Money</h2>
     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae vero voluptatum dolore iste quisquam cupiditate, ab nisi doloribus, <br /> quibusdam doloremque velit alias cum ullam sequi asperiores, quos rerum eligendi delectus sed. Saepe, sunt? Quidem quia hic laboriosam reprehenderit aspernatur. Officiis.</p>
     <Button variant="default">Read More</Button>
     </div>
     
    </div>
    </div>
  )
}

export default Banner
