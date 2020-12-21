import React from 'react';

import {Container, MessageArea, Title} from './styles';
import InteractBar from '../InteractBar';

const Post = ({title, body, liked}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <MessageArea>{body}</MessageArea>
      <InteractBar status={liked} />
    </Container>
  );
};

export default Post;
