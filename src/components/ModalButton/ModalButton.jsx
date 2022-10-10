import * as S from './ModalButton.styles';

export const ModalButton = ({ data }) => {
  return (
    <S.Main>
      <S.Text>{data.text.text}</S.Text>
      <S.Button>{data.accessory.text.text}</S.Button>
    </S.Main>
  );
};
