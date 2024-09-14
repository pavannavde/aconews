
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Pages/Home';
import NewsPage from './Pages/NewsPage';
import SingleNews from './Pages/SingleNews';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/news' element={<NewsPage/>}/>
      <Route path='/single-news' element={<SingleNews/>}/>
     </Routes>
    </div>
  );
}

export default App;
