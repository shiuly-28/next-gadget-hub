"use client"
import { NewsItems } from '@/app/types/news'
import React, { useEffect, useState } from 'react'
import NewsCard from '../shared/NewsCard';
import {fetchNews} from '@/lib/featchNews'


const NewsList = () => {
  const [news, setNews] = useState<NewsItems[]>([]);
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  useEffect (() => {
    const getNews = async () => {
      const data = await fetchNews(category, search);
      setNews(data);
    };
    getNews();
},[category, search]);
console.log(news)
  return (
    <div>
      <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-between'>
        {
          news.map((item) => (
            <NewsCard key={item?._id} item={item}/>
          ))
        }
      </div>
    </div>
  )
}

export default NewsList
