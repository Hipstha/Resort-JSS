import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import Banner from '../Banner/index';

const Hero = ({fields}) => (
  <>
    {console.log(fields)}
    <header className="defaultHero">
      <div className="banner">
        <Banner fields={{ title: fields.title.value, 
                          subtitle: fields.subtitle.value, 
                          buttonurl: fields.buttonurl.value, 
                          buttontext: fields.buttontext.value
                        }}>
        </Banner>
      </div>
    </header>
  </>
);

export default Hero;
