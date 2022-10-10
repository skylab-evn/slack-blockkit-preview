import * as S from './TextArea.styles';

export const TextArea = ({ data }) => {
  return (
    <S.Main>
      <S.Text>{data.label.text}</S.Text>
      <S.Inner>
        <S.TextArea placeholder="Write something"></S.TextArea>
      </S.Inner>
    </S.Main>
  );
};
