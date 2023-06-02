/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, createContext } from 'react';
import './App.css';
// import axios from 'axios'
import Navbar from './components/navbar/navbar';
import Headlines from './components/headline/headline';
import Entertainment from './components/entertainment/Entertainment';
import Tech from './components/Tech/tech';
import articles from './data.js';
import BusinessInsider from './components/Businessinsider/businessinsider';

export const UserContext = createContext()

function App() {

  // const dataNews = {
  //   'author': '',
  //   'content': '',
  //   'description': '',
  //   'title': '',
  //   'publishedAt': '',
  //   'urlToImage': '',
  // }
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(articles);
  const [businessData, setBusinessData] = useState();

  const [date, setDate] = useState();

  const [day, setDay] = useState('');

  // const lastWeek = '2023-05-26';

  const getDate = () => {
    const dayandTime = new Date();
    setDate(dayandTime.toISOString().slice(0, 10));
    setDay(dayandTime.toLocaleString('en-us', { weekday: 'long' }));
  }


  const getBusinessData =  () => {
    setBusinessData(data.filter((el) => el.name === 'Business Insider'))
  } 

  

  //const request = 'https://newsapi.org/v2/everything?q=apple&from=2023-05-27&to=2023-06-1&sortBy=popularity&apiKey=b15ae682b7ef499a89e9b4c9302f4d83';

  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // const getData = async () => {
  //   await axios.get(request)

  //     .then((response) => {
  //       setData(response.data.articles)
  //     })
  //     .catch((err) => console.log(err));
  // }



  useEffect(() => {
    const delay = 3000; // Delay in milliseconds

    const timeoutId = setTimeout(() => {
      getDate();
      getBusinessData()
      //getData()
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
            <BusinessInsider businessData={businessData}/>
            <Entertainment />
            <Tech />
          </div>
        }

      </UserContext.Provider>


    </div>
  );
}

export default App;
