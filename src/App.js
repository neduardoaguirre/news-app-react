import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form';
import NewsListing from './components/NewsListing';

function App() {
  const [category, setCategory] = useState('breaking-news');
  const [country, setCountry] = useState('us');
  const [news, setNews] = useState([]);

  useEffect(() => {
    const callAPI = async () => {
      const URL = `https://gnews.io/api/v4/top-headlines?token=${process.env.REACT_APP_API_KEY}&country=${country}&topic=${category}`;
      const response = await axios.get(URL);
      console.log(response.data.articles);
      setNews(response.data.articles);
    };
    callAPI();
  }, [country, category]);

  return (
    <Fragment>
      <div className="container white">
        <Form setCategory={setCategory} setCountry={setCountry} />
        <NewsListing news={news} />
      </div>
    </Fragment>
  );
}

export default App;
