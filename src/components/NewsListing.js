import React from 'react';
import Article from './Article';
import PropTypes from 'prop-types';

const NewsListing = ({ news }) => (
  <div className="row">
    {news.map((article) => (
      <Article key={article.url} article={article} />
    ))}
  </div>
);

NewsListing.propTypes = {
  news: PropTypes.array.isRequired,
};

export default NewsListing;
