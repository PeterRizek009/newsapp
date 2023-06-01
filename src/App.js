/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, createContext } from 'react';
import './App.css';
import axios from 'axios'
import Navbar from './components/navbar/navbar';
import Headlines from './components/headline/headline';
import DontMiss from './components/Dontmiss/dontmiss';
import Entertainment from './components/entertainment/Entertainment';


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

  const [date, setDate] = useState();

  const [day, setDay] = useState('');

  // const lastWeek = '2023-05-26';

  const getDate = () => {
    const dayandTime = new Date();
    setDate(dayandTime.toISOString().slice(0, 10));
    setDay(dayandTime.toLocaleString('en-us', { weekday: 'long' }));
  }
  

  const request = 'https://newsapi.org/v2/everything?q=apple&from=2023-05-27&to=2023-06-1&sortBy=popularity&apiKey=b15ae682b7ef499a89e9b4c9302f4d83' ;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getData = async () => {
    await axios.get(request)

      .then((response) => {
        setData(response.data.articles)
      })
      .catch((err) => console.log(err));
  }



  useEffect(() => {
    const delay = 3000; // Delay in milliseconds

    const timeoutId = setTimeout(() => {
      getDate();
      getData()
    }, delay);

    return () => clearTimeout(timeoutId);


  }, [])


  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const delay = 5000; // Delay in milliseconds

    const timeoutId = setTimeout(() => {
      setShowComponent(true);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, []);




  return (
    <div className="App font-opensans bg-gray-50 box-border">
      <UserContext.Provider value={data}>
        <Navbar date={date} day={day} />
         {showComponent &&
          <div className='flex flex-col justify-start '>
            <Headlines data={data} />
            <DontMiss />
            <Entertainment />
          </div>
        } 

      </UserContext.Provider>


    </div>
  );
}

export default App;
