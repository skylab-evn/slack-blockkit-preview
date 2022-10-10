import * as S from './ModalTextArea.styles';

export const ModalTextArea = ({ data }) => {
  return (
    <S.Main>
      <S.Text>{data.label.text}</S.Text>
      <S.Inner>
        <S.TextArea placeholder="Write something"></S.TextArea>
      </S.Inner>
    </S.Main>
  );
};
