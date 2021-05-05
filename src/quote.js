import { useEffect, useState } from 'react';

function Quote() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      setLoading(true);
      fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1')
        .then(response => response.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError);
    }, []);
  
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>{JSON.stringify(error)}</h1>
  
    if (data) return (
      <>
        <h2 id='toType'>{data.quotes[0].text}</h2>
        <h3>By {data.quotes[0].author}</h3>
      </>
    )
  
    return (
      <div>
        No data avialable
      </div>
    );
  }

export default Quote;