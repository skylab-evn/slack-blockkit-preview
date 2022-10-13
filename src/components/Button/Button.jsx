import * as S from './Button.styles';

export const Button = ({ data }) => {
  console.log(data);
  return (
    <S.Main>
      {/* <S.Text>{data.text.text}</S.Text> */}
     
      <S.Button>{data.elements[0].text.text}</S.Button>
    </S.Main>
  );
};
