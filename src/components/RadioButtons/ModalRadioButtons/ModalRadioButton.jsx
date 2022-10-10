import * as S from './ModalRadioButtons.styles';

export const ModalRadioButton = ({label}) => {
  return (
    <S.Main>
      <S.Inner>
        <S.Radio />
        <S.RadioLabel>{label}</S.RadioLabel>
      </S.Inner>
    </S.Main>
  )
};
