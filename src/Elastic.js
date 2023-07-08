import React,{useEffect} from 'react'
import axios from "axios"
const Elastic = () => {
    useEffect(() => {
        axios.get('http://216.230.74.17:9200/ordersnew/_search?scroll=5m')
            .then(response => console.log('resp',response));
    }, []);
    
  return (
    <div>Elastic</div>
  )
}

export default Elastic