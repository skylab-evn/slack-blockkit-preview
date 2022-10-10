import * as S from './ModalCheckboxes.styles';

export const ModalCheckbox = ({label}) => {
  return (
  <S.Main>
    <S.Inner>
      <S.Checkbox/>
      <S.CheckboxLabel>{label}</S.CheckboxLabel>
    </S.Inner>
    </S.Main>
  )
};
