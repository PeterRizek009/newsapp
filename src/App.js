import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Navbar from './components/navbar/nabar';
import NavbarTop from './components/navbar/navbartop';


function App() {


  const [data, setData] = useState([{}]);

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




  console.log(data);

  return (
    <div className="App">
      <NavbarTop />
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
