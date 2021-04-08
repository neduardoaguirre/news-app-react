import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form';
import NewsListing from './components/NewsListing';
import Spinner from './components/Spinner';

function App() {
  const [category, setCategory] = useState('breaking-news');
  const [country, setCountry] = useState('us');
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const callAPI = async () => {
      const URL = `https://gnews.io/api/v4/top-headlines?token=${process.env.REACT_APP_API_KEY}&country=${country}&topic=${category}`;
      setLoading(true);
      const response = await axios.get(URL);
      setNews(response.data.articles);
      setLoading(false);
    };
    callAPI();
  }, [country, category]);

  return (
    <Fragment>
      <div className="container white">
        <Form setCategory={setCategory} setCountry={setCountry} />
        {loading ? <Spinner /> : <NewsListing news={news} />}
      </div>
    </Fragment>
  );
}

export default App;
