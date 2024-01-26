import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
const News = ({category}) => {
    const [articles,serArticals]=useState([])
  useEffect(()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=392f04fcbca44e89abe6d99e1e52e4ef`;
    fetch(url).then(response=>response.json()).then(data=>serArticals(data.articles));

  },[{category}])
  return (
    <>
    <div>
    {articles.map((news,index)=>{
      return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
    })}
    </div>
    </>
  )
}

export default News
