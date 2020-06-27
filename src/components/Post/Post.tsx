import React, { memo } from 'react';
import Card from 'react-bootstrap/Card';

type Props = {
  title: string;
  body: string;
};

const Post = (props: Props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.body}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default memo(Post);
