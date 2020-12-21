import React, {useState} from 'react';

import {
  ModalContainer,
  AddModal,
  TextArea,
  RowContainer,
  Button,
  ButtonText,
  CancelArea,
  Container,
  CancelAreaButton,
  Title,
  TitleInput,
} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {addPost} from '~/store/actions/posts';

const NewPostModal = ({openModal, hideModal}) => {
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  return (
    <AddModal
      animationType="slide"
      transparent={true}
      visible={openModal}
      onDismiss={hideModal}>
      <Container>
        <CancelAreaButton onPress={hideModal}>
          <CancelArea />
        </CancelAreaButton>

        <ModalContainer>
          <TitleInput
            placeholder="Título"
            onChangeText={setTitle}
            value={title}
          />
          <TextArea
            placeholder="Digite uma mensagem!"
            onChangeText={setBody}
            value={body}
            multiline={true}
          />
          <RowContainer>
            <Button onPress={hideModal}>
              <ButtonText>Cancel</ButtonText>
            </Button>

            <Button onPress={() => setBody('')}>
              <ButtonText>Limpar</ButtonText>
            </Button>

            <Button
              onPress={() => {
                dispatch(addPost({title: title, body: body, liked: ''}));
              }}>
              <ButtonText>Add</ButtonText>
            </Button>
          </RowContainer>
        </ModalContainer>

        <CancelAreaButton onPress={hideModal}>
          <CancelArea />
        </CancelAreaButton>
      </Container>
    </AddModal>
  );
};

export default NewPostModal;
