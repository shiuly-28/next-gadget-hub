import Link from 'next/link'
import React from 'react'
import newsImage from '@/public/banner.jpeg'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { NewsCardProps } from '@/app/types/news'

const NewsCard = ({item}:NewsCardProps) => {
  return (
    <div className='border p-4 rounded-md shadow-md'>
      <Link href="/">
        <Image src={item?.imageUrl} width={500} height={500} alt='newsImage' 
        className='mb-5 md:h-56 rounded hover:sacle-105 cursor-pointer transtion-all duration-200'/>
      </Link>
      <div>
        <h2>What to Expect from United Natural Foods Inc (UNFI) Q4 2025 Earni</h2>
        <p className='mb-4'>{item?.description}</p>
        <Link href={'/'}>
        <Button variant='default'>Rede More</Button>
          </Link>
      </div>
      </div>
  )
}

export default NewsCard
