import * as S from './RadioButton.styles';

export const RadioButton = ({label}) => {
  return (
    <S.Main>
      <S.Inner>
        <S.Radio/>
        <S.RadioLabel>{label}</S.RadioLabel>
      </S.Inner>
    </S.Main>
  );
};
