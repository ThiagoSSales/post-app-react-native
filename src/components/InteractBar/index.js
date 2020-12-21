import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import IconMt from 'react-native-vector-icons/MaterialIcons';

import {Container, InteractButtonn} from './styles';

const InteractBar = () => {
  return (
    <Container>
      <InteractButtonn>
        <Icon name="like1" size={25} color="#737380" />
      </InteractButtonn>

      <InteractButtonn>
        <Icon name="dislike1" size={25} color="#737380" />
      </InteractButtonn>

      <InteractButtonn>
        <IconMt name="edit" size={25} color="#737380" />
      </InteractButtonn>

      <InteractButtonn>
        <Icon name="delete" size={25} color="#737380" />
      </InteractButtonn>
    </Container>
  );
};

export default InteractBar;
