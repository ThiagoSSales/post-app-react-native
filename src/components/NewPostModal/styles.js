import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const ModalContainer = styled.View`
  background-color: ${colors.secundary};
  flex: 1;
  padding: 5px;
  justify-content: center;
  border-width: 2px;
  border-radius: 10px;
`;

export const Container = styled.View`
  padding: 10px;
  flex: 1;
`;

export const AddModal = styled.Modal``;

export const Button = styled.TouchableOpacity`
  width: 100px;
  height: 30px;
  background-color: red;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-width: 1px;
  align-self: flex-end;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  color: white;
  font-size: 15px;
`;

export const TextArea = styled.TextInput`
  border-width: 1px;
  border-radius: 5px;
  flex: 1;
  background-color: white;
`;

export const RowContainer = styled.View`
  justify-content: space-between;
  height: 30px;
  flex-direction: row;
  margin-top: 5px;
`;

export const CancelArea = styled.View`
  flex: 0.7;
`;

export const CancelAreaButton = styled.TouchableWithoutFeedback`
  flex: 0.2;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

export const TitleInput = styled.TextInput`
  height: 40px;
  background-color: white;
`;
