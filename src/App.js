import React, {useEffect, useState} from 'react';
import Login from './form/login';
import './App.css';

function App() {

 const [data, setData] = useState();

    const BASE_URL = 'https://dummyapi.io/data/api';
    const APP_ID = '5feb30439db72cfa73c9166d';

    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
      
        try{
          const response = await fetch(`${BASE_URL}/post`, { headers: { 'app-id': APP_ID } })
          const data  = await response.json();
          setData(data.data);
      } catch (error) {
        console.log(error);
      }
      
      
    }

  return (
    <div className="App">
      <div>
        <div>
        
          <Login data={data}/>
        
        </div>
      </div>
    </div>
  );
}

export default App;
