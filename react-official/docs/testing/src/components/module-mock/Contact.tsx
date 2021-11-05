import React from 'react';
import Map from './Map';

export type ContactProps = {
  name: string;
  email: string;
  site: string;
  center: {
    lat: number;
    long: number;
  };
};

const Contact: React.FC<ContactProps> = (props) => {
  return (
    <div>
      <address>
        Contact {props.name} via{' '}
        <a data-testid="email" href={'mailto:' + props.email}>
          email
        </a>
        or on their{' '}
        <a data-testid="site" href={props.site}>
          website
        </a>
        .
      </address>
      <Map center={props.center} />
    </div>
  );
};

export default Contact;
