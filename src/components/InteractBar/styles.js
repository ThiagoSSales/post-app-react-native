import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2px 30px;
  border-top-width: 1px;
  border-color: ${colors.secundary};
  border-radius: 5px;
`;

export const InteractButtonn = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;
