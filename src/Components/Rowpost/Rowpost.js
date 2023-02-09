import React from 'react'
import './Rowpost.css'
import {useEffect,useState} from 'react'
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../Components/Constant/Constants'
import Youtube from 'react-youtube'

function Rowpost(props) {
  const [movies,setMovies] = useState([])
  const [urlId,setUid] = useState('');

  useEffect(()=>{
    axios.get(props.url).then(result =>{
      console.log(result.data.results);
      setMovies(result.data.results);
    })
  },[])
  const HandleMovie = ((id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      console.log(response.data)
      if(response.data.results.length!==0){
        setUid(response.data.results[0])
      }else{
        console.log('Array iks empty')
      }
    })
  })
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div className='row'>
    <h2>{props.title}</h2>
    <div className="posters">
      {
        movies.map((obj)=>
          <img src={`${imageUrl+obj.backdrop_path}`} 
        alt="poster" className={props.isSmall ? 'smallPoster' :'poster' } onClick={()=>HandleMovie(obj.id)}/>

        )
      }
      
    
        
    </div>
  {urlId &&  <Youtube videoId={urlId.key} opts={opts} />} 

</div>

  )
  
}

export default Rowpost