
import React, { useState, useEffect } from 'react';
import Auth from './components/Auth/Auth';
import { Route, Routes } from "react-router-dom"
import MovieIndex from './components/Movie/MovieIndex';
import MovieEdit from './components/Movie/MovieEdit';


function App() {
  const [sessionToken, setSessionToken] = useState("");

  const updateToken = (newToken) =>{
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(newToken);
  };

  useEffect(() => {
    if(localStorage.getItem("token")){
      setSessionToken(localStorage.getItem("token"))
    }
  }, []);

  return (
  <>
    <Routes>
      <Route path="/" element={<Auth updateToken={updateToken}/>} />
      <Route path="/movie" element={<MovieIndex token={sessionToken}/>} />
      <Route path="/movie/:id" element={<MovieEdit token={sessionToken}/>} />
    </Routes> 
  </>
  );
}

export default App;
