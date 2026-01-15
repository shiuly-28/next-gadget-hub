import Link from 'next/link'
import React from 'react'
import newsImage from '@/public/banner.jpeg'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { NewsCardProps } from '@/app/types/news'

const NewsCard = ({item}:NewsCardProps) => {
  return (
    <div className='border p-4 rounded-md shadow-md'>
      <Link href={`/news/${item?._id}`}>
        <Image src={item?.imageUrl} width={500} height={500} alt='newsImage' 
        priority
        className='mb-5 md:h-56 rounded hover:sacle-105 cursor-pointer transtion-all duration-200'/>
      </Link>
      <div>
        <h2 className='text-xl font-semibold my-3'>{item?.title.substring(0,65)}...</h2>
        <p className='mb-4'>{item?.description.substring(0,85)}...</p>
        <Link href={`/news/${item?._id}`}>
        <Button variant='default'>Rede More</Button>
          </Link>
      </div>
      </div>
  )
}

export default NewsCard
