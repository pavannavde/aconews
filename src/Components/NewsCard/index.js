import React from 'react'
import './style.css'
import { useNavigate } from 'react-router'
const NewsCard = ({news}) => {
   
  const navigate = useNavigate();

  function handleClick(){
    localStorage.setItem('news',JSON.stringify(news))
    navigate('/single-news');
  }

  return (
    <div className='card' onClick={handleClick}>
      <img src={news.image} alt='img1'/>
      <h3>{news.title}</h3>
      <p>Published At - {news.publishedAt}</p>
    </div>
  )
}

export default NewsCard;
