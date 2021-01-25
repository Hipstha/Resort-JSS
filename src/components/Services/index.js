import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Services = (props) => {

  const { service_list } = props.fields;
  console.log(props.fields);
  console.log(service_list);

  return (
    <div>
      <section className="services">
        <div className="section-title">
          <h4>Service</h4>
          <div>

          </div>
        </div>
        <div className="services-center">
          {service_list.map( (listItem, index) => {
            return <article key={index} className="service">
              <span> <img width={100} height={66} src={`${listItem.fields.serviceIcon.value}`} /> </span>
              <h6>{listItem.fields.title.value}</h6>
              <p>{listItem.fields.serviceInfo.value}</p>
            </article>
          })}
        </div>
      </section>
    </div>
  );
}

export default Services;
