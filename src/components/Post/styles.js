import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  justify-content: space-between;
  flex: 1;
  margin: 10px;
  border-width: 1px;
  border-radius: 5px;
  border-color: black;
  padding: 6px;
`;

export const MessageArea = styled.Text`
  margin-bottom: 5px;
`;

export const Title = styled.Text`
  font-size: 15px;
  font-weight: bold;
  border-bottom-width: 1px;
  border-color: ${colors.secundary};
  border-radius: 5px;
`;
