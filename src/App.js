import { useEffect, useState, createContext } from 'react';
import './App.css';
import axios from 'axios'
import Navbar from './components/navbar/navbar';

import Headlines from './components/headline/headline';
import DontMiss from './components/Dontmiss/dontmiss';


export const UserContext = createContext()


function App() {

  const dataNews = {
    'author': '',
    'content': '',
    'description': '',
    'title': '',
    'publishedAt': '',
    'urlToImage': '',
  }
  const [data, setData] = useState([{ dataNews }]);

  const [appleNews, setAppleNews] = useState([]);

  const getData = async () => {
    await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=44b96171e1c847c393bfbe612db4133e')

      .then((response) => {
        setData(response.data.articles)
      })
      .catch((err) => console.log(err));
  }

  const getAppleNews = async () => {
    await axios.get('https://newsapi.org/v2/everything?q=apple&from=2023-05-23&to=2023-05-23&sortBy=popularity&apiKey=44b96171e1c847c393bfbe612db4133e')

      .then((response) => {
        setAppleNews(response.data.articles)
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getData()
    getAppleNews()
  }, [])


  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const delay = 3000; // Delay in milliseconds

    const timeoutId = setTimeout(() => {
      setShowComponent(true);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, []);


  return (
    <div className="App font-oswald">

      <UserContext.Provider value={data}>
        <Navbar />
        {showComponent &&
          <>
            <Headlines data={data} />
            <DontMiss appleNews={appleNews}/>
          </>
        }

      </UserContext.Provider>

    </div>
  );
}

export default App;
