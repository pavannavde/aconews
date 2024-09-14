import React, { useEffect, useState } from 'react'
import Header from '../Components/Header';

const SingleNews = () => {
  const [news , setNews] = useState({});


  useEffect(()=>{
    const data =JSON.parse(localStorage.getItem('news'));
    setNews(data);
    console.log(data.source.name)
  },[])

  return (
    <div className='singleNews'>
      <Header/>
      <div className='Npage'>
       <img src={news.image} alt='heroImg'/>
       <h2>{news.title}</h2>
       <p><span style={{fontWeight:'700'}}>Published At -</span>{news.publishedAt}</p>
       <p>{news.description}</p>
       <a href={news.url} style={{alignSelf :'flex-start'}}>Click Here for more Details</a>
       {/* <a href={news.source.url} style={{alignSelf :'flex-end'}}>Source Link</a> */}
      </div>
    </div>
  )
}

export default SingleNews
