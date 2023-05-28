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

  const getDate = () => {
    const dayandTime = new Date();
    setDate(dayandTime.toISOString().slice(0, 10));
    setDay(dayandTime.toLocaleString('en-us', { weekday: 'long' }));
  }


  const getData = async () => {
    await axios.get(`https://newsapi.org/v2/everything?q=apple&from=2023-05-25&to=${date}&sortBy=popularity&apiKey=44b96171e1c847c393bfbe612db4133e`)

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


  }, )


  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const delay = 5000; // Delay in milliseconds

    const timeoutId = setTimeout(() => {
      setShowComponent(true);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, []);


  return (
    <div className="App font-oswald">
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
