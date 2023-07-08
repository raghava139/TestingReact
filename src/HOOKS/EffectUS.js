import React from 'react'
// import { useMemo } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const EffectUS = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const jsonData = await response.json();
        setData(jsonData);
      };
  
      fetchData();
      console.log('outside return')
    //   // Return the cleanup function
      return () => {
            console.log('inside return')
            const controller = new AbortController();
            controller.abort();
      };
    }, []);
  console.log('outside-useeffect');

  // const MemorizedValue = useMemo(()=>data,[data]);
    return (
      <div>
        <h1>Data from API:</h1>
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
}

export default EffectUS