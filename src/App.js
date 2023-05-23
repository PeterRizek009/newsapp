import { useEffect, useState, createContext } from 'react';
import './App.css';
import axios from 'axios'
import Navbar from './components/navbar/navbar';


export const UserContext = createContext()


function App() {

  const dataNews = {
    'author': '',
    'content': '',
    'description': '',
    'title' : '',
    'publishedAt': '',
    'urlToimage': '',

  }
  const [data, setData] = useState([{dataNews}]);

  const getData = async () => {
    await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=44b96171e1c847c393bfbe612db4133e')

      .then((response) => {
        setData(response.data.articles)
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div className="App">
      <UserContext.Provider value={data}>
        <Navbar /> 

   
      </UserContext.Provider>
    </div>
  );
}

export default App;
