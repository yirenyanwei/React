import logo from './logo.svg';
import style from './App.module.scss';
import { useEffect } from 'react';
import axios from 'axios'

function App() {
  useEffect(()=>{
    axios.get('/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4').then(res=>{
      console.log(res.data)
    })
  }, [])
  return (
    <div className={style.test}>
      App
      <div className='test1'>test1</div>
    </div>
  );
}

export default App;
