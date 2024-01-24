'use client'
import { combineReducers } from 'redux'
import { CreateHistory } from './views/create'
import ReadHistory from './views/read'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import { Frame, Wall } from '../components/Layout/layout';
import { Button } from '../components/Items/Button/button';
import { useEffect, useState } from 'react'

export default function Home() {

  const [input, setInput] = useState();
  const [newInput, setNewInput] = useState('');
  const [showData, setShowData] = useState([]);

  async function showDataFromFirebase() {
    try {
      const res = await fetch('/api/histories', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json'
        }
      });
      const data = await res.json();
      setShowData(data);
      console.log(showData);
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    showDataFromFirebase();
  }, [])
  
  /*const rootReducer = combineReducers({
    reducer,
  })

  const store = configureStore({
    reducer: rootReducer,
  })      <Provider store={store}>      </Provider>

*/

  return (
    <>
 
        <Frame>
          <CreateHistory/>
          <ReadHistory/>
        </Frame>
    
    </>
  )
}
