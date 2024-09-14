import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import axios from "axios";
import NewsCard from "../Components/NewsCard";
import SearchBar from "../Components/SearchBar";
import Loader from "../Components/Loader";

const NewsPage = () => {
  const ApiKey = "b6385ac20f406b778dc178823b7b8926";
  const [newsData, setNewsData] = useState([]);
  const [isLoading,setIsLoading] =useState(true)
  const[country, setCountry] = useState('in');
  const[langauge,setLangauge] = useState('en')

  async function getData() {
    try {
      const data = await axios.get(
        `https://gnews.io/api/v4/top-headlines?category=general&apikey=${ApiKey}`
      );
      console.log(data.data.articles);
      setNewsData(data.data.articles);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleSearch(search) {
    try {
      setIsLoading(true)
      const searchResult = await axios.get(
        `https://gnews.io/api/v4/search?q=${search}&lang=${langauge}&country=${country}&max=15&apikey=${ApiKey}`
      );
      console.log(searchResult);
      setNewsData(searchResult.data.articles);
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="newsPage">
      <Header />
      <div className="filterDiv">
      <SearchBar handleSearch={handleSearch} />
      <div>
      <select onChange={(e)=>setCountry(e.target.value)}>
        <option value={'in'}>India</option>
        <option value={'jp'}>Japan</option>
        <option value={'cn'}>China</option>
        <option value={'au'}>Australia</option>
        <option value={'us'}>United state</option>
        <option value={'ua'}>Ukraine</option>
        <option value={'fr'}>france</option>        
      </select>
      <select onChange={(e)=>setLangauge(e.target.value)}>
        <option value={'en'}>English</option>
        <option value={'fr'}>French</option>
        <option value={'hi'}>Hindi</option>
        <option value={'ja'}>Japanese</option>
        <option value={'uk'}>Ukrainian</option>
        <option value={'mr'}>Marathi</option>
      </select>
      </div>
      
      </div>
      <h1>Top Headlines</h1>
      <div className="container">
        {isLoading ? (<Loader/>) :
          newsData.map((news) => {
            return <NewsCard news={news} />;
          })}
      </div>
    </div>
  );
};

export default NewsPage;
