import React from 'react';
import styles from './Form.module.css';
import useSelectCategory from '../hooks/useSelect';
import useSelectCountry from '../hooks/useSelect';

const Form = () => {
  const CATEGORY_OPTIONS = [
    { value: 'breaking-news', label: 'Breaking news' },
    { value: 'business', label: 'Business' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'health', label: 'Health' },
    { value: 'science', label: 'Science' },
    { value: 'sports', label: 'Sports' },
    { value: 'technology', label: 'Technology' },
  ];

  const COUNTRY_OPTIONS = [
    { value: 'us', label: 'USA' },
    { value: 'gb', label: 'UK' },
    { value: 'fr', label: 'France' },
    { value: 'it', label: 'Italy' },
    { value: 'pe', label: 'Peru' },
    { value: 'br', label: 'Brazil' },
  ];

  const [category, SelectCategory] = useSelectCategory(
    'breaking-news',
    CATEGORY_OPTIONS
  );
  const [country, SelectCountry] = useSelectCountry('us', COUNTRY_OPTIONS);

  return (
    <div className={`${styles.search} row`}>
      <div className="col s12 m8 offset-m2">
        <form>
          <h3 className={styles.heading}>Get news by country and category</h3>
          <SelectCountry />
          <SelectCategory />
          <div className="input-field col s12">
            <input
              type="submit"
              className={`btn-large indigo ${styles.btn_block}`}
              value="Get news"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
