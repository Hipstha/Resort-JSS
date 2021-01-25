import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Banner = ({ fields }) => {
  // console.log(fields);
  return (
    <>
      <h1>{ fields.title }</h1>
      <p>
        { fields.subtitle }
      </p>
      <p>
        <a className="btn-primary" href={`${ fields.buttonurl }`}>{ fields.buttontext }</a>
      </p>
    </>
  )
}

export default Banner;
