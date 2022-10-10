import * as S from './Checkboxes.styles';

export const Checkbox = ({label}) => {
  
  return (
    <S.Main>
      <S.Inner>
        <S.Checkbox/>
        <S.CheckboxLabel>{label}</S.CheckboxLabel>
      </S.Inner>
    </S.Main>
  );
};
