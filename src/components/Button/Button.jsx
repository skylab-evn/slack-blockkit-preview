import * as S from './Button.styles';

export const Button = ({ data }) => {
  return (
    <S.Main>
      <S.Text>{data.text.text}</S.Text>
      <S.Button>{data.accessory.text.text}</S.Button>
    </S.Main>
  );
};
