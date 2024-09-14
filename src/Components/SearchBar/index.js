import React, { useState } from 'react';
import './style.css'
import searchIco from '../../Assets/search.svg';


const SearchBar = ({handleSearch}) => {
  const [input,setInput] = useState('');

    
  return (
    <div className='searchBar'>
        <div className='searchEle'>
        <img src={searchIco} alt='searchIco'/>
        <input type='text' placeholder='Search News ' onChange={(e)=>setInput(e.target.value)}/>
        </div>
        <button onClick={()=>handleSearch(input)}>Search</button>
    </div>
  )
}

export default SearchBar
