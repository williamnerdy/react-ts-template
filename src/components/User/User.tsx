import React, { memo } from 'react';
import Card from 'react-bootstrap/Card';

type Props = {
  name: string;
  email: string;
};

const User = (props: Props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.email}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default memo(User);
