import React, { useState } from 'react'
import './Banner.css'
import {API_KEY,imageUrl} from '../Constant/Constants'
import {useEffect} from 'react'
import axios  from '../../axios'

function Banner() {
  const [movie, setMovie] = useState() 
  

  
  useEffect(()=>{
   
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0]);
      setMovie(
        response.data.results[0]
       
      )
     
      
    })

  },[])
  return (
    <div className='banner' style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}}>
        <div className="content">
            <h1 className="title">{movie ? movie.title:""}</h1>
            <div className="banner_buttons">
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <div className="description">
            <h2>{movie? movie.overview:""}</h2>
            </div>
           
        </div>
        <div className="fade_bottom">
                
                </div>
        
    </div>
  )
}

export default Banner