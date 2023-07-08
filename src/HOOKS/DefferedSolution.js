import React, { Suspense, useDeferredValue, useEffect, useMemo, useState } from "react";
import axios from "axios";

const DeferredSolution = () => {
  const [fakeData, setFakeData] = useState();
  const deferredData = useDeferredValue(fakeData);
  const [showLoading, setShowLoading] = useState(true);

  useMemo(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setFakeData(response?.data))
      .finally(() => setShowLoading(false));
  }, []);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setShowLoading(false);

    }, 1000000); // Adjust the duration (in milliseconds) as needed
    console.log('loader statement')
    return () =>{
      console.log('return statement')
      clearTimeout(loadingTimeout);
      setFakeData();
    } 
  }, []);
  console.log(fakeData)
      function FakeCall(){
        return(
          <>
            <h1>testing function FakeCall</h1>
          </>
        )
      }
  return (
    <Suspense fallback={<h1>hello...</h1>}>
      {showLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {FakeCall()}
          {deferredData?.map((item) => (
            <p key={item?.id}>{item?.name}</p>
          ))}
        </div>
      )}
    </Suspense>
  );
};

export default DeferredSolution;
