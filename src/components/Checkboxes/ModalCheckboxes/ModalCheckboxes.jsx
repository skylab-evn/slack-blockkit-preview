import * as S from './ModalCheckboxes.styles';
import { ModalCheckbox } from './ModalCheckbox';

export const ModalCheckboxes = ({ data }) => {
  return (
    <>
    
    <S.Main>
      <S.Text>{data.label.text}</S.Text>
    </S.Main>
      <S.CheckboxesDiv>
       {data?.element?.options?.map((item) => (
        <ModalCheckbox label={item.text.text}/>
       ))}
        </S.CheckboxesDiv>
      </>
  );
};
