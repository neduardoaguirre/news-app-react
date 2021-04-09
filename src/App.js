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
      const URL = `/.netlify/functions/getNews?country=${country}&category=${category}`;
      setLoading(true);
      const response = await axios.get(URL);
      setNews(response.data.articles);
      setLoading(false);
      scroll();
    };
    callAPI();
  }, [country, category]);

  const scroll = () => {
    const position = document.querySelector('.news');
    position.scrollIntoView({ behavior: 'smooth' });
  };

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
