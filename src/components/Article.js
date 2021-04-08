import React from 'react';
import ImageNotAvailable from '../images/not-available.png';
import PropTypes from 'prop-types';

const Article = ({ article }) => {
  const { image, url, title, source } = article;

  return (
    <div className="col s12 m6 l4">
      <div className="card medium">
        {image ? (
          <div className="card-image">
            <img src={image} alt={title} />
            <span
              className="new badge indigo card-title"
              data-badge-caption={source.name}
            ></span>
          </div>
        ) : (
          <div className="card-image">
            <img src={ImageNotAvailable} alt="Not available" />
            <span
              className="new badge indigo card-title"
              data-badge-caption={source.name}
            ></span>
          </div>
        )}
        <div className="card-content overflow-scroll">
          <span className="card-title">{title}</span>
        </div>
        <div className="card-action">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="waves-effect waves-light btn indigo"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.object.isRequired,
};

export default Article;
