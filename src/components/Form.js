import React from 'react';
import styles from './Form.module.css';

const Form = () => {
  return (
    <div className={`${styles.search} row`}>
      <div className="col s12 m8 offset-m2">
        <form>
          <h3 className={styles.heading}>Get news by country and category</h3>
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
